var father = document.getElementById("propagate"),
  child = father.children[0]

father.addEventListener("click", function (event) {
  console.log("this === event.target:" + (this === event.target))
  console.log("event.target:" + event.target.innerHTML)
})
//符合题意需求 console.log('this === event.currentTarget:' + (this === event.currentTarget)); console.log('event.currentTarget:' + event.currentTarget.innerHTML); });
