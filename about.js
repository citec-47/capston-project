const skin = document.querySelector('body');
const statusbar = document.querySelector('.onehead .status');
const phone = document.querySelector('.onehead .phone-nav');
const closeBtn = document.querySelector('.onehead .exit');
const mobiLinks = document.querySelector('.onehead .ul');

statusbar.addEventListener('click', () => {
  phone.style.display = 'flex';
  skin.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  phone.style.display = 'none';
  skin.style.overflow = 'visible';
});

mobiLinks.addEventListener('click', () => {
  phone.style.display = 'none';
  skin.style.overflow = 'visible';
});
