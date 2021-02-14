import { Injectable } from '@angular/core';
import { HttpService } from '../api/http.service';
import { AuthenService } from './authen.service';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpService,
    private authen: AuthenService
  ) { }

  loadOwnership() {
    var url: string = `ownership/_get.php`;

    return this.http.requestGet(url, this.authen.getAuthenticated())
      .toPromise() as Promise<any>
  }

  loadAgent() {
    var url: string = `agent/_get.php`;

    return this.http.requestGet(url, this.authen.getAuthenticated())
      .toPromise() as Promise<any>
  }

  loadlease() {
    var url: string = `lease/_get.php`;

    return this.http.requestGet(url, this.authen.getAuthenticated())
      .toPromise() as Promise<any>
  }
}
