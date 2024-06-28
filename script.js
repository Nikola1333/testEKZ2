
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    on: {
        init: function () {
            this.el.addEventListener('mouseover', () => {
                this.autoplay.stop();
            });
            this.el.addEventListener('mouseout', () => {
                this.autoplay.start();
            });
        },
    }
});

function showModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function showRegistrationForm(id) {
    document.getElementById(id).style.display = 'block';
}

function closeRegistrationForm(id) {
    document.getElementById(id).style.display = 'none';
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.querySelector('#name').value;
        const participation = form.querySelector('#participation').value;
        const date = form.querySelector('#date').value;

        if (name && participation && date) {
            alert('Вы успешно зарегистрировались!');
            form.reset();
            closeRegistrationForm(form.closest('.modal').id);
        } else {
            alert('Пожалуйста, заполните все поля формы.');
        }
    });
});
