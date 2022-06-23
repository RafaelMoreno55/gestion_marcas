// Variables utilizadas en el modal agregar una nueva lista de productos

var modalNewListProdAP = document.querySelector('#new-list-products-modal');
var btnModalExitNewListProdAP = document.querySelector('#exit-new-list-products-modal');
var btnModalCancelNewListProdAP = document.querySelector('#cancel-new-list-products-modal');
var btnModalAddNewListProdAP = document.querySelector('#add-new-list-products-modal');
var inputModalNewListProdAP = document.querySelector('#input-new-list-products-modal');
var txtModalNewListProdAP = document.querySelector('#title-new-list-products-modal');
var formModalNewListProdAP = document.querySelector('#form-new-list-products-modal');

// Variables utilizadas en el modal editar nombre de la lista de productos

var modalEditListNameProdAP = document.querySelector('#edit-list-name-products-modal');
var btnModalExitEditListNameProdAP = document.querySelector('#exit-edit-list-name-products-modal');
var btnModalCancelEditListNameProdAP = document.querySelector('#cancel-edit-list-name-products-modal');
var btnModalAddEditListNameProdAP = document.querySelector('#add-edit-list-name-products-modal');
var inputModalEditListNameProdAP = document.querySelector('#input-edit-list-name-products-modal');
var txtModalEditListNameProdAP = document.querySelector('#title-edit-list-name-products-modal');
var formModalEditListNameProdAP = document.querySelector('#form-edit-list-name-products-modal');

// Variables utilizadas para los botones editar, guardar y cancelar , perteneciente a la vista amazon products

var btnEditAP = document.querySelector('#edit-amazon-products');
var btnCancelAP = document.querySelector('#cancel-amazon-products');
var btnSaveAP = document.querySelector('#save-amazon-products');
var holderNewListAP = document.querySelector('#container-new-list-products');
var newListProdAP = document.querySelector('#new-list-products');
var editTitleListProdAP = document.querySelectorAll('.edit-title-list-products');
var newTitleListProdAP = document.querySelector('#new-title-list-products');
var btnAddNewListProdAP = document.querySelector('#add-new-list-products');
var btnIconModeEditProdAP = document.querySelectorAll('.edit-list-name-amazon-products');
var iconModeReadAP = document.querySelectorAll('.mode-read-amazon-products');
var listAmazonProdAP = document.querySelectorAll('.status-list-amazon-products');
var linkListAmazonProdAP = document.querySelectorAll('.link-list-amazon-products');
var idListProdAP = -1;
var bandEditTitleProdAP = false;
var tempTitleProdAP = '';
var saveProdAP = false;

/* Funcionalidad para editar el nombre de la lista de productos, perteneciente a la vista amazon products */

for (let i = 0; i < btnIconModeEditProdAP.length; i++) {
    btnIconModeEditProdAP[i].addEventListener('click', () => {
        idListProdAP = i;
        tempTitleProdAP = editTitleListProdAP[i].innerHTML;
        txtModalEditListNameProdAP.classList.add('hidden');
        formModalEditListNameProdAP.reset();
        modalEditListNameProdAP.classList.add('show');
    });
}

btnModalExitEditListNameProdAP.addEventListener('click', () => {
    modalEditListNameProdAP.classList.remove('show');
});

btnModalCancelEditListNameProdAP.addEventListener('click', () => {
    modalEditListNameProdAP.classList.remove('show');
});

btnModalAddEditListNameProdAP.addEventListener('click', () => {
    if (inputModalEditListNameProdAP.value === null || inputModalEditListNameProdAP.value.length === 0 || /^\s*$/.test(inputModalEditListNameProdAP.value)) {
        txtModalEditListNameProdAP.classList.remove('hidden'); 
   } else {
       editTitleListProdAP[idListProdAP].innerHTML = inputModalEditListNameProdAP.value;
       modalEditListNameProdAP.classList.remove('show');
       bandEditTitleProdAP = true;
   }
});

/* Funcionalidad para agregar una nueva lista de productos, perteneciente a la vista amazon products */

btnAddNewListProdAP.addEventListener('click', () => {
    txtModalNewListProdAP.classList.add('hidden');
    formModalNewListProdAP.reset();
    modalNewListProdAP.classList.add('show');
});

btnModalExitNewListProdAP.addEventListener('click', () => {
    modalNewListProdAP.classList.remove('show');
});

btnModalCancelNewListProdAP.addEventListener('click', () => {
    modalNewListProdAP.classList.remove('show');
});

btnModalAddNewListProdAP.addEventListener('click', () => {
   if (inputModalNewListProdAP.value === null || inputModalNewListProdAP.value.length === 0 || /^\s*$/.test(inputModalNewListProdAP.value)) {
        txtModalNewListProdAP.classList.remove('hidden'); 
   } else {
        // newTitleListProdAP.innerHTML = inputModalNewListProdAP.value;
        modalNewListProdAP.classList.remove('show');
        // newListProdAP.classList.remove('hidden');
        // newListProdAP.classList.add('flex');
   }
});

/* Funcionalidad para los botones editar, guardar y cancelar, perteneciente a la vista amazon products  */

btnEditAP.addEventListener('click', () => {
    for (let i = 0; i < iconModeReadAP.length; i++) {
        iconModeReadAP[i].classList.add('hidden');
    }
    for (let i = 0; i < btnIconModeEditProdAP.length; i++) {
        btnIconModeEditProdAP[i].classList.remove('hidden');
        btnIconModeEditProdAP[i].classList.add('flex');
    }
    for (let i = 0; i < listAmazonProdAP.length; i++) {
        listAmazonProdAP[i].classList.remove('hover:border-blue-brand-300');
        linkListAmazonProdAP[i].classList.add('pointer-events-none');
    }

    btnEditAP.classList.add('hidden');
    btnEditAP.classList.remove('flex');
    btnSaveAP.classList.remove('hidden');
    btnCancelAP.classList.remove('hidden');
    holderNewListAP.classList.remove('hidden');
    holderNewListAP.classList.add('flex');
});

btnSaveAP.addEventListener('click', () => {
    for (let i = 0; i < iconModeReadAP.length; i++) {
        iconModeReadAP[i].classList.remove('hidden');
    }
    for (let i = 0; i < btnIconModeEditProdAP.length; i++) {
        btnIconModeEditProdAP[i].classList.add('hidden');
        btnIconModeEditProdAP[i].classList.remove('flex');
    }
    for (let i = 0; i < listAmazonProdAP.length; i++) {
        listAmazonProdAP[i].classList.add('hover:border-blue-brand-300');
        linkListAmazonProdAP[i].classList.remove('pointer-events-none');
    }
    if (bandEditTitleProdAP == true) {
        bandEditTitleProdAP = false;
    }

    saveProdAP = true;
    btnEditAP.classList.remove('hidden');
    btnEditAP.classList.add('flex');
    btnSaveAP.classList.add('hidden');
    btnCancelAP.classList.add('hidden');
    holderNewListAP.classList.add('hidden');
    holderNewListAP.classList.remove('flex');
});

btnCancelAP.addEventListener('click', () => {
    for (let i = 0; i < iconModeReadAP.length; i++) {
        iconModeReadAP[i].classList.remove('hidden');
    }
    for (let i = 0; i < btnIconModeEditProdAP.length; i++) {
        btnIconModeEditProdAP[i].classList.add('hidden');
        btnIconModeEditProdAP[i].classList.remove('flex');
    }
    for (let i = 0; i < listAmazonProdAP.length; i++) {
        listAmazonProdAP[i].classList.add('hover:border-blue-brand-300');
        linkListAmazonProdAP[i].classList.remove('pointer-events-none');
    }
    if (bandEditTitleProdAP == true) {
        editTitleListProdAP[idListProdAP].innerHTML = tempTitleProdAP;
        bandEditTitleProdAP = false;
    }
    if (saveProdAP == false) {
        newListProdAP.classList.add('hidden');
        newListProdAP.classList.remove('flex');
    }

    btnEditAP.classList.remove('hidden');
    btnEditAP.classList.add('flex');
    btnSaveAP.classList.add('hidden');
    btnCancelAP.classList.add('hidden');
    holderNewListAP.classList.add('hidden');
    holderNewListAP.classList.remove('flex');
});