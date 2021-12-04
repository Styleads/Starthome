window.addEventListener('load', (event) => {
  let today = new Date();
  let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  displayTime(time);
});

setInterval(function () {
  var today = new Date();
  var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("time").innerHTML = time;
}, 1000);

function displayTime(time) {
  document.getElementById("time").innerHTML = time;
}

const search_engines = [{
  src: "goog.svg",
  placeholder: "Google",
  action: "https://www.google.com/search?q="
},  {
  src: "ddg.svg",
  placeholder: "DuckDuckGo",
  action: "https://www.duckduckgo.com/"
}, {
  src: "reddit.svg",
  placeholder: "Reddit",
  action: "https://www.reddit.com/search?q="
},  {
  src: "youtube.svg",
  placeholder: "YouTube",
  action: "https://www.youtube.com/results?q="
}];

const cycleSearchEngines = se => {
  const curData = search_engines[(se+1) % search_engines.length];

  document.getElementById("se_icon").src = "icons/" + curData.src;
  document.getElementById("search").placeholder = "Searching with " + curData.placeholder;
  document.getElementById("search_eng_form").action = curData.action;
};
