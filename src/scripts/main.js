document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.clientHeight;

  window.addEventListener('scroll', function() {
    const currentPosition = window.scrollY;

    if (currentPosition < heroHeight) {
      hideHeaderElements();
    } else {
      showHeaderElements();
    }
  })
  
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

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', toggleAnswer);
  }
});

function hideHeaderElements() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function showHeaderElements() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}

function toggleAnswer(element) {
  const classClicked = 'faq__questions__item--is-open';
  const parentElement = element.target.parentNode;

  parentElement.classList.toggle(classClicked);
}

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