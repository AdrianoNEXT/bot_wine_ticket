const Discord = require("discord.js");
const config = require('../../config.json');
 
module.exports = {
    name: "ticket",
    description: "📱 [Configuração] Utilize para enviar o painel abrir um ticket",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return interaction.reply({
            content: `**❌ | ${interaction.user}, Você precisa da permissão \`ADMNISTRATOR\` para usar este comando!**`,
            ephemeral: true,
        })
        if (!config.client.fivem) {

        await interaction.channel.send({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_invisible)
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                    .addFields(
                        { name: `Olá, que bom te ver aqui! `, value: `>>> \nFicou com dúvidas ou interessou em algum de nossos serviços? \n  Abra um ticket no botão a baixo. A nossa equipe está esperando por você! ` }
                    )
                    .setImage(config.imagens.ticket_footer)
                    .setFooter({ text: `Copyright © `+ config.geral.nome_servidor })
            ],
            components: [
                new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('start_ticket')
                            .setLabel('Abrir ticket')
                            .setEmoji('🛒')
                            .setStyle(2)
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
    }else {


        await interaction.channel.send({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_invisible)
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                    .addFields(
                        { name: 'SISTEMA DE TICKETS', value: `>>> <a:setaa:1085700737838878922> Selecione a opção abaixo que melhor atende seu interesse:` }
                    )
                    .setImage(config.imagens.logo_ticket)
                    .setFooter({ text: `Copyright © `+ config.geral.nome_servidor })
            ],
            components: [
                new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('start_ticket')
                            .setLabel('Scripts')
                            .setEmoji('<a:starst:1085699753607692318>')
                            .setStyle(2),
                        new Discord.ButtonBuilder()
                            .setCustomId('start_ticket4')
                            .setLabel('Bases')
                            .setEmoji('<a:starst:1085699753607692318>')
                            .setStyle(2),
                        new Discord.ButtonBuilder()
                            .setCustomId('start_ticket6')
                            .setLabel('Serviços')
                            .setEmoji('<a:starst:1085699753607692318>')
                            .setStyle(2),
                        new Discord.ButtonBuilder()
                            .setCustomId('start_ticket5')
                            .setLabel('Wine Bots')
                            .setEmoji('<a:starst:1085699753607692318>')
                            .setStyle(2),
                        
                    ),
                    new Discord.ActionRowBuilder().setComponents(
                    new Discord.ButtonBuilder()
                            .setCustomId('start_ticket1')
                            .setLabel('Veiculos')
                            .setEmoji('<a:starst:1085699753607692318>')
                            .setStyle(2),
                    new Discord.ButtonBuilder()
                            .setCustomId('start_ticket7')
                            .setLabel('Roupas')
                            .setEmoji('<a:starst:1085699753607692318>')
                            .setStyle(2),
                    new Discord.ButtonBuilder()
                            .setCustomId('start_ticket2')
                            .setLabel('Mapas')
                            .setEmoji('<a:starst:1085699753607692318>')
                            .setStyle(2),
                    new Discord.ButtonBuilder()
                            .setCustomId('start_ticket3')
                            .setLabel('Designer')
                            .setEmoji('<a:starst:1085699753607692318>')
                            .setStyle(2),
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
}