document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(button) {
      const targetTab = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);

      hideTabs();
      tab.classList.add('shows__list--is-active');

      removeClassActiveButton();
      button.target.classList.add('shows__tabs__button--is-active');
    })
  }
});

function removeClassActiveButton() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('shows__tabs__button--is-active');
  }
}

function hideTabs() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}