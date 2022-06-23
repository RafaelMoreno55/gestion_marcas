const open = document.getElementById('open_modal');
const open_modal_list = document.getElementById('open_modal_list');
const modal_container = document.getElementById('modal_container');
const modal_container_list = document.getElementById('modal_container_list');
// const close = document.getElementById('cerrar');
// const close2 = document.getElementById('close_modal');
const add_list = document.getElementById('add_list');
const new_list = document.getElementById('new_list');
const list_belleza = document.getElementById('list_belleza');
const rename_list = document.getElementById('rename_list');
open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open_modal_list.addEventListener('click', () => {
    modal_container_list.classList.add('show');
});

$('.close_modal').click(function(){
    $(this).each(function(){
        modal_container.classList.remove('show');
        modal_container_list.classList.remove('show');
    });
});

        
$('.cerrar').click(function(){
    $(this).each(function(){
        modal_container.classList.remove('show');
        modal_container_list.classList.remove('show');
    });
});
add_list.addEventListener('click', () => {
    modal_container.classList.remove('show');
    new_list.style.display = 'flex';
});

rename_list.addEventListener('click', () => {
    modal_container_list.classList.remove('show');
    new_list.style.display = 'flex';
         
});



