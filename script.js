const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  const showing = nav.style.display === 'flex';
  nav.style.display = showing ? '' : 'flex';
  if (!showing) Object.assign(nav.style, {position:'absolute',top:'62px',right:'24px',background:'#f4f0e7',padding:'18px',flexDirection:'column',alignItems:'flex-start',boxShadow:'0 12px 30px #10253f22'});
});
