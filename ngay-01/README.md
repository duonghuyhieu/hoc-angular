# Ngày 1 · TypeScript là gì

> Angular 70 ngày · 1. TypeScript: kiểu dữ liệu · video 1 phút 19 giây

## Bạn học gì

TypeScript là gì: JavaScript có thêm kiểu; chạy `node file.ts` (Node 24 tự xoá phần kiểu rồi chạy); ba kiểu cơ bản string, number, boolean

## Bài học

_Đi theo đúng thứ tự video. Lời giảng là lời đọc trong video; code và kết quả là bản máy đã chạy thật._

### NGÀY 1 · TYPESCRIPT LÀ GÌ

Lớp yoga còn mười hai chỗ, thêm ba, ra mấy?

File `buoc-1.ts` — chạy: `node buoc-1.ts`

```ts
const choTrong = "12";
const datThem = 3;
console.log(choTrong + datThem);
```

**Đoán trước khi chạy — Bạn đoán in ra gì?**

- A. `15`
- B. `123`
- C. `Lỗi biên dịch`

Kết quả (máy đã chạy thật):

```text
123
```

Đáp án đúng: **B**.

Một trăm hai mươi ba, vì mười hai là chữ. App đặt lớp thế là nhận quá chỗ — chặn sao?

### Ý chính — CUỐI KHÓA LÀM ĐƯỢC — 70 ngày làm được gì

Đó mới là ngày một của bảy mươi ngày. Qua kiểu, Angular, biểu mẫu, máy chủ, test, triển khai. Ngày cuối tự làm app đặt lớp gym, khởi đầu từ kiểu dữ liệu.

- **TypeScript strict** bắt lỗi kiểu trước khi chạy
- **Angular** component và signals
- **Trang, form, API** điều hướng, tự kiểm lỗi, gọi máy chủ
- **Test, triển khai** Vitest, build, lên production

Ghi nhớ nhanh: 70 ngày · Video ngắn, code chạy thật · Dự án: app đặt lớp gym

### THÊM NHÃN KIỂU — Gắn nhãn cho chỗ trống

Quay lại lớp yoga, gắn nhãn number cho chỗ trống. TypeScript là JavaScript thêm nhãn kiểu, như hộp sữa tươi không chứa nước mắm.

Minh họa (lop.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
const choTrong: number = "12";
const datThem = 3;
console.log(choTrong + datThem);
```

Kết quả:

```text
Dòng 1: Type 'string' is not assignable to
type 'number'.
```

Máy từ chối ngay: chuỗi không vào ô số.

### AI KIỂM KIỂU? — tsc kiểm, node chạy

Khoan, người chặn là tsc, cài bằng hai lệnh đầu. Lệnh khởi tạo bật strict; rồi kiểm bằng lệnh ba, đừng thêm tên file.

Gõ trong terminal:

```text
npm i -D typescript
npx tsc --init
npx tsc --noEmit
node lop.ts
```

Kết quả:

```text
lop.ts:1:7 - error TS2322
Found 1 error in lop.ts:1
123
```

Còn node vẫn in một trăm hai mươi ba: nó xé nhãn rồi chạy.

### BA KIỂU CƠ BẢN — Đủ ba nhãn cho lớp yoga

Vậy ba nhãn: string cho chữ. Number cho số, nguyên lẫn lẻ. Boolean chỉ có đúng hoặc sai.

File `buoc-2.ts` — chạy: `node buoc-2.ts`

```ts
const tenLop: string = "Yoga sáng";
const choTrong: number = 12;
const conMo: boolean = true;
console.log(tenLop, choTrong, conMo);
console.log(typeof choTrong);
```

Kết quả (máy đã chạy thật):

```text
Yoga sáng 12 true
number
```

Còn typeof hỏi kiểu lúc chạy, đáp number. Mẹo: rê chuột lên biến trong VS Code là thấy kiểu.

### LỖI HAY GẶP — Number viết hoa

Nhưng gõ hoa chữ Number là dính bẫy.

Minh họa (lop.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
const tenLop: string = "Yoga sáng";
const choTrong: Number = 12;
const conMo: boolean = true;
console.log(tenLop, choTrong, conMo);
console.log(choTrong + 3);
```

Kết quả:

```text
Dòng 5: Operator '+' cannot be applied to
types 'Number' and 'number'.
```

Đó là kiểu đối tượng bọc, tsc cấm cộng ở dòng cuối. Kiểu nguyên thủy viết thường, kiểu tự đặt mới viết hoa.

## Tóm lại

Tóm lại: có nhãn kiểu, tsc chặn lỗi một trăm hai mươi ba.

## Câu đố hôm nay

Nhãn number có cứu được không? Đoán trước, rồi chạy thử. Đáp án ở Ngày 2.

```ts
const choTrong: number = 12;
console.log(choTrong + "3");
```

## Bài tập

Khai báo tên rạp, số ghế trống, còn suất chiếu không, in trên một dòng.
