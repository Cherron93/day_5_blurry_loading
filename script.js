const cities = document.querySelectorAll('.pic')

cities.forEach(function (el) {
    el.addEventListener('click', () => {
        el.classList.toggle('active')
    });
})