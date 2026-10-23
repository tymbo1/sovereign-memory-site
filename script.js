(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const demoTabs = document.querySelectorAll('.demo-tab');
  const demoPanels = document.querySelectorAll('.demo-panel');

  demoTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.demo;
      demoTabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      demoPanels.forEach((panel) => {
        const active = panel.id === `demo-${target}`;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
    });
  });

  const searchExamples = {
    archive: {
      query: 'Where did we settle the archive format?',
      meta: 'Example conversation · 14 Sep 2026',
      title: 'Portable archive format',
      text: '“Use the portable format so the source can outlast the tool.”',
      mode: 'Exact + semantic match'
    },
    ember: {
      query: 'Find the discussion about the ember image.',
      meta: 'Example conversation · 02 Aug 2026',
      title: 'The ember image',
      text: '“Keep the original exchange beside the interpretation; the image matters in context.”',
      mode: 'Semantic match · source linked'
    },
    exact: {
      query: 'Show the exact phrase about portable memory.',
      meta: 'Example conversation · 19 Jun 2026',
      title: 'Portable memory',
      text: '“A provider can change without taking the user’s history with it.”',
      mode: 'Exact phrase match'
    }
  };

  const queryButtons = document.querySelectorAll('.query-chip');
  queryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const example = searchExamples[button.dataset.query];
      if (!example) return;
      queryButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      document.querySelector('#demo-query').textContent = example.query;
      document.querySelector('#demo-result-meta').textContent = example.meta;
      document.querySelector('#demo-result-title').textContent = example.title;
      document.querySelector('#demo-result-text').textContent = example.text;
      document.querySelector('#demo-result-mode').textContent = example.mode;
    });
  });

  const modelButtons = document.querySelectorAll('.model-chip');
  const modelData = {
    local: {
      name: 'Local model',
      response: 'I can continue from the selected project context. I’ll keep the source references visible and flag anything the excerpts do not establish.',
      color: 'var(--aqua)'
    },
    external: {
      name: 'External model',
      response: 'I can use the approved excerpts shown here. The archive itself is not available to me, and I’ll distinguish source evidence from interpretation.',
      color: 'var(--copper)'
    }
  };

  modelButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const model = modelData[button.dataset.model];
      if (!model) return;
      modelButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      document.querySelector('#model-name').textContent = model.name;
      document.querySelector('#model-response').textContent = model.response;
      document.querySelector('#model-dot').style.background = model.color;
    });
  });

  const destinationButtons = document.querySelectorAll('.destination-chip');
  const destinationData = {
    local: {
      status: 'DEVICE-LOCAL',
      name: 'Ollama · 127.0.0.1',
      detail: 'Prepared on this machine · no network transmission',
      approval: 'Still required',
      note: 'Local processing is available, but the user remains the authority.',
      color: 'var(--aqua)'
    },
    external: {
      status: 'EXTERNAL',
      name: 'Example provider · destination shown',
      detail: 'Only the frozen approved payload is eligible to leave',
      approval: 'Explicit consent required',
      note: 'The destination is visible, the payload is frozen and authorization is checked again before dispatch.',
      color: 'var(--copper)'
    }
  };

  destinationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const destination = destinationData[button.dataset.destination];
      if (!destination) return;
      destinationButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      document.querySelector('#disclosure-status').textContent = destination.status;
      document.querySelector('#destination-name').textContent = destination.name;
      document.querySelector('#destination-detail').textContent = destination.detail;
      document.querySelector('#approval-state').textContent = destination.approval;
      document.querySelector('#disclosure-note').textContent = destination.note;
      document.querySelector('#destination-dot').style.background = destination.color;
    });
  });
})();
