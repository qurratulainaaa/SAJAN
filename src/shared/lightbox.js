/**
 * Simple image lightbox.
 * Clicking any button matching `triggerSelector` shows its <img> enlarged in `#lb`.
 * Click anywhere on the overlay or press Escape to close.
 */
export function initLightbox({ lightboxId = 'lb', triggerSelector = '.grid button' } = {}) {
  const lb = document.getElementById(lightboxId);
  if (!lb) return;
  const lbImg = lb.querySelector('img');

  const close = () => lb.classList.remove('on');

  document.querySelectorAll(triggerSelector).forEach((btn) => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      if (!img) return;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lb.classList.add('on');
    });
  });

  lb.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}
