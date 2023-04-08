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

$.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=search+terms",
    type: "GET",
    success: function(response) {
        var book = response.items
        book.forEach((item, index) => {
            var data = item.volumeInfo
            console.log(data)
            d()
            document.getElementById("ilb_content").innerHTML += `
            <div class="card">
                <div class="book-cover" style="background-image: url('${data.imageLinks.thumbnail}');"></div>
                <div class="book-info">
                  <h2 class="book-title">${data.title}</h2>
                  <p class="book-desc">${data.authors}</p>
                  <div class="book-buttons">
                    <a href="${data.previewLink}" target="_blank">
                        <button class="download-button">Preview</button>
                    </a>
                  </div>
                </div>
              </div>`
        })

    },
    error: function(xhr, status, error) {
      console.log("Error: " + error);
    }
  });
