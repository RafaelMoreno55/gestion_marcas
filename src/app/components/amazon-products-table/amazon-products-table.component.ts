import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ProductService } from '@service/product/product.service';
import { ListService } from '@service/list/list.service';
import { JwtProductI, ProductI, Product, ProductD } from '@model/product.model';
import { CargarScriptsService } from '../../cargar-scripts.service';
import { FileService } from '../../file.service';
import { ListJwt } from '@model/list.model';

@Component({
  selector: 'app-amazon-products-table',
  templateUrl: './amazon-products-table.component.html',
  styleUrls: ['./amazon-products-table.component.scss']
})
export class AmazonProductsTableComponent implements OnInit, OnDestroy {
  opcion:boolean = false;
  private subscription: Subscription = new Subscription();
  public lists: ListJwt[] = [];
  public products: ProductI[] = [];
  formCreateProduct = new FormGroup({
    name: new FormControl(null, Validators.required),
    link: new FormControl(null, Validators.required),
    mark: new FormControl(null, Validators.required),
    id_list: new FormControl('', Validators.required),
  })
  formUpdateProduct = new FormGroup({
    _id: new FormControl(null, Validators.required),
    name_u: new FormControl(null, Validators.required),
    link_u: new FormControl(null, Validators.required),
    mark_u: new FormControl(null, Validators.required),
    id_list_u: new FormControl(null, Validators.required),
    date_discharged_u: new FormControl(null),
    status_u: new FormControl(null, Validators.required),
    name_list_u: new FormControl(null, Validators.required)
  })
  constructor(
    private _cargaScripts:CargarScriptsService,
    private fileService: FileService,
    private productService: ProductService,
    private listService: ListService,
    private fb: FormBuilder
    ) {
    _cargaScripts.Carga(["functionAmazonProductsTable"]);
   }

  ngOnInit(): void {
    this.getProducts()
    this.getLists()
    this.formCreateProduct = this.fb.group({
      name: [null, Validators.required],
      link: [null, Validators.required],
      mark: [null, Validators.required],
      id_list: ['', Validators.required]
    })
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe()
  }

  getProducts() {
    const id_customer = this.getId()
    this.subscription.add(
      // @ts-ignore
      this.productService.getProducts(id_customer)
      .subscribe(
        (res) => {
          console.log(`res`, res)
          //@ts-ignore
          this.products = res.body
          console.log(`this.products`, this.products)
        },
        (err) => {
          console.log(`err`, err)
        }
      )
    )
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

  handleSelect(product: ProductI) {
    this.formUpdateProduct = this.fb.group({
      _id: [product._id, Validators.required],
      name_u: [product.name, Validators.required],
      link_u: [product.link, Validators.required],
      mark_u: [product.mark, Validators.required],
      id_list_u: [product.id_list, Validators.required],
      date_discharged_u: [product.date_discharged],
      status_u: [product.status, Validators.required],
      name_list_u: [product.name_list, Validators.required],
    })

    const modalEditProdTableAPT = <HTMLElement> document.querySelector('#edit-products-table-modal');

    modalEditProdTableAPT.classList.add('show');
  }

  handleUpdateProduct() {
    const product = {
      _id: this._id?.value,
      name: this.name_u?.value,
      link: this.link_u?.value,
      mark: this.mark_u?.value,
      id_list: this.id_list_u?.value,
      date_discharged: this.date_discharged_u?.value,
      status: this.status_u?.value,
      name_list: this.name_list_u?.value
    }
    this.subscription.add(
      this.productService.updateProduct(product)
      .subscribe(
        (res) => {
          this.getProducts()
        },
        (err) => {
          console.log(`err`, err)
        }
      )
    )
    const modalEditProdTableAPT = <HTMLElement> document.querySelector('#edit-products-table-modal');

    modalEditProdTableAPT.classList.remove('show');
    //this.mensaje();
  }

  handleCreateProduct() {
    const product = {
      _id: this._id?.value,
      name: this.name?.value,
      link: this.link?.value,
      mark: this.mark?.value,
      id_list: this.id_list?.value,
      date_discharged: new Date,
      status: true
    }
    this.subscription.add(
      this.productService.saveProduct(product)
      .subscribe(
        (res) => {
          this.getProducts()
        },
        (err) => {
          console.log(`err`, err)
        }
      )
    )
    this.btnModalClose();
  }

  changeList(event: any) {
    this.id_list?.setValue(event.target.value)
  }

  getId() {
    const id = sessionStorage.getItem('id')
    return id
  }

  get name() {
    return this.formCreateProduct.get('name')
  }
  get link() {
    return this.formCreateProduct.get('link')
  }
  get id_list() {
    return this.formCreateProduct.get('id_list')
  }
  get mark() {
    return this.formCreateProduct.get('mark')
  }

  get _id() {
    return this.formUpdateProduct.get('_id')
  }
  get name_u() {
    return this.formUpdateProduct.get('name_u')
  }
  get link_u() {
    return this.formUpdateProduct.get('link_u')
  }
  get date_discharged_u() {
    return this.formUpdateProduct.get('date_discharged_u')
  }
  get id_list_u() {
    return this.formUpdateProduct.get('id_list_u')
  }
  get mark_u() {
    return this.formUpdateProduct.get('mark_u')
  }
  get status_u() {
    return this.formUpdateProduct.get('status_u')
  }
  get name_list_u() {
    return this.formUpdateProduct.get('name_list_u')
  }

  downloadExcel(): void {
    const fileName = `reporte_${Math.random()}.xlsx`;
    this.fileService.getReport().subscribe(response => {
      this.manageExcelFile(response, fileName);
    });
  }

  manageExcelFile(response: any, fileName: string): void {
    const dataType = response.type;
    const binaryData = [];
    binaryData.push(response);

    const filtePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
    const downloadLink = document.createElement('a');
    downloadLink.href = filtePath;
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  btnOpciones(){
    const opciones = <HTMLElement> document.getElementById('opciones');
    opciones.classList.toggle('hidden');
    
  }

  btnModalClose() {
    const modal = <HTMLElement> document.getElementById('new-products-table-modal');
    modal.classList.remove('show');
  }

  mensaje() {
    const btnEditAPT = <HTMLElement> document.querySelector('#edit-amazon-products-table');
    const btnCancelAPT = <HTMLElement> document.querySelector('#cancel-amazon-products-table');
    const btnSaveAPT = <HTMLElement> document.querySelector('#save-amazon-products-table');
    const btnActionProdTableAPT:NodeListOf<Element> = document.querySelectorAll('.actions-products-table');
    for (var element of btnActionProdTableAPT as any) {
      element.classList.remove('hidden');
    }
    btnEditAPT.classList.add('hidden');
    btnEditAPT.classList.remove('flex');
    btnSaveAPT.classList.remove('hidden');
    btnCancelAPT.classList.remove('hidden');
  }
}
