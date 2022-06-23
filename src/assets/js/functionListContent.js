// Variable que contiene el nombre de la lista actual

var titleCurrentList = document.querySelector("#title-current-list");
 titleCurrentList.innerHTML = " ";

// Variables utilizadas para los botones selector Categorías, Subcategorías y Fecha

var btnCategSelectLC = document.querySelector('#btn-select-categ-list');
var btnSubCategSelectLC = document.querySelector('#btn-select-subcateg-list');
var btnDategSelectLC = document.querySelector('#btn-select-date-list');

var viewCategListLC = document.querySelector('#view-categ-list');
var viewSubCategListLC = document.querySelector('#view-subcateg-list');
var viewDateListLC = document.querySelector('#view-date-list');

var optChosenCategLC = document.querySelectorAll('.chosen-category');
var optChosenSubCategLC = document.querySelectorAll('.chosen-subcategory');
var optChosenDateLC = document.querySelectorAll('.chosen-date');

var titleChosenCategLC = document.querySelector('#chosen-title-categ');
var titleChosenSubCategLC = document.querySelector('#chosen-title-subcateg');

var cardsFilterCategoryLC = document.querySelector('#card-filter-category');
var cardFilterCategoryLC = document.querySelector('#filter-category');
var cardsFilterSubCategoryLC = document.querySelector('#card-filter-subcategory');
var cardFilterSubCategoryLC = document.querySelector('#filter-subcategory');

document.addEventListener('click', (evt) => {
    let targetElement = evt.target;
    if (!btnCategSelectLC.contains(targetElement) && !viewCategListLC.contains(targetElement)) {
        viewCategListLC.classList.add('hidden');
        btnCategSelectLC.classList.remove('focus:ring-blue-brand-500');
        btnCategSelectLC.classList.remove('focus:text-white');
        btnCategSelectLC.classList.remove('focus:bg-blue-brand-500');
    }

    if (!btnSubCategSelectLC.contains(targetElement) && !viewSubCategListLC.contains(targetElement)) {
        viewSubCategListLC.classList.add('hidden');
        btnSubCategSelectLC.classList.remove('focus:ring-blue-brand-500');
        btnSubCategSelectLC.classList.remove('focus:text-white');
        btnSubCategSelectLC.classList.remove('focus:bg-blue-brand-500');
    }

    if (!btnDategSelectLC.contains(targetElement) && !viewDateListLC.contains(targetElement)) {
        viewDateListLC.classList.add('hidden');
        btnDategSelectLC.classList.remove('focus:ring-blue-brand-500');
        btnDategSelectLC.classList.remove('focus:text-white');
        btnDategSelectLC.classList.remove('focus:bg-blue-brand-500');
    }
});

for (let i = 0; i < optChosenCategLC.length; i++) {
    optChosenCategLC[i].addEventListener('click', () => {
        if (i == 2) {
            cardFilterCategoryLC.classList.remove('hidden');
            cardFilterCategoryLC.classList.add('flex');
        }else{
            cardFilterCategoryLC.classList.add('hidden');
            cardFilterCategoryLC.classList.remove('flex');
        }
        viewCategListLC.classList.add('hidden');
        titleChosenCategLC.innerHTML = optChosenCategLC[i].innerHTML;
        cardsFilterCategoryLC.classList.remove('hidden');
        cardsFilterCategoryLC.classList.add('grid');
        bandActiveLC[1].classList.add('hidden');
        bandActiveCardLC.classList.add('hidden');
        titleChosenCategLC.classList.remove('hidden');
        btnCategSelectLC.classList.remove('focus:ring-blue-brand-500');
        btnCategSelectLC.classList.remove('focus:text-white');
        btnCategSelectLC.classList.remove('focus:bg-blue-brand-500');
    });
}

for (let i = 0; i < optChosenSubCategLC.length; i++) {
    optChosenSubCategLC[i].addEventListener('click', () => {
        if (i == 0) {
            cardFilterSubCategoryLC.classList.remove('hidden');
            cardFilterSubCategoryLC.classList.add('flex');
        }else{
            cardFilterSubCategoryLC.classList.add('hidden');
            cardFilterSubCategoryLC.classList.remove('flex');
        }
        viewSubCategListLC.classList.add('hidden');
        titleChosenSubCategLC.innerHTML = optChosenSubCategLC[i].innerHTML;
        cardsFilterSubCategoryLC.classList.remove('hidden');
        cardsFilterSubCategoryLC.classList.add('grid');
        bandActiveLC[1].classList.add('hidden');
        bandActiveCardLC.classList.add('hidden');
        titleChosenSubCategLC.classList.remove('hidden');
        btnSubCategSelectLC.classList.remove('focus:ring-blue-brand-500');
        btnSubCategSelectLC.classList.remove('focus:text-white');
        btnSubCategSelectLC.classList.remove('focus:bg-blue-brand-500');
    });
}

for (let i = 0; i < optChosenDateLC.length; i++) {
    optChosenDateLC[i].addEventListener('click', () => {
        viewDateListLC.classList.add('hidden');
        bandActiveLC[1].innerHTML = optChosenDateLC[i].innerHTML;
        cardsFilterCategoryLC.classList.add('hidden');
        cardsFilterCategoryLC.classList.remove('grid');
        cardsFilterSubCategoryLC.classList.add('hidden');
        cardsFilterSubCategoryLC.classList.remove('grid');
        bandActiveLC[1].classList.remove('hidden');
        bandActiveCardLC.classList.remove('hidden');
        titleChosenCategLC.classList.add('hidden');
        titleChosenSubCategLC.classList.add('hidden');
        btnDategSelectLC.classList.remove('focus:ring-blue-brand-500');
        btnDategSelectLC.classList.remove('focus:text-white');
        btnDategSelectLC.classList.remove('focus:bg-blue-brand-500');
    });
}

btnCategSelectLC.addEventListener('click', () => {
    btnCategSelectLC.classList.toggle('focus:ring-blue-brand-500');
    btnCategSelectLC.classList.toggle('focus:text-white');
    btnCategSelectLC.classList.toggle('focus:bg-blue-brand-500');
    
    btnSubCategSelectLC.classList.remove('focus:ring-blue-brand-500');
    btnSubCategSelectLC.classList.remove('focus:text-white');
    btnSubCategSelectLC.classList.remove('focus:bg-blue-brand-500');
    
    btnDategSelectLC.classList.remove('focus:ring-blue-brand-500');
    btnDategSelectLC.classList.remove('focus:text-white');
    btnDategSelectLC.classList.remove('focus:bg-blue-brand-500');

    viewCategListLC.classList.toggle('hidden');
    viewSubCategListLC.classList.add('hidden');
    viewDateListLC.classList.add('hidden');
});

btnSubCategSelectLC.addEventListener('click', () => {
    btnCategSelectLC.classList.remove('focus:ring-blue-brand-500');
    btnCategSelectLC.classList.remove('focus:text-white');
    btnCategSelectLC.classList.remove('focus:bg-blue-brand-500');
    
    btnSubCategSelectLC.classList.toggle('focus:ring-blue-brand-500');
    btnSubCategSelectLC.classList.toggle('focus:text-white');
    btnSubCategSelectLC.classList.toggle('focus:bg-blue-brand-500');
    
    btnDategSelectLC.classList.remove('focus:ring-blue-brand-500');
    btnDategSelectLC.classList.remove('focus:text-white');
    btnDategSelectLC.classList.remove('focus:bg-blue-brand-500');

    viewCategListLC.classList.add('hidden');
    viewSubCategListLC.classList.toggle('hidden');
    viewDateListLC.classList.add('hidden');
});

btnDategSelectLC.addEventListener('click', () => {
    btnCategSelectLC.classList.remove('focus:ring-blue-brand-500');
    btnCategSelectLC.classList.remove('focus:text-white');
    btnCategSelectLC.classList.remove('focus:bg-blue-brand-500');
    
    btnSubCategSelectLC.classList.remove('focus:ring-blue-brand-500');
    btnSubCategSelectLC.classList.remove('focus:text-white');
    btnSubCategSelectLC.classList.remove('focus:bg-blue-brand-500');
    
    btnDategSelectLC.classList.toggle('focus:ring-blue-brand-500');
    btnDategSelectLC.classList.toggle('focus:text-white');
    btnDategSelectLC.classList.toggle('focus:bg-blue-brand-500');

    viewCategListLC.classList.add('hidden');
    viewSubCategListLC.classList.add('hidden');
    viewDateListLC.classList.toggle('hidden');
});

// Variables utilizadas en el modal nueva categoría

var modalNewCategLC = document.querySelector('#new-category-modal');
var btnModalExitCategLC = document.querySelector('#exit-new-category-modal');
var btnModalCancelCategLC = document.querySelector('#cancel-new-category-modal');
var btnModalAddCategLC = document.querySelector('#add-new-category-modal');
var inputModalCategLC = document.querySelector('#input-new-category-modal');
var txtModalCategLC = document.querySelector('#title-new-category-modal');
var formModalCategLC = document.querySelector('#form-new-category-modal');

// Variables utilizadas, antes y después de realizar los eventos del modal nueva categoría

var btnEditLC = document.querySelector('#edit-list-content');
var btnCancelLC = document.querySelector('#cancel-list-content');
var btnSaveLC = document.querySelector('#save-list-content');
var bandActiveLC = document.querySelectorAll('.action-edit-button'); //selects y el título
var bandActiveCardLC = document.querySelector('#card-list-content'); //tarjetas de todas las categorías y subcategorías
var holderAddVideoCategLC = document.querySelector('#cards-video-category'); //tarjetas de todos los videos agregados a una categoría
var newTitleCategLC = document.querySelector('#new-title-category');
var holderNewCategLC = document.querySelector('#container-new-category');
var btnNewCategLC = document.querySelector('#add-new-category');
var newCardVideoCategory = document.querySelector('#new-card-video-category');
var newCardVideoSubCategory = document.querySelector('#new-card-video-subcategory');

var newTitleCardCategLC = document.querySelector('#new-title-card-category');
var newCategCardCategLC = document.querySelector('#new-category-card-category');
var newIdCardCategLC = document.querySelector('#new-id-card-category');
var newLinkCardCategLC = document.querySelector('#new-link-card-category');

var newTitleCardSubCategLC = document.querySelector('#new-title-card-subcategory');
var newCategCardSubCategLC = document.querySelector('#new-category-card-subcategory');
var newSubCategCardSubCategLC = document.querySelector('#new-subcategory-card-subcategory');
var newIdCardSubCategLC = document.querySelector('#new-id-card-subcategory');
var newLinkCardSubCategLC = document.querySelector('#new-link-card-subcategory');

/* Funcionalidad para los botones editar, guardar y cancelar, perteneciente a la vista list-content  */

btnEditLC.addEventListener('click', () => {
    bandAddVideoCategLC = false;
    bandAddVideoSubCategLC =false;
    bandActiveLC[0].classList.add('hidden');
    bandActiveLC[1].classList.add('hidden');
    bandActiveCardLC.classList.add('hidden');

    cardsFilterCategoryLC.classList.add('hidden');
    cardsFilterCategoryLC.classList.remove('grid');
    cardsFilterSubCategoryLC.classList.add('hidden');
    cardsFilterSubCategoryLC.classList.remove('grid');
    titleChosenCategLC.classList.add('hidden');
    titleChosenSubCategLC.classList.add('hidden');

    btnEditLC.classList.add('hidden');
    btnEditLC.classList.remove('flex');
    btnSaveLC.classList.add('pointer-events-none');
    btnSaveLC.classList.remove('hidden');
    btnCancelLC.classList.remove('hidden');
    holderNewCategLC.classList.remove('hidden');
});

btnCancelLC.addEventListener('click', () => {
    bandActiveLC[1].innerHTML = 'Todos los videos';
    bandActiveLC[0].classList.remove('hidden');
    bandActiveLC[1].classList.remove('hidden');
    bandActiveCardLC.classList.remove('hidden');
    holderAddVideoCategLC.classList.add('hidden');
    holderAddVideoCategLC.classList.remove('grid');
    holderAddVideoSubCategLC.classList.add('hidden');
    holderAddVideoSubCategLC.classList.remove('grid');
    newTitleSubCategLC.classList.add('hidden');
    newTitleCategLC.classList.add('hidden');
    cardAddVideoCategLC.classList.add('hidden');
    cardAddVideoCategLC.classList.remove('flex');
    cardAddVideoSubCategLC.classList.add('hidden');
    cardAddVideoSubCategLC.classList.remove('flex');
    btnEditLC.classList.remove('hidden');
    btnEditLC.classList.add('flex');
    btnSaveLC.classList.add('hidden');
    btnCancelLC.classList.add('hidden');
    holderNewSubCategLC.classList.add('hidden');
    holderNewCategLC.classList.add('hidden');
});

btnSaveLC.addEventListener('click', () => {
    bandActiveLC[1].innerHTML = 'Todos los videos';
    bandActiveLC[0].classList.remove('hidden');
    bandActiveLC[1].classList.remove('hidden');
    bandActiveCardLC.classList.remove('hidden');
    holderAddVideoCategLC.classList.add('hidden');
    holderAddVideoCategLC.classList.remove('grid');
    holderAddVideoSubCategLC.classList.add('hidden');
    holderAddVideoSubCategLC.classList.remove('grid');
    newTitleSubCategLC.classList.add('hidden');
    newTitleCategLC.classList.add('hidden');
    cardAddVideoCategLC.classList.add('hidden');
    cardAddVideoCategLC.classList.remove('flex');
    cardAddVideoSubCategLC.classList.add('hidden');
    cardAddVideoSubCategLC.classList.remove('flex');
    holderNewSubCategLC.classList.add('hidden');
    holderNewCategLC.classList.add('hidden');
    if (bandAddVideoCategLC === true) {
        newTitleCardCategLC.innerHTML = inputTitleModalAddVideoCategLC.value;
        newCategCardCategLC.innerHTML = newTitleCategLC.innerHTML;
        newIdCardCategLC.innerHTML = newIdAddVideoCategLC.innerHTML;
        newLinkCardCategLC.innerHTML = newLinkAddVideoCategLC.innerHTML;
        newCardVideoCategory.classList.remove('hidden');
        newCardVideoCategory.classList.add('flex');
        
    }
    if (bandAddVideoSubCategLC === true) {
        newTitleCardSubCategLC.innerHTML = inputTitleModalAddVideoSubCategLC.value;
        newCategCardSubCategLC.innerHTML = newTitleCategLC.innerHTML;
        newSubCategCardSubCategLC.innerHTML = newTitleSubCategLC.innerHTML;
        newIdCardSubCategLC.innerHTML = newIdAddVideoSubCategLC.innerHTML;
        newLinkCardSubCategLC.innerHTML = newLinkAddVideoSubCategLC.innerHTML;
        newCardVideoSubCategory.classList.remove('hidden');
        newCardVideoSubCategory.classList.add('flex');
    }
    btnEditLC.classList.remove('hidden');
    btnEditLC.classList.add('flex');
    btnSaveLC.classList.add('hidden');
    btnCancelLC.classList.add('hidden');
});

/* Funcionalidad para agregar una nueva categoría, perteneciente a la vista list-content  */

btnNewCategLC.addEventListener('click', () => {
    txtModalCategLC.classList.add('hidden');
    formModalCategLC.reset();
    modalNewCategLC.classList.add('show');
});

btnModalExitCategLC.addEventListener('click', () => {
    modalNewCategLC.classList.remove('show');
});

btnModalCancelCategLC.addEventListener('click', () => {
    modalNewCategLC.classList.remove('show');
});

btnModalAddCategLC.addEventListener('click', () => {
    if (inputModalCategLC.value === null || inputModalCategLC.value.length === 0 || /^\s*$/.test(inputModalCategLC.value)) {
       txtModalCategLC.classList.remove('hidden'); 
    } else {
       newTitleCategLC.innerHTML = inputModalCategLC.value;
       modalNewCategLC.classList.remove('show');
       holderAddVideoCategLC.classList.remove('hidden');
       holderAddVideoCategLC.classList.add('grid');
       newTitleCategLC.classList.remove('hidden');
       holderNewCategLC.classList.add('hidden');
       holderNewSubCategLC.classList.remove('hidden');
    } 
    
});

// Variables utilizadas en el modal nueva subcategoría

var modalNewSubCategLC = document.querySelector('#new-subcategory-modal');
var btnModalExitSubCategLC = document.querySelector('#exit-new-subcategory-modal');
var btnModalCancelSubCategLC = document.querySelector('#cancel-new-subcategory-modal');
var btnModalAddSubCategLC = document.querySelector('#add-new-subcategory-modal');
var inputModalSubCategLC = document.querySelector('#input-new-subcategory-modal');
var txtModalSubCategLC = document.querySelector('#title-new-subcategory-modal');
var formModalSubCategLC = document.querySelector('#form-new-subcategory-modal');

// Variables utilizadas, antes y después de realizar los eventos del modal nueva subcategoría

var newTitleSubCategLC = document.querySelector('#new-title-subcategory');
var holderNewSubCategLC = document.querySelector('#container-new-subcategory');
var btnNewSubCategLC = document.querySelector('#add-new-subcategory');
var holderAddVideoSubCategLC = document.querySelector('#cards-video-subcategory');
var newLinkAddVideoSubCategLC = document.querySelector('#txt-link-video-subcategory');

/* Funcionalidad para agregar una nueva subcategoría, perteneciente a la vista list-content  */

btnNewSubCategLC.addEventListener('click', () => {
    txtModalSubCategLC.classList.add('hidden');
    formModalSubCategLC.reset();
    modalNewSubCategLC.classList.add('show');
});

btnModalExitSubCategLC.addEventListener('click', () => {
    modalNewSubCategLC.classList.remove('show');
});

btnModalCancelSubCategLC.addEventListener('click', () => {
    modalNewSubCategLC.classList.remove('show');
});

btnModalAddSubCategLC.addEventListener('click', () => {
    if (inputModalSubCategLC.value === null || inputModalSubCategLC.value.length === 0 || /^\s*$/.test(inputModalSubCategLC.value)) {
        txtModalSubCategLC.classList.remove('hidden'); 
    } else {
        newTitleSubCategLC.innerHTML = inputModalSubCategLC.value;
        modalNewSubCategLC.classList.remove('show');
        holderAddVideoSubCategLC.classList.remove('hidden');
        holderAddVideoSubCategLC.classList.add('grid');
        newTitleSubCategLC.classList.remove('hidden');
        holderNewSubCategLC.classList.add('hidden');
    }
});

// Variables utilizadas en el modal agregar video a categoría

var modalAddVideoCategLC = document.querySelector('#add-video-category-modal');
var btnModalExitAddVideoCategLC = document.querySelector('#exit-add-video-category-modal');
var btnModalCancelAddVideoCategLC = document.querySelector('#cancel-add-video-category-modal');
var btnModalAddVideoCategLC = document.querySelector('#add-add-video-category-modal');
var inputIdModalAddVideoCategLC = document.querySelector('#input-id-add-video-category-modal');
var textIdModalAddVideoCategLC = document.querySelector('#id-add-video-category-modal');
var inputTitleModalAddVideoCategLC = document.querySelector('#input-title-add-video-category-modal');
var textTitleModalAddVideoCategLC = document.querySelector('#title-add-video-category-modal');
var inputLinkModalAddVideoCategLC = document.querySelector('#input-link-add-video-category-modal');
var textLinkModalAddVideoCategLC = document.querySelector('#link-add-video-category-modal');
var formModalAddVideoCategLC = document.querySelector('#form-add-video-category-modal');


// Variables utilizadas, antes y después de realizar los eventos del modal agregar video a categoría

var btnNewVideoCategLC = document.querySelector('#new-video-category');
var cardAddVideoCategLC = document.querySelector('#card-video-category'); //tarjeta del video agregado a la categoría
var newTitleAddVideoCategLC = document.querySelector('#txt-title-video-category');
var newCategAddVideoCategLC = document.querySelector('#txt-category-video-category');
var newIdAddVideoCategLC = document.querySelector('#txt-id-video-category');
var newLinkAddVideoCategLC = document.querySelector('#txt-link-video-category');
var bandAddVideoCategLC = false;
var bandAddVideoSubCategLC = false;

/* Funcionalidad para agregar un nuevo video a categoría, perteneciente a la vista list-content  */

btnNewVideoCategLC.addEventListener('click', () => {
    textIdModalAddVideoCategLC.classList.add('hidden');
    textTitleModalAddVideoCategLC.classList.add('hidden');
    textLinkModalAddVideoCategLC.classList.add('hidden');
    formModalAddVideoCategLC.reset();
    modalAddVideoCategLC.classList.add('show');
});

btnModalExitAddVideoCategLC.addEventListener('click', () => {
    modalAddVideoCategLC.classList.remove('show');
});

btnModalCancelAddVideoCategLC.addEventListener('click', () => {
    modalAddVideoCategLC.classList.remove('show');
});

btnModalAddVideoCategLC.addEventListener('click', () => {
    textIdModalAddVideoCategLC.classList.add('hidden');
    textTitleModalAddVideoCategLC.classList.add('hidden');
    textLinkModalAddVideoCategLC.classList.add('hidden');
    if (inputIdModalAddVideoCategLC.value === null || inputIdModalAddVideoCategLC.value.length === 0 || /^\s*$/.test(inputIdModalAddVideoCategLC.value)) {
        textIdModalAddVideoCategLC.classList.remove('hidden');
    } else {
        if (inputTitleModalAddVideoCategLC.value === null || inputTitleModalAddVideoCategLC.value.length === 0 || /^\s*$/.test(inputTitleModalAddVideoCategLC.value)) {
            textTitleModalAddVideoCategLC.classList.remove('hidden');
        } else {
            if (inputLinkModalAddVideoCategLC.value === null || inputLinkModalAddVideoCategLC.value.length === 0 || /^\s*$/.test(inputLinkModalAddVideoCategLC.value)) {
                textLinkModalAddVideoCategLC.classList.remove('hidden');
            } else {
                newTitleAddVideoCategLC.innerHTML = inputTitleModalAddVideoCategLC.value;
                newCategAddVideoCategLC.innerHTML = newTitleCategLC.innerHTML;
                newIdAddVideoCategLC.innerHTML = inputIdModalAddVideoCategLC.value;
                newLinkAddVideoCategLC.innerHTML = inputLinkModalAddVideoCategLC.value;
                bandAddVideoCategLC = true;
                btnSaveLC.classList.remove('pointer-events-none');
                modalAddVideoCategLC.classList.remove('show');
                cardAddVideoCategLC.classList.remove('hidden');
                cardAddVideoCategLC.classList.add('flex');
            }
            
        }
    }
});

// Variables utilizadas en el modal agregar video a subcategoría

var modalAddVideoSubCategLC = document.querySelector('#add-video-subcategory-modal');
var btnModalExitAddVideoSubCategLC = document.querySelector('#exit-add-video-subcategory-modal');
var btnModalCancelAddVideoSubCategLC = document.querySelector('#cancel-add-video-subcategory-modal');
var btnModalAddVideoSubCategLC = document.querySelector('#add-add-video-subcategory-modal');
var inputIdModalAddVideoSubCategLC = document.querySelector('#input-id-add-video-subcategory-modal');
var textIdModalAddVideoSubCategLC = document.querySelector('#id-add-video-subcategory-modal');
var inputTitleModalAddVideoSubCategLC = document.querySelector('#input-title-add-video-subcategory-modal');
var textTitleModalAddVideoSubCategLC = document.querySelector('#title-add-video-subcategory-modal');
var inputLinkModalAddVideoSubCategLC = document.querySelector('#input-link-add-video-subcategory-modal');
var textLinkModalAddVideoSubCategLC = document.querySelector('#link-add-video-subcategory-modal');
var formModalAddVideoSubCategLC = document.querySelector('#form-add-video-subcategory-modal');

// Variables utilizadas, antes y después de realizar los eventos del modal agregar video a subcategoría

var btnNewVideoSubCategLC = document.querySelector('#new-video-subcategory');
var cardAddVideoSubCategLC = document.querySelector('#card-video-subcategory'); //tarjeta del video agregado a la subcategoría
var newTitleAddVideoSubCategLC = document.querySelector('#txt-title-video-subcategory');
var newCategAddVideoSubCategLC = document.querySelector('#txt-category-video-subcategory');
var newSubCategAddVideoSubCategLC = document.querySelector('#txt-subcategory-video-subcategory');
var newIdAddVideoSubCategLC = document.querySelector('#txt-id-video-subcategory');
var newLinkAddVideoSubCategLC = document.querySelector('#txt-link-video-subcategory');

/* Funcionalidad para agregar un nuevo video a subcategoría, perteneciente a la vista list-content  */

btnNewVideoSubCategLC.addEventListener('click', () => {
    textIdModalAddVideoSubCategLC.classList.add('hidden');
    textTitleModalAddVideoSubCategLC.classList.add('hidden');
    textLinkModalAddVideoSubCategLC.classList.add('hidden');
    formModalAddVideoSubCategLC.reset();
    modalAddVideoSubCategLC.classList.add('show');
});

btnModalExitAddVideoSubCategLC.addEventListener('click', () => {
    modalAddVideoSubCategLC.classList.remove('show');
});

btnModalCancelAddVideoSubCategLC.addEventListener('click', () => {
    modalAddVideoSubCategLC.classList.remove('show');
});

btnModalAddVideoSubCategLC.addEventListener('click', () => {
    textIdModalAddVideoSubCategLC.classList.add('hidden');
    textTitleModalAddVideoSubCategLC.classList.add('hidden');
    textLinkModalAddVideoSubCategLC.classList.add('hidden');
    if (inputIdModalAddVideoSubCategLC.value === null || inputIdModalAddVideoSubCategLC.value.length === 0 || /^\s*$/.test(inputIdModalAddVideoSubCategLC.value)) {
        textIdModalAddVideoSubCategLC.classList.remove('hidden');
    } else {
        if (inputTitleModalAddVideoSubCategLC.value === null || inputTitleModalAddVideoSubCategLC.value.length === 0 || /^\s*$/.test(inputTitleModalAddVideoSubCategLC.value)) {
            textTitleModalAddVideoSubCategLC.classList.remove('hidden');
        } else {
            if (inputLinkModalAddVideoSubCategLC.value === null || inputLinkModalAddVideoSubCategLC.value.length === 0 || /^\s*$/.test(inputLinkModalAddVideoSubCategLC.value)) {
                textLinkModalAddVideoSubCategLC.classList.remove('hidden');
            } else {
                newTitleAddVideoSubCategLC.innerHTML = inputTitleModalAddVideoSubCategLC.value;
                newCategAddVideoSubCategLC.innerHTML = newTitleCategLC.innerHTML;
                newSubCategAddVideoSubCategLC.innerHTML = newTitleSubCategLC.innerHTML;
                newIdAddVideoSubCategLC.innerHTML = inputIdModalAddVideoSubCategLC.value;
                newLinkAddVideoSubCategLC.innerHTML = inputLinkModalAddVideoSubCategLC.value;
                bandAddVideoSubCategLC = true;
                btnSaveLC.classList.remove('pointer-events-none');
                modalAddVideoSubCategLC.classList.remove('show');
                cardAddVideoSubCategLC.classList.remove('hidden');
                cardAddVideoSubCategLC.classList.add('flex');
            }
            
        }
    }
});