const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '258853324320'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pqQUMzN3BzNE5hODljbElQTnZweGF0OEZyZXZmbXRGUEorMUVPZUJtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhZNlF4ayt0bUw4UnI3SXpSU29HdVg3dEFXVWpiSUx3NnZJUlpXT1lHaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSWU2NFlmVERXSlJHQVJMY0FydDJ5bU9lKzJJNDZGYjBzUllBbjdHWWs0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqMG9nYTVHSmpydFRLcWh3TGN1cEtRSFZITndjQTNpSzJrRERPSWNZNGg4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLRGFlRXgyck1KTWJBTTBFeGxNSUZpSGFscFhYSWxlSTkvSGhDbzRySG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ6RUdXSm5kajFmOUZpRnBhZ1NFYzZOMHd6N3gxMXQyMTB2Z21DNnNOM009In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXY2IwRFdPSXhZbGl1T0RTSVJCQmNFdFFkN0xPQTFWVHBWNDBOejV4UmFBVXNCbFZjSnlpOVpjU1hNTlEwRHAzQXZYZTUweHp5YzVORng0S3V3ODFBZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjksImFkdlNlY3JldEtleSI6InFwRUFUd1Y4QWZYQ01DMDkvU3BUZ2EzWm1FekdLV3hKYUMyUjRERTEzckE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik04Uzc0M242Um51YnFkYlNaN0pDUGciLCJwaG9uZUlkIjoiMTg0YTIzOTQtZDk2Ni00MWE0LWJiNTEtOGM1Y2VmNmI0ZWEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5kWmdSWmFDYWo0dm5LT05pdGNWR3RJODNFaz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkx3SFI1cFZpbmhoQ2ZrTWFVS1dPekFOUmc4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGlmbVZNUTVjV3ByUVlZQlE9PSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKeHpTTDIxL2JTVTk1aGVRUEhXUjZGK0dxV25LUTJXYjQ1a1h0NHZpUVRFPSIsImFjY291bnRTaWduYXR1cmUiOiIyUXA1UlN4Nkp5cUNZNDFBZ0xXV05yOFNaQklKVENtWDZLbGFOUmIzeDJ0MmNqak9Lc2VzQXB2L0d1QkhLYmk1ME9oUEY0NE9Qa2ZyOTRJKzV3WVZBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidlcxSmRDTEY3NjQ1V1pES2NtYXRVTSs1Sks3ek1RY1FGZTdpWjBKaWhSd3lZckNhUGxpQkdheDZvQmxUVEVzZU03RzlFMVVXVUVaUVQxYWtKWFR2QVE9PSJ9LCJtZSI6eyJpZCI6IjI1ODg1MzMyNDMyMDozNUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTg4NTMzMjQzMjA6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2NjMGk5dGYyMGxQZVlYa0R4MWtlaGZocWxweWtObG0rT1pGN2VMNGtFeCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNTY2NTI1N30=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'KEVIN GENIX',
  packname:  process.env.PACK_NAME || 'MADE BY EMPERROR',
  
  botname:   process.env.BOT_NAME === undefined ? "GENIX" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'KEVIN' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
