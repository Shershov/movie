// Добавление компонентов

function addFilm(film) {
    let node = document.createElement('div');
    node.className = 'film__card';
    let out = '';

    out += `<a class="poster" href="">`;
    out += `<img src="${film.img}" alt="">`;
    out += `<div class="film__descr">`;
    out += `<h3>${film.name} </h3>`;
    out += `<span>${film.year}, </span>`;
    out += `<span>${film.country}, </span>`;
    out += `<span>${film.genre}, </span>`;
    out += `<span>${film.director}</span>`;
    out += `</div>`;
    out += `</a>`;

    node.innerHTML = out;
    document.getElementById('films').appendChild(node);
}



function loadFilms() {
    let localStorageFilms = localStorage.getItem('films');
    if (localStorageFilms) {
        films = JSON.parse(localStorageFilms);
    }
}

function renderFilms(genre) {

    document.getElementById('films').innerHTML = '';

    let renderFilms = films;

    if (typeof genre !== 'undefined' && genre !== 'Фильмы') {
        renderFilms = films.filter(function(film) {
            return film.genre.toLowerCase() === genre.toLowerCase();
        });
    }

    renderFilms.forEach(addFilm);
}


function searchFilms(input) {

    document.getElementById('films').innerHTML = '';

    let renderFilms = films;

    if (typeof input !== 'undefined' && input !== 'Фильмы') {
        renderFilms = films.filter(function(film) {
            return (film.name.toLowerCase().includes(input) ||
                (film.director.toLowerCase().includes(input)))
        });
    }

    renderFilms.forEach(addFilm);
}



loadFilms();
renderFilms();


let links = document.getElementsByClassName('filters')[0].getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
    let a = links[i];
    a.onclick = function(evt) {
        renderFilms(this.innerHTML);
        evt.preventDefault();
    }
}

// Модальное окно

let modal = document.getElementById('mymodal');
let btn = document.getElementById('btn-modal-open');
let save = document.getElementsByClassName('save-btn')[0];

btn.onclick = function() {
    modal.style.display = 'block';
};

save.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Отмена отправки формы на сревер

function cancelSubmit(element) {
    if (element.addEventListener) {
        element.addEventListener("submit", function(evt) {
            evt.preventDefault();
            window.history.back();
        }, true);
    } else {
        element.attachEvent('onsubmit', function(evt) {
            evt.preventDefault();
            window.history.back();
        });
    }
}

cancelSubmit(document.getElementsByClassName('modal-form')[0]);

// Получение данных из формы

function addNewFilm(form) {
    let obj = {
        'img': form.elements['poster'].value,
        'name': form.elements['name'].value,
        'year': form.elements['year'].value,
        'country': form.elements['country'].value,
        'genre': form.elements['genre'].value,
        'director': form.elements['director'].value,
    }

    addFilm(obj);
    modal.style.display = 'none';

    addFilmToLocalstorage(obj);
}

function addFilmToLocalstorage(obj) {
    films.push(obj);
    localStorage.setItem('films', JSON.stringify(films));
}

save.onclick = function() {
    addNewFilm(this.form)
}

document.getElementById('search').addEventListener('submit', function(evt) {
    evt.preventDefault();
    searchFilms(this.elements.searchbox.value);
})