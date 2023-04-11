const Discord = require("discord.js");
const config = require("../config.json");
const moment = require("moment-timezone");
const fs = require('fs');
//const { JsonDatabase } = require("wio.db");

//const ticket = await db.get(`ticket_${interaction.channel.id}`);
module.exports = {
  name: "startPonto",
  async execute(interaction) {
    if (interaction.isButton() && interaction.customId === "open_ponto") {
      const ticket = await db.get(`ponto_${interaction.user.id}`);

      if (ticket) return interaction.reply({
          embeds: [
              new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_error)
                  .setDescription(`❌ | Você já possui um ponto aberto! <#${config.ponto.canal_abertura}>`)

          ], ephemeral: true
      })

      let id_per = interaction.user.id;
     
      let horar = moment().tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm:ss")
      const objeto_inicial = { owner_id: interaction.user.id, time_open: horar, pausas: [] };
      db.set(`ponto_${interaction.user.id}`, objeto_inicial)
     

      const categoryID = interaction.channel.parentId;
      const channel = await interaction.guild.channels.create({
        name: `📝-${interaction.user.username}`,
        type: 0,
        parent: categoryID,
        permissionOverwrites: [
            {
                id: interaction.guild.id,
                deny: ["ViewChannel"]
            },
            {
                id: interaction.user.id,
                allow: ["ViewChannel", "AttachFiles", "AddReactions"]
            }
        ],
});

    db.set(`canalponto_${interaction.user.id}`, { channel: channel.id })

      interaction.guild.channels.cache.get(channel.id).send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_error)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setDescription(
              `Olá <@${interaction.user.id}>, seja bem-vindo(a) ao expediente de hoje! Espero que esteja se sentindo motivado(a) e pronto(a) para dar o seu melhor. Lembre-se de que cada tarefa é importante e que a pontualidade e a comunicação eficaz são fundamentais para o sucesso. Trabalhe com responsabilidade e atenção, e não se esqueça de se hidratar e fazer algumas pausas quando necessário. Vamos lá, temos muito trabalho a fazer!`
            )
            .setThumbnail(config.imagens.imagem_perfil)
            .setImage(config.imagens.ticket_footer)
            .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
        ],
        components: [
          new Discord.ActionRowBuilder()
            .addComponents(
              new Discord.ButtonBuilder()
                .setCustomId(`pausar-${id_per}`)
                .setLabel("Pausar")
                .setStyle(3)
            )
            .addComponents(
              new Discord.ButtonBuilder()
                .setCustomId(`cancelar-${id_per}`)
                .setLabel("Encerrar")
                .setStyle(4)
            )
        ],
      });
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_success)
            .setDescription(
              `✅ | Olá ${interaction.user}, Expediente iniciado!`
            ),
        ],
        ephemeral: true,
      });
    }

    if (interaction.isButton() && interaction.customId.startsWith("pausar-")) {
      const id_search = interaction.customId.substring(interaction.customId.indexOf("-") + 1);

      if (interaction.user.id != id_search) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, Você não pode bater o ponto que não é seu!.`
              ),
          ],
          ephemeral: true,
        });
        return
      }
      
      await interaction.update({
        components: [
          new Discord.ActionRowBuilder()
            .addComponents(
              new Discord.ButtonBuilder()
                .setCustomId(`retomar-${id_search}`)
                .setLabel("Retomar")
                .setStyle(3)
            )
            .addComponents(
              new Discord.ButtonBuilder()
                .setCustomId(`cancelar-${id_search}`)
                .setLabel("Encerrar")
                .setDisabled(true)
                .setStyle(4)
            )
        ]
      });

      const db_resultado = await db.get(`ponto_${id_search}`);
      let horar = moment().tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm:ss");
      db_resultado.pausas.push({ hora_pausa: horar });
      db.set(`ponto_${id_search}`, db_resultado);
}
if (interaction.isButton() && interaction.customId.startsWith("retomar-")) {
  const id_search = interaction.customId.substring(interaction.customId.indexOf("-") + 1);

  if (interaction.user.id != id_search) {
    interaction.reply({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor(config.embeds_color.embed_success)
          .setDescription(
            `❌ | Olá ${interaction.user}, Você não pode bater o ponto que não é seu!.`
          ),
      ],
      ephemeral: true,
    });
    return
  }
  await interaction.update({
    components: [
      new Discord.ActionRowBuilder()
        .addComponents(
          new Discord.ButtonBuilder()
            .setCustomId(`pausar-${id_search}`)
            .setLabel("Pausar")
            .setStyle(3)
        )
        .addComponents(
          new Discord.ButtonBuilder()
            .setCustomId(`cancelar-${id_search}`)
            .setLabel("Encerrar")
            .setDisabled(false)
            .setStyle(4)
        )
    ]
  });

  const db_resultado = await db.get(`ponto_${id_search}`);
  let horar = moment().tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm:ss");
  db_resultado.pausas.push({ hora_retomado: horar });
  db.set(`ponto_${id_search}`, db_resultado);
}

    if (interaction.isButton() && interaction.customId.startsWith("cancelar-")) {
      const id_search = interaction.customId.substring(interaction.customId.indexOf("-") + 1);

      if (interaction.user.id != id_search) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, Você não pode bater o ponto que não é seu!.`
              ),
          ],
          ephemeral: true,
        });
        return
      }

      
      const db_resultado = await db.get(`ponto_${id_search}`);
      
      let horar = moment().tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm:ss");


      if (!db_resultado['pausas']) {
        await interaction.reply('Nenhuma pausa registrada para este ponto.');
        return;
      }
      
     
      let pausasFields = "";
      let registrosPausas = "";
      let totalPausas = 0;
      for (let i = 0; i < db_resultado.pausas.length; i += 2) {
        const hora_pausa = db_resultado.pausas[i]?.hora_pausa || "N/A";
        const hora_retomado = db_resultado.pausas[i + 1]?.hora_retomado || "N/A";

        const hora_pausas = moment(db_resultado.pausas[i]?.hora_pausa, "DD/MM/YYYY HH:mm:ss");
        const hora_retomados = moment(db_resultado.pausas[i + 1]?.hora_retomado, "DD/MM/YYYY HH:mm:ss");
      

        pausasFields += `{ name: 'Pausa ${i / 2 + 1}', value: 'Hora de pausa: ${hora_pausa}\nHora de retomada: ${hora_retomado}' },`;
        
        registrosPausas += `[HORA PAUSA]: ${hora_pausa}\n[HORARIO RETOMADO]: ${hora_retomado}\n-\n`;
        
        const duracaoPausa = moment.duration(hora_retomados.diff(hora_pausas));
        totalPausas += duracaoPausa.asMilliseconds();

      }

      
      const horarioAtual = moment().tz("America/Sao_Paulo");
      const horarioAbertura = moment(db_resultado.time_open, "DD/MM/YYYY HH:mm:ss");

      const duracaoEmMilissegundos = horarioAtual.diff(horarioAbertura) - totalPausas;
      const duracao = moment.duration(duracaoEmMilissegundos);

      const horas = Math.floor(duracao.asHours() - 3);
      const minutos = Math.floor(duracao.minutes());
      const segundos = Math.floor(duracao.seconds());

      const tempoTrabalho = `${horas}h ${minutos}m ${segundos}s`;

      const categoryID = interaction.channel.parentID;
      const channel = interaction.guild.channels.cache.find(
        channel => channel.parentID === categoryID && channel.name === "🤖・logs"
      );
      channel.send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_error)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setTitle(`📁 - Registro de ponto!`)
            .setDescription(
              `Histórico de ponto do usuario: <@${id_search}>`
            )
            .addFields(
              { name: 'Hora de abertura', value: '```\n' + db_resultado.time_open + '```', inline: false},
              { name: 'Hora de fechamento', value: '```\n' +  horar + '```', inline: false},
              { name: 'REGISTRO DE PAUSAS', value: '```\n' + registrosPausas + '```', inline: false },
              { name: 'Tempo de trabalho', value: '```\n' + tempoTrabalho  + '```', inline: false },
              
            )
            .setImage(config.imagens.ticket_footer)
           // .setThumbnail(config.imagens.imagem_perfil)
            .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
        ]
      });
      

      interaction.message.delete()
      db.delete(`ponto_${interaction.user.id}`)
      db.delete(`canalponto_${interaction.user.id}`)
      
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_success)
            .setDescription(
              `❌ | Olá ${interaction.user}, Expediente encerrado!.`
            ),
        ],
        ephemeral: true,
      });
      
      // Espera 30 segundos antes de deletar o canal
      setTimeout(() => {
        interaction.channel.delete();
      }, 30000);
      
    }
    
  }
};

