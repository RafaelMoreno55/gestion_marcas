import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() option: String = "";
  
  click:boolean = true;
  isOpen:boolean = false;

  @HostListener ('document:click', ['$event.path'])
  public clickedOut(event: { target: any; }) {
    var menuMarcas = <HTMLElement> document.getElementById('menu_marcas');
    var menuAvatar = <HTMLElement> document.getElementById('menu_avatar');

    if(!this.eRef.nativeElement.contains(event.target)){
      if(!this.isOpen){
        this.isOpen = true;
      }else{
        menuMarcas.style.display = 'none';
        menuAvatar.style.display = 'none';
        this.isOpen = false;
        this.click = true;
      }
    }
  }

  constructor(public router:Router, private eRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.option);
  }

  btnMenuMarca() {
    var menuMarcas = <HTMLElement> document.getElementById('menu_marcas');
    var menuAvatar = <HTMLElement> document.getElementById('menu_avatar');
    
    if (this.click){
      menuMarcas.style.display ='block';
      menuAvatar.style.display = 'none';
      this.click = false;
    }else {
      menuAvatar.style.display = 'none';
      menuMarcas.style.display = 'none';
      this.click = true;
    }
    
  }

  btnMenuAvatar() {
    var menu_marcas = <HTMLElement> document.getElementById('menu_marcas');
    var menu_avatar = <HTMLElement> document.getElementById('menu_avatar');

    if(this.click){
        menu_avatar.style.display = 'block';
            menu_marcas.style.display = 'none';
            this.click = false; 
    }else {
        menu_avatar.style.display = 'none';
        menu_marcas.style.display = 'none';
        this.click = false;
    }
  }

}
