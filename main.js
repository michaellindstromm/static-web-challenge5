let fibNums = [0, 1];
let i = 2;
do {
  fibNums[i] = fibNums[i-1] + fibNums[i-2];
  i++;
}
while (i < 15);
console.log(fibNums);
