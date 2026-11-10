function gapniTozala(s) {
  const bolaklar = s.split(" ");
  const sozlar = [];
  for (let i = 0; i < bolaklar.length; i++) {
    if (bolaklar[i] !== "") {
      sozlar.push(bolaklar[i]);
    }
  }

  if (sozlar.length === 0) {
    return "";
  }

  let gap = sozlar.join(" ");
  gap = gap[0].toUpperCase() + gap.slice(1);
  if (gap[gap.length - 1] !== ".") {
    gap += ".";
  }
  return gap;
}

console.log(gapniTozala(" salom dunyo "));
console.log(gapniTozala("bu tayyor gap."));
console.log(gapniTozala("  bir   ikki  uch "));
console.log(gapniTozala("a"));
console.log(gapniTozala(""));