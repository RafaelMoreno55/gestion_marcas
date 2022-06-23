click = null;

function selectAll(){
    selected = true;
    $('#selectAll').change(function() {
        console.log("1")
        if (selected) {
            $('.productos').prop("checked", true);
            $('#selectAll').prop("checked", true);
            $('#delete').show();
            console.log()
        }else{
            $('.productos').prop("checked", false);
            $('#selectAll').prop("checked", false);
            $('#delete').hide();
        }
        selected = !selected;
    });    
}


function openMenu(){
    console.log("2");
    var menu = document.getElementById('menu_options');
    var menu_marcas = document.getElementById('menu_marcas2');
    var menu_avatar = document.getElementById('menu_avatar2');

    if (click == false) {
        menu.style.display = 'none';
        menu_avatar.style.display = 'none';
        menu_marcas.style.display = 'none';
        click = true;
    }else{
        menu.style.display = 'block';
        click = false;
    }
}
function menuMarcas(){
    console.log("3");
    var menu_marcas = document.getElementById('menu_marcas');
    var menu_avatar = document.getElementById('menu_avatar');

    if(click == true) {
        if (menu_avatar.style.display == 'block'){
            menu_marcas.style.display = 'block';
            menu_avatar.style.display = 'none';
        }else{
        menu_marcas.style.display = 'none';
        menu_avatar.style.display = 'none';
        click = false;
        }
    }else{
        menu_avatar.style.display = 'none';
        menu_marcas.style.display = 'block';
        click = true;
    }
}
function menuAvatar(){
    console.log("4");
    var menu_marcas = document.getElementById('menu_marcas');
    var menu_avatar = document.getElementById('menu_avatar');

    if(click == true) {
        if (menu_marcas.style.display == 'block'){
            menu_avatar.style.display = 'block';
            menu_marcas.style.display = 'none';
        }else{
        menu_avatar.style.display = 'none';
        menu_marcas.style.display = 'none';
        click = false;
        }
    }else{
        
        menu_marcas.style.display = 'none';
        menu_avatar.style.display = 'block';
        click = true;
    }
    
}
function menuMarcas2(){
    console.log("5");
    var menu_marcas = document.getElementById('menu_marcas2');
    var menu_avatar = document.getElementById('menu_avatar2');

    if(click == true) {
        if (menu_avatar.style.display == 'block'){
            menu_marcas.style.display = 'block';
            menu_avatar.style.display = 'none';
        }else{
        menu_marcas.style.display = 'none';
        menu_avatar.style.display = 'none';
        click = false;
        }
    }else{
        menu_avatar.style.display = 'none';
        menu_marcas.style.display = 'block';
        click = true;
    }
}

function menuAvatar2(){
    console.log("6"        );
    var menu_marcas = document.getElementById('menu_marcas2');
    var menu_avatar = document.getElementById('menu_avatar2');

    if(click == true) {
        if (menu_marcas.style.display == 'block'){
            menu_avatar.style.display = 'block';
            menu_marcas.style.display = 'none';
        }else{
        menu_avatar.style.display = 'none';
        menu_marcas.style.display = 'none';
        click = false;
        }
    }else{
        
        menu_marcas.style.display = 'none';
        menu_avatar.style.display = 'block';
        click = true;
    }
}


function confirmDelete(){
    console.log("7");
  var message = confirm("¿Desea eliminar el (los) producto(s) seleccionado(s)?");
  if (message == true){
   alert("Producto(s) eliminados con éxito");
   location.reload("amazon_products_petpet_table_belleza_edit.html");
  }
}
