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

function switchTab(target) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link.cat').forEach(l => l.classList.remove('active'));

  const btn = document.querySelector(`.tab-btn[data-target="${target}"]`);
  const section = document.getElementById(target);
  const link = document.querySelector(`.nav-link.cat[href="#${target}"]`);

  if (btn) btn.classList.add('active');
  if (section) section.classList.add('active');
  if (link) link.classList.add('active');
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.target));
});

document.querySelectorAll('.nav-link.cat').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href').replace('#', '');
    switchTab(target);
  });
});

render();
