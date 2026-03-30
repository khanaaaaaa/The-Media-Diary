function renderStats() {
  const stats = {
    anime: mediaData.anime.length,
    movies: mediaData.movies.length,
    dramas: mediaData.kdramas.length + mediaData.cdmovies.length,
    manga: mediaData.manga.length,
    books: mediaData.books.length,
  };

  const total = Object.values(stats).reduce((a, b) => a + b, 0);

  const episodes = [...mediaData.anime, ...mediaData.movies, ...mediaData.kdramas].reduce((a, b) => a + (b.episodes || 1), 0);
  const hours = Math.round(episodes * 24 / 60);

  document.getElementById('stats-block').innerHTML = `
    <div class="stat-row">♡ <span>${stats.anime} anime</span></div>
    <div class="stat-row">♡ <span>${stats.movies} anime movies</span></div>
    <div class="stat-row">♡ <span>${stats.dramas} dramas</span></div>
    <div class="stat-row">♡ <span>${stats.manga} manga</span></div>
    <div class="stat-row">♡ <span>${stats.books} books</span></div>
    <div class="stat-total">${total} total · ~${hours}h watched</div>
  `;
}

function renderPinned() {
  document.getElementById('pinned-block').innerHTML = `
    <div class="pinned-note">
      <div class="pinned-label">.✦ ݁˖currently watching</div>
      <div class="pinned-title">${currentlyWatching.title}</div>
      <div class="pinned-ep">ep ${currentlyWatching.episode} · ${currentlyWatching.category}</div>
    </div>
  `;
}

renderStats();
renderPinned();
