function diagonallar(matritsa) {
  const n = matritsa.length;
  let asosiy = 0;
  let yordamchi = 0;
  for (let i = 0; i < n; i++) {
    asosiy += matritsa[i][i];
    yordamchi += matritsa[i][n - 1 - i];
  }
  return { asosiy: asosiy, yordamchi: yordamchi };
}

console.log(diagonallar([[1, 2, 3], [4, 5, 6], [7, 8, 10]]));
console.log(diagonallar([[1, 2], [3, 9]]));
console.log(diagonallar([[2, 0, 0], [0, 2, 0], [0, 0, 2]]));
console.log(diagonallar([[5]]));