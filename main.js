function userQuery() {
  const query = document.getElementById('query').value;
  return query;
};

function google(query) {
  window.open(`https://google.com/search?q=${query.replace(" ", "%20")}&udm=14`, '_blank').focus();
}

function duckduckgo(query) {
  window.open(`https://duckduckgo.com/?hps=1&q=${query.replace(" ", "+")}&ia=web`, '_blank').focus();
}

function youtube(query) {
  window.open(`https://youtube.com/results?search_query=${query.replace(" ", "+")}`, '_blank').focus();
}

function wikipedia(query) {
  window.open(`https://en.wikipedia.org/w/index.php?search=${query.replace(" ", "+")}&title=Special:Search&profile=advanced&fulltext=1&ns0=1`, '_blank').focus();
}
