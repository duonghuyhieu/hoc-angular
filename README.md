# Angular 70 ngày — code theo video

[![Kiểm code theo video](https://github.com/duonghuyhieu/hoc-angular/actions/workflows/kiem.yml/badge.svg)](https://github.com/duonghuyhieu/hoc-angular/actions/workflows/kiem.yml) [![Mở bằng Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/duonghuyhieu/hoc-angular)

Code của từng video trong series «Angular 70 ngày» trên kênh **Hiếu học mỗi ngày**. Mỗi ngày một thư mục: README ghi bạn học gì, từng đoạn code trên video kèm lệnh chạy và kết quả máy đã chạy thật, câu đố, đáp án câu đố hôm trước và bài tập. Mỗi tuần máy tự chạy lại toàn bộ code để chắc vẫn ra đúng như video.

## Cách học

```bash
git clone https://github.com/duonghuyhieu/hoc-angular.git
cd hoc-angular
```

1. Xem video ngày N, mở thư mục `ngay-01`… đọc README, chạy từng file.
2. Làm bài trong thư mục `bai-lam/` (git bỏ qua thư mục này): chép thư mục ngày sang đó rồi sửa, vd `bai-lam/ngay-05/`. Đừng sửa thẳng file trong thư mục ngày.
3. Có video mới: `git pull` — vì bài của bạn nằm trong `bai-lam/` nên không bao giờ bị xung đột.

Không dùng git: nút **Code → Download ZIP**. Không muốn cài gì: nút **Mở bằng Codespaces** ở trên (chạy trên trình duyệt, tài khoản GitHub miễn phí có khoảng 60 giờ mỗi tháng).

## Cài đặt

Node 24 trở lên (nodejs.org; Angular 22 cần 24.15+). Mỗi máy làm một lần:

```bash
npm install
```

Chạy bài: `node ngay-01/buoc-1.ts`. Kiểm kiểu cả repo: `npx tsc --noEmit` (không ghi tên file — ghi tên file thì tsc bỏ qua tsconfig).

## Lộ trình

5/70 ngày đã có video.

| Ngày | Bài | Code |
|---:|---|---|
| 0 | Giới thiệu khóa Angular 70 ngày | [✅ ngay-00](ngay-00/) |
| | **1. TypeScript: kiểu dữ liệu** | |
| 1 | TypeScript là gì | [✅ ngay-01](ngay-01/) |
| 2 | Suy luận kiểu (không cần ghi kiểu ở mọi chỗ) và đọc lỗi kiểu của tsc | [✅ ngay-02](ngay-02/) |
| 3 | Hàm có kiểu | [✅ ngay-03](ngay-03/) |
| 4 | Mảng có kiểu (`string[]`) và tuple (`[string, number]`: số phần tử và kiểu từng vị trí cố định) | [✅ ngay-04](ngay-04/) |
| 5 | Kiểu object và type alias (`type Ve = {...}`), thuộc tính tuỳ chọn `?` | [✅ ngay-05](ngay-05/) |
| 6 | interface | ⏳ sắp có |
| 7 | Union (`string / number`) và literal type (`"S" / "M" / "L"`) | ⏳ sắp có |
| 8 | Thu hẹp kiểu (narrowing) | ⏳ sắp có |
| 9 | null và undefined dưới strictNullChecks | ⏳ sắp có |
| | **2. TypeScript: tổng quát & bất đồng bộ** | |
| 10 | Destructuring, spread `...` và rest | ⏳ sắp có |
| 11 | Phương thức mảng có kiểu | ⏳ sắp có |
| 12 | Generics | ⏳ sắp có |
| 13 | Class trong TypeScript | ⏳ sắp có |
| 14 | Bất đồng bộ | ⏳ sắp có |
| 15 | ÔN TẬP TypeScript (Ngày 1–14) | ⏳ sắp có |
| | **3. HTML & CSS vừa đủ** | |
| 16 | HTML tối thiểu | ⏳ sắp có |
| 17 | CSS vừa đủ | ⏳ sắp có |
| 18 | DOM và sự kiện bằng TypeScript thuần (querySelector, addEventListener, textContent) | ⏳ sắp có |
| | **4. Angular đầu tiên** | |
| 19 | Dự án Angular đầu tiên | ⏳ sắp có |
| 20 | Component đầu tiên | ⏳ sắp có |
| 21 | Nội suy `{{ }}` | ⏳ sắp có |
| 22 | Property binding `[thuộc_tính]` | ⏳ sắp có |
| 23 | Event binding `(sự_kiện)` | ⏳ sắp có |
| 24 | Signal (1/2) | ⏳ sắp có |
| 25 | Signal (2/2) | ⏳ sắp có |
| 26 | Điều khiển luồng `@if` / `@else if` / `@else` trong template (thay cho `*ngIf` cũ) | ⏳ sắp có |
| 27 | `@for` để lặp danh sách | ⏳ sắp có |
| 28 | ÔN TẬP CẤP 1 (TypeScript + Angular cơ bản) | ⏳ sắp có |
| 29 | DỰ ÁN CẤP 1 | ⏳ sắp có |
| | **5. Component & signals** | |
| 30 | `@switch` / `@case` / `@default` để chọn một trong nhiều nhánh | ⏳ sắp có |
| 31 | Pipe | ⏳ sắp có |
| 32 | Tách component ra file riêng | ⏳ sắp có |
| 33 | `input()` và `input.required()` | ⏳ sắp có |
| 34 | `output()` | ⏳ sắp có |
| 35 | `model()` và two-way binding `[( )]` | ⏳ sắp có |
| 36 | Chiếu nội dung `<ng-content>` | ⏳ sắp có |
| 37 | Directive tự viết | ⏳ sắp có |
| 38 | `effect()` | ⏳ sắp có |
| 39 | `linkedSignal()` | ⏳ sắp có |
| 40 | Biến tham chiếu template `#ten` và `viewChild()` | ⏳ sắp có |
| 41 | Vòng đời component | ⏳ sắp có |
| | **6. Dịch vụ & điều hướng** | |
| 42 | Service và `inject()` | ⏳ sắp có |
| 43 | Phạm vi DI | ⏳ sắp có |
| 44 | Router (1/3) | ⏳ sắp có |
| 45 | Router (2/3) | ⏳ sắp có |
| 46 | Router (3/3) | ⏳ sắp có |
| 47 | Guard `CanActivateFn` chặn vào trang (trả `true` hoặc `UrlTree` để chuyển hướng) | ⏳ sắp có |
| | **7. Biểu mẫu** | |
| 48 | Signal Forms (1/2) | ⏳ sắp có |
| 49 | Signal Forms (2/2) | ⏳ sắp có |
| 50 | Reactive Forms (cách cũ, còn gặp nhiều trong dự án đang chạy) | ⏳ sắp có |
| 51 | ÔN TẬP CẤP 2 | ⏳ sắp có |
| 52 | DỰ ÁN CẤP 2 | ⏳ sắp có |
| | **8. Dữ liệu từ máy chủ** | |
| 53 | RxJS (1/2) | ⏳ sắp có |
| 54 | HttpClient (1/2) | ⏳ sắp có |
| 55 | HttpClient (2/2) | ⏳ sắp có |
| 56 | Interceptor dạng hàm (`HttpInterceptorFn`) | ⏳ sắp có |
| 57 | `httpResource()` và `resource()` (ổn định từ v22) | ⏳ sắp có |
| 58 | RxJS (2/2) | ⏳ sắp có |
| | **9. Hiệu năng & kiểm thử** | |
| 59 | Phát hiện thay đổi | ⏳ sắp có |
| 60 | `@defer` | ⏳ sắp có |
| 61 | Hiệu năng danh sách lớn | ⏳ sắp có |
| 62 | Kiểm thử (1/2) | ⏳ sắp có |
| 63 | Kiểm thử (2/2) | ⏳ sắp có |
| | **10. Lên production** | |
| 64 | SSR | ⏳ sắp có |
| 65 | Bảo mật | ⏳ sắp có |
| 66 | Build và triển khai | ⏳ sắp có |
| 67 | Gỡ lỗi và tổ chức dự án | ⏳ sắp có |
| 68 | Nâng cấp phiên bản | ⏳ sắp có |
| | **11. Tốt nghiệp** | |
| 69 | DỰ ÁN CUỐI (1/2) | ⏳ sắp có |
| 70 | DỰ ÁN CUỐI (2/2) | ⏳ sắp có |

## Báo lỗi, hỏi bài

- Code chạy khác video, README sai: [Issues → Báo lỗi bài học](https://github.com/duonghuyhieu/hoc-angular/issues/new/choose).
- Hỏi bài, nhờ giải thích: [Discussions](https://github.com/duonghuyhieu/hoc-angular/discussions).

## Giấy phép

Code: MIT (`LICENSE`) — dùng thoải mái. Chữ trong README: CC BY 4.0 (`LICENSE-NOI-DUNG.md`) — dùng lại thì ghi công kênh Hiếu học mỗi ngày.
