const Discord = require('discord.js');

const client = new Discord.Client();

//Message envoyé dans la console au démarrage du bot:
client.on('ready', async () => {
    console.log("Amigo Opérationelle !");
    client.user.setActivity("𝑺𝒆𝒓𝒗𝒆𝒖𝒓 𝑨𝒎𝒊𝒔 👪", {type :   "LISTENING"})
})

// Création de l'event n°1
client.on('message', message => {
    // Message &ping ?
    if (message.content === '&ping') {
    // Répondre par Pong...
      message.channel.send('**::ping_pong: Pong ! Dans ta face de Rat !**');
    }
  });
  
// Création de l'event n°2
client.on('message', message => {
    // Message &pong ?
      if (message.content === '&pong') {
    // Répondre par Ping...
        message.channel.send('**:ping_pong: Ping ! Dans ta face de Rat !**');
    }
  });   

// Création de l'event n°3
client.on('message', message => {
    // Message &avatar ?
    if (message.content === '&avatar') {
    // Répondre avec l'URL de l'avatar.
      message.reply(message.author.displayAvatarURL());
    }
  });

// Création de l'event n°4
client.on('message', message => {
    // Message &help ?
      if (message.content === '&help') {
    // Répondre par le message d'aide.
        message.channel.send('**Salut toi ! Je suis Amigo, le meilleur ami des amis dans ce serveur discord ! Pense à visiter le google doc avec la liste des commandes disponibles. Le lien sera disponible prochainement... Mon prefix est "&" !**');
    }
  });   

// Token du BOT içi:
client.login(process.env.TOKEN);
