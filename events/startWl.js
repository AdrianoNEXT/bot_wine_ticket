const Discord = require("discord.js");
const config = require("../config.json");
const mysql = require("mysql");
const connection = mysql.createConnection(config.mysql);

module.exports = {
  name: "startwhitelist",
  async execute(interaction) {
    if (interaction.isButton() && interaction.customId === "start_Whitelist") {
      const modal = new Discord.ModalBuilder()
        .setCustomId("modal_whitelist")
        .setTitle(`Iniciar sua Whitelist`);

      const id = new Discord.TextInputBuilder()
        .setCustomId("id_personagem")
        .setLabel("Qual é o seu ID?")
        .setRequired(true)
        .setMaxLength(4)
        .setStyle(1)
        .setPlaceholder("");
      const nomeP = new Discord.TextInputBuilder()
        .setCustomId("nome_personagem")
        .setLabel("Qual é o nome do personagem?")
        .setRequired(true)
        .setMaxLength(30)
        .setStyle(1)
        .setPlaceholder("");
      const idadeR = new Discord.TextInputBuilder()
        .setCustomId("idade_player")
        .setLabel("Qual é a sua idade real?")
        .setRequired(true)
        .setMaxLength(3)
        .setStyle(1)
        .setPlaceholder("");
      const referencia = new Discord.TextInputBuilder()
        .setCustomId("nome_player")
        .setLabel("Como chegou aqui?")
        .setRequired(true)
        .setMaxLength(40)
        .setStyle(2)
        .setPlaceholder("");
      const conhecimento = new Discord.TextInputBuilder()
        .setCustomId("info_player")
        .setLabel("A quanto tempo joga Fivem ?")
        .setRequired(true)
        .setMaxLength(20)
        .setStyle(1)
        .setPlaceholder("");

      modal.addComponents(
        new Discord.ActionRowBuilder().addComponents(id),
        new Discord.ActionRowBuilder().addComponents(nomeP),
        //new Discord.ActionRowBuilder().addComponents(idadeR),
        new Discord.ActionRowBuilder().addComponents(conhecimento),
        new Discord.ActionRowBuilder().addComponents(referencia)
      );

      return interaction.showModal(modal);
    }

    if (interaction.isModalSubmit() && interaction.customId === "modal_whitelist") {
      const PlayerID = interaction.fields.getTextInputValue("id_personagem");
      const nomeP = interaction.fields.getTextInputValue("nome_personagem");
      //const idadeR = interaction.fields.getTextInputValue("idade_player");
      const referencia = interaction.fields.getTextInputValue("nome_player");
      const conhecimento = interaction.fields.getTextInputValue("info_player");

      connection.query(`SELECT * FROM ${config.wl.nome_tabela} WHERE id = ${PlayerID}`, function (error, results, fields) {
        if (error) {
          throw error;
        }
        if (results.length === 0) {
           interaction.reply({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_error)
                  .setDescription(
                    `❌ | Desculpe, Este ID Não existe.`
                  ),
              ],
              ephemeral: true,
            });
          return;
        }
        // Se houver resultados, faça algo com eles
      });

      connection.query(
        `UPDATE ${config.wl.nome_tabela} SET whitelisted = '1', discord = ${interaction.user.id} WHERE id = '${PlayerID}'`,
        (err, rows) => {
          if (err) {
            console.error(err);
            interaction.reply({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_error)
                  .setDescription(
                    `❌ | Desculpe, ocorreu um erro ao atualizar a whitelist. Tente novamente mais tarde.`
                  ),
              ],
              ephemeral: true,
            });
          } else {
            interaction.reply({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setDescription(
                    `✅ | Olá ${interaction.user}, Sua Whitelist foi realizada. Ótimo RP!.`
                  ),
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
                    .setURL(`${config.wl.canal_update}`)
                ),
              ],
              ephemeral: true,
            });

            const guild = interaction.guild;
            const member = guild.members.cache.get(interaction.user.id);
             member.roles.add(`${config.wl.add_whitelist}`);
             member.roles.remove(`${config.wl.del_whitelist}`);
            member.setNickname(`${PlayerID} | ${nomeP}`);
            interaction.guild.channels.cache.get(config.wl.canal_aprovado).send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_primary)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`⭐ Whitelist  | ${PlayerID}`)
                  .addFields(
                  { name: 'Player ID', value: '```fix\n' + `${PlayerID}`+ ' ```', inline: true }, 
                  { name: 'NOME DO PERSONAGEM', value: ' ```bash\n' + ` ${nomeP}` + '```', inline: true },
                  { name: 'DISCORD', value: '\n' + `${interaction.user}` + '', inline: true },
                  { name: 'COMO CHEGOU AQUI', value: '```bash\n' + `${referencia}`+ '```', inline: false }, 
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
              components: [
                new Discord.ActionRowBuilder().addComponents(
                  new Discord.ButtonBuilder()
                    .setEmoji('<:fivem:1085585061354688603>')
                    .setLabel("Conectar")
                    .setStyle(5)
                    .setURL(`${config.wl.link_connect}`),
                  new Discord.ButtonBuilder()
                    .setEmoji('<:info:1085594908057931946>')
                    .setLabel("Atualizações")
                    .setStyle(5)
                    .setURL(`${config.wl.canal_update}`),
                  new Discord.ButtonBuilder()
                    .setEmoji('<a:loja_vip:1082802085147459584>')
                    .setLabel("Loja VIP")
                    .setStyle(5)
                    .setURL(`${config.wl.link_loja}`)
                ),
              ],
            });


          }
        }
      );
    }
  },
};

