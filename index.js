const app = "I don't do much."



function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newKittens = [...kittens, name]

  return newKittens
}

function prependKitten(name) {
  var newKittens = [name, ...kittens]

  return newKittens
}
