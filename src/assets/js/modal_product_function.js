const modal_edit_product = document.getElementById('modal_container');
const modal_container_image = document.getElementById('image_modal');
const modal_add_product = document.getElementById('modal_container_product');
const close_modal = document.getElementById('close_modal_product');
//const close_modal_product = document.getElementById('close');
//const close_image_modal = document.getElementById('image_modal_close');
//const close3 = document.getElementById('close3');
const add_product = document.getElementById('add_product');
const import_product = document.getElementById('import_product');

const upload1 = document.getElementById('upload_step_one');
const upload2 = document.getElementById('upload_step_two');

$('.show_modal').click(function(){
    $(this).each(function(){
        modal_edit_product.classList.add('show');
    });
});
$('.open_image_modal').click(function(){
    $(this).each(function(){
        modal_container_image.classList.add('show');
    });
});
$('.open_modal_product').click(function(){
    $(this).each(function(){
        modal_container_product.classList.add('show');
    });
});

$('.close_modal').click(function(){
    $(this).each(function(){
        modal_edit_product.classList.remove('show');
        modal_add_product.classList.remove('show');
        modal_container_image.classList.remove('show');
    });
});


add_product.addEventListener('click', () => {
    alert('¡Producto agregado con éxito!');
    location.reload('amazon_products_petpet_table_belleza_edit.html');
    
})

import_product.addEventListener('click', () => {
    alert('¡Productos importados con éxito!');
    location.reload('amazon_products_petpet_table_belleza_edit.html');
    
})

upload1.addEventListener('click', () => {
    upload1.classList.toggle('hidden');
    upload2.style.display = 'block';
    import_product.style.display = 'block';
})



