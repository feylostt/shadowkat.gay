options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
};



function sendPet() {
    var url = 'https://httpserver.shadowkat.cc/discord/pet?pets=' + document.getElementById("pets").value;

    // request!!
    fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleCacheError);
}