# Ngày 1 · TypeScript là gì

Angular 70 ngày · 1. TypeScript: kiểu dữ liệu

## Bạn học gì

TypeScript là gì: JavaScript có thêm kiểu; chạy `node file.ts` (Node 24 tự xoá phần kiểu rồi chạy); ba kiểu cơ bản string, number, boolean

## Code trong video

### NGÀY 1 · TYPESCRIPT LÀ GÌ

File `buoc-1.ts` — chạy: `node buoc-1.ts`

```ts
const choTrong = "12";
const datThem = 3;
console.log(choTrong + datThem);
```

Kết quả (máy đã chạy thật):

```text
123
```

### THÊM NHÃN KIỂU — Gắn nhãn cho chỗ trống

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

### AI KIỂM KIỂU? — tsc kiểm, node chạy

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

### BA KIỂU CƠ BẢN — Đủ ba nhãn cho lớp yoga

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

### LỖI HAY GẶP — Number viết hoa

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

## Câu đố hôm nay

Nhãn number có cứu được không? Đoán trước, rồi chạy thử. Đáp án ở Ngày 2.

```ts
const choTrong: number = 12;
console.log(choTrong + "3");
```

## Bài tập

Khai báo tên rạp, số ghế trống, còn suất chiếu không, in trên một dòng.
