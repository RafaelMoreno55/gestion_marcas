import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@service/auth/user.service'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public username: string | null = "";
  public optionSelect: string = "";
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.getUsername()
  }

  getUsername(){
    this.username = this.userService.getToken();
  }

  btnSelect(option:boolean){
    if(option){
      this.router.navigate(['manage-brand']);
      this.optionSelect = "1";
    }else {
      this.router.navigate(['manage-abc']);
      this.optionSelect = "2";
    }
  }



}
