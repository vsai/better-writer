chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  console.log("Entered Content Script");
  if (request.method == "suggest") {
    if (document.querySelector("#better-writer") === null) {
      const ele = document.createElement("div");
      ele.setAttribute("id","better-writer");
      ele.innerHTML = `<div><a href="https://betterwriter.ai" target="_blank"><button class="site-direct">BetterWriter.ai</button></a></div>
      <div id="suggestions"></div>`
      document.body.appendChild(ele);
    }
    const suggestionsDiv = document.querySelector("#better-writer #suggestions");
    suggestionsDiv.innerHTML =request.content;
  }
});
