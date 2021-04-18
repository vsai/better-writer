function replaceWithSuggestion (e) {
  console.log(e.target.parentElement.dataset.text);
  const range = document.getSelection().getRangeAt(0);
  range.deleteContents();
  // range.insertNode(document.createTextNode(newValue));
}
