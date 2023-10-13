/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
let promo__interactive_list = document.querySelector(".promo__interactive-list")
let promo__adv_img = document.querySelectorAll('.promo__adv img')
let promo_gender = document.querySelector('.promo__genre')
let promo__bg = document.querySelector('.promo__bg')
let promo__title = document.querySelector('.promo__title')
let promo__descr = document.querySelector('.promo__descr')
let promo__ratings = document.querySelector('.promo__ratings span')







promo_gender.innerHTML = "Драма"

for (let i of promo__adv_img) {
    i.remove()
}

/* const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}; */

reload(movies)

function reload(arr) {

    promo__interactive_list.innerHTML = ""



    for (let elem of arr) {
        let promo = document.createElement('li')
        let deletee = document.createElement('div')

        promo.classList.add('promo__interactive-item')
        promo.innerHTML = elem.Title

        deletee.classList.add('delete')
        promo.append(deletee)
        promo__interactive_list.append(promo)

      


        promo.onclick = () =>{
            promo__bg.style.backgroundImage = "url(" + elem.Poster + ")";
            promo_gender.innerHTML = elem.Genre
            promo__title.innerHTML = elem.Title
            promo__descr.innerHTML = elem.Plot
            promo__ratings.innerHTML = `IMDb : + ${elem.imdbRating}`
        }

        deletee.onclick = () => {
            let indx = arr.indexOf(elem)
            arr.splice(indx, 1)
            reload(movies)
        }

    }

}


    /*  promo.classList.add('promo__interactive-item') */

    /* deletee.classList.add('delete') */

