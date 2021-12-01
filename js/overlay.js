$().ready(async function () {
    let urlParams = new URLSearchParams(window.location.search);
    SERVER_IP = urlParams.get('server');
    SERVER_PORT = urlParams.get('port');
    REFRESH = urlParams.get('refresh');
    setInterval(async function () {
        updateOverlay();
    }, 1000*(60*REFRESH));
    updateOverlay()
});

//play.mythichaven.net:25565
async function updateOverlay() {
    const data = JSON.parse(await httpGet("https://api.mcsrvstat.us/2/"+SERVER_IP+":"+SERVER_PORT));
    let $playerList = $('.player-list');
    if(data.online && data.players.list.length > 0){
        $('.player-list span').remove();
        for (let i in data.players.list) {
            let player = data.players.list[i]
            $playerList.append(
                "<span class=\"player\">\n" +
                "    <img src=\"https://minotar.net/avatar/" + player + "/50\" alt=\"\" class=\"shadow\">\n" +
                "</span>")
        }
    }
}
