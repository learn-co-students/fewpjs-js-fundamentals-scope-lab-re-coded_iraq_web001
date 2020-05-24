let animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let animal = 'cat'
  return animal
}

let n = 1
function add2(n) {


  // Feel free to move things around!
  let two = 2
  return n + two
}
