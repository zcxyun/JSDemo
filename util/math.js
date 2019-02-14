//精确到指定位数的小数
const round = (n, decimals=0) => Number(
    `${Math.round(`${n}e${decimals}`)}e-${decimals}`
)

console.log(round(1.235, 2));
console.log(round(1.235, 1));
console.log(round(1.235, 0));
