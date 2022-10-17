exports.run = {
   usage: ['menu', 'help', 'allmenu'],
   hidden: ['menutype'],
   async: async (m, {
      client,
      text,
      isPrefix
   }) => {
      try {
      let captions = `An automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.\n\n◦ *Database* : PostgreSQL\n◦ *Library* : Baileys v4.3.0\n◦ *Rest API* : https://api.neoxr.my.id\n◦ *Source* : https://github.com/neoxr/neoxr-bot\n\nIf you find an error or want to upgrade premium plan contact the owner.\n\n
乂  *U S E R - I N F O*
      
◦  ${isPrefix}limit 
◦  ${isPrefix}me 

乂  *G R O U P*

◦  ${isPrefix}afk *reason (optional)*
◦  ${isPrefix}ava *mention or reply*
◦  ${isPrefix}delete *reply chat*
◦  ${isPrefix}q *reply chat*

乂  *C O N V E R T E R*

◦  ${isPrefix}emojimix *emoji + emoji*
◦  ${isPrefix}sticker *reply media*
◦  ${isPrefix}swm *packname | author*
◦  ${isPrefix}take *packname | author*
◦  ${isPrefix}toimg *reply sticker*
◦  ${isPrefix}tomp3 *reply media*
◦  ${isPrefix}tovn *reply media*

乂  *D O W N L O A D E R*

◦  ${isPrefix}apk *query*
◦  ${isPrefix}fb *link*
◦  ${isPrefix}ig *link*
◦  ${isPrefix}igs *username / link*
◦  ${isPrefix}mediafire *link*
◦  ${isPrefix}pin *link*
◦  ${isPrefix}play *query*
◦  ${isPrefix}podcast *link*
◦  ${isPrefix}soundcloud *query / link*
◦  ${isPrefix}tikmp3 *link*
◦  ${isPrefix}tiktok *link*
◦  ${isPrefix}tikwm *link*
◦  ${isPrefix}twitter *link*
◦  ${isPrefix}video *query*
◦  ${isPrefix}ytmp3 *link*
◦  ${isPrefix}ytmp4 *link*

乂  *U T I L I T I E S*

◦  ${isPrefix}brainly *question*
◦  ${isPrefix}halah *text or reply chat*
◦  ${isPrefix}heleh *text or reply chat*
◦  ${isPrefix}hilih *text or reply chat*
◦  ${isPrefix}holoh *text or reply chat*
◦  ${isPrefix}huluh *text or reply chat*
◦  ${isPrefix}pinterest *query*
◦  ${isPrefix}response *link*
◦  ${isPrefix}server 
◦  ${isPrefix}wallpaper *query*

乂  *T E X T - M A K E R*

◦  ${isPrefix}blackpink *text*
◦  ${isPrefix}blood *text*
◦  ${isPrefix}breakwall *text*
◦  ${isPrefix}glow *text*
◦  ${isPrefix}joker *text*
◦  ${isPrefix}magma *text*
◦  ${isPrefix}matrix *text*
◦  ${isPrefix}multicolor *text*
◦  ${isPrefix}neon *text*
◦  ${isPrefix}papercut *text*
◦  ${isPrefix}slice *text*

乂  *I M A G E - E F F E C T*

◦  ${isPrefix}alien *reply foto*
◦  ${isPrefix}brick *reply foto*
◦  ${isPrefix}bunny *reply foto*
◦  ${isPrefix}caricature *reply foto*
◦  ${isPrefix}clown *reply foto*
◦  ${isPrefix}ink *reply foto*
◦  ${isPrefix}latte *reply foto*
◦  ${isPrefix}letter *reply foto*
◦  ${isPrefix}pencil *reply foto*
◦  ${isPrefix}puzzle *reply foto*
◦  ${isPrefix}roses *reply foto*
◦  ${isPrefix}sketch *reply foto*
◦  ${isPrefix}splash *reply foto*
◦  ${isPrefix}staco *reply foto*

乂  *A D M I N - T O O L S*

◦  ${isPrefix}antidelete *on / off*
◦  ${isPrefix}antilink *on / off*
◦  ${isPrefix}antivirtex *on / off*
◦  ${isPrefix}demote *mention or reply*
◦  ${isPrefix}everyone *text (optional)*
◦  ${isPrefix}filter *on / off*
◦  ${isPrefix}group *open / close*
◦  ${isPrefix}hidetag *text*
◦  ${isPrefix}kick *mention or reply*
◦  ${isPrefix}left *on / off*
◦  ${isPrefix}localonly *on / off*
◦  ${isPrefix}mute *0 / 1*
◦  ${isPrefix}setdesc *text*
◦  ${isPrefix}setleft *text*
◦  ${isPrefix}setname *text*
◦  ${isPrefix}setout *text*
◦  ${isPrefix}setwelcome *text*
◦  ${isPrefix}welcome *on / off*

乂  *O W N E R*

◦  ${isPrefix}-cmdstic *text / command*
◦  ${isPrefix}-mimic *mention or reply*
◦  ${isPrefix}-owner *mention or reply*
◦  ${isPrefix}-prefix *symbol*
◦  ${isPrefix}-prem *mention or reply*
◦  ${isPrefix}+cmdstic *text / command*
◦  ${isPrefix}+mimic *mention or reply*
◦  ${isPrefix}+owner *mention or reply*
◦  ${isPrefix}+prefix *symbol*
◦  ${isPrefix}+prem *mention or reply*
◦  ${isPrefix}autodownload *on / off*
◦  ${isPrefix}autoread *on / off*
◦  ${isPrefix}backup 
◦  ${isPrefix}ban *mention or reply*
◦  ${isPrefix}bc *text or reply media*
◦  ${isPrefix}bcgc *text or reply media*
◦  ${isPrefix}block *mention or reply*
◦  ${isPrefix}changename *text*
◦  ${isPrefix}chatbot *on / off*
◦  ${isPrefix}cmdstic 
◦  ${isPrefix}debug *on / off*
◦  ${isPrefix}groupmode *on / off*
◦  ${isPrefix}join *group link*
◦  ${isPrefix}multiprefix *on / off*
◦  ${isPrefix}ohidetag *text*
◦  ${isPrefix}oleft *on / off*
◦  ${isPrefix}omute *0 / 1*
◦  ${isPrefix}online *on / off*
◦  ${isPrefix}owelcome *on / off*
◦  ${isPrefix}plugdis *plugin name*
◦  ${isPrefix}plugen *plugin name*
◦  ${isPrefix}prefix *symbol*
◦  ${isPrefix}reset 
◦  ${isPrefix}restart 
◦  ${isPrefix}self *on / off*
◦  ${isPrefix}setmsg *text*
◦  ${isPrefix}setpp *reply photo*
◦  ${isPrefix}setwm *packname | author*
◦  ${isPrefix}unban *mention or reply*
◦  ${isPrefix}unblock *mention or reply*
◦  ${isPrefix}update 

乂  *S P E C I A L*

◦  ${isPrefix}botstat 
◦  ${isPrefix}checkapi 
◦  ${isPrefix}groups 
◦  ${isPrefix}hitdaily 
◦  ${isPrefix}hitstat 
◦  ${isPrefix}list 
◦  ${isPrefix}owner 
◦  ${isPrefix}premium 
◦  ${isPrefix}runtime`
      client.sendMessageModify(m.chat, captions, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/f8a923158032e0e6b6eb9.jpg'),
               url: 'https://chat.whatsapp.com/JjwfWvDBTQS0j9fAUOyLMA'
            })
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false
}