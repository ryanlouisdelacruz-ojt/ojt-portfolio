const btn = document.getElementById('gridToggle');
btn.addEventListener('click', () => {
  const on = document.body.classList.toggle('show-grid');
  btn.setAttribute('aria-pressed', on);
  btn.textContent = on ? 'Hide grid' : 'Show grid';
});

const toTop = document.getElementById('toTop');
const onScroll = () => {
  const show = window.scrollY > 400;
  toTop.classList.toggle('visible', show);
  toTop.tabIndex = show ? 0 : -1;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
const toTop = document.getElementById('toTop');
const onScroll = () => {
  const show = window.scrollY > 400;
  toTop.classList.toggle('visible', show);
  toTop.tabIndex = show ? 0 : -1;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
const toTop = document.getElementById('toTop');
const onScroll = () => {
  const show = window.scrollY > 400;
  toTop.classList.toggle('visible', show);
  toTop.tabIndex = show ? 0 : -1;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();