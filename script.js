const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const closeModal = () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
};

document.querySelectorAll('.project-link[data-project]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    modalTitle.textContent = link.dataset.project;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalDone').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
