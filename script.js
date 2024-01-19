const icon = document.querySelector('.icon');
const search = document.querySelector('.container');
const clear = document.querySelector('.delete');
const input = document.querySelector('.input-search');

icon.addEventListener('click', function() {
    search.classList.toggle('ativo');
})

clear.addEventListener('click', function() {
    input.value = '';
})