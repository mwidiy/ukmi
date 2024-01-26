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

    // show navbar tablet
    const menu = document.querySelector(".nav_menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const menuClose = document.querySelector("#close-menu-btn");
    
    menuBtn.addEventListener('click', () => {
        menu.style.display = "flex";
        menuClose.style.display = "inline-block";
        menuBtn.style.display = "none";
    })

// close nav menu 

const closeNav = () => {
    menu.style.display = "none";
    menuClose.style.display = "none";
    menuBtn.style.display = "inline-block";
};

menuClose.addEventListener('click', closeNav )

const d = console.log.bind(console)
 

// deskripsi
const deps = document.querySelectorAll(".achievement_card")
deps.forEach(dep => {
    dep.addEventListener('click',()=> {
        console.log("oke")
        dep.classList.toggle('buka');
    })
})

