/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promo = document.querySelector('main'),
          promoAdvImg = promo.querySelectorAll('.promo__adv img'),
          promoBg = promo.querySelector('.promo__bg'),
          promoGenre = promoBg.querySelector('.promo__genre'),
          promoInteractiveList = promo.querySelector('.promo__interactive-list'),
          add = promo.querySelector('.add'),
          addingInput = add.querySelector('.adding__input'),
          inputCheckbox = add.querySelector('[type="checkbox"]'),
          buttonSubmit = add.querySelector('button');   
        
    promoAdvImg.forEach(item => {
        item.remove()
    })
    
    promoGenre.textContent = 'ДРАМА';
    promoBg.style.backgroundImage = 'url("img/bg.jpg")'
    
    function removeFilms(){
        const deleteFilm = promoInteractiveList.querySelectorAll('.delete')
    
        deleteFilm.forEach(it => {
            let films = it.parentElement.innerText.slice(3).trim()   
            it.addEventListener('click', () => {              
                movieDB.movies.map((film, idx) => {
                    if(film.toUpperCase() === films) {
                        movieDB.movies.splice(idx, 1)
                    }
                })
                it.parentElement.remove()
                addFilms()               
            })
        })
        
    }
    
    addFilms()
    
    function addFilms(){
        movieDB.movies.sort()
    
        promoInteractiveList.innerHTML = ''
    
        movieDB.movies.forEach((item, i) => {
            promoInteractiveList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${item} 
                    <div class="delete"></div>
                </li>
            `;
        })
        removeFilms()
    }
    
    
    buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputCheckbox.checked){
            console.log('Добавляем любимый фильм')
        }
        let films = addingInput.value.toUpperCase()  
        movieDB.movies.push(films)
        addFilms()
    })

})

const ul = document.querySelector('ul')


ul.addEventListener('click', (event) => {
    
    if (event.target && event.target.classList.contains('promo__menu-item')){
        for (let child of ul.children){
            if (child.children[0].classList.contains('promo__menu-item_active')) {
                child.children[0].classList.remove('promo__menu-item_active')
            }
        }
        event.target.classList.add('promo__menu-item_active')
    }
})

// 'use strict';

// document.addEventListener('DOMContentLoaded', () => {

//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };

//     const adv = document.querySelectorAll('.promo__adv img'),
//         poster = document.querySelector('.promo__bg'),
//         genre = poster.querySelector('.promo__genre'),
//         movieList = document.querySelector('.promo__interactive-list'),
//         addForm = document.querySelector('form.add'),
//         addInput = addForm.querySelector('.adding__input'),
//         checkbox = addForm.querySelector('[type="checkbox"]');

//     addForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         let newFilm = addInput.value;
//         const favorite = checkbox.checked;

//         if (newFilm) {

//             if (newFilm.length > 21) {
//                 newFilm = `${newFilm.substring(0, 22)}...`;
//             }

//             if (favorite) {
//                 console.log("Добавляем любимый фильм");
//             }

//             movieDB.movies.push(newFilm);
//             sortArr(movieDB.movies);
    
//             createMovieList(movieDB.movies, movieList);
//         }

//         event.target.reset();

//     });

//     const deleteAdv = (arr) => {
//         arr.forEach(item => {
//             item.remove();
//         });
//     };

//     const makeChanges = () => {
//         genre.textContent = 'драма';

//         poster.style.backgroundImage = 'url("img/bg.jpg")';
//     };

//     const sortArr = (arr) => {
//         arr.sort();
//     };

//     function createMovieList(films, parent) {
//         parent.innerHTML = "";
//         sortArr(films);
    
//         films.forEach((film, i) => {
//             parent.innerHTML += `
//                 <li class="promo__interactive-item">${i + 1} ${film}
//                     <div class="delete"></div>
//                 </li>
//             `;
//         });

//         document.querySelectorAll('.delete').forEach((btn, i) => {
//             btn.addEventListener('click', () => {
//                 btn.parentElement.remove();
//                 movieDB.movies.splice(i, 1);

//                 createMovieList(films, parent);
//             });
//         });
//     }

//     deleteAdv(adv);
//     makeChanges();
//     createMovieList(movieDB.movies, movieList);

// });