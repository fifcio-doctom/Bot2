const botconfig = require("./Botconfig.json");
const Discord = require("discord.js")
const Prefix = "a!"
var nazwabota = "administratorBot2"

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log('${nazwabota} jest online!')
    .user.setActivy("a!komendy ,by smyczek_123",{type: "PLAYING"})
});

bot.login(botconfig.token)
 









const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'a!ping') {
    msg.reply('Pong!');
  }
});

client.login('NzQ1NjE0NjM0NjMwNzc0ODY1.Xz0VvQ.1Dgboo1xnHk9vy2eWelWUlxWSks');






client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'a!pomoc') {
    msg.reply('jestem w fazie rozwoju!');
  }
});

client.login('NzQ1NjE0NjM0NjMwNzc0ODY1.Xz0VvQ.1Dgboo1xnHk9vy2eWelWUlxWSks');





client.on('message', msg => {
    if (msg.content === 'a!komendy') {
      msg.reply('Komendy:a!pomoc ,a!pocisk, a!ping');
    }
  });
  
  client.login('NzQ1NjE0NjM0NjMwNzc0ODY1.Xz0VvQ.1Dgboo1xnHk9vy2eWelWUlxWSks');






client.on('message', msg => {
    if (msg.content === 'a!pocisk') {
      msg.reply('przestań szmato mi rodzinę prześladować!');
    }
  });
  
  client.login('NzQ1NjE0NjM0NjMwNzc0ODY1.Xz0VvQ.1Dgboo1xnHk9vy2eWelWUlxWSks');





  client.on('message', msg => {
    if (msg.content === 'a!faq') {
      msg.reply('Jestem stworzony przez:smyczek_123 ,jestem jego PIERWSZYM napisanym botem i dlatego nazywam sie Administrator,ale smyczek_123 chcę stworzyć bota o nazwie:Motyl,ten bot ma byc do administracji i anty-raid,ma nadzieję że prześcignię JeremiBot i Edit-bot.BO BĘDZIĘ LEPSZY');
    }
  });
  
  client.login('NzQ1NjE0NjM0NjMwNzc0ODY1.Xz0VvQ.1Dgboo1xnHk9vy2eWelWUlxWSks');



 