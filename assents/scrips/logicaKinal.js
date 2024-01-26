const slides = [...document.querySelectorAll(".slide")];
const prev = document.querySelector("#prev")
const right = document.querySelector("#next")

slides.forEach(slide => {
    slide.style.transform = `translateX(${slide.dataset.index * 100}%)`
})

function goRight() {
    console.log(slides.length)
    const isLastOne = slides.every(slide => slide.dataset.index <= 0);
    if (isLastOne) {
        slides.forEach(slide => {
            slide.dataset.index = `${Number(slide.dataset.index) + slides.length - 1}`;
            console.log(slide.dataset.index)
            slide.style.transform = `translateX(${slide.dataset.index * 100}%)`
        })
        return;
    }
    slides.forEach(slide => {
        slide.dataset.index = `${Number(slide.dataset.index) - 1}`;
        console.log(slide.dataset.index)
        slide.style.transform = `translateX(${slide.dataset.index * 100}%)`
        console.log(slide.style.transform)
    });
}

function goLeft() {
    console.log(slides.length)
    const isFirstOne = slides.every(slide => slide.dataset.index >= 0);
    if (isFirstOne) {
        slides.forEach(slide => {
            slide.dataset.index = `${Number(slide.dataset.index) - (slides.length - 1)}`;
            console.log(slide.dataset.index)
            slide.style.transform = `translateX(${slide.dataset.index * 100}%)`
        })
        return;
    }
    slides.forEach(slide => {
        slide.dataset.index = `${Number(slide.dataset.index) + 1}`;
        console.log(slide.dataset.index)
        slide.style.transform = `translateX(${slide.dataset.index * 100}%)`
        console.log(slide.style.transform)
    });
}


right.addEventListener('click', (e) => {
    console.log('right')
    goRight('right');
})

prev.addEventListener('click', () => {
    console.log('left');
    goLeft('left')
})

