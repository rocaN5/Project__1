const container = document.querySelector(".partners__row");
const containerSecond = document.querySelector(".partners__row__2");
const cards = document.querySelector(".partners__row__inner");
const cardsSecond = document.querySelector(".partners__row__inner__2");

/* keep track of user's mouse down and up */
let isPressedDown = false;
let isPressedDownSecond = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;
let cursorXSpaceSecond;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

containerSecond.addEventListener("mousedown", (e) => {
  isPressedDownSecond = true;
  cursorXSpaceSecond = e.offsetX - cardsSecond.offsetLeft;
  containerSecond.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

containerSecond.addEventListener("mouseup", () => {
  containerSecond.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
  isPressedDownSecond = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

containerSecond.addEventListener("mousemove", (e) => {
  if (!isPressedDownSecond) return;
  e.preventDefault();
  cardsSecond.style.left = `${e.offsetX - cursorXSpaceSecond}px`;
  boundCardsSecond();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = `unset`;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}

function boundCardsSecond() {
  const container_rect_second= containerSecond.getBoundingClientRect();
  const cards_rect_second = cardsSecond.getBoundingClientRect();

  if (parseInt(cardsSecond.style.left) > 0) {
    cardsSecond.style.left = `unset`;
  } else if (cards_rect_second.right < container_rect_second.right) {
    cardsSecond.style.left = `-${cards_rect_second.width - container_rect_second.width}px`;
  }
}

// PHONE MENU ACTIVATION

const toggleButton = document.getElementsByClassName('phone__menu__button')[0],
      exitButton = document.getElementsByClassName('header__exit__button')[0],
      phoneMenu = document.getElementsByClassName('header')[0],
      blackPopup = document.getElementsByClassName('black__popup')[0],
      body__class = document.getElementsByClassName('body__class')[0]
      
function phoneMenuToggle(){
  phoneMenu.classList.toggle('active');
  blackPopup.classList.toggle('black__popup__active');
  body__class.classList.toggle('black__popup');
};
      
toggleButton.addEventListener('click', () =>{
  phoneMenuToggle();
})

exitButton.addEventListener('click', () =>{
  phoneMenuToggle();
})

blackPopup.addEventListener('click', () =>{
  phoneMenuToggle();
})

window.addEventListener('resize', ()=> {
  menuResizeReset();
  const slIn = document.getElementsByClassName('slider__inner')[0].clientWidth,
        prSlIn = document.getElementsByClassName('project__slider__slide')[0];

  if (window.innerWidth <= 520) {
    prSlIn.style.width = `${slIn}px`;
    } 
  else {
    prSlIn.style.width = "50px";
  }
}, true);

function menuResizeReset(){
  cards.style.left = `unset`;
  cardsSecond.style.left = `unset`;
  if (screen.width >= 768) {
    phoneMenu.classList.remove('active');
    body__class.classList.remove('black__popup');
    blackPopup.classList.remove('black__popup__active');
  } 
}

// function sliderResize(){
//   const slIn = document.getElementsByClassName('slider__inner')[0],
//         prSlIn = document.getElementsByClassName('project__slider__slide')[0];

//   if (window.innerWidth < 520) {
//     prSlIn.style.width = `${slIn}px`;
//   } else  {
//     prSlIn.style.width = "50px";
//   }
// }

window.addEventListener("scroll", function(){
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop >= 150  && window.innerWidth <= 992){
    toggleButton.classList.add('phone__menu__button__scrolled');
  }
  else if (scrollTop >= 60 && window.innerWidth <= 400){
    toggleButton.classList.add('phone__menu__button__scrolled');
  }
  else if (scrollTop >= 150 && window.innerWidth <= 768){
    toggleButton.classList.add('phone__menu__button__scrolled');
  }
  else{
    toggleButton.classList.remove('phone__menu__button__scrolled');
  }

}, false)

// PHONE MENU ACTIVATION • END

$('.slider__inner').slick({
  dots: false,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 3000,
  mobileFirst: true,
  });