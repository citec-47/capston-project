const container = document.querySelector('.cccc .container');
const skin = document.querySelector('body');
const statusbar = document.querySelector('.onehead .status');
const phone = document.querySelector('.onehead .phone-nav');
const exitt = document.querySelector('.onehead .exit');
const desku = document.querySelector('.onehead .ul');
const mored = document.querySelector('.cccc .boxes');

const speakers = [
  {
    index: 0,
    image: '../Images/lects/benard.jpg',
    name: 'Brendan Eich',
    headline: 'President of Young Pirates of Europe',
    p: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    index: 1,
    image: '../Images/lects/rashel.jpg',
    name: 'Radia Perlman',
    headline: 'Executive Director of the Wikimedia Foundation',
    p: 'Lila Tretiov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    index: 2,
    image: '../Images/lects/Donarld.jpg',
    name: 'Dennis Ritchie',
    headline: 'Director of Art Centre Nabl and a board member of CC Korea',
    p: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology. humanites, and the arts.',
  },
  {
    index: 3,
    image: '../Images/lects/ken.jpg',
    name: 'ken Thompson',
    headline: 'King of The South',
    p: "Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital com mons. In 2012, he was inducted into the inaugural ass of the Internet Society's (ISOC) Internet Hall of Fame.",
  },
  {
    index: 4,
    image: '../Images/lects/Larry.jpg',
    name: 'Larry Page',
    headline: 'Founder & CEO of Google',
    p: 'Lawrence Edward Page is an American business magnate, computer scientist and internet entrepreneur. He is best known for co-founding Google with Sergey Brin.',
  },
  {
    index: 5,
    image: '../Images/lects/mam.jpg',
    name: 'Margaret Hamilton',
    headline: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    p: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

speakers.forEach((speaker) => {
  const innerContainer = document.createElement('div');
  innerContainer.classList.add('sectccc');

  const imgContainer = document.createElement('div');
  const chessBox = document.createElement('img');
  chessBox.classList.add('chess-box');
  chessBox.src = '../Images/lects/chess.jpg';
  chessBox.alt = 'image';
  const img = document.createElement('img');
  img.classList.add('image');
  img.src = speaker.image;
  img.alt = 'image';
  imgContainer.appendChild(chessBox);
  imgContainer.appendChild(img);

  const com = document.createElement('div');
  com.classList.add('content');
  const nom = document.createElement('h3');
  nom.classList.add('nom');
  nom.textContent = speaker.nom;
  const headz = document.createElement('div');
  headz.classList.add('headline');
  headz.textContent = speaker.headz;
  const line = document.createElement('div');
  line.classList.add('linet');
  const put = document.createElement('p');
  put.classList.add('p');
  put.textContent = speaker.p;
  com.appendChild(nom);
  com.appendChild(headz);
  com.appendChild(line);
  com.appendChild(put);

  innerContainer.appendChild(imgContainer);
  innerContainer.appendChild(com);
  container.appendChild(innerContainer);
});

// Mobile Menu Popup
statusbar.addEventListener('click', () => {
  phone.style.display = 'flex';
  skin.style.overflow = 'hidden';
});

exitt.addEventListener('click', () => {
  phone.style.display = 'none';
  skin.style.overflow = 'visible';
});

desku.addEventListener('click', () => {
  phone.style.display = 'none';
  skin.style.overflow = 'visible';
});

// see more button manipulation
mored.addEventListener('click', () => {
  // set the css to be manipulated
  const ToDisplay = document.querySelectorAll(
    '.section-3 .inner-container:nth-child(n + 3)',
  );

  if (mored.innerHTML === 'MORE ▾') {
    mored.innerHTML = 'LESS ▴';
    ToDisplay.forEach((child) => {
      child.style.display = 'flex';
    });
  } else if (mored.innerHTML === 'LESS ▴') {
    mored.innerHTML = 'MORE ▾';
    ToDisplay.forEach((child) => {
      child.style.display = 'none';
    });
  }
});
