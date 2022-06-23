import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CargarScriptsService } from '../../cargar-scripts.service';
import { VisualService } from '@service/visual/visual.service';
import { VisualI } from '@model/visual.model';

interface ColorSelected {
  first?: string,
  second?: string,
  text?: string
}
@Component({
  selector: 'app-visual-management',
  templateUrl: './visual-management.component.html',
  styleUrls: ['./visual-management.component.scss']
})
export class VisualManagementComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public visual: VisualI;
  public visualC: VisualI = { typography_1: '', typography_2: '', colors: [''] };
  public colorSelected: ColorSelected = {};
  constructor(private _cargaScripts:CargarScriptsService, private visualService: VisualService) {
    _cargaScripts.Carga(["functionGestionVisual"]);
    this.visual = {
      typography_1: '', 
      typography_2: '', 
      colors: ['']
    };
   }

  ngOnInit(): void {
    this.getVisualConfig()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getVisualConfig() {
    this.subscription.add(
      this.visualService.getVisual()
      .subscribe(
        (res) => {
          this.visual = res.body[0]
          this.visualC = {...res.body[0]}
          this.handleSelectColor()
        },
        (err) => {
          console.log(`err`, err)
        }
      )
    )
  }
  handleSaveVisual() {
    if(typeof this.visual.colors == 'object'){
      this.visual.colors = this.visual.colors.join(',')
    }
    if(this.visual._id){
      return this.handleUpdateVisual()
    }
    this.subscription.add(
      this.visualService.createVisual(this.visual)
      .subscribe(
        (res) => {
          console.log(`res`, res)
        },
        (err) => {
          console.log(`err`, err)
        }
      )
    )
  }

  handleCancel(){
    this.visual = {...this.visualC}
  }
  
  handleUpdateVisual(){
    this.subscription.add(
      this.visualService.updateVisual(this.visual)
      .subscribe(
        (res) => {
          console.log(`res`, res)
        },
        (err) => {
          console.log(`err`, err)
        }
      )
    )    
  }
  handleColor(color1: string, color2: string){
    this.visual.colors = [color1, color2]
  }

  handleSelectColor(){
    this.visual.colors
    const colors = {
      '#474747,#4687f9': {
        first: 'w-6 h-6 border border-gray-brand-700 bg-gray-brand-700',
        second: 'w-6 h-6 border ml-2 border-blue-brand-200 bg-blue-brand-200',
        text: 'Predeterminado'
      },
      '#1c0232,#234361': {
        first: 'w-6 h-6 border border-purple-dark-800 bg-purple-dark-800',
        second: 'w-6 h-6 border ml-2 border-green-dark-800 bg-green-dark-800',
        text: 'Dark mode'
      },
      '#664fa7,#dd9e4c': {
        first: 'w-6 h-6 border border-purple-verano-600 bg-purple-verano-600',
        second: 'w-6 h-6 border ml-2 border-yellow-verano-700 bg-yellow-verano-700',
        text: 'Verano'
      },
      '#2a29c2,#91ebff': {
        first: 'w-6 h-6 border border-blue-primavera-700 bg-blue-primavera-700',
        second: 'w-6 h-6 border ml-2 border-green-primavera-300 bg-green-primavera-300',
        text: 'Primavera'
      },
      '#567157,#df7c58': {
        first: 'w-6 h-6 border rounded-sm border-gray-termico-600 bg-gray-termico-600',
        second: 'w-6 h-6 border ml-2 border-red-termico-400 bg-red-termico-400',
        text: 'Térmico'
      },
    }
    // @ts-ignore
    this.colorSelected = colors[this.visual.colors]
    console.log(`this.colorSelected`, this.colorSelected)
  }

}
