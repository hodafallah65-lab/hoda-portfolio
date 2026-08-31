const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const dialog = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
document.querySelectorAll('[data-lightbox]').forEach(btn => {
  btn.addEventListener('click', () => {
    lightboxImage.src = btn.dataset.lightbox;
    lightboxImage.alt = btn.querySelector('img')?.alt || 'Artwork';
    dialog.showModal();
  });
});
document.getElementById('lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});
