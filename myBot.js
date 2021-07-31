const disc=require("discord.js");
const cli=new Discord.Client();

cli.on('ready',()=>{

    console.log("connect" + cli.user.tag);
})

cli.login("ODcwOTczMzcwNzgxNTQ0NDU4.YQUjKQ.8okaDwNKIm-MN0dZqiwLjIqEZgo");