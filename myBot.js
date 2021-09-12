
const { Console } = require("console");
const disc=require("discord.js");
const cli=new disc.Client();

cli.on('ready',()=>{

    console.log("connect" + cli.user.tag);

    cli.user.setActivity("With Codes....");
    
    cli.guilds.forEach((guild)=>{
        Console.log(guild.name);

        guild.channels.forEach((channel)=>{
           Console.log(` - ${channel.id}`);
        })
    })
       
})

cli.login("ODcwOTczMzcwNzgxNTQ0NDU4.YQUjKQ.NkGw0a7hT4UpjS4so0e_ARQmnUs");
