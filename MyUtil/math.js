//精确到指定位数的小数
const round = (n, decimals=0) => Number(
    `${Math.round(`${n}e${decimals}`)}e-${decimals}`
)

console.log(round(1.235, 2));
console.log(round(1.235, 1));
console.log(round(1.235, 0));


// 随机字符串
const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const random = function(n) {
  let res = ""
  for (let i=0; i<n; i++) {
    id = Math.ceil(Math.random()*35)
    res =+ chars[id]
  }
  return res
}
