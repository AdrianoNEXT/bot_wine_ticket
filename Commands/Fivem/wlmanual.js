const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "wlmanual",
  description: "📱 [Configuração] Utilize para enviar o painel de wl Manual",
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
          .setColor(config.embeds_color.embed_success)
          .setTitle(`📝 Sistema de Whitelist | ${interaction.guild.name}`)
          .setDescription(
            `Apenas passando alguns passos para deixar claro:\nAtenção Voçe tem apenas 5 Minutos para enviar suas repostas, caso contrário o canal será deletado e você terá que começar novamente;\n● São 11 Perguntas todas relacionadas a Roleplay\n● Não **ANEXE ARQUIVOS** ou **ENVIE LINKS**;\n● Caso seja enviado sua **WHITELIST** será **CANCELADA**;`
          )
          .setImage(`${config.wl.logo}`),
      ],
      components: [
        new Discord.ActionRowBuilder().setComponents(
          new Discord.ButtonBuilder()
            .setCustomId("open_whitelist")
            .setEmoji("📝")
            .setLabel("Clique aqui para iniciar")
            .setStyle(1)
        ),
      ],
    });
  },
};
