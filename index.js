const Discord = require("discord.js");
var mysqldump = require('mysqldump');
const mysql = require('mysql');
const config = require("./config.json");
const FiveM = require("fivem-node-api");
var request = require('request');
var tcpp = require('tcp-ping');
const schedule = require('node-schedule');
const moment = require('moment');
let player = 0
let status3 = '🔴 Offline'
let ping = 18
let maxuser = 7
const connection = mysql.createConnection(config.mysql);
const fs = require('fs');
connection.connect((err) => {
  console.log('🐼 Conectado ao mysql!');
});

const { QuickDB } = require('quick.db')

global.db = new QuickDB();
//

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
    '32767'
  ]
});
client.setMaxListeners(20);
global.embed_color = config.client.embed;

module.exports = client

client.on('interactionCreate', (interaction) => {
  if (interaction.type === Discord.InteractionType.ApplicationCommand) {

    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd) return interaction.reply({ content: `Erro, este comando não existe`, ephemeral: true });

    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
    
    cmd.run(client, interaction)
    
  }
});

client.on("ready", () => {
  console.log(`👋 Hello world`)
  console.log(`🤖 Meu nome é ${client.user.username}`)
  console.log(`💔 Eu tenho ${client.users.cache.size} amigos`)
  console.log(`👨 E mais ${client.guilds.cache.size} grupos me apoiam.`)
});

/*============================= | STATUS RICH PRESENCE | =========================================*/

client.on("ready", () => {
  const messages = [
    `${config.geral.nome_servidor}`
    
  ]

  var position = 0;

  setInterval(() => client.user.setPresence({
    activities: [{
      name: `${messages[position++ % messages.length]}`,
      type: Discord.ActivityType.Playing,
      url: 'https://youtu.be/bQSiCbaLFn0'
    }]
  }), 1000 * 10);

  client.user.setStatus("online");
});

if (config.client.fivem) {

  //setInterval(Sendautomsg, 21600000);
  //setInterval(updateStatus, 30000);
  //setInterval(FazerBackup, 21600000);
}

client.on("guildMemberAdd", (member) => {
  let cargo_autorole = member.guild.roles.cache.get(`${config.geral.add_cargo}`); // Coloque o ID do cargo
  if (!cargo_autorole)
    return console.log("❌ O AUTOROLE não está configurado.");

  member.roles.add(cargo_autorole.id).catch((err) => {
    console.log(
      `❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`
    );
  });

  const canalBv = member.guild.channels.cache.get(config.geral.canal_entrada);
  const memberCount = member.guild.memberCount;

  const embedUser = new Discord.EmbedBuilder()
    .setColor(config.embeds_color.embed_success)
    .setAuthor({ name: member.guild.name, iconURL: config.imagens.imagem_perfil })
     .setDescription(`***💖 | Seja bem-vindo ${member.toString()}!***`)
        .addFields(
          { name: config.geral.nome_servidor, value: '```bash\n' + 'Nós estamos muito felizes por tê-lo(a) aqui conosco!' + '```', inline: false },
          { name: 'MEMBROS', value: ' ```bash\n' + `🎮 ${memberCount}` + '```', inline: true },
          { name: 'IP SERVER', value: '```bash\n' + config.wl.link_connect + '```', inline: true },

        )
    .setImage(config.imagens.ticket_footer)
    .setTimestamp()
    .setFooter({ text: `Todos os direitos reservados a ${member.guild.name}`, iconURL: config.iconUrl });


    const canalregras = new Discord.ButtonBuilder()
    .setStyle(5)
    .setLabel("Regras")
    .setEmoji('📋')
    .setURL(config.wl.canal_regras);
    const canalwl = new Discord.ButtonBuilder()
    .setStyle(5)
    .setLabel("Realizar Whitelist")
    .setEmoji('📋')
    .setURL(config.wl.canal_wl);
    const linkconnect = new Discord.ButtonBuilder()
    .setStyle(5)
    .setLabel("Jogar")
    .setEmoji('📋')
    .setURL(config.wl.link_connect);

  const actionRow = new Discord.ActionRowBuilder().addComponents(canalregras,canalwl,linkconnect);

  canalBv.send({ embeds: [embedUser], components: [actionRow] });
});

client.on("guildMemberRemove", (member) => {
  let cargo_autorole = member.guild.roles.cache.get(`${config.geral.add_cargo}`); // Coloque o ID do cargo
  if (!cargo_autorole)
    return console.log("❌ O AUTOROLE não está configurado neste servidor.");
  const canalBv = member.guild.channels.cache.get(config.geral.canal_saida);
  const embedUser = new Discord.EmbedBuilder()
    .setColor(config.embeds_color.embed_error)
    .setAuthor({ name: member.guild.name, iconURL: config.imagens.imagem_perfil })
    .setDescription(`***😢 | ${member.user.username} saiu do servidor.*** 
            
            *A ${config.geral.nome_servidor} agradece por todo o tempo que passou aqui e desejamos sucesso em seus projetos.*`)
    .setImage(config.imagens.ticket_footer)
    .setTimestamp()
    .setFooter({ text: `Todos os direitos reservados a ${member.guild.name}`, iconURL: config.iconUrl });
  canalBv.send({ embeds: [embedUser] });

 
});

/*============================= | Import handler | =========================================*/

client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.client.token)

/*============================= | SYSTEM TICKET | =========================================*/

client.on("interactionCreate", require('./events/startTicket').execute);
client.on("interactionCreate", require('./events/startTicket1').execute);
client.on("interactionCreate", require('./events/startTicket2').execute);
client.on("interactionCreate", require('./events/startTicket3').execute);
//client.on("interactionCreate", require('./events/startWl').execute);
//client.on("interactionCreate", require('./events/startWhitelist').execute);
client.on("interactionCreate", require('./events/painelAdm').execute);
client.on("interactionCreate", require('./events/painelsugerir').execute);
//client.on("interactionCreate", require('./events/painelPonto').execute);
client.on("interactionCreate", (interaction) => { require('./events/painelConfig').execute(interaction, client);});


/*============================= | Backup automatico | =========================================*/

function FazerBackup() {
  const data = new Date();
  data.toLocaleString('pt-br', { timezone: 'Brazil/brt' })
  const data2 = data.getDate();
  const mes = data.getUTCMonth() + 1;
  const hora = data.getHours();
  const minuto = data.getMinutes();

  mysqldump({
    connection: {
      host: config.mysql.host,
      user: config.mysql.user,
      password: config.mysql.password,
      database: config.mysql.database,
    },
    dumpToFile: `backup-${data2}-${mes}.sql`,
  }
  );

  setTimeout(() => {
    const attachmentPath = `./backup-${data2}-${mes}.sql`;
    client.channels.cache.get(config.geral.canal_backup).send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Backup de DB')
          .setColor(config.embeds_color.embed_success)
          .setImage(`${config.imagens.ticket_footer}`)
          .setTimestamp()
          .setDescription(`Backup automatico realizado -> ${data2}/${mes} - ${hora}:${minuto} Próximo  em 6 HORAS!`),
      ],
      files: [{
        attachment: `./backup-${data2}-${mes}.sql`,
        name: `./backup-${data2}-${mes}.sql`
      }]
    }).then(() => {
      // Exclui o arquivo após o envio
      fs.unlink(attachmentPath, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }).catch((err) => {
      console.error(err);
    });
  }, 5000);
}

function updateStatus() {
  const datatime = new Date();
  datatime.toLocaleString('pt-br', { timezone: 'Brazil/brt' })
  const data2 = datatime.getDate();

  'use strict';

  var url = `http://${config.wl.ip_server}:${config.wl.porta_server}/info.json`;

  request.get({
    url: url,
    json: true,
    headers: { 'User-Agent': 'request' }
  }, (err, res, data) => {
    if (err) {
      updateMessage()

      //console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      // console.log('Status:', res.statusCode);
    } else {
      const slots = data['vars'].sv_maxClients;
      maxuser = slots
      // CONTAGEM

      const srv = new FiveM(`${config.wl.ip_server}:${config.wl.porta_server}`, {

        debug: true,
      })
        .then(async (server) => {

          tcpp.ping({ address: `${config.wl.ip_server}` }, async (err, data, results) => {


            tcpp.probe(`${config.wl.ip_server}`, config.wl.porta_server, async (err, available) => {

              if (available == true) {
                status3 = '🟢 Online'
                const res = Intl.NumberFormat('en', { notation: 'standard', });
                player = await server.getPlayersCount();
                ping = `${res.format(data.results[0].time)} ms`
                updateMessage()
              }
            })
          }
          );
        });
    }
  }
  );

}


function updateMessage() {
  const channel = client.channels.cache.get(config.wl.canal_connect)
  channel.messages.fetch().then(messages => {
    const lastMessage = messages.first();
    if (lastMessage && lastMessage.author.id === client.user.id) {
      // Atualiza o valor dos jogadores conectados na mensagem existente
      lastMessage.edit({
        embeds: [
          new Discord.EmbedBuilder()
            .setColor("#303136")
            .addFields(
              { name: 'Status do servidor', value: '```fix\n' + `${status3}` + ' ```', inline: true },
              { name: 'PING', value: '```bash\n' + ping + '```', inline: true },
              { name: 'JOGADORES', value: ' ```bash\n' + `🎮 ${player}/${maxuser}` + '```', inline: true },
              { name: 'IP SERVER', value: '```bash\nconnect ' + config.wl.link_connect + '```', inline: false },

            )
            .setFooter({ text: '  ATUALIZADO A CADA 30 SEGUNDOS | ' + `Copyright © ` + config.geral.nome_servidor })
            .setImage(`${config.imagens.ticket_footer}`),
        ],
        components: [
          new Discord.ActionRowBuilder()
            .addComponents(
              new Discord.ButtonBuilder()
                .setLabel("Jogar agora")
                .setStyle(5)
                .setURL(`${config.wl.link_connect}`),
              new Discord.ButtonBuilder()
                .setLabel("Conheça a loja")
                .setStyle(5)
                .setURL(`${config.wl.link_loja}`),
              new Discord.ButtonBuilder()
                .setLabel("Abrir Ticket")
                .setStyle(5)
                .setURL(`${config.wl.link_ticket}`)
            )
        ]
      }).catch(console.error);
    }
  }).catch(console.error);
}

async function Sendautomsg() {
  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const db_resultado = await db.get(`faturamento`);
  const diasemsegundos = db_resultado.aviso * 24 * 60 * 60;
  const umMesEmSegundos = 30 * 24 * 60 * 60;
  const prazoPagamentoEmSegundos = db_resultado.data + umMesEmSegundos;
  if (db_resultado) {
    if (currentTimeInSeconds - db_resultado.data < diasemsegundos) {
      const currentDate = moment();
      const expirationDate = moment.unix(prazoPagamentoEmSegundos);
      const daysUntilExpiration = expirationDate.diff(currentDate, 'days');
      console.log("Ainda falta: " + daysUntilExpiration + ' dias para expirar')
    } else {
      const userId = config.geral.cliente_responsavel;
      const user = await client.users.fetch(userId);
      const currentDate = moment();
      const expirationDate = moment.unix(prazoPagamentoEmSegundos);
      const daysUntilExpiration = expirationDate.diff(currentDate, 'days');
      const formattedExpirationDate = expirationDate.format('DD/MM/YYYY');

      const embed = new Discord.EmbedBuilder()
        .setColor(config.embeds_color.embed_error)
        .setTitle("Lembrete de Fatura")
        .setAuthor({ name: `Wine Store 🍷`, iconURL: "https://cdn.discordapp.com/attachments/1043484447841996851/1046044606397169685/Design_sem_nome.gif" })
        .setDescription(
          "Olá! Estamos entrando em contato para lembrá-lo de que a fatura do seu serviço está prestes a vencer. Por favor, certifique-se de que o pagamento seja realizado antes do prazo para evitar quaisquer interrupções no serviço. Obrigado pela sua atenção e tenha um ótimo dia!"
        )
        .addFields(
          { name: 'Status do BOT', value: '```fix\n' + `🎮 ONLINE` + ' ```', inline: true },
          { name: 'CICLO', value: '```bash\n' + '30 DIAS' + '```', inline: true },
          { name: 'DATA DE VENCIMENTO', value: ' ```bash\n' + `🎮 ${formattedExpirationDate}` + '```', inline: true },
          { name: 'DIAS RESTANTES', value: '```bash\n ' + `${daysUntilExpiration}` + '```', inline: false },
        )
        .setImage("https://cdn.discordapp.com/attachments/1043484447841996851/1085709009996222614/standard.gif")
        .setFooter({ text: `Copyright © | Wine Store 🍷` });


      const payButton = new Discord.ButtonBuilder()
        .setStyle(5)
        .setLabel("Pagar agora")
        .setURL("https://discord.com/channels/1042923090730033223/1042923092172865558");

      const actionRow = new Discord.ActionRowBuilder().addComponents(payButton);

      user.send({ embeds: [embed], components: [actionRow] });
      await db.set(`faturamento.aviso`, db_resultado.aviso + 1);
    }
  }
}

//schedule.scheduleJob('0 0 * * *', Sendautomsg);

// const channelId = config.geral.canal_renomear;
// client.on('ready', () => {
//   setInterval(() => {
//     const channel = client.channels.cache.get(channelId);
//     if (!channel) return console.error('Canal não encontrado.');
//     channel.messages.fetch({ limit: 1 }).then(messages => {
//       const lastMessage = messages.first();
//       if (lastMessage && !lastMessage.pinned && !lastMessage.system) {
//         const messageContent = lastMessage.content;
//         const messageParts = messageContent.split(',');
//         lastMessage.delete()
//           .catch(console.error);
//         const cliente = messageParts[0]
//         const idgame = messageParts[1]
//         const nome = messageParts[2]
//         const sobrenome = messageParts[3]
//         const guild = client.guilds.cache.get(config.geral.id_servidor);
//         const member = guild.members.cache.get(cliente);
//         if (member && cliente && idgame && nome && sobrenome) {
//           member.setNickname(`${idgame} | ${nome} ${sobrenome}`);
//         }
//       }
//     }).catch(console.error);
//   }, 10000);
// });

client.on('messageCreate', async (message) => {
  if (message.content.match(/(discord\.(gg|io|me|li)|(discord|discordapp)\.com\/invite)\/[^\s/]+/gi)) {
    const allowedRole = message.guild.roles.cache.get(config.geral.cargo_enviar_link);
    if (!message.member.roles.cache.has(allowedRole)) {
     await message.reply({
        embeds: [
            new Discord.EmbedBuilder()
                .setColor(config.embeds_color.embed_error)
                .setDescription(`❌ | Você não pode enviar convites aqui!`)
        ],
        ephemeral: true
    });
    await message.delete();

    }
  }
});




//COLOCAR TODOS OS MEMBROS DO DISCORD COM CARGO DEFINIDO

// function addRoleToMembers() {
//   const server = client.guilds.cache.get(config.geral.id_servidor);
//   const role = server.roles.cache.get(config.geral.add_cargo); 

//   const membersToAddRole = server.members.cache.filter(member => !member.roles.cache.has(role.id));
//   const promises = membersToAddRole.map(member => member.roles.add(role));

//   Promise.all(promises)
//     .then(() => console.log(`Adicionado o cargo ${role.name} a ${promises.length} membros do servidor.`))
//     .catch(console.error);
// }

// client.on('ready', () => {
//   console.log(`Bot iniciado como ${client.user.tag}!`);
//   addRoleToMembers();
//   setInterval(addRoleToMembers, 60000); // 60 segundos
// });








/*============================= | Anti OFF | =========================================*/


// process.on('unhandRejection', (reason, promise) => {
//   return;
// });
// process.on('uncaughtException', (error, origin) => {
//   return;
// });
// process.on('uncaughtException', (error, origin) => {
//   return;
// });