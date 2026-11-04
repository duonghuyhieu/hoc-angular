# Angular 70 ngày — code theo video

Code của từng video trong series «Angular 70 ngày» trên kênh Hiếu học mỗi ngày. Mỗi ngày một thư mục: README ghi bạn học gì, từng đoạn code trên video kèm lệnh chạy và kết quả máy đã chạy thật, câu đố, đáp án câu đố hôm trước và bài tập.

Cập nhật code mới: `git pull`.

## Cài đặt

Node 24 trở lên (nodejs.org; Angular 22 cần 24.15+). Mỗi máy làm một lần:

```bash
npm install
```

Chạy bài: `node ngay-01/buoc-1.ts`. Kiểm kiểu cả repo: `npx tsc --noEmit` (không ghi tên file — ghi tên file thì tsc bỏ qua tsconfig).

## Các ngày

- [Ngày 0 · Giới thiệu khóa Angular 70 ngày](ngay-00/)
- [Ngày 1 · TypeScript là gì](ngay-01/)
- [Ngày 2 · Suy luận kiểu (không cần ghi kiểu ở mọi chỗ) và đọc lỗi kiểu của tsc](ngay-02/)
- [Ngày 3 · Hàm có kiểu](ngay-03/)
- [Ngày 4 · Mảng có kiểu (`string[]`) và tuple (`[string, number]`: số phần tử và kiểu từng vị trí cố định)](ngay-04/)
- [Ngày 5 · Kiểu object và type alias (`type Ve = {...}`), thuộc tính tuỳ chọn `?`](ngay-05/)
