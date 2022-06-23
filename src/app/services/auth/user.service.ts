import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { JwtUserI, UserI } from '@model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API: string = 'https://api-vimeo.herokuapp.com/user';
  constructor(private httpClient: HttpClient) {}

  login(user: UserI): Observable <JwtUserI> {
    return this.httpClient.post<JwtUserI>(`${this.API}/login`,user)
      .pipe(tap(
        (res: JwtUserI) => {
          if (res) {
            // save token
            this.saveToken(res.body.user, res.body.id_customer);
          }
        })
      );
  }

  private saveToken(username: string, id: string){
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('id', id)
  }
  public getToken(){
    return sessionStorage.getItem('username')
  }
  public getId(){
    return sessionStorage.getItem('id')
  }

}
