# Ngày 3 · Hàm có kiểu

Angular 70 ngày · 1. TypeScript: kiểu dữ liệu

## Bạn học gì

Hàm có kiểu: kiểu tham số, kiểu trả về, tham số mặc định, hàm mũi tên

## Code trong video

### NGÀY 3 · HÀM CÓ KIỂU

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
function giaGoi(vip: boolean): number {
  if (vip) return 50000;
}
console.log(giaGoi(true));
```

Kết quả:

```text
Dòng 1: Function lacks ending return
statement and return type does not include
'undefined'.
```

### LỜI HỨA KIỂU RA — Thêm một dòng trả về

File `buoc-1.ts` — chạy: `node buoc-1.ts`

```ts
function giaGoi(vip: boolean): number {
  if (vip) return 50000;
  return 20000;
}
console.log(giaGoi(true));
console.log(giaGoi(false));
```

Kết quả (máy đã chạy thật):

```text
50000
20000
```

### MẢNH 3 VÀ 4 — Mặc định và mũi tên

File `buoc-2.ts` — chạy: `node buoc-2.ts`

```ts
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
```

Kết quả (máy đã chạy thật):

```text
120
72000
```

### LỖI HAY GẶP — Quên kiểu tham số

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
function thuong(diem) {
  return diem * 2;
}
console.log(thuong(50));
```

Kết quả:

```text
Dòng 1: Parameter 'diem' implicitly has an
'any' type.
```

## Đáp án câu đố Ngày 2

```ts
let tienShip = 15000;
let ghiChu = tienShip + " đồng";
console.log(typeof ghiChu);
```

In ra: `string`

## Câu đố hôm nay

Tổng in ra mấy? Đoán trước, rồi chạy thử. Đáp án ở Ngày 4.

```ts
const mua = (gia: number, sl = 1) =>
  gia * sl;
console.log(mua(120, 0) + mua(5));
```

## Bài tập

Viết phiGuiXe(gio: number, xeMay = true): number — xe máy 5000đ/giờ, ô tô 25000đ/giờ. In phí 3 giờ xe máy và 2 giờ ô tô.
