// script to show if im online and my current mood or little message of the day or something

// configure request
var url = 'https://httpserver.shadowkat.cc/steam',
options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};

// request!!
fetch(url, options).then(handleResponse)
    .then(handleData)
    .catch(handleCacheError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    // data.players[0]
    let player = data.data.players[0]; // important data is profilestate, profileurl, and gameextrainfo
    // 0 - Offline, 1 - Online, 2 - Busy, 3 - Away, 4 - Snooze, 5 - looking to trade, 6 - looking to play

    if(player.profilestate == 1 && player.gameextrainfo) {
        // online and we have a game name!!
        document.getElementById('game').innerHTML = `<span class="subjectPronoun">it</span> is <a href="${player.profileurl}" target="_blank">playing ${player.gameextrainfo}</a>`;
    } else {
        // otherwise... who cares :(  maybe implement looking to play? if it ever uses that?
        document.getElementById('game').innerHTML = `<span class="subjectPronoun">it</span> is <a href="${player.profileurl}" target="_blank">not gaming rn :(</a>`;
    }
}

function handleCacheError(error) {
    // alert('couldn\'t get last anime watched :(');
    document.getElementById('game').innerHTML = `<span class="subjectPronoun">it</span> is <a href="${player.profileurl}" target="_blank">steam error :C</a>`;
    console.log(error);
}