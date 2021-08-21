const toggler = document.getElementById('theme-toggler');
const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isLocalDark = localStorage.getItem('theme') === 'dark';

const isDark = isLocalDark || isSystemDark;
let theme = isDark ? 'dark' : 'light';
localStorage.setItem('theme', theme);
if (theme === 'dark') document.documentElement.classList.add('dark');

if (document.getElementById('cusdis_thread')) {
  document.getElementById('cusdis_thread').dataset.theme = theme;
}

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
  theme = theme == 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);

  window?.CUSDIS?.setTheme(theme);
};

toggler.addEventListener('click', toggleTheme);
