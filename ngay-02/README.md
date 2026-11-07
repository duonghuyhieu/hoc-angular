# Ngày 2 · Suy luận kiểu (không cần ghi kiểu ở mọi chỗ) và đọc lỗi kiểu của tsc

> Angular 70 ngày · 1. TypeScript: kiểu dữ liệu · video 1 phút 15 giây

## Bạn học gì

Suy luận kiểu (không cần ghi kiểu ở mọi chỗ) và đọc lỗi kiểu của tsc; `node` chạy cả code sai kiểu, `npx tsc --noEmit` mới bắt lỗi

## Đáp án câu đố Ngày 1

```ts
const choTrong: number = 12;
console.log(choTrong + "3");
```

In ra: `123`

## Bài học

_Đi theo đúng thứ tự video. Lời giảng là lời đọc trong video; code và kết quả là bản máy đã chạy thật._

### NGÀY 2 · SUY LUẬN KIỂU

Hôm qua: một trăm hai mươi ba. Số đơn chẳng ghi kiểu, gán chữ ba, tsc kêu không?

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
let soDon = 2;
soDon = "ba";
console.log(soDon);
```

**Đoán trước khi chạy — tsc có kêu không?**

- A. `Không, in ra ba`
- B. `Lỗi biên dịch`

Kết quả:

```text
Dòng 2: Type 'string' is not assignable to
type 'number'.
```

Đáp án đúng: **B**.

Kêu dù không nhãn, vậy kiểu từ đâu ra?

### GIÁ TRỊ ĐẦU — Giá trị đầu quyết định kiểu

Từ giá trị đầu: thấy hai là ghi number. Như thu ngân thấy lần đầu bạn trả tiền mặt; lần sau đưa vé số là bị nhắc ngay. Còn tsc thì chặn hẳn, không châm chước.

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

Gán số ba là hết đỏ. App gym ngày bảy mươi nhờ đó chặn số chỗ gán chữ.

### MỖI GIÁ TRỊ MỘT KIỂU — Không nhãn vẫn có kiểu

Vậy chữ thì ra string. Đúng sai thì boolean. Còn const lấy chính giá trị làm kiểu: chữ «may».

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

Mẹo: rê chuột lên biến là VS Code hiện kiểu.

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

Nhưng bản gán chữ ba, node vẫn chạy vì chỉ bỏ nhãn. Còn tsc chỉ đúng dòng hai. Đọc lỗi theo cặp: kiểu bạn đưa, kiểu biến giữ.

### LỖI HAY GẶP — Chữa cháy bằng any

Hóa ra chữa bằng any còn tệ hơn: mọi kiểm tra tắt. Chạy ra sao, bạn đoán?

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
let soDon: any = 2;
soDon = "ba";
console.log(soDon.toFixed(1));
```

**Đoán trước khi chạy — tsc im — chạy thì sao?**

- A. `ba`
- B. `2.0`
- C. `Lỗi khi chạy`

Kết quả:

```text
TypeError: soDon.toFixed is not a function
(dòng 3)
```

Đáp án đúng: **C**.

Sập vì chuỗi không có hàm làm tròn của số, any làm tsc im lặng; bỏ any, gán số.

## Tóm lại

Tóm lại: giá trị đầu đặt kiểu, tsc soi. Giờ bạn biết vì sao không nhãn vẫn bị chặn.

## Câu đố hôm nay

typeof in ra gì? Đoán trước, rồi chạy thử. Đáp án ở Ngày 3.

```ts
let tienShip = 15000;
let ghiChu = tienShip + " đồng";
console.log(typeof ghiChu);
```

## Bài tập

Khai báo const phiShip = 15000, gán phiShip = 0, giải thích lỗi khác gì ở let.
