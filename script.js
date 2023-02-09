let images = ["./images/slide_1.jpg", "./images/slide_2.jpg", "./images/slide_3.jpg"];

function initSlider() { 
    if (!images || !images.length) {
        return;
    }

    let sliderImages = document.querySelector(".slider__images"),
        sliderArrows = document.querySelectorAll(".arrow"),
        sliderDots = document.querySelectorAll(".dot");
        sliderTitles = document.querySelectorAll('.completed-navigation__item');

    initImages();   
    initArrows();
    initDots();
    initTitles();    

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<img src="${image}" class="image n${index} ${index === 0? "active":""}" data-index="${index}"></img>`;
            sliderImages.innerHTML += imageDiv;          
        });
    }

    function initArrows() {
        sliderArrows.forEach((arrow) => {
            arrow.addEventListener('click', function() {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('arrow-left')) {
                    nextNumber = curNumber === 0 ? images.length - 1: curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0: curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        }); 
    }

    function initDots() {
        sliderDots[0].classList.add('active');
        
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                moveSlider(index);
            });
        });
    }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        
        sliderDots.forEach(dot => {
            if (dot.classList.contains('active')) dot.classList.remove('active');
        });
        sliderDots[num].classList.add('active');
        
        sliderTitles.forEach(title => {
            if (title.classList.contains('active')) title.classList.remove('active');
        })
        sliderTitles[num].classList.add('active');
    }

    function initTitles() {
        sliderTitles[0].classList.add('active');

        sliderTitles.forEach((title, index) => {
            title.addEventListener('click', function() {
                moveSlider(index);
            })
        })
    }
}

document.addEventListener("DOMContentLoaded", initSlider);