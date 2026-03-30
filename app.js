function render() {
  if (typeof mediaData === 'undefined') return;
  for (const [category, items] of Object.entries(mediaData)) {
    const list = document.getElementById(`${category}-list`);
    if (!list) continue;
    list.innerHTML = items.map(item => `
      <li>
        <span class="title">
          ${item.title}
          ${item.country ? `<span class="country">${item.country}</span>` : ''}
        </span>
        <span class="meta">
          ${item.score ? `<span class="score">★ ${item.score}</span>` : ''}
          <span class="status ${item.status.toLowerCase()}">${item.status}</span>
        </span>
      </li>
    `).join('');
  }
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

render();
