// replace subjectPronoun span with she or it
// replace objectPronoun span with her or it
// replace possessiveAdj span with her or its
// replace possessivePronoun span with hers or its
// replace reflexivePronoun span with herself or itself

setTimeout(() => {
    for(const pronoun of document.getElementsByClassName("subjectPronoun")) {
        pronoun.innerHTML = Math.random() >= 0.5 ? "she" : "it";
    }

    for(const pronoun of document.getElementsByClassName("objectPronoun")) {
        pronoun.innerHTML = Math.random() >= 0.5 ? "her" : "it";
    }

    for(const pronoun of document.getElementsByClassName("possessiveAdj")) {
        pronoun.innerHTML = Math.random() >= 0.5 ? "her" : "its";
    }

    for(const pronoun of document.getElementsByClassName("possessivePronoun")) {
        pronoun.innerHTML = Math.random() >= 0.5 ? "hers" : "its";
    }

    for(const pronoun of document.getElementsByClassName("reflexivePronoun")) {
        pronoun.innerHTML = Math.random() >= 0.5 ? "herself" : "itself";
    }
}, 250);