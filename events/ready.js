// this function should, in theory update the number of servers the bot is in 
// every 15 minutes. which i think is often enough!
function updateServerNumber() {
    let serverNumber = client.guilds.cache.size;
    console.log("GG! Stats updated! I am now in: " + serverNumber + " servers!");
    module.exports = async (client) => {
        await client.user.setPresence({
            activities: [{
                name: 'with ' + client.guilds.cache.size + ' servers',
                type: 0
            }],
            status: 'idle',
            afk: false
        });
    };
    setTimeout(updateServerNumber, 900000);
}
updateServerNumber();
