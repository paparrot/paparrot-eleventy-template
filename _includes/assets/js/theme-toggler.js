const toggler = document.getElementById('theme-toggler');
const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isLocalDark = localStorage.getItem('theme') === 'dark';

let isDark = isLocalDark || isSystemDark;
if (isDark) document.documentElement.classList.add('dark');

toggler.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  isDark = !isDark;
  isDark ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
});
