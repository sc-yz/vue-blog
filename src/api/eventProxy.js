document.getElementById("ul").addEventListener("click", function (e) {
  const event = e || window.event;
  const target = event.target || event.srcElement;
  if (target.nodeName.toLowerCase() === "li") {
    console.log("li");
  }
});
