function render() {
  for (const [category, items] of Object.entries(mediaData)) {
    const list = document.getElementById(`${category}-list`);
    list.innerHTML = items.map(item => `
      <li>
        ${item.title}
        <span class="status ${item.status}">${item.status}</span>
      </li>
    `).join('');
  }
}

render();