import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-brand',
  templateUrl: './manage-brand.component.html',
  styleUrls: ['./manage-brand.component.scss']
})
export class ManageBrandComponent implements OnInit {
  opcion: number;

  constructor() { 
    this.opcion = 1;
  }

  ngOnInit(): void {
  }

  btnEditarEvent() {
    
  }
}
