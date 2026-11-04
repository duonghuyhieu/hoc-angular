# Ngày 2 · Suy luận kiểu (không cần ghi kiểu ở mọi chỗ) và đọc lỗi kiểu của tsc

Angular 70 ngày · 1. TypeScript: kiểu dữ liệu

## Bạn học gì

Suy luận kiểu (không cần ghi kiểu ở mọi chỗ) và đọc lỗi kiểu của tsc; `node` chạy cả code sai kiểu, `npx tsc --noEmit` mới bắt lỗi

## Code trong video

### NGÀY 2 · SUY LUẬN KIỂU

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
let soDon = 2;
soDon = "ba";
console.log(soDon);
```

Kết quả:

```text
Dòng 2: Type 'string' is not assignable to
type 'number'.
```

### GIÁ TRỊ ĐẦU — Giá trị đầu quyết định kiểu

File `buoc-1.ts` — chạy: `node buoc-1.ts`

```ts
let soDon = 2; // number
soDon = 3;
console.log(soDon);
```

Kết quả (máy đã chạy thật):

```text
3
```

### MỖI GIÁ TRỊ MỘT KIỂU — Không nhãn vẫn có kiểu

File `buoc-2.ts` — chạy: `node buoc-2.ts`

```ts
let soDon = 2;            // number
let ghiChu = "gọi trước"; // string
let coTip = true;         // boolean
const loaiXe = "may";     // kiểu "may"
console.log(soDon, ghiChu);
console.log(coTip, loaiXe);
```

Kết quả (máy đã chạy thật):

```text
2 gọi trước
true may
```

### NODE VS TSC — Cùng một file, hai kết quả

Gõ trong terminal:

```text
node main.ts
npx tsc --noEmit
```

Kết quả:

```text
ba
main.ts(2,1): error TS2322:
Type 'string' is not assignable
to type 'number'.
```

### LỖI HAY GẶP — Chữa cháy bằng any

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
let soDon: any = 2;
soDon = "ba";
console.log(soDon.toFixed(1));
```

Kết quả:

```text
TypeError: soDon.toFixed is not a function
(dòng 3)
```

## Đáp án câu đố Ngày 1

```ts
const choTrong: number = 12;
console.log(choTrong + "3");
```

In ra: `123`

## Câu đố hôm nay

typeof in ra gì? Đoán trước, rồi chạy thử. Đáp án ở Ngày 3.

```ts
let tienShip = 15000;
let ghiChu = tienShip + " đồng";
console.log(typeof ghiChu);
```

## Bài tập

Khai báo const phiShip = 15000, gán phiShip = 0, giải thích lỗi khác gì ở let.
