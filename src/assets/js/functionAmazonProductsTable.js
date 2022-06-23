// Variables utilizadas en el modal editar datos del producto

var modalEditProdTableAPT = document.querySelector('#edit-products-table-modal');
var btnModalExitEditProdTableAPT = document.querySelector('#exit-edit-products-table-modal');
var btnModalCancelEditProdTableAPT = document.querySelector('#cancel-edit-products-table-modal');
var btnModalAddEditProdTableAPT = document.querySelector('#add-edit-products-table-modal');

// Variables utilizadas en el modal importar productos

var modalImportProdTableAPT = document.querySelector('#import-products-table-modal');
var btnModalExitImportProdTableAPT = document.querySelector('#exit-import-products-table-modal');
var btnModalCancelImportProdTableAPT = document.querySelector('#cancel-import-products-table-modal');
var btnModalAddImportProdTableAPT = document.querySelector('#add-import-products-table-modal');

// Variables utilizadas en el modal agregar un nuevo producto

var modalAddNewProdTableAPT = document.querySelector('#new-products-table-modal');
var btnModalExitAddNewProdTableAPT = document.querySelector('#exit-new-products-table-modal');
var btnModalCancelAddNewProdTableAPT = document.querySelector('#cancel-new-products-table-modal');
var btnModalSaveAddNewProdTableAPT = document.querySelector('#add-new-products-table-modal');
var inputIdModalAddNewProdTableAPT = document.querySelector('#input-id-new-products-table-modal');
var txtIdModalAddNewProdTableAPT = document.querySelector('#id-new-products-table-modal');
var inputTitleModalAddNewProdTableAPT = document.querySelector('#input-title-new-products-table-modal');
var txtTitleModalAddNewProdTableAPT = document.querySelector('#title-new-products-table-modal');
var inputLinkModalAddNewProdTableAPT = document.querySelector('#input-link-new-products-table-modal');
var txtLinkModalAddNewProdTableAPT = document.querySelector('#link-new-products-table-modal');
var formModalAddNewProdTableAPT = document.querySelector('#form-new-products-table-modal');

// Variables utilizadas para los botones editar, guardar y cancelar , perteneciente a la vista amazon products table

var btnEditAPT = document.querySelector('#edit-amazon-products-table');
var btnCancelAPT = document.querySelector('#cancel-amazon-products-table');
var btnSaveAPT = document.querySelector('#save-amazon-products-table');
var optEditAPT = document.querySelector('#opt-edit-amazon-products-table');
var btnAddNewProdTableAPT = document.querySelector('#add-new-amazon-products-table');
var viewAddNewProdTableAPT = document.querySelector('#view-new-product-table');
var newTitleProdTableAPT = document.querySelector('#name-products-table');
var btnImportProdTableAPT = document.querySelector('#import-amazon-products-table');
var btnAddNewImportProdTableAPT = document.querySelector('#link-add-import-products-table-modal');
var infoAddNewImportProdTableAPT = document.querySelector('#loaded-import-products-table-modal');
var btnEditProdTableAPT = document.querySelectorAll('.btn-edit-products-table');
var btnActionProdTableAPT = document.querySelectorAll('.actions-products-table');
var bandAddNewProdTableAPT = false;
var bandFileImportProdTableAPT = false;
var tempTitleProdTableAPT = '';
var saveProdTableAPT = false;

/* Funcionalidad para editar productos en la tabla, perteneciente a la vista amazon products table */

for (let i = 0; i < btnEditProdTableAPT.length; i++) {
    btnEditProdTableAPT[i].addEventListener('click', () => {
        modalEditProdTableAPT.classList.add('show');
    });
}

btnModalExitEditProdTableAPT.addEventListener('click', () => {
    modalEditProdTableAPT.classList.remove('show');
});

btnModalCancelEditProdTableAPT.addEventListener('click', () => {
    modalEditProdTableAPT.classList.remove('show');
});

btnModalAddEditProdTableAPT.addEventListener('click', () => {
    modalEditProdTableAPT.classList.remove('show');
});

/* Funcionalidad para importar productos, perteneciente a la vista amazon products table*/

btnAddNewImportProdTableAPT.addEventListener('click', () => {
    btnAddNewImportProdTableAPT.classList.toggle('hidden');
    infoAddNewImportProdTableAPT.classList.toggle('hidden');
    btnModalAddImportProdTableAPT.classList.remove('pointer-events-none');
    bandFileImportProdTableAPT = true;
});

btnImportProdTableAPT.addEventListener('click', () => {
    btnAddNewImportProdTableAPT.classList.remove('hidden');
    infoAddNewImportProdTableAPT.classList.add('hidden');
    bandFileImportProdTableAPT = false;
    btnModalAddImportProdTableAPT.classList.add('pointer-events-none');
    modalImportProdTableAPT.classList.add('show');
});

btnModalExitImportProdTableAPT.addEventListener('click', () => {
    modalImportProdTableAPT.classList.remove('show');
});

btnModalCancelImportProdTableAPT.addEventListener('click', () => {
    modalImportProdTableAPT.classList.remove('show');
});

btnModalAddImportProdTableAPT.addEventListener('click', () => {
    if (bandFileImportProdTableAPT == true) {
        modalImportProdTableAPT.classList.remove('show');
    }
});

/* Funcionalidad para agregar un nuevo producto, perteneciente a la vista amazon products table*/

btnAddNewProdTableAPT.addEventListener('click', () => {
    console.log('click');
    txtIdModalAddNewProdTableAPT.classList.add('hidden');
    txtTitleModalAddNewProdTableAPT.classList.add('hidden');
    txtLinkModalAddNewProdTableAPT.classList.add('hidden');
    formModalAddNewProdTableAPT.reset();
    modalAddNewProdTableAPT.classList.add('show');
    // tempTitleProdTableAPT = newTitleProdTableAPT.innerHTML;
});

btnModalExitAddNewProdTableAPT.addEventListener('click', () => {
    modalAddNewProdTableAPT.classList.remove('show');
});

btnModalCancelAddNewProdTableAPT.addEventListener('click', () => {
    modalAddNewProdTableAPT.classList.remove('show');
});

/*btnModalSaveAddNewProdTableAPT.addEventListener('click', () => {
    txtIdModalAddNewProdTableAPT.classList.add('hidden');
    txtTitleModalAddNewProdTableAPT.classList.add('hidden');
    txtLinkModalAddNewProdTableAPT.classList.add('hidden');
    if (inputIdModalAddNewProdTableAPT.value === null || inputIdModalAddNewProdTableAPT.value.length === 0 || /^\s*$/.test(inputIdModalAddNewProdTableAPT.value)) {
        txtIdModalAddNewProdTableAPT.classList.remove('hidden');
    } else {
        if (inputTitleModalAddNewProdTableAPT.value === null || inputTitleModalAddNewProdTableAPT.value.length === 0 || /^\s*$/.test(inputTitleModalAddNewProdTableAPT.value)) {
            txtTitleModalAddNewProdTableAPT.classList.remove('hidden');
        } else {
            if (inputLinkModalAddNewProdTableAPT.value === null || inputLinkModalAddNewProdTableAPT.value.length === 0 || /^\s*$/.test(inputLinkModalAddNewProdTableAPT.value)) {
                txtLinkModalAddNewProdTableAPT.classList.remove('hidden');
            } else {
                newTitleProdTableAPT.innerHTML = inputTitleModalAddNewProdTableAPT.value;
                bandAddNewProdTableAPT = true;
                viewAddNewProdTableAPT.classList.remove('hidden');
                modalAddNewProdTableAPT.classList.remove('show');
            }
            
        }
    }
});*/

/* Funcionalidad para los botones editar, guardar y cancelar, perteneciente a la vista amazon products table  */

btnEditAPT.addEventListener('click', () => {
    for (let i = 0; i < btnActionProdTableAPT.length; i++) {
        btnActionProdTableAPT[i].classList.remove('hidden');
    }
    optEditAPT.classList.add('flex');
    optEditAPT.classList.remove('hidden');
    btnEditAPT.classList.add('hidden');
    btnEditAPT.classList.remove('flex');
    btnSaveAPT.classList.remove('hidden');
    btnCancelAPT.classList.remove('hidden');
});

btnCancelAPT.addEventListener('click', () => {
    if (bandAddNewProdTableAPT == true) {
        newTitleProdTableAPT.innerHTML = tempTitleProdTableAPT;
        bandAddNewProdTableAPT = false;
    }
    if (saveProdTableAPT == false) {
        viewAddNewProdTableAPT.classList.add('hidden');
    }
    for (let i = 0; i < btnActionProdTableAPT.length; i++) {
        btnActionProdTableAPT[i].classList.add('hidden');
    }
    optEditAPT.classList.add('hidden');
    optEditAPT.classList.remove('flex');
    btnEditAPT.classList.remove('hidden');
    btnEditAPT.classList.add('flex');
    btnSaveAPT.classList.add('hidden');
    btnCancelAPT.classList.add('hidden');
});

btnSaveAPT.addEventListener('click', () => {
    if (bandAddNewProdTableAPT == true) {
        bandAddNewProdTableAPT = false;
    }
    for (let i = 0; i < btnActionProdTableAPT.length; i++) {
        btnActionProdTableAPT[i].classList.add('hidden');
    }
    saveProdTableAPT = true;
    optEditAPT.classList.add('hidden');
    optEditAPT.classList.remove('flex');
    btnEditAPT.classList.remove('hidden');
    btnEditAPT.classList.add('flex');
    btnSaveAPT.classList.add('hidden');
    btnCancelAPT.classList.add('hidden');
});