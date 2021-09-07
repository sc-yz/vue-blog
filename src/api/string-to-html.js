const app = document.getElementById("app");

const div = "<div>我是一个字符串DIV</div>";

function stringToHtml(string) {
  const element = document.createElement("div");
  element.innerHTML = string;
  return element.firstChild;
}

function htmlToString(div) {
  const element = document.createElement("div");
  element.appendChild(div);
  console.log(
    element.firstChild,
    Object.prototype.toString.call(element.firstChild)
  );
  console.log(
    element.innerHTML,
    Object.prototype.toString.call(element.innerHTML)
  );
}

app.appendChild(stringToHtml(div));
htmlToString(app);
