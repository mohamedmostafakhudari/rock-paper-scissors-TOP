
export function capitalize(word) {
  return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function random(max) {
  return Math.floor(Math.random() * max);
}