const ytdl = require('ytdl-core'); // downloads youtube videos
const { Client, GatewayIntentBits, messageLink } = require('discord.js');

const prefix = "!"


const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    // GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.MessageContent
  ] 
});

client.on("ready", () => {
  // client.user.setActivity('discord.js', { type: 'WATCHING' }); // type is not working??
  console.log("ready!!");
  client.user.setActivity('discord.js');
});

// client.on("messageCreate", (message) => {
//   message.channel.send('ay')
//   message.reply('message');
// });



client.on("messageCreate", async(message) =>  {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // message array
  const messageArray = message.content.split(" ");
  const argment = messageArray.slice(1);
  const cmd = messageArray[0];

  // COMMANDS
  // TEST
  if (command == "test") {
    message.channel.send("workin!");
  }

  if (command == "join") {
    message.channel.send("joining!");
  }

  if (command == "play" || command == "p") {
    message.channel.send("playing!");
  }

  if (command == "queue" || command == "q") {
    message.channel.send("queuing");
  }
 
  if (command == "leave") {
    message.channel.send("leaving");
  }
})





// // headpatting commands
// client.on("messageCreate", (message) => {
//   if(message.content.includes("?pat")){
//     //console.log(`Message:  ${message.content}`);
//     let targetMember = message.mentions.users.first();
//     if(!targetMember){
//       return message.reply('you need to tag a single user to pat them!');
//     } 
//     else if (targetMember){
//       console.log(`${targetMember}`);
//       message.channel.send(`( ＾ᴗ＾)/*headpats* ${targetMember}`);
//     }
//     else{
//       console.log('big goof');
//     }
//   }
//   if(message.content.includes("?hug")){
//     let targetMember = message.mentions.users.first();
//     if(!targetMember) return message.reply('you need to tag a single user to hug them!');

//     message.channel.send(`(づ｡◕‿‿◕｡)づ*hugs* ${targetMember} https://c.tenor.com/L5oIyEoHaQIAAAAM/sending-virtual-hug-hug.gif`);
//   }  
// });


const {
	// prefix,
	token,
} = require('./config.json');

client.login(token)


// listeners 
// client.once('ready', () => {
//   console.log('Ready!');
//  });
//  client.once('reconnecting', () => {
//   console.log('Reconnecting!');
//  });
//  client.once('disconnect', () => {
//   console.log('Disconnect!');
//  });
