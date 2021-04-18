chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log("Entered Content Script");
  if (request.method == "suggest") {
    if (document.querySelector("#better-writer") === null) {
      const ele = document.createElement("div");
      ele.setAttribute("id", "better-writer");
      ele.innerHTML = `<div><a href="https://betterwriter.ai" target="_blank"><button class="site-direct">BetterWriter.ai</button></a></div>
      <div id="suggestions"></div>`
      document.body.appendChild(ele);
    }
    const suggestionsDiv = document.querySelector("#better-writer #suggestions");
    suggestionsDiv.innerHTML = "";
    const suggestions = JSON.parse(request.content);
    const html = suggestions.forEach(function (s, index) {
      s = s.trim();
      const div = document.createElement("div");
      div.setAttribute("class", "suggestion");
      div.dataset.index = index;
      div.dataset.suggestion = s;

      const p = document.createElement("p");
      p.innerText = s;

      const replace = document.createElement("button");
      replace.innerText = 'replace';
      replace.onclick = function (e) {
        e.preventDefault();
        const range = document.getSelection().getRangeAt(0);
        range.deleteContents();
        console.log(s);
        range.insertNode(document.createTextNode(s));
      }
      div.appendChild(p);
      div.appendChild(replace);
      suggestionsDiv.appendChild(div);
    })
  }
});
