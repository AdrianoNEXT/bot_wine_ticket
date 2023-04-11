const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "ponto",
  description: "📱 [Configuração] Utilize para enviar o painel de ponto",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    if (
      !interaction.member.permissions.has(
        Discord.PermissionFlagsBits.Administrator
      )
    )
      return interaction.reply({
        content: `**❌ | ${interaction.user}, Você precisa da permissão \`ADMNISTRATOR\` para usar este comando!**`,
        ephemeral: true,
      });
    interaction.reply({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor(config.embeds_color.embed_success)
          .setDescription(`✅ | Embed enviada com sucesso!`),
      ],
      ephemeral: true,
    });

    return interaction.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor(config.embeds_color.embed_error)
          .setTitle(`📝 Sistema de ponto | ${interaction.guild.name}`)
          .setDescription(
            `Para iniciar o seu expediente, basta clicar no botão abaixo para acessar o canal de trabalho e ter controle sobre a sua jornada. Utilize essa ferramenta para marcar sua entrada e saída, registrar suas tarefas e gerenciar seu tempo de forma mais eficiente. `
          )
          .setImage(`${config.imagens.ticket_footer}`),
      ],
      components: [
        new Discord.ActionRowBuilder().setComponents(
          new Discord.ButtonBuilder()
            .setCustomId("open_ponto")
            .setEmoji("📝")
            .setLabel("Iniciar expediente")
            .setStyle(2)
        ),
      ],
    });
  },
};
