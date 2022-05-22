import * as Discord from 'discord.js' 
import * as Roasts from './roasts.js'
import * as Credentials from './credentials.js'

// const { Client, Intents } = require("discord.js");

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});


/* Constants */
const applicationID = Credentials.applicationID;
const publicKey = Credentials.publicKey;
const secretKey = Credentials.secretKey;
const musicSpamChannel = Credentials.musicSpamChannel;
const botName = Credentials.botName;


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/* Message Event Listener */
client.on("message", (msg) => {
  try {
    console.log("Message", msg);

    if (msg.content) {
      if (msg.channelId !== musicSpamChannel) {
        // Do not accept messages from the Music Spam Channel
        const message = msg.content.toLowerCase();
        const user = msg.author.username;

        if (user !== botName) {
          console.log("MessageText", message);
          console.log("MessageUser", user);

          if (message.includes("+play")) {
            msg.reply("Use the #musicspam channel for music ya bum");
          }

          if (message === "roast me") {
            msg.reply(Roasts.generateRoast(user));
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
});

client.login(secretKey);
