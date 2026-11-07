# Ngày 4 · Mảng có kiểu (`string[]`) và tuple (`[string, number]`: số phần tử và kiểu từng vị trí cố định)

> Angular 70 ngày · 1. TypeScript: kiểu dữ liệu · video 1 phút 15 giây

## Bạn học gì

Mảng có kiểu (`string[]`) và tuple (`[string, number]`: số phần tử và kiểu từng vị trí cố định)

## Đáp án câu đố Ngày 3

```ts
const mua = (gia: number, sl = 1) =>
  gia * sl;
console.log(mua(120, 0) + mua(5));
```

In ra: `5`

## Bài học

_Đi theo đúng thứ tự video. Lời giảng là lời đọc trong video; code và kết quả là bản máy đã chạy thật._

### NGÀY 4 · MẢNG VÀ TUPLE

Đố hôm qua in năm: truyền số không, mặc định đứng ngoài. Playlist hai bài mà app đòi phát bài thứ sáu — đoán xem?

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
const baiHat: string[] = ["Mưa"];
baiHat.push("Nắng");
const dangPhat: string = baiHat[5];
console.log(dangPhat);
```

**Đoán trước khi chạy — Bạn đoán máy báo gì?**

- A. `Nắng`
- B. `undefined`
- C. `Lỗi biên dịch`

Kết quả:

```text
Dòng 3: Type 'string | undefined' is not
assignable to type 'string'.
```

Đáp án đúng: **C**.

Bị chặn ngay khi kiểm kiểu, dù mảng toàn chuỗi — vì sao?

### SỬA MỘT DÒNG — Ô trống có dự phòng

Đó là vì ô thứ sáu có thể trống, nên kiểu thật là chuỗi hoặc undefined.

File `buoc-1.ts` — chạy: `node buoc-1.ts`

```ts
const baiHat: string[] = ["Mưa"];
baiHat.push("Nắng");
const dangPhat = baiHat[5] ?? "Hết bài";
console.log(dangPhat);
```

Kết quả (máy đã chạy thật):

```text
Hết bài
```

Thêm toán tử dự phòng: ô trống thì lấy chữ «Hết bài». Báo được là nhờ cờ tsc init bật sẵn; không bật thì lọt, chạy ra undefined.

### Ý chính — MẢNG KHÁC TUPLE — Mảng và tuple

Mà mảng có kiểu như khay topping trà sữa: ô nào cũng topping, thêm bao nhiêu cũng được. Còn tờ order thì đúng hai ô: tên món rồi giá. Tờ order là tuple: số ô và kiểu từng ô cố định.

- **string[]** Mọi ô là chuỗi, dài tùy ý
- **Chỉ số** Đếm từ 0; cờ noUncheckedIndexedAccess báo ô có thể trống
- **[string, number]** Tuple: đủ ô, đúng kiểu từng ô
- **readonly** Khóa tuple, cấm push thêm

Ghi nhớ nhanh: Mảng: một kiểu, dài tùy ý · Tuple: số ô và kiểu cố định · readonly: chặn push

### TUPLE — Tuple tên – số giây

Vậy bài hát thành tuple: tên rồi số giây. Đẩy thêm một tên nữa, độ dài in ra mấy?

File `buoc-2.ts` — chạy: `node buoc-2.ts`

```ts
const bai: [string, number] = [
  "Mưa", 215,
];
bai.push("Nắng");
console.log(bai.length);
```

**Đoán trước khi chạy — Độ dài in ra mấy?**

- A. `2`
- B. `3`
- C. `Lỗi biên dịch`

Kết quả (máy đã chạy thật):

```text
3
```

Đáp án đúng: **B**.

Ra ba: lệnh đẩy vẫn lọt.

### LỖI HAY GẶP — Khóa tuple bằng readonly

Chính chỗ hở này cần chữ readonly, nghĩa là chỉ đọc.

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
const bai: readonly [string, number] = [
  "Mưa", 215,
];
bai.push("Nắng");
console.log(bai.length);
```

Kết quả:

```text
Dòng 4: Property 'push' does not exist on
type 'readonly [string, number]'.
```

Giờ máy báo kiểu chỉ đọc không có lệnh đẩy. Mẹo: rê chuột lên biến trong VS Code để xem kiểu thật.

## Tóm lại

Tóm lại: mảng một kiểu, tuple cố định từng ô. Giờ thì bạn biết vì sao bài thứ sáu bị chặn.

## Câu đố hôm nay

Độ dài thành mấy? Đoán trước, rồi chạy thử. Đáp án ở Ngày 5.

```ts
const luotNghe: number[] = [10, 20];
luotNghe[5] = 30;
console.log(luotNghe.length);
```

## Bài tập

Mảng giá 3 món chè + tuple [tên quán, số bàn]; in giá món 2 và số bàn.
