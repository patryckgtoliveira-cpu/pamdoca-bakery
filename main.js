const postsInstagram = [
];

document.getElementById('ano').textContent = new Date().getFullYear();

const topo = document.getElementById('topo');
const atualizaTopo = () => topo.classList.toggle('topo--rolado', window.scrollY > 40);
atualizaTopo();
window.addEventListener('scroll', atualizaTopo, { passive: true });

const gradeInstagram = document.getElementById('grade-instagram');
if (gradeInstagram && postsInstagram.length) {
  gradeInstagram.innerHTML = postsInstagram.map((url) => `
    <div class="insta-post">
      <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>
    </div>`).join('');
  gradeInstagram.classList.add('insta-grade--posts');
  const s = document.createElement('script');
  s.src = 'https://www.instagram.com/embed.js';
  s.async = true;
  document.body.appendChild(s);
}

const itens = document.querySelectorAll('.revelar');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-revelar');
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  itens.forEach((el) => obs.observe(el));
}
