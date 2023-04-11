const Discord = require("discord.js");
const config = require("../config.json");
const mysql = require("mysql");
const connection = mysql.createConnection(config.mysql);

module.exports = {
  name: "painelsugerir",
  async execute(interaction) {
    if (interaction.isButton() && interaction.customId === "open_sugestao") {
      const modal = new Discord.ModalBuilder()
        .setCustomId("modal_sugerir")
        .setTitle(`Fazer uma sugestão`);

      const id = new Discord.TextInputBuilder()
        .setCustomId("s_tema")
        .setLabel("Qual o assunto")
        .setRequired(true)
        .setMaxLength(30)
        .setStyle(1)
        .setPlaceholder("");
      const nomeP = new Discord.TextInputBuilder()
        .setCustomId("s_mensagem")
        .setLabel("Qual é a sugestão?")
        .setRequired(true)
        .setMaxLength(250)
        .setStyle(2)
        .setPlaceholder("");
      

      modal.addComponents(
        new Discord.ActionRowBuilder().addComponents(id),
        new Discord.ActionRowBuilder().addComponents(nomeP),
      );

      return interaction.showModal(modal);
    }

    if ( interaction.isModalSubmit() && interaction.customId === "modal_sugerir") {
      const temaS = interaction.fields.getTextInputValue("s_tema");
      const nomeS = interaction.fields.getTextInputValue("s_mensagem");
    

     
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_success)
            .setDescription(
              `✅ | Olá ${interaction.user}, Sugestão enviada. Obrigado por contribuir com a cidade!.`
            ),
        ],
        ephemeral: true,
      });

      const guild = interaction.guild;
      const member = guild.members.cache.get(interaction.user.id);

      interaction.guild.channels.cache.get(config.sugerir.canal_sugestoes).send({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setAuthor({
              name: interaction.guild.name,
              iconURL: interaction.guild.iconURL({ dynamic: true }),
            })
            .setTitle(`⭐ Sugestão  | ${config.geral.nome_servidor}`)
            .addFields({
              name: `>>> ${temaS}`,
              value: ` ${nomeS}`,
            })
.setDescription(`Sugestâo de ${member.toString()}`)
            
        ]
      }).then(msg => {
        msg.react('✅');
        msg.react('❌');
      });
      
    }
  },
};