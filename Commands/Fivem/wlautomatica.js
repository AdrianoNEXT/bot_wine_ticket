const Discord = require("discord.js");
const config = require('../../config.json');
 
module.exports = {
    name: "wlauto",
    description: "📱 [Configuração] Utilize para enviar o painel de wl automatica",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return interaction.reply({
            content: `**❌ | ${interaction.user}, Você precisa da permissão \`ADMNISTRATOR\` para usar este comando!**`,
            ephemeral: true,
        })

        await interaction.channel.send({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_invisible)
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                    .addFields(
                        { name: '🇧🇷 Brasil', value: `>>> Seja bem vindo(a) a Cidade **${config.geral.nome_servidor}** \n\n Para começar, leia nossas regras no botão Regras\n Já terminou? Então para responder a nossa whitelist clique no botão Abrir Whitelist. \n` }
                    )
                    .setImage(config.wl.logo)
                    .setFooter({ text: `Copyright © `+ config.geral.nome_servidor })
            ],
            components: [
                new Discord.ActionRowBuilder()
                    .addComponents(
                    new Discord.ButtonBuilder()
                        .setCustomId('start_Whitelist')
                        .setLabel('Iniciar Whitelist')
                        .setEmoji('📃')
                        .setStyle(2),
                    new Discord.ButtonBuilder()
                        .setLabel('Ler Regras')
                        .setStyle(5)
                        .setURL(`${config.wl.canal_regras}`),
                    new Discord.ButtonBuilder()
                        .setLabel('Auto Connect')
                        .setStyle(5)
                        .setURL(`${config.wl.link_connect}`)
                    )
            ]
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