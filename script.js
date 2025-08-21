/* ========= Accordion ========= */
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const isOpen = body.style.maxHeight;

    // Đóng tất cả
    document.querySelectorAll('.accordion-body').forEach(item => item.style.maxHeight = null);

    // Nếu chưa mở thì mở
    if (!isOpen) body.style.maxHeight = body.scrollHeight + 'px';
  });
});

/* ========= Form giả lập gửi ========= */
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-thanks').classList.remove('hidden');
  e.target.reset();
});