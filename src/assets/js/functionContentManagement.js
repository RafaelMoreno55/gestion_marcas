// Variables utilizadas en el modal agregar una nueva lista

var modalNewListCM = document.querySelector('#new-list-modal');
var btnModalExitNewListCM = document.querySelector('#exit-new-list-modal');
var btnModalCancelNewListCM = document.querySelector('#cancel-new-list-modal');
var btnModalAddNewListCM = document.querySelector('#add-new-list-modal');
var inputModalNewListCM = document.querySelector('#input-new-list-modal');
var txtModalNewListCM = document.querySelector('#title-new-list-modal');
var formModalNewListCM = document.querySelector('#form-new-list-modal');

// Variables utilizadas, antes y después de realizar los eventos del modal nueva categoría

var btnEditCM = document.querySelector('#edit-content-management');
var btnCancelCM = document.querySelector('#cancel-content-management');
var btnSaveCM = document.querySelector('#save-content-management');
var holderNewListCM = document.querySelector('#container-new-list');
var newListCM = document.querySelector('#new-list');
var newTitleListCM = document.querySelector('#new-title-list');
var btnAddNewList = document.querySelector('#add-new-list');
var iconModeEdit = document.querySelectorAll('.mode-edit');
var iconModeRead = document.querySelectorAll('.mode-read');
var statusList = document.querySelectorAll('.status');

// Variables utilizadas para mostrar el árbol de categorías y subcategorías de una lista

var configSelectList = document.querySelectorAll('.select-list');
var configSvgCheckList1 = document.querySelector('.svg-check-list1');
var configSvgCheckList2 = document.querySelector('.svg-check-list2');
var checkLists = document.querySelectorAll('.check-list');
var viewCategSubcategLists = document.querySelectorAll('.categ-subcateg-list');
var allCategSubcategList = document.querySelector('#all-categ-subcateg-list');

document.addEventListener('click', (evt) => {
    let targetElement = evt.target;
    for (let i = 0; i < checkLists.length; i++) {
        k = i * 2;
        if (!checkLists[i].contains(targetElement) && !viewCategSubcategLists[i].contains(targetElement)) {
            viewCategSubcategLists[i].classList.add('hidden');
            statusList[i].classList.remove('bg-blue-brand-500');
            configSelectList[k].classList.add('text-gray-brand-700');
            configSelectList[k].classList.add('group-hover:text-blue-brand-300');
            configSelectList[k].classList.remove('text-white');
            configSelectList[k+1].classList.add('text-gray-brand-300');
            configSelectList[k+1].classList.add('group-hover:text-blue-brand-300');
            configSelectList[k+1].classList.remove('text-white');
        }
    }
});

for (let i = 0, k = 0; i < checkLists.length; i++) {
    checkLists[i].addEventListener('click', () => {
        viewCategSubcategLists[i].innerHTML = allCategSubcategList.innerHTML;
        for (let j = 0; j < viewCategSubcategLists.length; j++) {
            if (i == j) {
                k = i * 2;
                viewCategSubcategLists[j].classList.toggle('hidden');
                statusList[j].classList.toggle('bg-blue-brand-500');
                configSelectList[k].classList.toggle('text-gray-brand-700');
                configSelectList[k].classList.toggle('group-hover:text-blue-brand-300');
                configSelectList[k].classList.toggle('text-white');
                configSelectList[k+1].classList.toggle('text-gray-brand-300');
                configSelectList[k+1].classList.toggle('group-hover:text-blue-brand-300');
                configSelectList[k+1].classList.toggle('text-white');
            }else{
                k = j * 2;
                viewCategSubcategLists[j].classList.add('hidden');
                statusList[j].classList.remove('bg-blue-brand-500');
                configSelectList[k].classList.add('text-gray-brand-700');
                configSelectList[k].classList.add('group-hover:text-blue-brand-300');
                configSelectList[k].classList.remove('text-white');
                configSelectList[k+1].classList.add('text-gray-brand-300');
                configSelectList[k+1].classList.add('group-hover:text-blue-brand-300');
                configSelectList[k+1].classList.remove('text-white');
            }
        }
    });
}

// Variable que almacena el nombre de la lista seleccionada

var nameList;
var namesContentList = document.querySelectorAll('.name-list');

for (let i = 0; i < statusList.length; i++) {
    statusList[i].addEventListener('click', e => {
        e.preventDefault();
        nameList = namesContentList[i].innerHTML;
    });
}

/* Funcionalidad para los botones editar, guardar y cancelar, perteneciente a la vista content-management  */

btnEditCM.addEventListener('click', () => {
    for (let i = 0; i < iconModeRead.length; i++) {
        iconModeRead[i].classList.add('hidden');
    }
    for (let i = 0; i < iconModeEdit.length; i++) {
        iconModeEdit[i].classList.remove('hidden');
    }
    for (let i = 0; i < statusList.length; i++) {
        statusList[i].classList.add('pointer-events-none');
    }
    btnEditCM.classList.add('hidden');
    btnEditCM.classList.remove('flex');
    btnSaveCM.classList.remove('hidden');
    btnCancelCM.classList.remove('hidden');
    holderNewListCM.classList.remove('hidden');
    holderNewListCM.classList.add('flex');
});

btnSaveCM.addEventListener('click', () => {
    for (let i = 0; i < iconModeRead.length; i++) {
        iconModeRead[i].classList.remove('hidden');
    }
    for (let i = 0; i < iconModeEdit.length; i++) {
        iconModeEdit[i].classList.add('hidden');
    }
    for (let i = 0; i < statusList.length; i++) {
        statusList[i].classList.remove('pointer-events-none');
    }
    btnEditCM.classList.remove('hidden');
    btnEditCM.classList.add('flex');
    btnSaveCM.classList.add('hidden');
    btnCancelCM.classList.add('hidden');
    holderNewListCM.classList.add('hidden');
    holderNewListCM.classList.remove('flex');
});

btnCancelCM.addEventListener('click', () => {
    for (let i = 0; i < iconModeRead.length; i++) {
        iconModeRead[i].classList.remove('hidden');
    }
    for (let i = 0; i < iconModeEdit.length; i++) {
        iconModeEdit[i].classList.add('hidden');
    }
    for (let i = 0; i < statusList.length; i++) {
        statusList[i].classList.remove('pointer-events-none');
    }
    newListCM.classList.add('hidden');
    newListCM.classList.remove('flex');
    btnEditCM.classList.remove('hidden');
    btnEditCM.classList.add('flex');
    btnSaveCM.classList.add('hidden');
    btnCancelCM.classList.add('hidden');
    holderNewListCM.classList.add('hidden');
    holderNewListCM.classList.remove('flex');
});

/* Funcionalidad para agregar una nueva lista, perteneciente a la vista content-management  */

btnAddNewList.addEventListener('click', () => {
    txtModalNewListCM.classList.add('hidden');
    formModalNewListCM.reset();
    modalNewListCM.classList.add('show');
});

btnModalExitNewListCM.addEventListener('click', () => {
    modalNewListCM.classList.remove('show');
});

btnModalCancelNewListCM.addEventListener('click', () => {
    modalNewListCM.classList.remove('show');
});

btnModalAddNewListCM.addEventListener('click', () => {
   if (inputModalNewListCM.value === null || inputModalNewListCM.value.length === 0 || /^\s*$/.test(inputModalNewListCM.value)) {
       txtModalNewListCM.classList.remove('hidden'); 
   } else {
    //    newTitleListCM.innerHTML = inputModalNewListCM.value;
       modalNewListCM.classList.remove('show');
    //    newListCM.classList.remove('hidden');
    //    newListCM.classList.add('flex');
   }
});