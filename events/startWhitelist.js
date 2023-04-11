const Discord = require("discord.js");
const config = require("../config.json");
const moment = require("moment-timezone");
const sourcebin = require("sourcebin");
const mysql = require("mysql");
const connection = mysql.createConnection(config.mysql);

module.exports = {
  name: "startWhitelist",
  async execute(interaction) {
    if (interaction.isButton() && interaction.customId === "open_whitelist") {
      const channel_exit = interaction.guild.channels.cache.find(
        (c) =>
          c.name ===
          `📝-${interaction.user.username.toLowerCase().replace(/ /g, "-")}`
      );

      if (channel_exit)
        return interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_primary)
              .setDescription(
                `❌ | Você já possui uma whitelist em aberto em ${channel_exit}.`
              ),
          ],
          ephemeral: true,
        });

      const channel = await interaction.guild.channels.create({
        name: `📝-${interaction.user.username}`,
        type: 0,
        parent: config.wl.categoria_wl,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: ["ViewChannel"],
          },
          {
            id: interaction.user.id,
            allow: ["ViewChannel", "SendMessages", "ReadMessageHistory"],
          },
        ],
      });

      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription(
              `Sua whitelist foi aberto com sucesso em ${channel}`
            ),
        ],
        ephemeral: true,
      });

      const msg = await channel.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription("Para iniciar sua whitelist digite:\n```iniciar```")
            .setFooter({
              text: `Você tem apenas 5 minútos para responder após iniciar, boa sorte!`,
            }),
        ],
      });

      var replys = {};
      var questions = [];
      let points = 0;

      const filter = (i) => i.member.id === interaction.user.id;
      const collector_start = channel.createMessageCollector({ filter });

      collector_start.on("collect", (interactionReply) => {
        if (interactionReply.content !== "iniciar")
          return interactionReply.delete();
        replys.start = true;
        interactionReply.delete();
        collector_start.stop();
      });

      while (!replys.start) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      setTimeout(() => {
        channel.delete();
        interaction.user.send({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_primary)
              .setAuthor({
                name: interaction.guild.name,
                iconURL: interaction.guild.iconURL({ dynamic: true }),
              })
              .setDescription(
                `Sua whitelist foi fechada por inatividade, caso queira tentar novamente é so tentar novamente!`
              ),
          ],
        });
      }, 60000 * 5);

      await msg.edit({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription(`Insira o ID do jogo para continuar!`)
            .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
        ],
      });

      const collector_game_id = channel.createMessageCollector({ filter });

      collector_game_id.on("collect", (interactionReply) => {
        const regex = /[^0-9]/;
        if (regex.test(interactionReply.content))
          return (
            interactionReply.delete() +
            interactionReply.channel
              .send("❌ | Insira um ID válido!")
              .then((mgs) => {
                setTimeout(() => {
                  mgs.delete();
                }, 1500);
              })
          );
        replys.game_id = interactionReply.content;
        interactionReply.delete();
        collector_game_id.stop();
      });

      while (!replys.game_id) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      for (const [index, question] of config.questions.entries()) {
        let questionMsg = `${question.name}`;

        question.alternatives.forEach((question, index) => {
          questionMsg += `\n\n**${index + 1}** - \`${question}\``;
        });

        await msg.edit({
          embeds: [
            new Discord.EmbedBuilder()
              .setTitle(`Pergunta ${index + 1}/${config.questions.length}`)
              .setAuthor({
                name: interaction.guild.name,
                iconURL: interaction.guild.iconURL({ dynamic: true }),
              })
              .setColor(config.embeds_color.embed_primary)
              .setDescription(`${questionMsg}`)
              .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
          ],
        });

        const collected = await new Promise((resolve) => {
          const collector = channel.createMessageCollector({ filter });
          collector.on("collect", (message) => {
            if (parseInt(message.content) > 3 || parseInt(message.content) < 1)
              return (
                message.delete() +
                message.channel
                  .send({ content: "Insira uma opção válida" })
                  .then((msg) => {
                    setTimeout(() => {
                      msg.delete();
                    }, 1500);
                  })
              );
            resolve(message.content);
            message.delete();
            collector.stop();
          });
        });

        parseInt(collected) === question.reply ? (points += 1) : null;
        questions.push(collected);
      }

      await channel.edit({
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: ["ViewChannel"],
          },
          {
            id: interaction.user.id,
            allow: ["ViewChannel", "ReadMessageHistory"],
            deny: ["SendMessages"],
          },
        ],
      });

      if (points < config.wl.min_points)
        return msg
          .edit({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_primary)
                .setAuthor({
                  name: interaction.guild.name,
                  iconURL: interaction.guild.iconURL({ dynamic: true }),
                })
                .setDescription(
                  `Infelizmente você não atingiu a quantidade mínima de pontos para ser aprovado!`
                )
                .setFooter({
                  text: `Copyright © ` + config.geral.nome_servidor,
                }),
            ],
          })
          .then(() => {
            setTimeout(() => {
              channel.delete();
            }, 30000);
          });
      await msg.edit({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription(
              `Suas perguntas foram registradas com sucesso, aguarde a adminsitração!`
            )
            .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setLabel("Conectar")
              .setStyle(5)
              .setURL(`${config.wl.link_connect}`),
            new Discord.ButtonBuilder()
              .setLabel("Atualizações")
              .setStyle(5)
              .setURL(`${config.wl.canal_update}`),
            new Discord.ButtonBuilder()
              .setLabel("Loja VIP")
              .setStyle(5)
              .setURL(`${config.wl.link_loja}`)
          ),
        ],
      });
      setTimeout(() => {
        channel.delete();
      }, 30000);

      const fields = [];

      config.questions.forEach((question, index) => {
        fields.push({
          name: `Pergunta ${index + 1}`,
          value: `\`\`\`${question.name}\nR: ${questions[index]}\`\`\``,
        });
      });

      const id_per = Math.floor(Math.random() * 9000) + 1000;

      db.set(`${id_per}`, {
        name: `${replys.name}`,
        user_id: `${interaction.user.id}`,
        game_id: `${replys.game_id}`,
      });

      interaction.guild.channels.cache.get(config.wl.logs_staff).send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription(
              `Mais um novo jogador realizou a WL, Veja as respostas registradas em sua WL!\n**ID do jogo:** \`${replys.game_id}\``
            )
            .addFields(fields)
            .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
        ],
        components: [
          new Discord.ActionRowBuilder()
            .addComponents(
              new Discord.ButtonBuilder()
                .setCustomId(`aprovar-${id_per}`)
                .setLabel("Aprovar o jogador")
                .setStyle(3)
            )
            .addComponents(
              new Discord.ButtonBuilder()
                .setCustomId(`reprovar-${id_per}`)
                .setLabel("Reprovar o jogador")
                .setStyle(4)
            )
            .addComponents(
              new Discord.ButtonBuilder()
                .setCustomId(`chamar-${id_per}`)
                .setLabel("Convidar para entrevista")
                .setStyle(1)
            ),
        ],
      });
    } else if (
      interaction.isButton() &&
      interaction.customId.startsWith("aprovar-")
    ) {
      if (
        !interaction.member.permissions.has(
          Discord.PermissionFlagsBits.Administrator
        )
      )
        return;

      const id_search = interaction.customId.substring(
        interaction.customId.indexOf("-") + 1
      );

      const db_result = await db.get(`${id_search}`);

      const user_result = await interaction.guild.members.fetch(
        db_result.user_id
      );

      interaction.guild.channels.cache.get(config.wl.canal_aprovado).send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setTitle(`⭐ Whitelist  | ${user_result.user.username}`)
            .addFields({
              name: `>>> **${config.geral.nome_servidor}**`,
              value: `>>> Seja bem vindo(a) a Cidade!  \n\n **Resultado da Whitelist**\n\n> **ID Aprovado:** \`${db_result.game_id}\`\n> **Aprovado por:** ${user_result.user}`,
            })
            .setImage(`${config.imagens.ticket_footer}`),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setLabel("Conectar")
              .setStyle(5)
              .setURL(`${config.wl.link_connect}`),
            new Discord.ButtonBuilder()
              .setLabel("Atualizações")
              .setStyle(5)
              .setURL(`${config.wl.canal_update}`),
            new Discord.ButtonBuilder()
              .setLabel("Loja VIP")
              .setStyle(5)
              .setURL(`${config.wl.link_loja}`)
          ),
        ],
      });

      user_result.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription(
              `Você foi aprovado com sucesso em nossa whitelist e já está liberado para jogar!`
            )
            .addFields({
              name: ` **${config.geral.nome_servidor}**`,
              value: `>>>  \n **Resultado da Whitelist: **\n\n> **ID Aprovado:** \`${db_result.game_id}\`\n> **Aprovado para:** ${user_result.user}`,
            })
            .setImage(`${config.imagens.ticket_footer}`)
            .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setLabel("Conectar")
              .setStyle(5)
              .setURL(`${config.wl.link_connect}`),
            new Discord.ButtonBuilder()
              .setLabel("Atualizações")
              .setStyle(5)
              .setURL(`${config.wl.canal_update}`),
            new Discord.ButtonBuilder()
              .setLabel("Loja VIP")
              .setStyle(5)
              .setURL(`${config.wl.link_loja}`)
          ),
        ],
      });

      user_result.setNickname(
        `${db_result.game_id}| ${user_result.user.username}`
      );

      user_result.roles.add(`${config.wl.add_whitelist}`);
      user_result.roles.remove(`${config.wl.del_whitelist}`);

      connection.query(
        `UPDATE ${config.wl.nome_tabela} SET whitelisted = '1' WHERE id = '${db_result.game_id}'`,
        (err, rows) => {
          //atualizando a whitelist do servidor
        }
      );
      interaction.message.delete();
    } else if (
      interaction.isButton() &&
      interaction.customId.startsWith("reprovar-")
    ) {
      if (
        !interaction.member.permissions.has(
          Discord.PermissionFlagsBits.Administrator
        )
      )
        return;

      const id_search = interaction.customId.substring(
        interaction.customId.indexOf("-") + 1
      );

      const db_result = await db.get(`${id_search}`);

      const user_result = interaction.guild.members.cache.get(
        db_result.user_id
      );

      interaction.guild.channels.cache.get(config.wl.canal_reprovado).send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setTitle(`Whitelist Reprovada | ${user_result.user.username}`)
            .setDescription(
              `**Resultado da whitelist**\n\n> **ID Reprovado:** \`${db_result.game_id}\`\n> **Discord do reprovado:** ${user_result.user}`
            )
            .setImage(`${config.imagens.ticket_footer}`),
        ],
      });

      user_result.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription(
              `Infelizmente você não foi aprovado em nossa WL!,Tente novamente em outra ocasião !`
            )
            .addFields({
              name: ` **${config.geral.nome_servidor}**`,
              value: `>>>  \n **Resultado da Whitelist: **\n\n> **ID Reprovado:** \`${db_result.game_id}\`\n> **Discord do Reprovado :** ${user_result.user}`,
            })
            .setImage(`${config.imagens.ticket_footer}`)
            .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setLabel("Conectar")
              .setStyle(5)
              .setURL(`${config.wl.link_connect}`),
            new Discord.ButtonBuilder()
              .setLabel("Atualizações")
              .setStyle(5)
              .setURL(`${config.wl.canal_update}`),
            new Discord.ButtonBuilder()
              .setLabel("Loja VIP")
              .setStyle(5)
              .setURL(`${config.wl.link_loja}`)
          ),
        ],
      });

      interaction.message.delete();
    } else if (
      interaction.isButton() &&
      interaction.customId.startsWith("chamar-")
    ) {
      if (
        !interaction.member.permissions.has(
          Discord.PermissionFlagsBits.Administrator
        )
      )
        return;

      const id_search = interaction.customId.substring(
        interaction.customId.indexOf("-") + 1
      );

      const db_result = await db.get(`${id_search}`);

      const user_result = interaction.guild.members.cache.get(
        db_result.user_id
      );

      interaction.guild.channels.cache.get(config.wl.canal_entrevista).send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setTitle(
              `Jogador chamado para entrevista | ${user_result.user.username}`
            )
            .setDescription(
              `**ID Chamado:** \`${db_result.game_id}\`\n> **Discord do jogador:** ${user_result.user}`
            )
            .setImage(`${config.imagens.ticket_footer}`),
        ],
      });

      user_result.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription(
              `Você foi convocado para uma entrevista, entre em ${interaction.guild.name}, abra um ticket e agende sua entrevista!`
            )
            // .addFields(
            //     { name: `> **ID Convidado:** \`${db_result.game_id}\`\n> **Discord do convidado :** ${user_result.user}` }
            // )
            .setImage(`${config.imagens.ticket_footer}`)
            .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
              .setLabel("Tickets")
              .setStyle(5)
              .setURL(`${config.wl.link_ticket}`),
            new Discord.ButtonBuilder()
              .setLabel("Atualizações")
              .setStyle(5)
              .setURL(`${config.wl.canal_update}`),
            new Discord.ButtonBuilder()
              .setLabel("Loja VIP")
              .setStyle(5)
              .setURL(`${config.wl.link_loja}`)
          ),
        ],
      });
    }
  },
};
