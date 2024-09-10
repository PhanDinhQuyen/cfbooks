# Project Structure

├───configs
├───controllers
├───databases
├───handlers
├───helpers
├───middlewares
├───models
├───routes
├───services
└─── utils

# Thư mục chi tiết

1. **configs**:

   - Thư mục này chứa các tệp cấu hình cho các thư viện, framework hoặc môi trường sử dụng trong dự án. Ví dụ: cấu hình database, cấu hình ứng dụng, cấu hình API keys,...

2. **controllers**:

   - Chứa các tệp liên quan đến việc điều khiển luồng xử lý giữa các phần khác nhau của ứng dụng. Đây là nơi chứa logic để tiếp nhận yêu cầu từ client, tương tác với các dịch vụ, và trả về phản hồi.

3. **databases**:

   - Thư mục này chứa các tệp liên quan đến việc quản lý cơ sở dữ liệu, chẳng hạn như kết nối, lược đồ cơ sở dữ liệu, hoặc các thao tác cơ sở dữ liệu (query).

4. **handlers**:

   - Chứa các tệp xử lý các tình huống đặc biệt, như xử lý lỗi, xử lý phản hồi chung hoặc các tác vụ riêng lẻ có thể được chia nhỏ để dễ quản lý.

5. **helpers**:

   - Thư mục này chứa các hàm tiện ích giúp thực hiện các công việc phổ biến trong ứng dụng, chẳng hạn như định dạng dữ liệu, xác thực, hoặc tính toán.

6. **middlewares**:

   - Thư mục chứa các tệp middleware, là các hàm trung gian giúp xử lý các yêu cầu trước khi chúng được chuyển đến controller. Ví dụ: xác thực, kiểm tra quyền truy cập.

7. **models**:

   - Thư mục này chứa các mô hình dữ liệu (data models) thường được sử dụng để tương tác với cơ sở dữ liệu, định nghĩa các schema cho dữ liệu và các mối quan hệ giữa các đối tượng.

8. **routes**:

   - Chứa các tệp định tuyến (routing), là nơi định nghĩa các đường dẫn (URL) và các hành động tương ứng khi có yêu cầu HTTP được gửi đến.

9. **services**:

   - Chứa các dịch vụ chính của ứng dụng, nơi thực hiện các tác vụ quan trọng, chẳng hạn như tương tác với các API bên ngoài, xử lý nghiệp vụ phức tạp, hoặc các thao tác với dữ liệu ngoài controllers.

10. **utils**:
    - Chứa các tiện ích chung được sử dụng ở nhiều nơi trong ứng dụng. Các tệp trong thư mục này thường không gắn liền với một tính năng cụ thể mà hỗ trợ các chức năng cơ bản, như xử lý chuỗi, ngày giờ, hoặc các hàm tiện ích khác.

Cấu trúc này giúp tổ chức mã nguồn gọn gàng, dễ bảo trì, và giúp các nhà phát triển dễ dàng làm việc và mở rộng dự án.
