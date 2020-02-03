let films = [{
        'img': 'img/posters/bloodshot.jpeg',
        'name': 'Бладшот',
        'year': '2019',
        'country': 'США',
        'genre': 'Боевик',
        'director': 'Дейв Уилсон',
    },
    {
        'img': 'img/posters/joker.jpeg',
        'name': 'Джокер',
        'year': '2019',
        'country': 'США',
        'genre': 'Драма',
        'director': 'Тодд Филлипс',
    },
    {
        'img': 'img/posters/casino.jpeg',
        'name': 'Казино',
        'year': '1995',
        'country': 'США',
        'genre': 'Драма',
        'director': 'Мартин Скорсезе',
    },
    {
        'img': 'img/posters/boy.jpeg',
        'name': 'Кукла-2',
        'year': '2020',
        'country': 'Нидерланды',
        'genre': 'Ужасы',
        'director': 'Уильям Брент Белл',
    },
    {
        'img': 'img/posters/primal.jpeg',
        'name': 'Звериная ярость',
        'year': '2019',
        'country': 'США',
        'genre': 'боевик',
        'director': 'Ник Пауэлл',

    },
    {
        'img': 'img/posters/aviator.jpeg',
        'name': 'Авиатор',
        'year': '2004',
        'country': 'США',
        'genre': 'исторический',
        'director': 'Мартин Скорсезе',

    },
    {
        'img': 'img/posters/Wasabi-1.jpeg',
        'name': 'Васаби',
        'year': '2001',
        'country': 'Франция',
        'genre': 'комедия',
        'director': 'Жерар Кравчик',
    },
    {
        'img': 'img/posters/Taxi-4.jpeg',
        'name': 'Такси-4',
        'year': '2007',
        'country': 'Франция',
        'genre': 'комедия',
        'director': 'Жерар Кравчик',
    },
    {
        'img': 'img/posters/Unforgiven.jpeg',
        'name': 'Непрощенный',
        'year': '2018',
        'country': 'Россия',
        'genre': 'Драма',
        'director': 'Сарик Андреасян',
    },
    {
        'img': 'img/posters/Konvert.jpeg',
        'name': 'Конверт',
        'year': '2017',
        'country': 'Россия',
        'genre': 'Ужасы',
        'director': 'Владимир Марков',
    },
    {
        'img': 'img/posters/Country-03.jpeg',
        'name': 'Страна 03',
        'year': '2015',
        'country': 'Россия',
        'genre': 'Комедия',
        'director': 'Василий Сигарев',
    }
];

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
films.forEach(addFilm);

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
}



save.onclick = function() {
    addNewFilm(this.form)
}