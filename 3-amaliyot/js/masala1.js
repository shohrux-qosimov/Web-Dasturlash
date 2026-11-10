function teskariSon(n) {
  let qolgan = n;
  let natija = 0;
  while (qolgan > 0) {
    const oxirgiRaqam = qolgan % 10;
    natija = natija * 10 + oxirgiRaqam;
    qolgan = Math.floor(qolgan / 10);
  }
  return natija;
}

console.log(teskariSon(1234));
console.log(teskariSon(1200));
console.log(teskariSon(9005));
console.log(teskariSon(7));
console.log(teskariSon(0));