const Discord = require("discord.js");
const config = require('../../config.json');
 
module.exports = {
    name: "config",
    description: "🐼 [Configuração] Configurar o servidor!",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        if (!interaction.member.roles.cache.has(config.geral.cargo_dono)) {
            return interaction.reply({
              content: 'Você não tem permissão para usar esse comando.',
              ephemeral: true
            });
          }
      

          await interaction.channel.send({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_invisible)
                .setAuthor({
                  name: interaction.guild.name,
                  iconURL: interaction.guild.iconURL({ dynamic: true }),
                })
                .addFields({
                  name: "Painel de configuração do BOT!",
                  value: `>>> ATENÇÃO  \nAS ALTERAÇÕES FEITAS AQUI IRÁ INFLUENCIAR O FUNCIONAMENTO DO BOT! `,
                })
                .setImage(config.imagens.ticket_footer)
                .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
            ],
            components: [
              new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("config_nome")
                  .setLabel("Nome")
                  .setEmoji("🍷")
                  .setStyle(2),
                new Discord.ButtonBuilder()
                  .setCustomId("config_imagem")
                  .setLabel("Perfil")
                  .setEmoji("🍷")
                  .setStyle(2),
                new Discord.ButtonBuilder()
                  .setCustomId("config_connect")
                  .setLabel("Connect")
                  .setEmoji("🍷")
                  .setStyle(2),
                new Discord.ButtonBuilder()
                  .setCustomId("config_imagens")
                  .setLabel("Imagens")
                  .setEmoji("🍷")
                  .setStyle(2),
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

        
    }
    
}




  
 