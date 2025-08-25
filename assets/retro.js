// @ts-nocheck

document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('[data-retro-slider]');
  if (!wrap) return;
  const track = wrap.querySelector('.retro-track');
  const prev = wrap.querySelector('.retro-prev');
  const next = wrap.querySelector('.retro-next');

  let startX = 0, scrollStart = 0;
  track.addEventListener('mousedown', e => { startX = e.pageX; scrollStart = track.scrollLeft; track.dataset.drag = '1'; });
  track.addEventListener('mousemove', e => { if(track.dataset.drag==='1'){ track.scrollLeft = scrollStart - (e.pageX - startX); }});
  ['mouseup','mouseleave'].forEach(ev => track.addEventListener(ev, () => track.dataset.drag='0'));
  track.addEventListener('touchstart', e => { startX = e.touches[0].pageX; scrollStart = track.scrollLeft; }, {passive:true});
  track.addEventListener('touchmove', e => { track.scrollLeft = scrollStart - (e.touches[0].pageX - startX); }, {passive:true});
  prev.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left:  track.clientWidth, behavior: 'smooth' }));
});
