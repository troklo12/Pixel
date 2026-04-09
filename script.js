/* ============================================================
   CinéVerde — script.js
   Full functionality: movies data, forms, search, modals
   ============================================================ */

// ── MOVIE DATA ──────────────────────────────────────────────
const MOVIES = [
  {
    id: 1,
    title: "Echoes of Eternity",
    genre: "Drama",
    year: 2024,
    duration: "2h 14m",
    rating: 8.7,
    director: "Sofia Alvarez",
    description: "A contemplative journey through memory and loss as a renowned composer revisits the landscapes of her childhood.",
    longDesc: "A contemplative journey through memory and loss, Echoes of Eternity follows Elena, a world-famous composer who returns to her childhood village after 30 years. As she revisits familiar places, buried memories resurface — love, regret, and reconciliation intertwine in this visually stunning meditation on time and belonging. Filmed across three continents with a score that garnered three awards at Cannes.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=900&fit=crop",
    bg: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&h=900&fit=crop",
    badge: "Award Winner",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Neon Requiem",
    genre: "Thriller",
    year: 2024,
    duration: "1h 58m",
    rating: 8.2,
    director: "James Chen",
    description: "A cyber detective unravels a conspiracy hidden in the digital underground of a rain-soaked megalopolis.",
    longDesc: "Set in 2087, Neon Requiem plunges viewers into a rain-soaked megalopolis where Detective Yara Osei investigates a string of identity thefts that go deeper than anyone suspected. As she descends into the city's digital underworld, she discovers a conspiracy that could rewrite history. A taut, atmospheric thriller with breathtaking production design.",
    image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&h=900&fit=crop",
    bg: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=1600&h=900&fit=crop",
    badge: "New",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "The Last Meridian",
    genre: "Sci-Fi",
    year: 2023,
    duration: "2h 31m",
    rating: 9.1,
    director: "Anya Petrov",
    description: "When the last interstellar colony loses contact with Earth, a crew of scientists must decide humanity's fate.",
    longDesc: "Humanity's final outpost, the colony ship Meridian, loses all contact with Earth while crossing the outer rim. With dwindling supplies and a growing internal conflict, the crew must make an impossible choice: push forward into the unknown or attempt a return journey with odds stacked against them. A sweeping, philosophical space epic that asks what it means to be human.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=900&fit=crop",
    bg: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&h=900&fit=crop",
    badge: "Top Rated",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "La Maison Verte",
    genre: "Romance",
    year: 2024,
    duration: "1h 46m",
    rating: 7.9,
    director: "Émile Rousseau",
    description: "Two strangers cross paths at a crumbling French estate and discover that its walls hold more secrets than they imagined.",
    longDesc: "At a centuries-old estate in Provence, two guests arrive for a historical restoration project and quickly discover an undeniable chemistry. But as they peel back the estate's past, long-buried family secrets emerge that could change everything. A lush, sun-drenched romance with exquisite cinematography and two unforgettable performances.",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&h=900&fit=crop",
    bg: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=1600&h=900&fit=crop",
    badge: "Fan Favorite",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    title: "Iron Meridian",
    genre: "Action",
    year: 2024,
    duration: "2h 05m",
    rating: 8.0,
    director: "Marcus Holt",
    description: "A retired soldier is pulled back into conflict when a rogue military unit threatens civilian life in three cities simultaneously.",
    longDesc: "Commander Reyes thought his war days were behind him — until three seemingly unconnected events expose a coordinated threat by a rogue paramilitary group. Racing across continents, he must rely on old instincts and new allies to neutralize the threat before it's too late. A propulsive, stunt-heavy thriller with a heart of steel.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=900&fit=crop",
    bg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&h=900&fit=crop",
    badge: "Blockbuster",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 6,
    title: "The Cartographer",
    genre: "Mystery",
    year: 2023,
    duration: "1h 52m",
    rating: 8.4,
    director: "Helena Park",
    description: "A cartographer discovers a map that shouldn't exist — and its creator was murdered to keep it secret.",
    longDesc: "When rare-maps archivist Clara Voss authenticates a 16th-century map that depicts a landmass no one has ever recorded, she quickly realizes that the map's previous owner was killed for it. Drawn into a web of historical conspiracy and modern danger, she must decode centuries of silence before history repeats itself. A richly layered mystery that rewards every detail.",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600&h=900&fit=crop",
    bg: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=1600&h=900&fit=crop",
    badge: "Critics' Choice",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 7,
    title: "Pale Blue Signal",
    genre: "Sci-Fi",
    year: 2024,
    duration: "2h 18m",
    rating: 8.6,
    director: "David Okonkwo",
    description: "Earth receives a signal from a probe launched 40 years ago — and what it contains will change everything.",
    longDesc: "A signal from Voyager IX — launched in 1987 — returns to Earth carrying something that was never meant to be found. As scientists decode its contents, world governments scramble to control the narrative. But one astrophysicist refuses to let the truth be buried. A thoughtful, awe-inspiring science fiction film that echoes the spirit of classic genre cinema.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=900&fit=crop",
    bg: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&h=900&fit=crop",
    badge: "Trending",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 8,
    title: "Still Waters",
    genre: "Drama",
    year: 2023,
    duration: "1h 39m",
    rating: 7.8,
    director: "Naomi Winters",
    description: "A marine biologist returns to her hometown after her father's death and finds more than she bargained for.",
    longDesc: "Dr. Lena Haas returns to her coastal hometown after her estranged father's death. What she discovers in the process of settling his estate overturns everything she thought she knew about her family and her own past. A quiet, devastating character study carried by one of the year's finest lead performances.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=900&fit=crop",
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop",
    badge: "Festival Pick",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// ── HELPERS ─────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }

function showNotification(icon, title, message) {
  const modal = document.getElementById('notifyModal');
  if (!modal) return;
  document.getElementById('modalIcon').textContent = icon;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalMessage').textContent = message;
  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

function showError(fieldId, errorId, message) {
  const field = $(fieldId);
  const err = $(errorId);
  if (field) field.classList.add('error');
  if (err) { err.textContent = message; err.classList.add('show'); }
}

function clearError(fieldId, errorId) {
  const field = $(fieldId);
  const err = $(errorId);
  if (field) field.classList.remove('error');
  if (err) { err.textContent = ''; err.classList.remove('show'); }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function setLoading(form, loading) {
  const btn = form.querySelector('[type="submit"]');
  if (!btn) return;
  btn.querySelector('.btn-text').classList.toggle('d-none', loading);
  btn.querySelector('.btn-loader').classList.toggle('d-none', !loading);
  btn.disabled = loading;
}

// ── TOGGLE PASSWORD VISIBILITY ───────────────────────────────
function togglePassword(inputId, btn) {
  const input = $(inputId);
  const icon = btn.querySelector('i');
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'bi bi-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'bi bi-eye';
  }
}

// ── PASSWORD STRENGTH ────────────────────────────────────────
function updateStrength() {
  const pw = ($('regPassword') || {}).value || '';
  const fill = $('strengthFill');
  const label = $('strengthLabel');
  if (!fill || !label) return;

  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const levels = [
    { pct: '0%',   color: 'transparent', text: '' },
    { pct: '25%',  color: '#e53e3e',     text: 'Weak' },
    { pct: '50%',  color: '#ed8936',     text: 'Fair' },
    { pct: '75%',  color: '#ecc94b',     text: 'Good' },
    { pct: '100%', color: '#1db954',     text: 'Strong' }
  ];
  const lvl = levels[score];
  fill.style.width = pw.length === 0 ? '0%' : lvl.pct;
  fill.style.background = lvl.color;
  label.textContent = pw.length === 0 ? '' : lvl.text;
  label.style.color = lvl.color;
}

// ── REGISTRATION FORM ────────────────────────────────────────
function initRegisterForm() {
  const form = $('registerForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    // Clear errors
    ['regUsername', 'regEmail', 'regPassword', 'regConfirm'].forEach(f => {
      clearError(f, f + 'Error');
    });
    clearError('agreeTerms', 'agreeError');

    const username = $('regUsername').value.trim();
    const email    = $('regEmail').value.trim();
    const password = $('regPassword').value;
    const confirm  = $('regConfirm').value;
    const agreed   = $('agreeTerms').checked;

    if (username.length < 3) {
      showError('regUsername', 'regUsernameError', 'Username must be at least 3 characters.');
      valid = false;
    }
    if (!isValidEmail(email)) {
      showError('regEmail', 'regEmailError', 'Please enter a valid email address.');
      valid = false;
    }
    if (password.length < 8) {
      showError('regPassword', 'regPasswordError', 'Password must be at least 8 characters.');
      valid = false;
    }
    if (password !== confirm) {
      showError('regConfirm', 'regConfirmError', 'Passwords do not match.');
      valid = false;
    }
    if (!agreed) {
      const err = $('agreeError');
      if (err) { err.textContent = 'Please accept the Terms to continue.'; err.classList.add('show'); }
      valid = false;
    }

    if (!valid) return;

    setLoading(form, true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(form, false);

    // Simulate success
    const btn = $('modalBtn');
    if (btn) btn.onclick = () => { window.location.href = 'login.html'; };
    showNotification('🎉', 'Welcome to CinéVerde!', `Account created for ${username}. Please sign in to start watching.`);
  });
}

// ── LOGIN FORM ───────────────────────────────────────────────
function initLoginForm() {
  const form = $('loginForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;

    clearError('loginEmail', 'loginEmailError');
    clearError('loginPassword', 'loginPasswordError');

    const email    = $('loginEmail').value.trim();
    const password = $('loginPassword').value;

    if (!isValidEmail(email)) {
      showError('loginEmail', 'loginEmailError', 'Please enter a valid email address.');
      valid = false;
    }
    if (password.length < 1) {
      showError('loginPassword', 'loginPasswordError', 'Please enter your password.');
      valid = false;
    }

    if (!valid) return;

    setLoading(form, true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(form, false);

    showNotification('✅', 'Signed In', 'Welcome back! Redirecting to your dashboard…');
    setTimeout(() => { window.location.href = 'index.html'; }, 2000);
  });
}

// ── RESET FORM ───────────────────────────────────────────────
function initResetForm() {
  const form = $('resetForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearError('resetEmail', 'resetEmailError');

    const email = $('resetEmail').value.trim();

    if (!isValidEmail(email)) {
      showError('resetEmail', 'resetEmailError', 'Please enter a valid email address.');
      return;
    }

    setLoading(form, true);
    await new Promise(r => setTimeout(r, 1300));
    setLoading(form, false);

    // Show step 2
    $('step1').classList.add('d-none');
    $('step2').classList.remove('d-none');
    $('confirmedEmail').textContent = email;
  });
}

function resendEmail() {
  showNotification('📧', 'Email Resent', 'A new reset link has been sent to your inbox.');
}

// ── SOCIAL LOGIN ─────────────────────────────────────────────
function socialLogin(provider) {
  showNotification('🔗', `${provider} Sign-In`, `${provider} authentication is not configured in this demo.`);
}

// ── ADD TO WATCHLIST ─────────────────────────────────────────
function addToWatchlist() {
  showNotification('🔖', 'Added to Watchlist', 'This film has been saved to your watchlist.');
}

// ── WATCH NOW ────────────────────────────────────────────────
function watchNow() {
  const modal = new bootstrap.Modal(document.getElementById('watchModal'));
  modal.show();
}

// ── RENDER MOVIE CARD ────────────────────────────────────────
function renderMovieCard(movie, cols = 'col-sm-6 col-md-4 col-lg-3') {
  return `
    <div class="${cols}">
      <div class="movie-card" onclick="goToMovie(${movie.id})">
        <div class="movie-thumb-wrap">
          <img class="movie-thumb" src="${movie.image}" alt="${movie.title}" loading="lazy" />
          <div class="movie-overlay">
            <div class="play-btn-circle"><i class="bi bi-play-fill"></i></div>
          </div>
          ${movie.badge ? `<span class="movie-badge">${movie.badge}</span>` : ''}
          <div class="movie-rating"><i class="bi bi-star-fill"></i> ${movie.rating}</div>
        </div>
        <div class="movie-info">
          <div class="movie-genre-tag">${movie.genre}</div>
          <div class="movie-name">${movie.title}</div>
          <div class="movie-desc">${movie.description}</div>
          <div class="movie-meta">
            <span>${movie.year}</span>
            <span class="movie-meta-dot"></span>
            <span>${movie.duration}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function goToMovie(id) {
  window.location.href = `movie.html?id=${id}`;
}

// ── HOME PAGE — FEATURED MOVIES ──────────────────────────────
function initHomeFeatured() {
  const grid = $('moviesGrid');
  if (!grid) return;
  const featured = MOVIES.slice(0, 8);
  grid.innerHTML = featured.map(m => renderMovieCard(m)).join('');
}

// ── HOME PAGE — RECOMMENDED ROW ──────────────────────────────
function initRecommended() {
  const row = $('recommendedRow');
  if (!row) return;
  const shuffled = [...MOVIES].sort(() => 0.5 - Math.random()).slice(0, 8);
  row.innerHTML = shuffled.map(m => `
    <div class="rec-card" onclick="goToMovie(${m.id})">
      <img src="${m.image}" alt="${m.title}" loading="lazy" />
      <div class="rec-card-label">
        <div class="rec-card-genre">${m.genre}</div>
        ${m.title}
      </div>
    </div>
  `).join('');
}

// ── HOME SEARCH ──────────────────────────────────────────────
function performSearch() {
  const q = ($('searchInput') || {}).value || '';
  if (q.trim()) {
    window.location.href = `movies.html?q=${encodeURIComponent(q.trim())}`;
  }
}

function filterByTag(genre) {
  window.location.href = `movies.html?genre=${encodeURIComponent(genre)}`;
}

// Allow Enter key in search
document.addEventListener('DOMContentLoaded', () => {
  const si = $('searchInput');
  if (si) si.addEventListener('keydown', e => { if (e.key === 'Enter') performSearch(); });
});

// ── MOVIES PAGE ──────────────────────────────────────────────
let currentGenre = 'All';
let currentSearch = '';

function initMoviesPage() {
  const grid = $('allMoviesGrid');
  if (!grid) return;

  // Read URL params
  const params = new URLSearchParams(window.location.search);
  const qParam = params.get('q') || '';
  const gParam = params.get('genre') || 'All';

  if (qParam) {
    $('searchInputMovies').value = qParam;
    currentSearch = qParam.toLowerCase();
  }
  if (gParam !== 'All') {
    currentGenre = gParam;
    document.querySelectorAll('.genre-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim() === gParam);
    });
  }

  renderAllMovies();
}

function filterMoviesPage() {
  currentSearch = ($('searchInputMovies') || {}).value.toLowerCase() || '';
  renderAllMovies();
}

function filterGenre(genre, btn) {
  currentGenre = genre;
  document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAllMovies();
}

function renderAllMovies() {
  const grid = $('allMoviesGrid');
  const noResults = $('noResults');
  if (!grid) return;

  const filtered = MOVIES.filter(m => {
    const matchGenre  = currentGenre === 'All' || m.genre === currentGenre;
    const matchSearch = !currentSearch ||
      m.title.toLowerCase().includes(currentSearch) ||
      m.description.toLowerCase().includes(currentSearch) ||
      m.genre.toLowerCase().includes(currentSearch) ||
      m.director.toLowerCase().includes(currentSearch);
    return matchGenre && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.classList.remove('d-none');
  } else {
    if (noResults) noResults.classList.add('d-none');
    grid.innerHTML = filtered.map(m => renderMovieCard(m, 'col-6 col-md-4 col-lg-3')).join('');
  }
}

// ── MOVIE DETAIL PAGE ────────────────────────────────────────
function initMovieDetailPage() {
  const heroEl = $('movieHero');
  if (!heroEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const movie = MOVIES.find(m => m.id === id) || MOVIES[0];

  // Set background
  heroEl.style.backgroundImage = `url('${movie.bg}')`;

  // Populate fields
  document.title = `${movie.title} — CinéVerde`;
  $('moviePoster').src = movie.image;
  $('moviePoster').alt = movie.title;
  $('movieTitle').textContent = movie.title;
  $('movieRating').textContent = movie.rating;
  $('movieYear').textContent = movie.year;
  $('movieDuration').textContent = movie.duration;
  $('movieDesc').textContent = movie.description;
  $('movieLongDesc').textContent = movie.longDesc;
  $('movieDirector').textContent = movie.director;
  $('movieGenreMeta').textContent = movie.genre;
  $('movieYearMeta').textContent = movie.year;
  $('movieRatingMeta').textContent = `${movie.rating} / 10`;

  // Genre badge
  $('movieGenreBadges').innerHTML = `<span class="genre-badge-pill">${movie.genre}</span>`;

  // Trailer
  const tf = $('trailerFrame');
  if (tf) tf.src = movie.trailerUrl;
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Page-specific init
  initHomeFeatured();
  initRecommended();
  initMoviesPage();
  initMovieDetailPage();
  initRegisterForm();
  initLoginForm();
  initResetForm();

  // Navbar scroll effect
  const navbar = document.querySelector('.cv-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.background = window.scrollY > 60
        ? 'rgba(10,10,10,0.98)'
        : 'rgba(10,10,10,0.85)';
    });
  }

  // Card hover sound-like micro-animation fix
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.willChange = 'transform');
    card.addEventListener('mouseleave', () => card.style.willChange = 'auto');
  });
});
