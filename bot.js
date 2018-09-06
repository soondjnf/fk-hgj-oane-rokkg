const Discord = require("discord.js");
const client = new Discord.Client();
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const ms = require("ms");

const UserBlocked = new Set(); 
const jimp = require('jimp');   
const stripIndents = require('common-tags').stripIndents;
const google = require('google-it'); 
const queue = new Map(); 
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
var prefix = "!"


client.on('message', message => {
 
    if (message.content.startsWith ("$id")) {
 
 if(!message.channel.guild) return;
  var invites = [];

 
 let args = message.content.split(' ').slice(1).join(' ');
 
         let defineduser = '';
         if (!args[1]) {
             defineduser = message.author;
         } else {
             let firstMentioned = message.mentions.users.first();
             defineduser = firstMentioned;
         }
 
  const w = ['./hh.png','./hhh.png','./hhhh.png','./hhhhh.png','./hhhhhh.png'];
 var Canvas = require('canvas')
 var jimp = require('jimp')
 
    let user = message.author;
    const millis = new Date().getTime() - message.author.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const created = millis / 1000 / 60 / 60 / 24;
    const milliss = new Date().getTime() - message.guild.member(message.author).joinedAt.getTime();
    const nows = new Date();
    dateFormat(nows, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const joined = milliss / 1000 / 60 / 60 / 24;
 var heg;
  if(men) {
      heg = men
  } else {
      heg = message.author
  }
 var mentionned = message.mentions.members.first();
   var h;
  if(mentionned) {
      h = mentionned
  } else {
      h = message.member
  }
 moment.locale('ar-TN');
         let Image = Canvas.Image,
             canvas = new Canvas(400, 200),
             ctx = canvas.getContext('2d');
         ctx.patternQuality = 'bilinear';
         ctx.filter = 'bilinear';
         ctx.antialias = 'subpixel';
 
         fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
             if (err) return console.log(err);
             let BG = Canvas.Image;
             let ground = new Image;
             ground.src = Background;
             ctx.drawImage(ground, 0, 0, 400, 200);
 
 })
    var mentionned = message.mentions.users.first();
 
     var client;
       if(mentionned){
           var client = mentionned;
       } else {
           var client = message.author;
 
       }
 
  var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
                 let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                 jimp.read(url, (err, ava) => {
                     if (err) return console.log(err);
                     ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                         if (err) return console.log(err);
 
                                         
 
 
 
                                               var time2;
       if(mentionned){
           var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
       } else {
           var time2 = `${dateFormat(message.member.joinedAt)}`;
 
       }
 
 
                   
 
 
 
 
                         ctx.font = 'Bold 20px Arial ';
                         ctx.fontSize = '15px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(`${defineduser.username}`, 210 , 90);
 
 
 
                         var time2;
       if(mentionned){
           var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
       } else {
           var time2 = `${dateFormat(message.member.joinedAt)}`;
 
       }
 
                         ctx.font = 'Bold 13px Arial ';
                         ctx.fontSize = '13px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(` »   دخولك الدسكورد ${created.toFixed(0)} يومّا`, 270 , 125 );
 
 


                         ctx.font = 'Bold 13px Arial ';
                         ctx.fontSize = '13px';
                         ctx.fillStyle = "#ffffff";
                         ctx.textAlign = "center";
                         ctx.fillText(` »  دخولك السيرفر ${joined.toFixed(0)} يومّا`, 270 , 170);
 
                       
                         const Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(72, 115.80, 50, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 15, 55, 120, 120);
                                 
 message.channel.sendFile(canvas.toBuffer())
 
     
         })
     })
 
 
 
 
 }
 
 })

client.login(process.env.BOT_TOKEN);
