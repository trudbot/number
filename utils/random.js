//生成一个left 到 right 之间的随机数
// 精度为0.1
export function random(left, right) {
  return Math.floor(Math.random() * (right - left) * 10) / 10 + left;
}