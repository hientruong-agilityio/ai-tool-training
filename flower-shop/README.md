# Tiệm Hoa Xinh – Flower Shop

App bán hoa đơn giản (HTML/CSS/JS thuần, không cần cài đặt).

## Chạy app

Mở file `index.html` bằng trình duyệt (double-click).

## Tính năng: Add to Cart

| # | Mô tả | Kết quả mong đợi |
|---|-------|------------------|
| 1 | Nhập số lượng, bấm **Thêm vào giỏ** | Sản phẩm xuất hiện trong giỏ, badge 🛒 tăng, hiện thông báo |
| 2 | Thêm cùng sản phẩm nhiều lần | Số lượng cộng dồn, không tạo dòng trùng |
| 3 | Số lượng ≤ 0 hoặc không phải số nguyên | Không thêm, báo "Số lượng không hợp lệ" |
| 4 | Tổng số lượng 1 sản phẩm > 99 | Giới hạn ở 99, báo tối đa |
| 5 | Bấm **+ / −** trong giỏ | Tăng/giảm 1; giảm về 0 thì xóa dòng |
| 6 | Bấm **✕** | Xóa sản phẩm khỏi giỏ |
| 7 | Bấm **Xóa giỏ hàng** | Giỏ trống, tổng = 0 ₫ |
| 8 | Reload trang | Giỏ hàng vẫn được giữ (localStorage) |

Các phần tử có `data-testid` để QA viết test tự động (vd: `add-to-cart-1`, `cart-count`, `cart-total`).
