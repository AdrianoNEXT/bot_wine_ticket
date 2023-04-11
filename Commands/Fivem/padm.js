const Discord = require("discord.js");
const config = require('../../config.json');

 
module.exports = {
    name: "padm",
    description: "📱 [Configuração] Utilize para enviar o painel de adm",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
      if (!config.client.fivem) {
        await interaction.channel.send({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_invisible)
              .setAuthor({
                name: interaction.guild.name,
                iconURL: interaction.guild.iconURL({ dynamic: true }),
              })
              .addFields({
                name: "Painel Administrativo",
                value: `Bem-vindo ao Painel Administrativo de **${config.geral.nome_servidor}**!`,
              })

              .setImage(config.imagens.ticket_footer)
              .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
          ],
          components: [
 
            new Discord.ActionRowBuilder().setComponents(
              new Discord.ButtonBuilder()
              .setCustomId("anunciar_servidor")
              .setEmoji("📢")
              .setLabel("Anunciar")
              .setStyle(2),
              new Discord.ButtonBuilder()
              .setCustomId("falar_servidor")
              .setEmoji("📝")
              .setLabel("Escrever")
              .setStyle(2),
              new Discord.ButtonBuilder()
              .setCustomId("limpar_servidor")
              .setEmoji("🗑️")
              .setLabel("Limpar")
              .setStyle(2),
              new Discord.ButtonBuilder()
              .setCustomId("sorteio_servidor")
              .setEmoji("✅")
              .setLabel("Enviar")
              .setStyle(2),
            ),
          ],
        });

        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_success)
                    .setDescription(`✅ | Embed enviada com sucesso!`)
            ],
            ephemeral: true
        })
      }else {

      
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return interaction.reply({
            content: `**❌ | ${interaction.user}, Você precisa da permissão \`ADMNISTRATOR\` para usar este comando!**`,
            ephemeral: true,
        })
        await interaction.channel.send({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_invisible)
              .setAuthor({
                name: interaction.guild.name,
                iconURL: interaction.guild.iconURL({ dynamic: true }),
              })
              .addFields({
                name: "Painel Administrativo",
                value: `Bem-vindo ao Painel Administrativo de **${config.geral.nome_servidor}**! Aqui, você pode gerenciar seus jogadores diretamente pelo Discord e aplicar mudanças imediatas dentro da cidade. O sistema de gerenciamento inclui recursos como:
                            
                            - Registro de novos jogadores
                            - Atribuição de cargos e permissões
                            - Acompanhamento do progresso dos jogadores
                            
                            Lembre-se de sempre usar este painel com responsabilidade e ética, visando o bem-estar e a diversão de todos os jogadores. Vale lembrar que todos os registros são enviados para <#${config.geral.canal_logs}>`,
              })

              .setImage(config.imagens.logo_padm)
              .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
          ],
          components: [
            new Discord.ActionRowBuilder().setComponents(
              new Discord.ButtonBuilder()
                .setCustomId("update_server")
                .setEmoji("🔐")
                .setLabel("Administração servidor")
                .setStyle(2),
              new Discord.ButtonBuilder()
                .setCustomId("update_jogador")
                .setEmoji("🚹")
                .setLabel("Administração de Identidade")
                .setStyle(2)
            ),
            new Discord.ActionRowBuilder().setComponents(
                new Discord.ButtonBuilder()
                .setCustomId("adicionar_ao_jogador")
                .setEmoji("➕")
                .setLabel("Adicionar")
                .setStyle(3),
                new Discord.ButtonBuilder()
                .setCustomId("remover_do_jogador")
                .setEmoji("➖")
                .setLabel("Remover")
                .setStyle(4),
                new Discord.ButtonBuilder()
                .setCustomId("inform_do_jogador")
                .setEmoji("ℹ️")
                .setLabel("Informações do jogador")
                .setStyle(1),
            ),
            new Discord.ActionRowBuilder().setComponents(
              new Discord.ButtonBuilder()
              .setCustomId("anunciar_servidor")
              .setEmoji("📢")
              .setLabel("Anunciar")
              .setStyle(2),
              new Discord.ButtonBuilder()
              .setCustomId("falar_servidor")
              .setEmoji("📝")
              .setLabel("Escrever")
              .setStyle(2),
              new Discord.ButtonBuilder()
              .setCustomId("limpar_servidor")
              .setEmoji("🗑️")
              .setLabel("Limpar")
              .setStyle(2),
              new Discord.ButtonBuilder()
              .setCustomId("sorteio_servidor")
              .setEmoji("✅")
              .setLabel("Enviar")
              .setStyle(2),
            ),
          ],
        });

        interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_success)
                    .setDescription(`✅ | Embed enviada com sucesso!`)
            ],
            ephemeral: true
        })
    }
  }
}