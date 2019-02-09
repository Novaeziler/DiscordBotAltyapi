module.exports = member => {
    let username = member.user.username;
    member.send('Hoş Geldin Canım **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
