function musbatlarSoni(arr) {
  let soni = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      soni++;
    }
  }
  return soni;
}

console.log(musbatlarSoni([-3, 0, 5, 7, -1]));
console.log(musbatlarSoni([0, 0]));
console.log(musbatlarSoni([1, 2, 3, 4]));
console.log(musbatlarSoni([]));
console.log(musbatlarSoni([9]));