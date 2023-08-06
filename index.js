// scroll nav bar

window.addEventListener('scroll',() =>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
} )

// faq open

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
  faq.addEventListener('click', () =>{
      faq.classList.toggle('open');

      // close icon

      const icon = faq.querySelector('.faq__icon i');
      if(icon.className === 'fa-solid fa-plus'){
          icon.className = "fa-solid fa-minus";
      } else {
          icon.className = "fa-solid fa-plus";
      }
  })
})

// show/hide nav menu

// nav

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


// navend
// nav bar end

// slider
document.querySelectorAll('.image-slider img').forEach(images => {
  images.onclick = () =>{
      var src = images.getAttribute('src');
      document.querySelector('.main-home-image').src = src;
  };
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, 
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 0,
      },
      768: {
        slidesPerView: 2,
      },
    },
    loop : true,
    grabCursor: true,
});

var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// slider end


