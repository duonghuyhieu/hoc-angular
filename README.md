# Angular 70 ngày — code dự án theo video

[![Kiểm code theo video](https://github.com/duonghuyhieu/hoc-angular/actions/workflows/kiem.yml/badge.svg)](https://github.com/duonghuyhieu/hoc-angular/actions/workflows/kiem.yml) [![Mở bằng Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/duonghuyhieu/hoc-angular)

Code các bài dự án và bài mini trong series «Angular 70 ngày» trên kênh **Hiếu học mỗi ngày** — những bài code dài, khó gõ lại theo video. Bài thường ngắn, gõ theo video là đủ nên không có ở đây. Mỗi bài một thư mục: README ghi bạn học gì, từng đoạn code trên video kèm lệnh chạy và kết quả máy đã chạy thật, câu đố và bài tập. Mỗi tuần máy tự chạy lại toàn bộ code để chắc vẫn ra đúng như video.

## Cách học

```bash
git clone https://github.com/duonghuyhieu/hoc-angular.git
cd hoc-angular
```

1. Xem video bài dự án, mở thư mục của ngày đó (vd `ngay-29`), đọc README, chạy từng file.
2. Làm bài trong thư mục `bai-lam/` (git bỏ qua thư mục này): chép thư mục ngày sang đó rồi sửa, vd `bai-lam/ngay-29/`. Đừng sửa thẳng file trong thư mục ngày.
3. Có bài dự án mới: `git pull` — vì bài của bạn nằm trong `bai-lam/` nên không bao giờ bị xung đột.

Không dùng git: nút **Code → Download ZIP**. Không muốn cài gì: nút **Mở bằng Codespaces** ở trên (chạy trên trình duyệt, tài khoản GitHub miễn phí có khoảng 60 giờ mỗi tháng).

## Cài đặt

Node 24 trở lên (nodejs.org; Angular 22 cần 24.15+). Mỗi máy làm một lần:

```bash
npm install
```

Chạy bài: `node ngay-29/buoc-1.ts`. Kiểm kiểu cả repo: `npx tsc --noEmit` (không ghi tên file — ghi tên file thì tsc bỏ qua tsconfig).

## Các bài dự án

0/4 bài đã có code (khóa 70 ngày).

| Ngày | Bài | Code |
|---:|---|---|
| 29 | DỰ ÁN CẤP 1: Menu quán trà sữa | ⏳ sắp có |
| 52 | DỰ ÁN CẤP 2: Đặt vé rạp phim | ⏳ sắp có |
| 69 | DỰ ÁN CUỐI (1/2): App đặt lịch phòng gym «Sóng» | ⏳ sắp có |
| 70 | DỰ ÁN CUỐI (2/2): App đặt lịch phòng gym «Sóng» | ⏳ sắp có |

## Báo lỗi, hỏi bài

- Code chạy khác video, README sai: [Issues → Báo lỗi bài học](https://github.com/duonghuyhieu/hoc-angular/issues/new/choose).
- Hỏi bài, nhờ giải thích: [Discussions](https://github.com/duonghuyhieu/hoc-angular/discussions).

## Giấy phép

Code: MIT (`LICENSE`) — dùng thoải mái. Chữ trong README: CC BY 4.0 (`LICENSE-NOI-DUNG.md`) — dùng lại thì ghi công kênh Hiếu học mỗi ngày.
