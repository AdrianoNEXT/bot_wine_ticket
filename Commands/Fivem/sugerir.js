const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "sugerir",
  description: "📱 [Configuração] Utilize para enviar o painel de sugestão",
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
          .setTitle(`📝 Sistema de sugestão | ${interaction.guild.name}`)
          .setDescription(
                '```\nPara enviar uma sugestão, é só clicar no botão abaixo. Suas ideias e opiniões são importantes para nós e podem ajudar a melhorar o que for preciso. Então não perca tempo, compartilhe conosco suas sugestões e contribua para tornar tudo ainda melhor!```'
          )
          .setImage(`${config.imagens.ticket_footer}`),
      ],
      components: [
        new Discord.ActionRowBuilder().setComponents(
          new Discord.ButtonBuilder()
            .setCustomId("open_sugestao")
            .setEmoji("📩")
            .setLabel("Fazer uma sugestão")
            .setStyle(1)
        ),
      ],
    });
  },
};
