import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataStorageService {

  baseUrl: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.baseUrl = 'https://kpriza-4d47b.firebaseio.com/';
  }

  storeToCart() {

  }

  getCart() {

  }

  getData(): Observable<any> {
    const token = this.authService.getToken();
    return this.http.get(`${this.baseUrl}`)
      .map(response => {
        return response;
      })
      .catch(error => Observable.throw(error));
  }
}
