const langData = {
    'ru': {
        'nav-home': 'Главная',
        'nav-about': 'Обо мне',
        'nav-projects': 'Проекты',
        'nav-contact': 'Контакты',
        'hero-title': 'Привет, я Владимир',
        'hero-sub': 'QA Automation Engineer • Java • Playwright • Selenium',
        'hero-btn': 'Посмотреть проекты',
        'about-title': 'Обо мне',
        'about-text-1': 'Я Junior QA Engineer с фокусом на автоматизацию тестирования и проверку backend-логики. Мой путь в IT начался с интенсивного обучения в Германии, где я освоил современные стандарты качества.',
        'about-text-2': 'Специализируюсь на создании надежных автотестов, которые экономят время команде и гарантируют стабильность продукта.',
        'skill-1': 'Автоматизация UI (Playwright, Java)',
        'skill-2': 'Тестирование API (Postman, REST)',
        'skill-3': 'Работа с БД (SQL, MySQL)',
        'skill-4': 'CI/CD и Git (GitHub Actions)',
        'projects-title': 'Мои проекты',
        'p1-title': 'Blablabike — Онлайн-магазин велосипедов',
        'p1-desc': 'Командный проект с разработчиками и тестировщиками. Участвовал в создании полноценного веб-приложения от идеи до готового продукта. <br><a href="https://blablabike.vercel.app/" target="_blank" style="color: var(--primary); font-weight: bold;">Посмотреть веб-сайт →</a>',
        'p2-title': 'Blablabike Testing Framework',
        'p2-desc': 'Разработал полноценный фреймворк E2E-автоматизации на Java с использованием Page Object Model.',
        'bug-title': ' < Интересный найденный баг >',
        'bug-info': 'Обнаружил критическую уязвимость: валидация дат была только на фронтенде. С помощью JS Executor в Selenium обошёл проверку и забронировал велик на дату в прошлом. Это подчеркнуло важность server-side валидации.',
        'project-view': 'Открыть на GitHub →', 
        'footer-title': 'Давайте строить качественный софт!',
        'footer-sub': 'Ищу возможности в Кишиневе или удаленно. Готов к новым вызовам.',
        'copy': 'Сделано с любовью и вниманием к багам.'
    },
    'en': {
        'nav-home': 'Home',
        'nav-about': 'About me',
        'nav-projects': 'Projects',
        'nav-contact': 'Contacts',
        'hero-title': "Hi, I'm Vladimir",
        'hero-sub': 'QA Automation Engineer • Java • Selenium • Playwright',
        'hero-btn': 'View Projects',
        'about-title': 'About Me',
        'about-text-1': 'I am a Junior QA Engineer specializing in test automation and backend logic validation. My IT journey started with intensive training in Germany.',
        'about-text-2': 'I focus on building robust automated tests that save time and ensure product stability.',
        'skill-1': 'UI Automation (Selenium, Playwright)',
        'skill-2': 'API Testing (Postman, REST)',
        'skill-3': 'Database Testing (SQL, MySQL)',
        'skill-4': 'CI/CD & Git (GitHub Actions)',
        'projects-title': 'My Projects',
        'p1-title': 'Blablabike — Bicycle Online Store',
        'p1-desc': 'Team project involving developers and QA engineers. Participated in building a full-featured web application. <br><a href="https://blablabike.vercel.app/" target="_blank" style="color: var(--primary); font-weight: bold;">Open WebSite →</a>',
        'p2-title': 'Blablabike Testing Framework',
        'p2-desc': 'Built a complete E2E automation framework using Java (Page Object Model). Covered critical user flows.',
        'bug-title': '< Interesting bug found >',
        'bug-info': 'Identified a critical security issue: date validation existed only on the frontend. Using JS Executor, I bypassed client-side restrictions and booked for past dates. This highlighted the necessity of backend validation.',
        'project-view': 'View on GitHub → ',
        'footer-title': "Let's build quality software!",
        'footer-sub': 'Open for opportunities in Chisinau or remote. Ready for new challenges.',
        'copy': 'Made with love and bug-free intent.'
    }
};

const langBtn = document.getElementById('lang-btn');
let currentLang = 'en';


function switchLanguage(lang) {
    currentLang = lang;
    
   
document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (langData[currentLang][key]) {
        element.innerHTML = langData[currentLang][key]; 
    }
});

    
    langBtn.textContent = currentLang === 'en' ? 'RU' : 'ENG';
}


document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
});


langBtn.addEventListener('click', () => {
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    switchLanguage(newLang);
});

