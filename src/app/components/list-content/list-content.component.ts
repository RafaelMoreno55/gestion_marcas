import { Component, ElementRef, HostListener, OnInit, ViewRef, OnDestroy, ViewChild } from '@angular/core';
import { CargarScriptsService } from '../../cargar-scripts.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { VimeoService } from '@service/vimeo/vimeo.service';
import { VimeoI, VimeoUploadI } from '@model/vimeo.model';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})

export class ListContentComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  isOpen: boolean = false;
  isThereVideo: boolean = true
  bandVideo: boolean = false
  @ViewChild('valueInput') valueInput: any
  public file!: string;
  public videos: VimeoI[] = [];
  public auxvideos: VimeoI[] = [];
  //public btnModal = <HTMLElement> document.getElementById('addVideo');
  public option: boolean = false;
  formUploadVideo = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    file: new FormControl(null, Validators.required)
  })
  search = new FormControl('');
  constructor(private _cargaScripts:CargarScriptsService, private eRef:ElementRef, private vimeoService: VimeoService, private fb: FormBuilder) {
    this.search.valueChanges.pipe(
      map(search => search?.toLowerCase().trim()),
      debounceTime(300),
      distinctUntilChanged(),
      filter(search => search !== '' && search?.length > 2),
      tap(search => this.searchVideo(search)),
    ).subscribe();
   }

  ngOnInit(): void {
    this.modalTime();
    this.getVideos()
    this.formUploadVideo = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      file: [null, Validators.required]
    })
  }
  ngOnDestroy(): void{
    this.subscription.unsubscribe()
  }

  getVideos(){
    this.subscription.add(
      this.vimeoService.getVideos()
      .subscribe(
        (res) => {
          this.videos = res.body;
          this.auxvideos = res.body.slice();
          this.isThereVideo = true
          console.log(`res`, res)
        },
        (error) => {
          console.log(`error`, error)
        }
      )
    )
  }

  captureFile(event:any){
    const modalFilingError = <HTMLElement> document.getElementById('filing-error');
    const fileVideo = event.target.files[0];
    console.log(fileVideo);
    const ext = fileVideo.name.split('.').pop();
    if(ext !== 'mp4'){
      modalFilingError.classList.add('show');
    }else {
      alert("Se ha seleccionado un video")
      return
    }
  }
  
  btnAddVideos() {
    const btnModal = <HTMLElement> document.getElementById('addVideo');
    btnModal.classList.add('show');
    this.isOpen = true;
  }

  btnCloseModal() {
    const btnModal = <HTMLElement> document.getElementById('addVideo');
    btnModal.classList.remove('show');
    this.option = false;
  }

  handleUploadVideo() {
    const videos: VimeoUploadI = {
      name: this.name?.value,
      description: this.description?.value,
      video: this.fileVideo?.value
    }
    const formData = new FormData()
    formData.append('name', videos.name)
    formData.append('description', videos.description)
    formData.append('video', videos.video)
    this.modalTime();
    this.subscription.add(
      this.vimeoService.uploadVideo(formData)
      .subscribe(
        (res) => {
          // y aca que ya se descargo
          setTimeout(() => {
            this.getVideos()
          }, 1500);
        },
        (error) => {
          console.log(`error`, error)
        }
      )
    )
    this.btnCloseModal();
    this.option = false;
  }

  handlePickerVideo(event: any){
    const filingError = <HTMLElement> document.getElementById('filing-error');
    const fileVideo = event.target.files[0];
    const ext = fileVideo.name.split('.').pop();
    if(ext !== 'mp4'){
      filingError.classList.add('show');
    }else {
      this.option = true;
      this.file = fileVideo.name;
      console.log(this.option);
        
    }
    this.fileVideo?.setValue(event.target.files[0])
  }

  get name(){
    return this.formUploadVideo.get('name')
  }

  get description(){
    return this.formUploadVideo.get('description')
  }

  get fileVideo(){
    return this.formUploadVideo.get('file')
  }

  modalTime () {
    const modal = <HTMLElement> document.getElementById('charging');
    modal.classList.add('show');
    setTimeout(() => {
      modal.classList.remove('show');
    }, 3000);
  }

  filingError(){
    const modal = <HTMLElement> document.getElementById('filing-error');
    modal.classList.add('show');
  }

  searchVideo(valueToSearch: string){
    this.auxvideos.length = 0
    this.bandVideo = false
    this.videos.forEach((value) => {      
      if (value.name.toLowerCase().trim().includes(valueToSearch)) {
        this.auxvideos.push(value)
        this.bandVideo = true
      }
    })
    if (this.bandVideo) {
      this.isThereVideo = true
    }else{
      this.isThereVideo = false
    }
  }

  btnFilingError(){
    const modal = <HTMLElement> document.getElementById('filing-error');
    modal.classList.remove('show');
  }

  onClear(){
    this.valueInput.nativeElement.value = ''
    this.auxvideos.length = 0
    this.auxvideos = this.videos.slice()
    this.isThereVideo = true
  }
 
}
