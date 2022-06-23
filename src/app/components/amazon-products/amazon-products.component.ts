import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ListI, ListJwt } from '@model/list.model';
import { ListService } from '@service/list/list.service';
import { Subscription } from 'rxjs';
import { CargarScriptsService } from '../../cargar-scripts.service';
@Component({
  selector: 'app-amazon-products',
  templateUrl: './amazon-products.component.html',
  styleUrls: ['./amazon-products.component.scss']
})
export class AmazonProductsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public list: ListI[] = [];
  public lists: ListJwt[] = [];
  formUploadList = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  constructor(private _cargaScripts:CargarScriptsService, private listService: ListService,  private fb: FormBuilder) { 
    _cargaScripts.Carga(["functionAmazonProducts"]);
  }

  ngOnInit(): void {
    this.getLists()
    this.formUploadList = this.fb.group({
      name: [null, Validators.required]
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getLists() {
    this.subscription.add(
      // @ts-ignore
      this.listService.getLists(this.getId())
      .subscribe(
        (res) => {
          // @ts-ignore
          this.lists = res.body.body
        }, 
        (err) => {
          console.log(`err`, err)
        }
      )
    )
  }

  handleSaveList() {
    const newList: ListI = {
      // @ts-ignore
      id_customer: this.getId(),
      name: this.name?.value
    }
    console.log(`newList`, newList)
    this.subscription.add(
      this.listService.createList(newList)
      .subscribe(
        (res) => {
          this.getLists()
        }, 
        (err) => {
          console.log(`err`, err)
        }
      )
    )
  }

  getId() {
    const id = sessionStorage.getItem('id')
    return id
  }

  get name(){
    return this.formUploadList.get('name')
  }
 
}
