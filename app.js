// ─── DATA ───────────────────────────────────────────────────────────────────

const MOVIES = [
  {
    id: 1, emoji: '🚀', title: 'Межзвёздный рубеж',
    year: 2024, genre: 'Фантастика', rating: 8.7, duration: '2ч 35мин',
    badge: 'top', director: 'Алексей Громов',
    cast: [{emoji:'👨‍🚀', name:'Иван Петров', role:'Капитан Ред'},{emoji:'👩‍🔬', name:'Мария Соколова', role:'Доктор Лина'},{emoji:'🧔', name:'Сергей Волков', role:'Механик'},{emoji:'👩', name:'Анна Белова', role:'Навигатор'}],
    description: 'Экипаж звездолёта «Аврора» отправляется на край галактики в поисках новой планеты для человечества. Им предстоит столкнуться с неизведанными явлениями и найти ответы на вопросы о природе самого пространства-времени. Эпическое путешествие, которое изменит всё.',
    tagline: 'Не все звёзды одинаково далеко', country: 'Россия', age: '12+',
    tags: ['Фантастика', 'Приключения', 'Драма']
  },
  {
    id: 2, emoji: '🗡️', title: 'Тени Арктики',
    year: 2024, genre: 'Триллер', rating: 7.9, duration: '1ч 58мин',
    badge: 'new', director: 'Наталья Орлова',
    cast: [{emoji:'🕵️', name:'Павел Краснов', role:'Детектив'},{emoji:'👩‍💼', name:'Ольга Ким', role:'Прокурор'},{emoji:'🧑', name:'Дмитрий Лев', role:'Подозреваемый'}],
    description: 'Опытный детектив расследует серию загадочных исчезновений в заснеженном арктическом посёлке. С каждым днём улики ведут всё глубже в тайны, которые местные жители хранили веками. Ни один человек не выглядит невиновным.',
    tagline: 'Истина скрыта под толщей льда', country: 'Россия', age: '16+',
    tags: ['Триллер', 'Детектив', 'Криминал']
  },
  {
    id: 3, emoji: '💚', title: 'Лето напоказ',
    year: 2023, genre: 'Романтика', rating: 7.2, duration: '1ч 45мин',
    badge: null, director: 'Светлана Берёзова',
    cast: [{emoji:'👩‍🎨', name:'Алина Яркова', role:'Художница'},{emoji:'👨‍🎸', name:'Максим Синев', role:'Музыкант'}],
    description: 'Молодая художница приезжает на лето в маленький прибрежный городок и встречает свободного музыканта, который помогает ей заново поверить в мечту. Тёплая история о любви, искусстве и смелости быть собой.',
    tagline: 'Иногда лето меняет всё', country: 'Россия', age: '6+',
    tags: ['Романтика', 'Драма', 'Музыка']
  },
  {
    id: 4, emoji: '⚔️', title: 'Последний рубеж',
    year: 2024, genre: 'Боевик', rating: 8.1, duration: '2ч 10мин',
    badge: 'new', director: 'Роман Стрелков',
    cast: [{emoji:'💪', name:'Артём Власов', role:'Командир'},{emoji:'👩‍⚕️', name:'Виктория Пан', role:'Медик'},{emoji:'🧠', name:'Игорь Зим', role:'Аналитик'}],
    description: 'Элитный отряд специального назначения выполняет миссию по нейтрализации угрозы на самом краю цивилизации. Каждый шаг — ловушка, каждый выбор — судьба. Грандиозный боевик с потрясающими спецэффектами.',
    tagline: 'Они не отступают. Никогда.', country: 'Россия', age: '18+',
    tags: ['Боевик', 'Экшн', 'Драма']
  },
  {
    id: 5, emoji: '👻', title: 'Дом на Лунной улице',
    year: 2023, genre: 'Ужасы', rating: 7.5, duration: '1ч 52мин',
    badge: null, director: 'Константин Мглов',
    cast: [{emoji:'👱‍♀️', name:'Екатерина Зор', role:'Аня'},{emoji:'👴', name:'Виктор Сед', role:'Дедушка'},{emoji:'🧒', name:'Лёша Пух', role:'Мальчик'}],
    description: 'Семья переезжает в старинный особняк и вскоре понимает, что они здесь не одни. Темнота скрывает тайны прежних жильцов, а старые стены хранят воспоминания о трагедиях прошлого.',
    tagline: 'Некоторые дома никогда не отпускают', country: 'Россия', age: '18+',
    tags: ['Ужасы', 'Мистика', 'Триллер']
  },
  {
    id: 6, emoji: '🎭', title: 'Великий замысел',
    year: 2023, genre: 'Драма', rating: 8.4, duration: '2ч 20мин',
    badge: 'top', director: 'Анастасия Чернова',
    cast: [{emoji:'🎩', name:'Олег Ранов', role:'Архитектор'},{emoji:'👩‍🏫', name:'Ирина Тал', role:'Профессор'},{emoji:'🧑‍🎨', name:'Костя Ясный', role:'Ученик'}],
    description: 'Знаменитый архитектор на закате карьеры берётся за последний проект, который должен стать его наследием. Борьба амбиций, творчества и человеческих отношений разворачивается на фоне строительства здания, меняющего облик города.',
    tagline: 'Настоящее искусство — это жертва', country: 'Россия', age: '12+',
    tags: ['Драма', 'Биография', 'Арт-хаус']
  },
  {
    id: 7, emoji: '🌊', title: 'Глубина',
    year: 2024, genre: 'Приключения', rating: 7.8, duration: '2ч 05мин',
    badge: 'new', director: 'Михаил Глубинин',
    cast: [{emoji:'🤿', name:'Захар Морев', role:'Ныряльщик'},{emoji:'👩‍🔬', name:'Дарья Акул', role:'Учёный'},{emoji:'🚢', name:'Пётр Ком', role:'Капитан'}],
    description: 'Команда исследователей погружается в неизведанные глубины Тихого океана и обнаруживает нечто, способное изменить историю науки. Но чем глубже они спускаются — тем больше опасностей их окружает.',
    tagline: 'Океан хранит свои секреты', country: 'Россия', age: '12+',
    tags: ['Приключения', 'Фантастика', 'Экшн']
  },
  {
    id: 8, emoji: '🎪', title: 'Карнавал теней',
    year: 2023, genre: 'Мистика', rating: 7.6, duration: '1ч 48мин',
    badge: null, director: 'Полина Лурье',
    cast: [{emoji:'🎠', name:'Рома Фант', role:'Иллюзионист'},{emoji:'💃', name:'Вера Цирк', role:'Танцовщица'},{emoji:'🃏', name:'Жека Шут', role:'Шут'}],
    description: 'Бродячий карнавал появляется в маленьком городке, но за ярким фасадом скрываются тёмные секреты. Молодой журналист начинает расследование и попадает в мир, где граница между реальностью и иллюзией исчезает.',
    tagline: 'Всё — иллюзия. Кроме страха.', country: 'Россия', age: '16+',
    tags: ['Мистика', 'Триллер', 'Фэнтези']
  },
];

const GENRES = ['Все', 'Фантастика', 'Триллер', 'Романтика', 'Боевик', 'Ужасы', 'Драма', 'Приключения', 'Мистика'];

// ─── STATE ──────────────────────────────────────────────────────────────────

const state = {
  currentPage: 'home',
  currentMovieId: null,
  activeGenre: 'Все',
  user: JSON.parse(localStorage.getItem('cinemaUser') || 'null'),
  registeredUsers: JSON.parse(localStorage.getItem('cinemaUsers') || '[]'),
};

// ─── DOM HELPERS ─────────────────────────────────────────────────────────────

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function showPage(pageId) {
  $$('.page').forEach(p => p.classList.remove('active'));
  const page = $(`#page-${pageId}`);
  if (page) page.classList.add('active');
  state.currentPage = pageId;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateNavLinks();
}

function updateNavLinks() {
  $$('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === state.currentPage);
  });
  updateAuthButtons();
}

function updateAuthButtons() {
  const authArea = $('#nav-auth-area');
  if (!authArea) return;
  if (state.user) {
    authArea.innerHTML = `
      <span style="font-size:0.82rem;color:var(--gray-light)">Привет, <strong style="color:var(--green-bright)">${state.user.username}</strong></span>
      <button class="btn btn-ghost" onclick="logout()">Выйти</button>
    `;
  } else {
    authArea.innerHTML = `
      <button class="btn btn-outline" onclick="showPage('login')">Войти</button>
      <button class="btn btn-primary" onclick="showPage('register')">Регистрация</button>
    `;
  }
}

// ─── TOAST ───────────────────────────────────────────────────────────────────

function showToast(message, type = 'success') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-message">${message}</span>`;
  $('#toast-container').appendChild(toast);
  setTimeout(() => { toast.style.animation = 'toast-in 0.4s reverse ease'; setTimeout(() => toast.remove(), 400); }, 3500);
}

// ─── AUTH ────────────────────────────────────────────────────────────────────

function logout() {
  state.user = null;
  localStorage.removeItem('cinemaUser');
  updateAuthButtons();
  showPage('home');
  showToast('Вы успешно вышли из аккаунта', 'info');
}

// Register
$('#form-register').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = $('#reg-username').value.trim();
  const email = $('#reg-email').value.trim();
  const password = $('#reg-password').value;
  const confirm = $('#reg-confirm').value;
  const agree = $('#reg-agree').checked;
  let valid = true;

  // Validate
  [['reg-username', username.length < 3, 'Имя должно быть не менее 3 символов'],
   ['reg-email', !email.includes('@'), 'Введите корректный email'],
   ['reg-password', password.length < 6, 'Пароль должен быть не менее 6 символов'],
   ['reg-confirm', password !== confirm, 'Пароли не совпадают']
  ].forEach(([id, cond, msg]) => {
    const err = $(`#${id}-error`);
    const inp = $(`#${id}`);
    if (cond) { err.textContent = msg; err.classList.add('show'); inp.classList.add('error'); valid = false; }
    else { err.classList.remove('show'); inp.classList.remove('error'); }
  });

  if (!agree) { showToast('Необходимо принять условия использования', 'error'); return; }
  if (!valid) return;

  const users = JSON.parse(localStorage.getItem('cinemaUsers') || '[]');
  if (users.find(u => u.email === email)) {
    showToast('Пользователь с таким email уже существует', 'error'); return;
  }

  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem('cinemaUsers', JSON.stringify(users));

  const alert = $('#reg-success-alert');
  alert.classList.add('show');
  this.reset();
  showToast('Аккаунт успешно создан! 🎉');
});

// Login
$('#form-login').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = $('#login-email').value.trim();
  const password = $('#login-password').value;
  let valid = true;

  [['login-email', !email.includes('@'), 'Введите корректный email'],
   ['login-password', password.length < 1, 'Введите пароль']
  ].forEach(([id, cond, msg]) => {
    const err = $(`#${id}-error`);
    const inp = $(`#${id}`);
    if (cond) { err.textContent = msg; err.classList.add('show'); inp.classList.add('error'); valid = false; }
    else { err.classList.remove('show'); inp.classList.remove('error'); }
  });
  if (!valid) return;

  const users = JSON.parse(localStorage.getItem('cinemaUsers') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    $('#login-error-alert').classList.add('show'); return;
  }

  state.user = user;
  localStorage.setItem('cinemaUser', JSON.stringify(user));
  updateAuthButtons();
  showPage('home');
  showToast(`Добро пожаловать, ${user.username}! 🎬`);
});

// Reset password
$('#form-reset').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = $('#reset-email').value.trim();
  if (!email.includes('@')) {
    $('#reset-email-error').textContent = 'Введите корректный email';
    $('#reset-email-error').classList.add('show');
    $('#reset-email').classList.add('error');
    return;
  }
  $('#reset-email-error').classList.remove('show');
  $('#reset-email').classList.remove('error');
  $('#reset-success-alert').classList.add('show');
  showToast('Письмо со сбросом пароля отправлено', 'info');
});

// ─── MOVIES ──────────────────────────────────────────────────────────────────

function getFilteredMovies() {
  if (state.activeGenre === 'Все') return MOVIES;
  return MOVIES.filter(m => m.genre === state.activeGenre || (m.tags && m.tags.includes(state.activeGenre)));
}

function renderMovieCard(movie) {
  const stars = '★'.repeat(Math.round(movie.rating / 2)) + '☆'.repeat(5 - Math.round(movie.rating / 2));
  return `
    <div class="movie-card" onclick="openMovie(${movie.id})">
      <div class="card-poster-wrap">
        <div class="card-poster-emoji" style="background:linear-gradient(135deg,var(--bg-surface),var(--bg-dark))">${movie.emoji}</div>
        ${movie.badge ? `<div class="card-badge ${movie.badge}">${movie.badge === 'new' ? 'Новинка' : movie.badge === 'top' ? 'ТОП' : movie.badge}</div>` : ''}
        <div class="card-rating">⭐ ${movie.rating}</div>
        <div class="card-overlay">
          <button class="card-play-btn">▶</button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${movie.title}</div>
        <div class="card-meta">
          <span>${movie.year}</span>
          <span class="card-genre">${movie.genre}</span>
          <span>${movie.duration}</span>
        </div>
        <button class="btn btn-outline" style="width:100%;padding:0.5rem;" onclick="event.stopPropagation();openMovie(${movie.id})">Подробнее</button>
      </div>
    </div>
  `;
}

function renderMoviesGrid() {
  const grid = $('#movies-grid');
  const filtered = getFilteredMovies();
  grid.innerHTML = filtered.length
    ? filtered.map(renderMovieCard).join('')
    : '<p style="color:var(--gray-mid);grid-column:1/-1;text-align:center;padding:3rem">Фильмы не найдены</p>';
}

function renderGenreFilters() {
  const container = $('#genre-filters');
  container.innerHTML = GENRES.map(g => `
    <button class="filter-btn ${g === state.activeGenre ? 'active' : ''}" onclick="setGenre('${g}')">${g}</button>
  `).join('');
}

function setGenre(genre) {
  state.activeGenre = genre;
  renderGenreFilters();
  renderMoviesGrid();
}

// ─── MOVIE DETAIL ────────────────────────────────────────────────────────────

function openMovie(id) {
  const movie = MOVIES.find(m => m.id === id);
  if (!movie) return;
  state.currentMovieId = id;

  const stars = '★'.repeat(Math.round(movie.rating / 2)) + '☆'.repeat(5 - Math.round(movie.rating / 2));

  $('#movie-detail-content').innerHTML = `
    <div class="detail-hero">
      <div class="detail-hero-bg">${movie.emoji}</div>
      <div class="detail-hero-overlay"></div>
      <div class="detail-hero-content">
        <div class="detail-poster">${movie.emoji}</div>
        <div class="detail-info">
          <div class="detail-meta-row">
            ${movie.tags.map(t => `<span class="detail-tag">${t}</span>`).join('')}
            <span class="detail-year">${movie.year}</span>
            <span class="detail-dur">· ${movie.duration}</span>
            <div class="detail-rating-box">
              <span class="detail-rating-val">⭐ ${movie.rating}</span>
              <span class="detail-rating-stars">${stars}</span>
            </div>
          </div>
          <h1 class="detail-title">${movie.title}</h1>
          <p class="detail-tagline">${movie.tagline}</p>
          <div class="detail-actions">
            <button class="btn btn-primary btn-large" onclick="openTrailerModal()">▶ Смотреть трейлер</button>
            <button class="btn btn-outline btn-large" onclick="openTicketModal(${movie.id})">🎟️ Купить билет</button>
            <button class="btn btn-ghost btn-large" onclick="showPage('home')">← Назад</button>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-body">
      <div>
        <h3 class="detail-section-title">О ФИЛЬМЕ</h3>
        <p class="detail-description">${movie.description}</p>
        <h3 class="detail-section-title">АКТЁРСКИЙ СОСТАВ</h3>
        <div class="cast-grid">
          ${movie.cast.map(a => `
            <div class="cast-card">
              <div class="cast-avatar">${a.emoji}</div>
              <div class="cast-name">${a.name}</div>
              <div class="cast-role">${a.role}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <div class="detail-specs">
          ${[
            ['Режиссёр', movie.director],
            ['Жанр', movie.tags.join(', ')],
            ['Год выпуска', movie.year],
            ['Страна', movie.country],
            ['Длительность', movie.duration],
            ['Возраст', movie.age],
            ['Рейтинг', `⭐ ${movie.rating}/10`],
          ].map(([l,v]) => `<div class="spec-row"><span class="spec-label">${l}</span><span class="spec-value">${v}</span></div>`).join('')}
        </div>
      </div>
    </div>
  `;

  showPage('movie-detail');
}

// ─── MODALS ──────────────────────────────────────────────────────────────────

function openTrailerModal() {
  $('#trailer-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeTrailerModal() {
  $('#trailer-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function openTicketModal(movieId) {
  const movie = MOVIES.find(m => m.id === (movieId || state.currentMovieId));
  if (movie) $('#ticket-movie-title').textContent = movie.title;
  $('#ticket-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeTicketModal() {
  $('#ticket-modal').classList.remove('open');
  document.body.style.overflow = '';
}

$('#form-ticket').addEventListener('submit', function(e) {
  e.preventDefault();
  if (!state.user) {
    closeTicketModal();
    showPage('login');
    showToast('Для покупки билета необходимо войти', 'info');
    return;
  }
  const name = $('#ticket-name').value;
  const seats = $('#ticket-seats').value;
  closeTicketModal();
  this.reset();
  showToast(`Билет для «${$('#ticket-movie-title').textContent}» куплен! Место: ${seats}. Приятного просмотра, ${name}! 🎬`);
});

// Close modals on overlay click
$$('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      closeTrailerModal();
      closeTicketModal();
    }
  });
});

// ─── SEARCH ──────────────────────────────────────────────────────────────────

$('#search-input').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  if (!q) { renderMoviesGrid(); return; }
  const filtered = MOVIES.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genre.toLowerCase().includes(q) ||
    m.director.toLowerCase().includes(q)
  );
  const grid = $('#movies-grid');
  if (state.currentPage !== 'home') { showPage('home'); }
  grid.innerHTML = filtered.length
    ? filtered.map(renderMovieCard).join('')
    : '<p style="color:var(--gray-mid);grid-column:1/-1;text-align:center;padding:3rem">По вашему запросу ничего не найдено</p>';
});

// ─── PASSWORD TOGGLE ─────────────────────────────────────────────────────────

$$('.password-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    const isText = input.type === 'text';
    input.type = isText ? 'password' : 'text';
    btn.textContent = isText ? '👁️' : '🙈';
  });
});

// ─── NAV ─────────────────────────────────────────────────────────────────────

$$('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    showPage(link.dataset.page);
    $('#mobile-nav').classList.remove('open');
  });
});

$('#hamburger').addEventListener('click', () => {
  $('#mobile-nav').classList.toggle('open');
});

// ─── INIT ────────────────────────────────────────────────────────────────────

function init() {
  renderGenreFilters();
  renderMoviesGrid();
  updateAuthButtons();
}

document.addEventListener('DOMContentLoaded', init);
