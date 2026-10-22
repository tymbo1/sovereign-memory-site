(() => {
  const tabs = document.querySelectorAll('.consent-tab');
  const panels = document.querySelectorAll('.consent-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const destination = tab.dataset.destination;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      panels.forEach((panel) => {
        const active = panel.id === `${destination}-panel`;
        panel.hidden = !active;
        panel.classList.toggle('is-active', active);
      });
    });
  });
})();
