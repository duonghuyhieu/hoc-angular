function mua(
  gia: number,
  sl = 1
): number {
  return gia * sl;
}
const doiVang = (kc: number): number =>
  kc * 200;
console.log(mua(120));
console.log(doiVang(mua(120, 3)));
