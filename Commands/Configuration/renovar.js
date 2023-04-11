const Discord = require("discord.js");
const config = require('../../config.json');
 
module.exports = {
    name: "renovar",
    description: "🐼 [Configuração] Você não tem acesso a este comando!",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {
        if (interaction.user.id !== '443384486076481536') {
            return interaction.reply({
              content: 'Você não tem permissão para usar esse comando.',
              ephemeral: true
            });
          }
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const db_resultado = await db.get(`faturamento`);
        const umMesEmSegundos = 30 * 24 * 60 * 60;
        const prazoPagamentoEmSegundos = db_resultado.data + umMesEmSegundos;
        await db.set(`faturamento.data`, prazoPagamentoEmSegundos);
          
        
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