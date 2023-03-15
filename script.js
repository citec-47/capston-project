const myMenu = document.querySelector('.status');
const myShow = document.querySelector('.SectAb');
const myClose = document.querySelector('.exit');

function myMobile() {
  if (myShow.style.display === 'none') {
    myShow.style.display = 'block';
  } else {
    myShow.style.display = 'none';
  }
}
myMenu.addEventListener('click', myMobile);

function myMobileClose() {
  if (myShow.style.display === 'block') {
    myShow.style.display = 'none';
  }
}
myClose.addEventListener('click', myMobileClose);

const Main = document.getElementById('link');

const lecturazz = [
  {
    lectur: 'Images/lecturers/Dr James.png',
    name: 'Dr James',
    speakerTitle: 'Senior Software Engineer ',
    speakerPara: 'Dr James is a former Senior Software Engineer and evangelist for Mozilla.',
  },
  {
    lectur: 'Images/lecturers/proffessor Moghan.png',
    name: 'proffessor Moghan',
    speakerTitle: 'JavaScript developer',
    speakerPara: 'proffessor Moghan is an open-source enthusiast and seasoned JavaScript developer.',
  },
  {
    lectur: 'Images/lecturers/Dr Amos.png',
    name: 'Dr Amos',
    speakerTitle: 'JavaScript developer',
    speakerPara: 'Dr Amos is an experienced JavaScript Developer with a passion for all kinds of experiments, focusing on HTML5 and NodeJS.',
  },
  {
    lectur: 'Images/lecturers/Dr Brice.png',
    name: 'Dr Brice',
    speakerTitle: 'JavaScript developer',
    speakerPara: 'Dr Brice is the co-founder and a principal engineer at InVision App, Inc, a company that is at the forefront of the design and UX revolution.',
  },
  {
    lectur: 'Images/lecturers/Professoe Martin.png',
    name: 'Professor Martin',
    speakerTitle: 'JavaScript developer',
    speakerPara: 'Professor Martin is a JavaScript developer who has worked on React and serverless JavaScript at Two Sigma, Netlify and AWS.',
  },
  {
    lectur: 'Images/lecturers/Professor Rosbel.png',
    name: 'Professor Rosbel',
    speakerTitle: 'avaScript/TypeScript developer',
    speakerPara: 'Professor Rosbel is a Senior Software Engineer specializing in modern JavaScript/TypeScript and architectural designer.',
  },
];

const SectAq = document.createElement('section');
SectAq.classList = 'LECTURER';
Main.appendChild(SectAq);

const textQ = document.createElement('div');
textQ.classList = 'lecturers';
SectAq.appendChild(textQ);

const TextQ = document.createElement('h1');
TextQ.classList = 'lect';
TextQ.innerText = 'WORLD CLASS LECTURERS';
textQ.appendChild(TextQ);

const borderLine = document.createElement('div');
borderLine.classList = 'hr';
textQ.appendChild(borderLine);

const lecturas = document.createElement('div');
lecturas.classList = 'lects';
SectAq.appendChild(lecturas);

for (let i = 0; i < lecturazz.length; i += 1) {
  const Tab = document.createElement('div');
  Tab.classList = 'lectse';
  lecturas.appendChild(Tab);

  const lectImages = document.createElement('div');
  lectImages.classList = 'mimages';
  Tab.appendChild(lectImages);

  const lectChess = document.createElement('img');
  lectChess.src = 'Images/lecturers/my_absolute.jpg';
  lectChess.classList = 'chesst';
  lectImages.appendChild(lectChess);

  const sonImage = document.createElement('img');
  sonImage.src = `${lecturazz[i].lectur}`;
  sonImage.classList = 'son_img';
  lectImages.appendChild(sonImage);

  const mylects = document.createElement('div');
  mylects.classList = 'lectmore';
  Tab.appendChild(mylects);

  const mName = document.createElement('h1');
  mName.classList = 'mName_name';
  mName.innerText = `${lecturazz[i].name}`;
  mylects.appendChild(mName);

  const Title = document.createElement('h2');
  Title.classList = 'lecturer_title';
  Title.innerText = `${lecturazz[i].speakerTitle}`;
  mName.appendChild(Title);

  const rBorder = document.createElement('div');
  rBorder.classList = 'div_border';
  mName.appendChild(rBorder);

  const mylect9 = document.createElement('p');
  mylect9.classList = 'lectqz';
  mylect9.innerText = `${lecturazz[i].speakerPara}`;
  mName.appendChild(mylect9);
}
