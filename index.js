// change navbar style in scroll
window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

// faqs hide and show

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus"
        } else {
            icon.className = 'fa-solid fa-plus'
        };
        
    })
});


//swiping object
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // when window widht is >= 600px
    breakpoins: {
        600: {
            slidesPerView: 2
        }
    }
  }); 