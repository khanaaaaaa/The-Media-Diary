function render() {
  for (const [category, items] of Object.entries(mediaData)) {
    const list = document.getElementById(`${category}-list`);
    if (!list) return;
    list.innerHTML = items.map(item => `
      <li>
        <span class="title">${item.title}</span>
        <span class="status ${item.status}">${item.status}</span>
      </li>
    `).join('');
  }
}

render();
