import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { JwtVisualI, VisualI } from '@model/visual.model';

@Injectable({
  providedIn: 'root'
})
export class VisualService {

  readonly API: string = 'https://api-vimeo.herokuapp.com/visual/';
  constructor(private httpClient: HttpClient) {}

  getVisual(): Observable<JwtVisualI> {
    return this.httpClient.get<JwtVisualI>(this.API)
  }
  createVisual(visual: VisualI) {
    return this.httpClient.post(`${this.API}create`, visual)
  }
  updateVisual(visual: VisualI) {
    return this.httpClient.put(`${this.API}update`, visual)
  }
}
