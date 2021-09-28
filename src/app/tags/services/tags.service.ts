import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetTags } from 'src/app/mock/mock-tags';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }
  public getTags(): Observable<{tags: string[]}> {
    const url = environment.apiUrl + '/tags';
    return this.http.get<{tags: string[]}>(url);// of({tags: GetTags()}); //;
  }
}
