const Discord = require("discord.js");
const config = require("../config.json");
const fs = require('fs');

const caminhoArquivo = './config.json';

// const connection = mysql.createConnection(config.mysql);

module.exports = {
  name: "painelconfig",
  async execute(interaction, client) {
    if (interaction.isButton() && interaction.customId === "config_nome") {
      if (!interaction.member.roles.cache.has(config.geral.cargo_dono)) {
        return interaction.reply({
          content: 'Você não tem permissão para usar esse comando.',
          ephemeral: true
        });
      }
      const modal = new Discord.ModalBuilder()
        .setCustomId("modal_troca_nome")
        .setTitle(`Configuração de nome`);

      const id = new Discord.TextInputBuilder()
        .setCustomId("s_nome")
        .setLabel("Qual o novo nome?")
        .setRequired(true)
        .setMaxLength(30)
        .setStyle(1)
        .setPlaceholder("");
      modal.addComponents(
        new Discord.ActionRowBuilder().addComponents(id),
      
      );

      return interaction.showModal(modal);
    }if (interaction.isButton() && interaction.customId === "config_imagem") {
      if (!interaction.member.roles.cache.has(config.geral.cargo_dono)) {
        return interaction.reply({
          content: 'Você não tem permissão para usar esse comando.',
          ephemeral: true
        });
      }
        const modal = new Discord.ModalBuilder()
          .setCustomId("modal_troca_imagem")
          .setTitle(`Configuração de imagem`);
  
        const id = new Discord.TextInputBuilder()
          .setCustomId("s_imagem")
          .setLabel("Qual o link da nova imagem de perfil ?")
          .setRequired(true)
          .setMaxLength(250)
          .setStyle(1)
          .setPlaceholder("");
        modal.addComponents(
          new Discord.ActionRowBuilder().addComponents(id),
        
        );
  
        return interaction.showModal(modal);
    }if (interaction.isButton() && interaction.customId === "config_connect") {
      if (!interaction.member.roles.cache.has(config.geral.cargo_dono)) {
        return interaction.reply({
          content: 'Você não tem permissão para usar esse comando.',
          ephemeral: true
        });
      }
        const modal = new Discord.ModalBuilder()
          .setCustomId("modal_troca_connect")
          .setTitle(`Configuração do connect`);
  
        const id = new Discord.TextInputBuilder()
          .setCustomId("s_connect")
          .setLabel("Qual o link do novo connect?")
          .setRequired(true)
          .setMaxLength(250)
          .setStyle(1)
          .setPlaceholder("LINK EX: https://cfx.re/join/SEUCONECT");
        modal.addComponents(
          new Discord.ActionRowBuilder().addComponents(id),
        
        );
  
        return interaction.showModal(modal);
    }if (interaction.isButton() && interaction.customId === "config_imagens") {
      if (!interaction.member.roles.cache.has(config.geral.cargo_dono)) {
        return interaction.reply({
          content: 'Você não tem permissão para usar esse comando.',
          ephemeral: true
        });
      }
        const modal = new Discord.ModalBuilder()
          .setCustomId("modal_troca_imgs")
          .setTitle(`Configuração das imagens`);
  
        const id = new Discord.TextInputBuilder()
          .setCustomId("s_1")
          .setLabel("Qual o link da imagem do rodapé?")
          .setRequired(false)
          .setMaxLength(250)
          .setStyle(1)
          .setPlaceholder("");
        const id1 = new Discord.TextInputBuilder()
          .setCustomId("s_2")
          .setLabel("Qual o link da imagem do perfil?")
          .setRequired(false)
          .setMaxLength(250)
          .setStyle(1)
          .setPlaceholder("");
        const id2 = new Discord.TextInputBuilder()
          .setCustomId("s_3")
          .setLabel("Qual o link da imagem do painel adm?")
          .setRequired(false)
          .setMaxLength(250)
          .setStyle(1)
          .setPlaceholder("");
        const id3 = new Discord.TextInputBuilder()
          .setCustomId("s_4")
          .setLabel("Qual o link da logo?")
          .setRequired(false)
          .setMaxLength(250)
          .setStyle(1)
          .setPlaceholder("");
        const id4 = new Discord.TextInputBuilder()
          .setCustomId("s_5")
          .setLabel("Qual o link da imagem do painel de ticket?")
          .setRequired(false)
          .setMaxLength(250)
          .setStyle(1)
          .setPlaceholder("");


        modal.addComponents(
          new Discord.ActionRowBuilder().addComponents(id),
          new Discord.ActionRowBuilder().addComponents(id1),
          new Discord.ActionRowBuilder().addComponents(id2),
          new Discord.ActionRowBuilder().addComponents(id3),
          new Discord.ActionRowBuilder().addComponents(id4),
        
        );
  
        return interaction.showModal(modal);
    }


    if (interaction.isModalSubmit() && interaction.customId === "modal_troca_nome") {
        const nome = interaction.fields.getTextInputValue("s_nome");
      
        client.user.setUsername(nome)
          .then(user => {
            // Alterar o nome do bot
            interaction.reply({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setDescription(
                    `✅ | Olá ${interaction.user}, Nome do bot alterado com sucesso para ${user.username}.`
                  ),
              ],
              ephemeral: true,
            });
      
            // Alterar o apelido do bot no servidor
            const member = interaction.guild.members.cache.get(client.user.id);
            if (member) {
              member.setNickname(nome)
                .catch(error => {
                  console.error(error);
                  interaction.followUp({
                    embeds: [
                      new Discord.EmbedBuilder()
                        .setColor(config.embeds_color.embed_error)
                        .setDescription(
                          `❌ | Ocorreu um erro ao tentar alterar o apelido do bot.`
                        ),
                    ],
                    ephemeral: true,
                  });
                });
            }
          })
          .catch(error => {
            console.error(error);
            interaction.reply({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_error)
                  .setDescription(
                    `❌ | Ocorreu um erro ao tentar alterar o nome do bot.`
                  ),
              ],
              ephemeral: true,
            });
          });
    }
    if (interaction.isModalSubmit() && interaction.customId === "modal_troca_imagem") {
        const imagem = interaction.fields.getTextInputValue("s_imagem");
        client.user.setAvatar(imagem)
          .then(user => {
            // Alterar o nome do bot
            interaction.reply({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setDescription(
                    `✅ | Olá ${interaction.user}, Imagem do bot alterado com sucesso!`
                  ),
              ],
              ephemeral: true,
            });
      
           
          })
          .catch(error => {
            console.error(error);
            interaction.reply({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_error)
                  .setDescription(
                    `❌ | Ocorreu um erro ao tentar alterar a imagem do bot.`
                  ),
              ],
              ephemeral: true,
            });
          });
    }
    if (interaction.isModalSubmit() && interaction.customId === "modal_troca_connect") {
        const connect = interaction.fields.getTextInputValue("s_connect");

         fs.readFile(caminhoArquivo, (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
          
            const configure = JSON.parse(data);
            if (connect) {
                configure.wl.link_connect = connect
                fs.writeFileSync(caminhoArquivo, JSON.stringify(configure, null, 2));
                interaction.reply({
                    embeds: [
                      new Discord.EmbedBuilder()
                        .setColor(config.embeds_color.embed_success)
                        .setDescription(
                          `✅ | Olá ${interaction.user}, Connect alterado com sucesso!`
                        ),
                    ],
                    ephemeral: true,
                  });
            }else {
                interaction.reply({
                    embeds: [
                      new Discord.EmbedBuilder()
                        .setColor(config.embeds_color.embed_success)
                        .setDescription(
                          `❌ | Olá ${interaction.user}, Falha ao alterar, tente novamente mais tarde!`
                        ),
                    ],
                    ephemeral: true,
                  });
            }
            
          });
  
          
      
           
        
    }
    if (interaction.isModalSubmit() && interaction.customId === "modal_troca_imgs") {
        const s1 = interaction.fields.getTextInputValue("s_1");
        const s2 = interaction.fields.getTextInputValue("s_2");
        const s3 = interaction.fields.getTextInputValue("s_3");
        const s4 = interaction.fields.getTextInputValue("s_4");
        const s5 = interaction.fields.getTextInputValue("s_5");
      
        fs.readFile(caminhoArquivo, (err, data) => {
          if (err) {
            console.error(err);
            interaction.reply({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_error)
                  .setDescription(
                    `❌ | Ocorreu um erro ao tentar alterar a imagem.`
                  ),
              ],
              ephemeral: true,
            });
            return;
          }
      
          const configure = JSON.parse(data);
      
          if (s1.trim()) {
            configure.imagens.ticket_footer = s1.trim();
          }
          if (s2.trim()) {
            configure.imagens.imagem_perfil = s2.trim();
          }
          if (s3.trim()) {
            configure.imagens.logo_padm = s3.trim();
          }
          if (s4.trim()) {
            configure.imagens.logo_ticket = s4.trim();
          }
          if (s5.trim()) {
            configure.wl.logo = s5.trim();
          }
      
          fs.writeFileSync(caminhoArquivo, JSON.stringify(configure, null, 2));
      
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Imagem alterada com sucesso!`
                ),
            ],
            ephemeral: true,
          });
        });
      } 
      


  },

};