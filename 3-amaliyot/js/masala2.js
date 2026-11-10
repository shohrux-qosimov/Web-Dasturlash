function satrniTakrorla(s, n, ajratgich) {
  let natija = "";
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      natija += ajratgich;
    }
    natija += s;
  }
  return natija;
}

console.log(satrniTakrorla("ha", 3, "-"));
console.log(satrniTakrorla("JS", 1, ", "));
console.log(satrniTakrorla("ab", 2, ""));
console.log(satrniTakrorla("x", 0, "-"));