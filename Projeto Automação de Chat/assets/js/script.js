document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme')
    let theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme == 'dark') {
    document.body.classList.add('dark-theme');
}