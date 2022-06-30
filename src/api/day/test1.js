var name = 'waq';
function second() {
  console.log(name);
}
function first() {
  var name = 'll';
  console.log(name);
  second();
}

first();
