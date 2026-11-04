# Ngày 5 · Kiểu object và type alias (`type Ve = {...}`), thuộc tính tuỳ chọn `?`

Angular 70 ngày · 1. TypeScript: kiểu dữ liệu

## Bạn học gì

Kiểu object và type alias (`type Ve = {...}`), thuộc tính tuỳ chọn `?`

## Code trong video

### NGÀY 5 · KIỂU OBJECT VÀ TYPE ALIAS

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
type Ve = {
  phim: string;
  ghe: string;
};
const ve: Ve = {
  phim: "Hành tinh cát",
  ghe: "F7",
  bapNuoc: true,
};
```

Kết quả:

```text
Dòng 8: Object literal may only specify
known properties, and 'bapNuoc' does not
exist in type 'Ve'.
```

### THÊM MỘT DÒNG — Ô combo được bỏ trống

File `buoc-1.ts` — chạy: `node buoc-1.ts`

```ts
type Ve = {
  phim: string;
  ghe: string;
  bapNuoc?: boolean;
};
const ve: Ve = {
  phim: "Hành tinh cát",
  ghe: "F7",
  bapNuoc: true,
};
```

Đoạn này không in ra gì.

### BỎ TRỐNG COMBO — Ô trống in ra gì?

File `buoc-2.ts` — chạy: `node buoc-2.ts`

```ts
type Ve = {
  phim: string;
  ghe: string;
  bapNuoc?: boolean;
};
const ve: Ve = {
  phim: "Hành tinh cát",
  ghe: "F7",
};
console.log(ve.bapNuoc);
```

Kết quả (máy đã chạy thật):

```text
undefined
```

### LỖI HAY GẶP — Ô trống mà vẫn gọi

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
type Ve = {
  phim: string;
  ghe: string;
  bapNuoc?: boolean;
};
const ve: Ve = {
  phim: "Hành tinh cát",
  ghe: "F7",
};
console.log(ve.bapNuoc.toString());
```

Kết quả:

```text
Dòng 10: 've.bapNuoc' is possibly
'undefined'.
```

## Đáp án câu đố Ngày 4

```ts
const luotNghe: number[] = [10, 20];
luotNghe[5] = 30;
console.log(luotNghe.length);
```

In ra: `6`

## Câu đố hôm nay

Lọt tsc không? In ra gì? Đoán trước, rồi chạy thử. Đáp án ở Ngày 6.

```ts
type Ve = { ghe?: string };
const v: Ve = {};
console.log(v.ghe === undefined);
```

## Bài tập

Type Shipper: tên, biển số, dangGiao?; tạo 2 người rồi in.
