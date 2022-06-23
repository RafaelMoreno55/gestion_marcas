import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { JwtVimeoUploadI, ListI, ListJwt } from '@model/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  readonly API: string = 'https://api-vimeo.herokuapp.com/list/';
  constructor(private httpClient: HttpClient) { }

  getLists(id_customer: string) {
    return this.httpClient.get(this.API, {
      params: {
        // @ts-ignore
        id_customer,
      },
      observe: 'response'
    });
    // return this.httpClient.get<JwtVimeoUploadI>(`${this.API}`)
  }
  createList(list: ListI): Observable <ListJwt> {
    return this.httpClient.post<ListJwt>(`${this.API}create`, list)
  }
}
