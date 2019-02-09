const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `g!çal = Müzik Çalar! \ng!durdur = Müziği durdurur. \ng!sigara = Sigara yakarsınız. \ng!kralol = Kral olursunuz. \ng!mcödül = Minecraft Başarımı.\ng!koş = Koşarsınız. \ng!stres-çarkı = Stres çarkı çevirirsiniz. \ng!havadurumu = Hava durumunu gösterir. \ng!csgo = Bir kullanıcının csgo istatistikleri. \ng!wwegif = WWE Gifleri atar. \ng!spotify = Spotify dinleyen birinin ne dinlediğini gösterir. \ng!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \ng!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \ng!kafasınasık = Birisinin kafasına sıkarsınızız. \ng!emojiyazı = Emoji şeklinde yazı yazarsınız \ng!google = Googleda bir kelime aratırsınız. \ng!söv = Birine söver. \ng!düello = Birsinle düello yaparsınız. \ng!kumar = Slot oyunu.`)
  .addField("**Sunucu Yetkilisi Komutları**", `g!ban = İstediğiniz Kişiyi Sunucudan Banlar. \ng!kick  = İstediğiniz Kişiyi Sunucudan Atar. \ng!uyar  = İstediğiniz Kişiyi Uyarır \ng!unban = İstediğiniz Kişinin Yasağını Açar. \ng!sustur = İstediğiniz Kişiyi Susturur. -MUTED- \ng!rol-oluştur = Bot için gerekli rolleri oluşturur. \ng!sayac = Sayac oluşturur. \ng!küfür-engelle aç/kapat = Küfür engelini açar ve ya kapatırsınız. \ng!link-engelle aç/kapat = Link engelini açarsınız ve ya kapatırsınız. \ng!temizle = Meşajları silersiniz 99 dan fazla olmaz. \ng!duyuru = Bot duyuru atar. \ng!oylama = Bot oylama yapar. \ng!otorol = Otomatik rol.`)
  .addField("**Botun Ana Komutları**", "g!yardım = BOT Komutlarını Atar. \ng!sunucu-kur =  Bomboş sunucuyu hazır hale getirir. \ng!ping = BOT Gecikme Süresini Söyler. \ng!davet = BOT Davet Linkini Atar. \ng!istatistik = BOT İstatistiklerini Atar. \ng!destek = Destek Sunucusunu Atar")
  .setFooter('Beni davet etmek veya sunucumuza gelmek için g!davet')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};