import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtVimeoI, JwtVimeoUploadI, VimeoI, VimeoUploadI } from '@model/vimeo.model';

@Injectable({
  providedIn: 'root'
})
export class VimeoService {
  readonly API: string = 'https://api-vimeo.herokuapp.com/video/';
  constructor(private httpClient: HttpClient) { }
  
  getVideos(): Observable<JwtVimeoI> {
    return this.httpClient.get<JwtVimeoI>(this.API)
  }

  uploadVideo(video: FormData): Observable <JwtVimeoUploadI> {
    return this.httpClient.post<JwtVimeoUploadI>(`${this.API}upload`,video)
      .pipe(tap(
        (res: JwtVimeoUploadI) => {
          if (res) {
            console.log(`res`, res)
          }
        })
      );
  }
}
