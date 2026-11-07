# Ngày 3 · Hàm có kiểu

> Angular 70 ngày · 1. TypeScript: kiểu dữ liệu · video 1 phút 5 giây

## Bạn học gì

Hàm có kiểu: kiểu tham số, kiểu trả về, tham số mặc định, hàm mũi tên

## Đáp án câu đố Ngày 2

```ts
let tienShip = 15000;
let ghiChu = tienShip + " đồng";
console.log(typeof ghiChu);
```

In ra: `string`

## Bài học

_Đi theo đúng thứ tự video. Lời giảng là lời đọc trong video; code và kết quả là bản máy đã chạy thật._

### NGÀY 3 · HÀM CÓ KIỂU

Đáp án hôm qua là string.

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

Hàm giá gói kim cương này trông đúng mà tsc từ chối. Bạn soi ra lỗi trong ba giây không?

### LỜI HỨA KIỂU RA — Thêm một dòng trả về

Đó là vì number hứa trả số, mà khách thường chẳng nhận gì. Lỗi này hiện nhờ strict ngày một.

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

Thêm dòng trả hai mươi nghìn là xong. Đây là gạch cho luật đặt lớp của app gym ngày bảy mươi.

### Ý chính — BỐN MẢNH CỦA HÀM — Hàm có kiểu gồm 4 mảnh

Vậy hàm có kiểu gồm bốn mảnh. Như máy bán nước: tham số là khe tiền, kiểu trả về là lon rơi ra. Nhưng máy thật nuốt tiền giả, còn tsc chặn trước khi chạy.

- **Kiểu tham số** gia: number — khe nhận đúng loại
- **Kiểu trả về** : number sau ngoặc — hứa thứ rơi ra
- **Mặc định** sl = 1 — bỏ trống vẫn chạy
- **Hàm mũi tên** (kc: number): number => …

Ghi nhớ nhanh: Chặn sai kiểu vào · Luôn ra đúng kiểu · Viết gọn hơn

### MẢNH 3 VÀ 4 — Mặc định và mũi tên

Giờ mảnh ba: số lượng mặc định bằng một. Mảnh bốn: hàm mũi tên đổi kim cương ra vàng. Đoán xem in ra gì?

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

**Đoán trước khi chạy — Hai dòng in ra gì?**

- A. `120 / 72000`
- B. `NaN / 72000`
- C. `Lỗi biên dịch`

Kết quả (máy đã chạy thật):

```text
120
72000
```

Đáp án đúng: **A**.

Một trăm hai mươi nhờ mặc định, rồi bảy mươi hai nghìn.

### LỖI HAY GẶP — Quên kiểu tham số

Thế còn bỏ trống kiểu tham số?

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

tsc báo điểm ngầm là any, khe nào cũng lọt. Lỗi này nhờ strict, thêm nhãn số là hết. Mẹo: rê chuột lên tên hàm, xem đủ kiểu.

## Tóm lại

Tóm lại: kiểu ra là lời hứa, thiếu return là bị chặn.

## Câu đố hôm nay

Tổng in ra mấy? Đoán trước, rồi chạy thử. Đáp án ở Ngày 4.

```ts
const mua = (gia: number, sl = 1) =>
  gia * sl;
console.log(mua(120, 0) + mua(5));
```

## Bài tập

Viết phiGuiXe(gio: number, xeMay = true): number — xe máy 5000đ/giờ, ô tô 25000đ/giờ. In phí 3 giờ xe máy và 2 giờ ô tô.
