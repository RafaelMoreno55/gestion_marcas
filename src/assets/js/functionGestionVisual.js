/**
 * Modal para cargar las imágenes
 */

var btnImageAñadir = document.querySelectorAll('.btn-image-modal');
var imageModal = document.getElementById('image-modal');
var svgImageModalCerrar = document.getElementById('btn-image-modal-cerrar');
var btnImageModalSubir = document.getElementById('btn-image-modal-subir');
var btnImageModalCancelar = document.getElementById('btn-image-modal-cancelar');
var enlaceImageModalCargar = document.getElementById('link-image-modal-cargar');
var infoImageModalCompleta = document.getElementById('carga-imagen-completa');
var cardImgDefault = document.querySelectorAll('.card-image-default');
var cardImgAdded = document.querySelectorAll('.card-image-cargado');

var bandCargarImage = false;
var bandCardImg = [false,false,false,false];
var idBtnImageAñadir = 'grid-0';
var listIdImageAñadir = ['grid-1','grid-2','grid-3','grid-4'];

for (var i = 0; i < btnImageAñadir.length; i++) {
    btnImageAñadir[i].addEventListener('click', function(event){
    event.preventDefault()
    idBtnImageAñadir = event.currentTarget.id;
    imageModal.classList.add('show');
    })
}

svgImageModalCerrar.addEventListener('click', () => {
    if (bandCargarImage) {
        enlaceImageModalCargar.classList.toggle('hidden');
        infoImageModalCompleta.classList.toggle('hidden');
        bandCargarImage = false;
    }
    imageModal.classList.remove('show');
});

btnImageModalCancelar.addEventListener('click', () => {
    if (bandCargarImage) {
        enlaceImageModalCargar.classList.toggle('hidden');
        infoImageModalCompleta.classList.toggle('hidden');
        bandCargarImage = false;
    }
    imageModal.classList.remove('show');
});

btnImageModalSubir.addEventListener('click', () => {
    if (bandCargarImage) {
        enlaceImageModalCargar.classList.toggle('hidden');
        infoImageModalCompleta.classList.toggle('hidden');
        bandCargarImage = false;

        if (idBtnImageAñadir === listIdImageAñadir[0] && bandCardImg[0] !== true) {
            cardImgDefault[0].classList.toggle('hidden');
            cardImgAdded[0].classList.toggle('hidden');
            bandCardImg[0] = true;
        } else {
            if (idBtnImageAñadir === listIdImageAñadir[1] && bandCardImg[1] !== true) {
                cardImgDefault[1].classList.toggle('hidden');
                cardImgAdded[1].classList.toggle('hidden');
                bandCardImg[1] = true;
            } else {
                if (idBtnImageAñadir === listIdImageAñadir[2] && bandCardImg[2] !== true) {
                    cardImgDefault[2].classList.toggle('hidden');
                    cardImgAdded[2].classList.toggle('hidden');
                    bandCardImg[2] = true;
                } else {
                    if (idBtnImageAñadir === listIdImageAñadir[3] && bandCardImg[3] !== true) {
                        cardImgDefault[3].classList.toggle('hidden');
                        cardImgAdded[3].classList.toggle('hidden');
                        bandCardImg[3] = true;
                    }
                }
            }
        }

        imageModal.classList.remove('show');
    }

});

//implementacion de las imagenes 
enlaceImageModalCargar.addEventListener('click', () => {
    enlaceImageModalCargar.classList.toggle('hidden');
    infoImageModalCompleta.classList.toggle('hidden');
    bandCargarImage = true;
});

/**
 * Modal para añadir una nueva paleta de colores
 */

var btnSelectAñadir = document.getElementById("btn-select-modal");
var selectModal = document.getElementById('select-modal');
var svgSelectModalCerrar = document.getElementById('btn-select-modal-cerrar');
var btnSelectModalCrear = document.getElementById('btn-select-modal-crear');
var btnSelectModalCancelar = document.getElementById('btn-select-modal-cancelar');
var formSelectModal = document.getElementById('form-select-modal');
var inputSelectModal = document.getElementById('input-select-modal');
var newColorsPaleta = document.getElementById('new-colors-paleta');
var msjInvalidSelectModal = document.getElementById('invalid-name-select-modal');
 
btnSelectAñadir.addEventListener('click', () => {
    msjInvalidSelectModal.classList.add('hidden');
    formSelectModal.reset();
    selectModal.classList.add('show');
});
 
svgSelectModalCerrar.addEventListener('click', () => {
    contenidoSelect.innerHTML = optionSelectActive;
    selectModal.classList.remove('show');
});

btnSelectModalCancelar.addEventListener('click', () => {
    contenidoSelect.innerHTML = optionSelectActive;
    selectModal.classList.remove('show');
});

btnSelectModalCrear.addEventListener('click', () => {
    if (inputSelectModal.value === null || inputSelectModal.value.length === 0 || /^\s*$/.test(inputSelectModal.value)) {
        msjInvalidSelectModal.classList.remove('hidden');
    } else {
        newColorsPaleta.innerHTML = inputSelectModal.value;
        contenidoSelect.innerHTML = newPalette.innerHTML;
        activarNewPalette.classList.remove('hidden');
        selectModal.classList.remove('show');
    }
});

/**
 * Mostrar/Ocultar y funciones de los botones de editar, cancelar y guardar
 */

var btnEditar = document.querySelector('#btn-editar');
var btnGuardar = document.querySelector('#btn-guardar');
var btnCancelar = document.querySelector('#btn-cancelar');
var inputText = document.querySelectorAll('.input-text');
var formulario = document.querySelector('#id-form');
var msjSuccessful = document.querySelector('#label-successful');
var enlaceCardsImage = document.querySelectorAll('.card-image');

msjSuccessful.addEventListener('click', () => {
    msjSuccessful.classList.toggle('hidden');
});

btnEditar.addEventListener('click', () => {

    btnCancelar.classList.toggle('hidden');
    btnGuardar.classList.toggle('hidden');
    btnEditar.classList.toggle('hidden');
    btnSelect.disabled = false;
    btnSelect.classList.toggle('opacity-50');
    btnSelect.classList.toggle('pointer-events-none');
    for (var i = 0; i < inputText.length; i++) {
        inputText[i].disabled = false;
        inputText[i].classList.toggle('placeholder-gray-brand-300');
        inputText[i].classList.toggle('placeholder-gray-brand-800');
        inputText[i].classList.toggle('text-gray-brand-300');
        inputText[i].classList.toggle('text-gray-brand-800');
        inputText[i].classList.toggle('shadow-md');
        
    }
    for (var i = 0; i < enlaceCardsImage.length; i++) {
        enlaceCardsImage[i].classList.toggle('cursor-pointer');
        enlaceCardsImage[i].classList.toggle('pointer-events-none');
    }
 });

btnCancelar.addEventListener('click', () => {
    btnCancelar.classList.toggle('hidden');
    btnGuardar.classList.toggle('hidden');
    btnEditar.classList.toggle('hidden');
    // formulario.reset();
    contenidoSelect.innerHTML = optionSelectDefault.innerHTML;
    btnSelect.disabled = true;
    btnSelect.classList.toggle('opacity-50');
    btnSelect.classList.toggle('pointer-events-none');
    for (var i = 0; i < inputText.length; i++) {
        inputText[i].disabled = true;
        inputText[i].classList.toggle('placeholder-gray-brand-300');
        inputText[i].classList.toggle('placeholder-gray-brand-800');
        inputText[i].classList.toggle('text-gray-brand-300');
        inputText[i].classList.toggle('text-gray-brand-800');
        inputText[i].classList.toggle('shadow-md');
    }
    for (var i = 0; i < enlaceCardsImage.length; i++) {
        enlaceCardsImage[i].classList.toggle('cursor-pointer');
        enlaceCardsImage[i].classList.toggle('pointer-events-none');
    }
    for (var i = 0; i < bandCardImg.length; i++) {
        if (bandCardImg[i] === true) {
            cardImgDefault[i].classList.toggle('hidden');
            cardImgAdded[i].classList.toggle('hidden');
            bandCardImg[i] = false;
        }
    }
    activarNewPalette.classList.add('hidden');
});

btnGuardar.addEventListener('click', () => {
    btnCancelar.classList.toggle('hidden');
    btnGuardar.classList.toggle('hidden');
    btnEditar.classList.toggle('hidden');
    btnSelect.disabled = true;
    btnSelect.classList.toggle('opacity-50');
    btnSelect.classList.toggle('pointer-events-none');
    for (var i = 0; i < inputText.length; i++) {
        inputText[i].disabled = true;
        inputText[i].classList.toggle('placeholder-gray-brand-300');
        inputText[i].classList.toggle('placeholder-gray-brand-800');
        inputText[i].classList.toggle('text-gray-brand-300');
        inputText[i].classList.toggle('text-gray-brand-800');
        inputText[i].classList.toggle('shadow-md');
    }
    for (var i = 0; i < enlaceCardsImage.length; i++) {
        enlaceCardsImage[i].classList.toggle('cursor-pointer');
        enlaceCardsImage[i].classList.toggle('pointer-events-none');
    }
    msjSuccessful.classList.toggle('hidden');
});

/**
 * Funcionalidad del select personalizado
 */

var btnSelect = document.querySelector('#btn-select');
var opciones = document.querySelector('#opciones');
var contenidoSelect = document.querySelector('#btn-select .contenido-select');
var newPalette = document.querySelector('#paleta-modo-petpet');
var activarNewPalette = document.querySelector('#activar-nueva-paleta');
var optionSelectDefault = document.querySelector('#opciones > .opcion .opcion-default ');
var optionSelectActive = optionSelectDefault.innerHTML;

document.querySelectorAll('#opciones > .opcion .opcion-contenido').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        if (e.currentTarget.id !== btnSelectAñadir.id) {
            optionSelectActive = contenidoSelect.innerHTML;
        }
		opciones.classList.toggle('hidden');
	});
});

document.addEventListener('click', (evt) => {
    let targetElement = evt.target;
    if (!btnSelect.contains(targetElement) && !opciones.contains(targetElement)) {
        opciones.classList.add('hidden');
    }
});

btnSelect.addEventListener('click', () => {
    console.log(`click`)
	opciones.classList.toggle('hidden');
});