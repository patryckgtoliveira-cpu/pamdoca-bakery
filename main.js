document.getElementById('ano').textContent = new Date().getFullYear();

const topo = document.getElementById('topo');
const atualizaTopo = () => topo.classList.toggle('topo--rolado', window.scrollY > 40);
atualizaTopo();
window.addEventListener('scroll', atualizaTopo, { passive: true });

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
