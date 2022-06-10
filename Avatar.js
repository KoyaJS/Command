const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
     //le nom de ta command moi c'est prefix + avatar
     name: 'avatar',
    descirption: 'Tu veux voir ton avatar ? ',
   execute(message, args, Client){ 
        const member = message.mentions.members.first() || message.member;
        //embed
           const embed = new Discord.MessageEmbed()
           .setTitle(`${member.user.tag}'s`)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512}))
            .setColor('RANDOM')

            message.channel.send({embeds:  [embed]});
    },
};
