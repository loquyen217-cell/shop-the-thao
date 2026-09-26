document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');

  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const fullName = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const cccd = document.getElementById('cccd').value.trim();

      // Reset lỗi
      document.getElementById('errFullname').innerText = '';
      document.getElementById('errEmail').innerText = '';
      document.getElementById('errPhone').innerText = '';
      document.getElementById('errCCCD').innerText = '';

      let isValid = true;

      // 1. Kiểm tra Họ tên (>= 5 ký tự)
      if (fullName === '') {
        document.getElementById('errFullname').innerText = 'Vui lòng nhập họ tên!';
        isValid = false;
      } else if (fullName.length < 5) {
        document.getElementById('errFullname').innerText = 'Họ tên phải có ít nhất 5 ký tự!';
        isValid = false;
      }

      // 2. Kiểm tra Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '') {
        document.getElementById('errEmail').innerText = 'Vui lòng nhập email!';
        isValid = false;
      } else if (!emailRegex.test(email)) {
        document.getElementById('errEmail').innerText = 'Email không hợp lệ!';
        isValid = false;
      }

      // 3. Kiểm tra SĐT (đúng 10 số, bắt đầu bằng 0)
      const phoneRegex = /^0\d{9}$/;
      if (phone === '') {
        document.getElementById('errPhone').innerText = 'Vui lòng nhập số điện thoại!';
        isValid = false;
      } else if (!phoneRegex.test(phone)) {
        document.getElementById('errPhone').innerText = 'SĐT phải gồm đúng 10 số và bắt đầu bằng số 0!';
        isValid = false;
      }

      // 4. Kiểm tra CCCD (đúng 12 số)
      const cccdRegex = /^\d{12}$/;
      if (cccd === '') {
        document.getElementById('errCCCD').innerText = 'Vui lòng nhập số CCCD!';
        isValid = false;
      } else if (!cccdRegex.test(cccd)) {
        document.getElementById('errCCCD').innerText = 'Số CCCD phải gồm đúng 12 chữ số!';
        isValid = false;
      }

      if (isValid) {
        alert('Đăng ký tài khoản thành công!');
        registerForm.reset();
      }
    });
  }
});