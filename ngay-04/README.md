# Ngày 4 · Mảng có kiểu (`string[]`) và tuple (`[string, number]`: số phần tử và kiểu từng vị trí cố định)

Angular 70 ngày · 1. TypeScript: kiểu dữ liệu

## Bạn học gì

Mảng có kiểu (`string[]`) và tuple (`[string, number]`: số phần tử và kiểu từng vị trí cố định)

## Code trong video

### NGÀY 4 · MẢNG VÀ TUPLE

Minh họa (main.ts) — đoạn cố ý sai, đừng chạy y nguyên:

```ts
const baiHat: string[] = ["Mưa"];
baiHat.push("Nắng");
const dangPhat: string = baiHat[5];
console.log(dangPhat);
```

Kết quả:

```text
Dòng 3: Type 'string | undefined' is not
assignable to type 'string'.
```

### SỬA MỘT DÒNG — Ô trống có dự phòng

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

### TUPLE — Tuple tên – số giây

File `buoc-2.ts` — chạy: `node buoc-2.ts`

```ts
const bai: [string, number] = [
  "Mưa", 215,
];
bai.push("Nắng");
console.log(bai.length);
```

Kết quả (máy đã chạy thật):

```text
3
```

### LỖI HAY GẶP — Khóa tuple bằng readonly

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

## Đáp án câu đố Ngày 3

```ts
const mua = (gia: number, sl = 1) =>
  gia * sl;
console.log(mua(120, 0) + mua(5));
```

In ra: `5`

## Câu đố hôm nay

Độ dài thành mấy? Đoán trước, rồi chạy thử. Đáp án ở Ngày 5.

```ts
const luotNghe: number[] = [10, 20];
luotNghe[5] = 30;
console.log(luotNghe.length);
```

## Bài tập

Mảng giá 3 món chè + tuple [tên quán, số bàn]; in giá món 2 và số bàn.
