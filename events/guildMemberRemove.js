module.exports = member => {
  let guild = member.guild;
  member.send('Nereye gittin?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
