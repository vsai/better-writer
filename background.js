const handleErrors = function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'betterwriter',
    title: 'BetterWriter.ai suggestions',
    type: 'normal',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(function(click) {
  if(click.menuItemId === "betterwriter" && click.selectionText){
    console.log(click.selectionText);

    fetch("https://us-central1-altcademy-com-1499826879399.cloudfunctions.net/function-1?message=" + encodeURIComponent(click.selectionText))
    .then(response => response.text())
    .then(function (response) {
      let cleanResponse = response.substring(3);
      cleanResponse = cleanResponse.slice(0, -2);
      cleanResponse = cleanResponse.split("', '");
      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, function(tab) {
        tabID=tab[0].id;
        chrome.tabs.sendMessage(tabID,{
          method: "suggest",
          content: JSON.stringify(cleanResponse),
        });
      });
    })
    // var Httpreq = new XMLHttpRequest(); 
    // Httpreq.open("GET",url,false);
    // Httpreq.send(null);
    // var json_obj = JSON.parse(Httpreq.responseText);
    // console.log(json_obj);
    // if (json_obj.result) {
      

    //   var req = new XMLHttpRequest();
    //   req.addEventListener('readystatechange', function (evt) {
    //     if (req.readyState === 4) {
    //       if (req.status === 200) {
    //         console.log("Entered PHP Script!");
    //       } else {
    //         console.log("Status: "+req.status);
    //       }
    //     }
    //   });
    //   req.open('GET', 'http://localhost/project/insertdb.php?name='+encodeURIComponent(name)+"&email="+encodeURIComponent(email)+"&text="+encodeURIComponent(click.selectionText)+"&score="+json_obj.score, true);
    //   req.send();
    // } else { 
    //   chrome.tabs.query({
    //     currentWindow:true,
    //     active: true
    //   }, function(tab){
    //     console.log("error");
    //     tabID=tab[0].id;
    //     chrome.tabs.sendMessage(tabID,{
    //       method: "error",
    //       content: JSON.stringify(json_obj)
    //     });
    //   });
    // }
  }
});
