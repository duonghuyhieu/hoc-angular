function giaGoi(vip: boolean): number {
  if (vip) return 50000;
  return 20000;
}
console.log(giaGoi(true));
console.log(giaGoi(false));
