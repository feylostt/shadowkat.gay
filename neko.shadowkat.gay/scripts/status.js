// script to show if im online and my current mood or little message of the day or something

// configure request
var url = 'https://httpserver.shadowkat.cc/discord/status',
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
    // { "data": { "desktop": "online", "mobile": "online" } }
    let activity = data.desktop || data.mobile;

    if(activity == "online") {
        document.getElementById('status').innerHTML = `<span class="subjectPronoun">it</span> is online :3`;
    } else if(activity == "idle") {
        document.getElementById('status').innerHTML = `<span class="subjectPronoun">it</span> is idle :0`;
    } else if(activity == "dnd") {
        document.getElementById('status').innerHTML = `<span class="subjectPronoun">it</span> is busy :(`;
    } else {
        document.getElementById('status').innerHTML = `<span class="subjectPronoun">it</span> is offline :C`;
    }
}

function handleCacheError(error) {
    // alert('couldn\'t get last anime watched :(');
    document.getElementById('status').innerHTML = `<span class="subjectPronoun">it</span> is offline :C`;
    console.log(error);
}