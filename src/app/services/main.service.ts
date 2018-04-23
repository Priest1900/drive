import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class MainService {
  constructor(private http: HttpClient) {}

  // pushData(data) {
  //   return this.http.post('https://kpriza-4d47b.firebaseio.com/', data);
  // }
}
