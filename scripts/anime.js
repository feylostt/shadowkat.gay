// a script to display my recently watched anime from anilist :3
var anime = "i forgor";

// configure request
var url = 'https://httpserver.shadowkat.cc/anime',
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
    // find most recent activity and format it into 'anime'
    for(let i = 0; i < data.data.Page.activities.length; i++) {
        var activity = data.data.Page.activities[i];
        var title = activity.media.title.userPreferred;
        var status = activity.status;
        var coverImage = activity.media.coverImage.large;
        var siteUrl = activity.media.siteUrl;

        if(status == 'watched episode') {
            anime = `<a href="${siteUrl}" target="_blank"><img class="animecover" src="${coverImage}" alt="${title}"></a>${title} ep ${activity.progress}`;

            console.log(activity)
            document.getElementById('anime').innerHTML = anime;
            break;
        } else if(status == 'completed') {
            anime = `<a href="${siteUrl}" target="_blank"><img class="animecover" src="${coverImage}" alt="${title}"></a>finished ${title}!`;

            console.log(activity)
            document.getElementById('anime').innerHTML = anime;
            break;
        }
    }
}

function handleCacheError(error) {
    // alert('couldn\'t get last anime watched :(');
    fetchFromAnilist();
}

// in case my server isn't working :3
function fetchFromAnilist() {
    // our query
    var query = `
    query ($userId: Int!) {
    Page {
        activities(userId: $userId, sort: ID_DESC, type: MEDIA_LIST) {
        ... on ListActivity {
            id
            progress
            status
            media {
            title {
                english
                romaji
                userPreferred
            }
            coverImage {
                large
            }
            siteUrl
            }
            siteUrl
        }
        }
    }
    }
    `;

    console.log("fetching from anilist...")

    // userId for the anilist user (thats me!! :3)
    var variables = {
        userId: 7547203
    };

    // configure request
    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

    // request!!
    return fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleError);
}

// really actually truly could not get the data </3
function handleError(error) {
    // alert('couldn\'t get last anime watched :(');
    document.getElementById('anime').innerHTML = "iunno :(";
    console.error(error);
}

module.exports = { fetchFromAnilist };