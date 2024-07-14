let value = document.getElementsByClassName('dropdown__value');
let list = document.querySelector('ul.dropdown__list');
let link = document.getElementsByClassName('dropdown__link');

function Menu() {
    list.classList.contains('dropdown__list_active') ? list.className = 'dropdown__list' : list.classList.add('dropdown__list_active');
};

value[0].addEventListener('click', Menu);

Array.from(link).forEach((el) => {
    el.onclick = () => {
        value[0].textContent = el.textContent;
        return false;
    }
    el.addEventListener('click', Menu)
})
