(() => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const progressBar = document.getElementById('progressBar');
  const year = document.getElementById('year');
  const dialog = document.getElementById('projectDialog');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogType = document.getElementById('dialogType');
  const dialogDescription = document.getElementById('dialogDescription');
  const dialogClose = document.getElementById('dialogClose');

  year.textContent = new Date().getFullYear();

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    mainNav.classList.toggle('open', !expanded);
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    mainNav.classList.remove('open');
  }));

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (max > 0 ? window.scrollY / max * 100 : 0) + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
      });
    });
  });

  const projects = {
    keyboard: {
      title: 'iPlus Keyboard',
      type: 'ANDROID APP · IN PROGRESS',
      description: 'A customizable multilingual keyboard experience with Bangla and English typing, voice input, themes and practical typing tools. The project is being developed iteratively; feature availability and release details will be updated as the build is verified.'
    },
    paperplan: {
      title: 'Paper Plan',
      type: 'PDF TOOLKIT · IN PROGRESS',
      description: 'A PDF toolkit and visual document workspace concept combining practical PDF utilities with a more expressive document-design experience. The goal is to make everyday PDF tasks easier without relying on demo-only controls.'
    },
    storage: {
      title: 'Personal Cloud Storage',
      type: 'STORAGE APP · CONCEPT',
      description: 'An open-source file organizer concept exploring folders, filename search, backup and sync workflows, storage visibility and a privacy-minded vault experience. The product name and implementation details are still being refined.'
    }
  };
  document.querySelectorAll('[data-open]').forEach(button => {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.open];
      if (!project) return;
      dialogTitle.textContent = project.title;
      dialogType.textContent = project.type;
      dialogDescription.textContent = project.description;
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
  });
  dialogClose.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dialog.open) dialog.close();
  });

  // Replace this placeholder with the public contact email before launch.
  const emailLink = document.getElementById('emailLink');
  emailLink.addEventListener('click', event => {
    if (emailLink.getAttribute('href') === 'mailto:hello@example.com') {
      event.preventDefault();
      dialogTitle.textContent = 'Contact email not set yet';
      dialogType.textContent = 'ONE SMALL SETUP STEP';
      dialogDescription.textContent = 'Replace hello@example.com in index.html with the email address you want to publish. The GitHub profile link is already connected.';
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    }
  });
})();