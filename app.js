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

function highlightNav() {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
}

render();
highlightNav();
