import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
//import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-visual-manage-abc',
  templateUrl: './visual-manage-abc.component.html',
  styleUrls: ['./visual-manage-abc.component.scss']
})
export class VisualManageAbcComponent implements OnInit {

  @ViewChild('toggleButton') toggleButton: ElementRef | undefined;
  @ViewChild('menu') menu: ElementRef | undefined;
  // estado: String = '';
  // isactive: Boolean = false;
  // private _toggleMenuSubject$: BehaviorSubject<Boolean>;
  // private _toggleMenu$: Observable<Boolean>;

  // constructor(private eRef: ElementRef){
  //   this.estado = "no hay click";
  //   console.log(this.estado)
  // }

  constructor(private renderer: Renderer2){
    /**
     * This events get called by all clicks on the page
     */
     this.renderer.listen('window', 'click',(e:Event)=>{
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
        // if(e.target !== this.toggleButton?.nativeElement && e.target!==this.menu?.nativeElement){
        //     this.isMenuOpen=false;
        // }
        if(!this.toggleButton?.nativeElement.contains(e.target) && !this.menu?.nativeElement.contains(e.target)){
          this.isMenuOpen=false;
      }
      });
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
  }


  btnEditarEvent() {
   var btnEditar = document.getElementById('btn-Editar');
   var btnGuardar = document.getElementById('btn-Guardar');
   var btnCancelar = document.getElementById('btn-Cancelar');
   var inputText:NodeListOf<Element> = document.querySelectorAll('.input-text');
   var enlaceCardsImage:NodeListOf<Element> = document.querySelectorAll('.card-image');
   var btnSelect = <HTMLButtonElement> document.getElementById('btn-select');

   btnEditar?.classList.toggle('hidden');
   btnGuardar?.classList.toggle('hidden');
   btnCancelar?.classList.toggle('hidden');
   btnSelect.disabled = false;
   btnSelect.classList.toggle('opacity-50');
   btnSelect.classList.toggle('pointer-events-none');

   for (var input of inputText as any){
     input.disabled = false;
     input.classList.toggle('placeholder-gray-brand-300');
     input.classList.toggle('placeholder-gray-800');
     input.classList.toggle('text-gray-brand-300');
     input.classList.toggle('text-gray-brand-800');
     input.classList.toggle('shadow-md');
   }

   for (var enlaceCards of enlaceCardsImage as any){
     enlaceCards.classList.toggle('cursor-pointer');
     enlaceCards.classList.toggle('pointer-events-none');
   }
  }

  btnCancelarEvent() {
    //Obteniendo los valores de los botones
    var btnCancelar = document.getElementById('btn-Cancelar');
    var btnEditar = document.getElementById('btn-Editar');
    var btnGuardar = document.getElementById('btn-Guardar');

    var btnSelect = <HTMLButtonElement> document.getElementById('btn-select');
    var inputText:NodeListOf<Element> = document.querySelectorAll('.input-text');
    var enlaceCardsImage:NodeListOf<Element> = document.querySelectorAll('.card-image');
    var bandCardImg = [false, false, false, false];
    var cardImgDefault:NodeListOf<Element> = document.querySelectorAll('.card-image-default');
    var cardImgAdd:NodeListOf<Element> = document.querySelectorAll('.card-image-cargado');
    var activarNewPalette = document.getElementById('activar-nueva-paleta');
    var formulario = document.getElementById('id-form');
    var contenidoSelect = document.querySelector('#btn-select .contenido-seelct');
    var optionSelectDefault = document.querySelector('#opciones > .opcion opcion-default');
    
    btnCancelar?.classList.toggle('hidden');
    btnEditar?.classList.toggle('hidden');
    btnGuardar?.classList.toggle('hidden');
    formulario?.onreset;
    //No se
    //contenidoSelect?.innerHTML = optionSelectDefault?.innerHTML;
    btnSelect.disabled = true;
    btnSelect.classList.toggle('opacity-50');
    btnSelect.classList.toggle('pointer-events-none');

    for(var input of inputText as any){
      input.disabled = true;
      input.classList.toggle('placeholder-gray-brand-300');
      input.classList.toggle('placeholder-gray-brand-800');
      input.classList.toggle('text-gray-brand-300');
      input.classList.toggle('text-gray-brand-800');
      input.classList.toggle('shadow-md');
    }

    for (var i = 0; i < enlaceCardsImage.length; i++){
      enlaceCardsImage[i].classList.toggle('cursor-pointer');
      enlaceCardsImage[i].classList.toggle('pointer-events-none');
      
    }

    for (var i = 0; i < bandCardImg.length; i++){
      if(bandCardImg){
        cardImgDefault[i].classList.toggle('hidden');
        cardImgAdd[i].classList.toggle('hidden');
        bandCardImg[i] = false;
      }
      activarNewPalette?.classList.add('hidden');
    }
  }

  btnGuardarEvent(){
    var btnCancelar = document.getElementById('btn-Cancelar');
    var btnEditar = document.getElementById('btn-Editar');
    var btnGuardar = document.getElementById('btn-Guardar');
    var btnSelect = <HTMLButtonElement> document.getElementById('btn-select');
    var inputText:NodeListOf<Element> = document.querySelectorAll('.input-text');
    var enlaceCardsImage:NodeListOf<Element> = document.querySelectorAll('.card-image');
    var msjSuccessful = document.getElementById('label-successful');

    btnCancelar?.classList.toggle('hidden');
    btnEditar?.classList.toggle('hidden');
    btnGuardar?.classList.toggle('hidden');
    btnSelect.disabled = true;
    btnSelect.classList.toggle('opacity-50');
    btnSelect.classList.toggle('pointer-events-none');

    for(var input of inputText as any){
      input.disabled = true;
      input.classList.toggle('placeholder-gray-brand-300');
      input.classList.toggle('placeholder-gray-brand-800');
      input.classList.toggle('text-gray-brand-300');
      input.classList.toggle('text-gray-brand-800');
      input.classList.toggle('shadow-md');
    }

    for (var enlace of enlaceCardsImage as any) {
      enlace.classList.toggle('cursor-pointer');
      enlace.classList.toggle('pointer-events-none');
    }

    msjSuccessful?.classList.toggle('hidden');
  }

  //Para minimizar el mensaje de Successful 
  msjSuccessful() {
    var msj = document.getElementById('label-successful');
    msj?.classList.toggle('hidden');
  }

  btnSelectEvent() {
    var opciones = document.querySelector('#opciones');
    opciones?.classList.toggle('hidden');
  }

  colorPalete() {
    /* var opciones = document.querySelectorAll('#opciones > .opcion .opcion-contenido');
    var contenidoSelect = <HTMLButtonElement> document.querySelector('#btn-select .contenido-select');
    var btnSelectAdd = <HTMLButtonElement> document.getElementById('btn-select-modal');
    var predeterminado = document.getElementById('predeterminado');
    var optionSelectDefault = document.querySelector('#opciones > .opcion .opcion-default');
    var optionSelectActive = optionSelectDefault?.innerHTML;
    
    console.log(btnSelectAdd.id);
    console.log();
    
    console.log(contenidoSelect.innerHTML); */

    let opciones = document.querySelector('#opciones');
    opciones?.classList.add('hidden');
    
  }

  


  // @HostListener("click")
  // clickedin() {
  //   this.estado = 'click dentro de componente';
  //   console.log(this.estado);
  // }

  // @HostListener('document:click', ['$event'])
  // clickedout(event: any) {
  //   if (this.eRef.nativeElement.contains(event.target)) {
  //     this.estado = "clickedinside";
  //     console.log(event.target)
  //   }else{
  //     this.estado = "clickedoutside";
  //     console.log(this.estado)
  //   }
  // }
}
