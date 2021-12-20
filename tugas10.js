/*
input: none
output: deret bilangan
1 (0 + 1)
3 (1 + 2)
6 (3 + 3)
10 (6 + 4)
15 (10 + 5)
21 (15 + 6)
28 (21 + 7)
36 (28 + 8)
45 (36 + 9)
55 (45 + 10)
*/

const deretAngka = () => {
  let angka = 0;

  for (let i = 1; i <= 10; i++) {
    angka = angka + i;
    console.log(angka);
  }
};

deretAngka();
