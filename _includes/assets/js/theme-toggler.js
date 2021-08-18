const toggler = document.getElementById('theme-toggler');
const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isLocalEmpty = localStorage.getItem('theme') === null;
const isLocalDark = localStorage.getItem('theme') === 'dark';

let isDark = isLocalEmpty ? isSystemDark : isLocalDark;
if (isDark) document.documentElement.classList.add('dark');

const toggleTheme = () => {
  isDark = !isDark;
  isDark ? localStorage.setItem('theme','dark') : localStorage.setItem('theme','light');
  document.documentElement.classList.toggle('dark');
}

toggler.addEventListener('click', toggleTheme);
