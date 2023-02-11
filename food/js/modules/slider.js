function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // Slider version 1 (easy)


    const slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          slider = document.querySelector(container),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1
    let offset = 0

    // showSlides(slideIndex)

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`
    // } else {
    //     total.textContent = `${slides.length}`
    // }

    // function showSlides(index) {
    //     if (index > slides.length) {
    //         slideIndex = 1
    //     }

    //     if (index < 1) {
    //         slideIndex = slides.length
    //     }

    //     slides.forEach(item => item.style.display = 'none')

    //     slides[slideIndex - 1].style.display = 'block'

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`
    //     } else {
    //         current.textContent = `${slideIndex}`
    //     }
    // }
    
    // function plusSlides(index) {
    //     showSlides(slideIndex += index)
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1)
    // })

    // next.addEventListener('click', () => {
    //     plusSlides(1)
    // })

// Slider version 2 (hard)

    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s all'

    slidesWrapper.style.overflow = 'hidden'

    slider.style.position = 'relative'

    const dots = document.createElement('ol'),
          indicators = [];
    dots.classList.add('carousel-indicators')
    slider.append(dots)

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1)
        dot.classList.add('dot')
        if (i == 0) {
            dot.style.opacity = 1
        }
        dots.append(dot)
        indicators.push(dot)
    }

    slides.forEach(slide => {
        slide.style.width = width
    })

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
    } else {
        total.textContent = slides.length
        current.textContent = slideIndex
    }


    function addOpacityToDots() {
        indicators.forEach(item => item.style.opacity = '.5')
        indicators[slideIndex - 1].style.opacity = 1
    }

    function addNullToCurrent() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
    }

    function transformSlidesField() {
        slidesField.style.transform = `translateX(-${offset}px)`
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '')
    }

    next.addEventListener('click', () => {
        if (offset === deleteNotDigits(width)  * (slides.length - 1)) {
            offset = 0
        } else {
            offset += deleteNotDigits(width)
        }

        transformSlidesField()

        if (slideIndex == slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        addNullToCurrent()
        addOpacityToDots()
    })

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1) 
        } else {
            offset -= deleteNotDigits(width)
        }

        transformSlidesField()

        if (slideIndex == 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }

        addNullToCurrent()
        addOpacityToDots()
    })

    indicators.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')

            slideIndex = slideTo
            offset = deleteNotDigits(width) * (slideTo - 1)

            transformSlidesField()

            addNullToCurrent()
            addOpacityToDots()
        })
    })
}

export default slider