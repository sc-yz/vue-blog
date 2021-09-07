const a = document.getElementById("fileSaver")
a.onclick = function () {
  saveAs(
    "https://www.webpackjs.com/6ccd91e44bf7f92d9942781dbc6094b5.png",
    "image.jpg"
  )
}
