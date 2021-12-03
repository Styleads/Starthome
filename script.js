function showTime() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	let hour = date.toLocaleString("pl", { hour: "2-digit" }); // uses 24h time format
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "2-digit" });
	let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);


	document.getElementById(
		"date"
	).innerHTML = `${today}, ${hour} : ${minute} : ${second}  | ${day}/${month}/${year}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();

document.getElementById("se_button").addEventListener("click", function() {
  se++;
  cycleSearchEngines(se);
});

function check_if_search_empty(event) {

  if (document.forms["search_eng_form"]["q"].value == "") {
    event.preventDefault();
  }
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
