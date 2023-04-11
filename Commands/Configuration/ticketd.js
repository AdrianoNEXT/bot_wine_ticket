const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "ticketd",
  description: "📱 [Configuração] Utilize para enviar o painel abrir um ticket de denuncia staff",
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

    await interaction.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor(config.embeds_color.embed_invisible)
          .setAuthor({
            name: interaction.guild.name,
            iconURL: interaction.guild.iconURL({ dynamic: true }),
          })
          .addFields({
            name: "Abrir Ticket para denunciar um staff",
            value: `>>> Se você estiver precisando de ajuda clique no botão abaixo \n Vale lembrar que este ticket é visível apenas para diretoria! `,
          })
          .setImage(config.imagens.ticket_footer)
          .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
      ],
      components: [
        new Discord.ActionRowBuilder().addComponents(
          new Discord.ButtonBuilder()
            .setCustomId("start_ticket3")
            .setLabel("Abrir ticket")
            .setEmoji("🔒")
            .setStyle(2)
        ),
      ],
    });

    interaction.reply({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor(config.embeds_color.embed_success)
          .setDescription(`✅ | Embed enviada com sucesso!`),
      ],
      ephemeral: true,
    });
  },
};
