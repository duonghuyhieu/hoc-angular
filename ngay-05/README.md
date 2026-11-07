# Ngày 5 · Kiểu object và type alias (`type Ve = {...}`), thuộc tính tuỳ chọn `?`

> Angular 70 ngày · 1. TypeScript: kiểu dữ liệu · video 1 phút 10 giây

## Bạn học gì

Kiểu object và type alias (`type Ve = {...}`), thuộc tính tuỳ chọn `?`

## Đáp án câu đố Ngày 4

```ts
const luotNghe: number[] = [10, 20];
luotNghe[5] = 30;
console.log(luotNghe.length);
```

In ra: `6`

## Bài học

_Đi theo đúng thứ tự video. Lời giảng là lời đọc trong video; code và kết quả là bản máy đã chạy thật._

### NGÀY 5 · KIỂU OBJECT VÀ TYPE ALIAS

Đố hôm qua ra sáu, mảng tự giãn.

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

Viết vé có thêm ô bắp nước, vậy mà bị chặn. Sửa mẫu sao cho có bắp hay không đều qua?

### THÊM MỘT DÒNG — Ô combo được bỏ trống

Đó là vì mẫu chỉ khai hai ô, bắp nước thành ô lạ. Thêm ô đó kèm dấu hỏi: ô tùy chọn, được bỏ trống.

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

App gym ngày bảy mươi dựng từ mẫu như vậy.

### BỎ TRỐNG COMBO — Ô trống in ra gì?

Thế vé không mua bắp thì in gì?

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

**Đoán trước khi chạy — Ô bỏ trống in ra gì?**

- A. `false`
- B. `undefined`
- C. `Lỗi biên dịch`

Kết quả (máy đã chạy thật):

```text
undefined
```

Đáp án đúng: **B**.

Ra undefined: chưa có giá trị, không phải sai. Nên kiểu thật của ô là đúng sai hoặc chưa có gì.

### Ý chính — MẪU VÉ GỒM GÌ — Mẫu vé có gì

Vậy type alias là mẫu vé: ô phim, ô ghế, ô bắp được trống. Khác vé giấy: mẫu biến mất khi chạy, chỉ tsc soi. Ô lạ chỉ bị chặn khi viết object thẳng; gán qua biến thì lọt. Mẹo: gõ Ctrl Space giữa object, editor gợi đủ tên ô.

- **type Ve** đặt tên cho một mẫu object
- **phim: string** mỗi ô một tên, một kiểu
- **bapNuoc?** ô tùy chọn, có thể undefined
- **Ô lạ** chỉ chặn khi viết object trực tiếp

Ghi nhớ nhanh: Thiếu ô bắt buộc: chặn · Gán qua biến: ô thừa lọt · Ctrl+Space gợi ý tên ô

### LỖI HAY GẶP — Ô trống mà vẫn gọi

Khoan, gọi hàm đổi chuỗi thẳng trên ô bắp thì sao?

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

Strict chặn: ô đó có thể chưa có giá trị. Sửa: kiểm tra bằng if trước rồi mới gọi.

## Tóm lại

Tóm lại: type là mẫu, dấu hỏi là ô được trống.

## Câu đố hôm nay

Lọt tsc không? In ra gì? Đoán trước, rồi chạy thử. Đáp án ở Ngày 6.

```ts
type Ve = { ghe?: string };
const v: Ve = {};
console.log(v.ghe === undefined);
```

## Bài tập

Type Shipper: tên, biển số, dangGiao?; tạo 2 người rồi in.
