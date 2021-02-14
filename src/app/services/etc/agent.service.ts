import { Injectable } from '@angular/core';
import { HttpService } from '../api/http.service';
import { AuthenService } from './authen.service';


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private http: HttpService,
    private authen: AuthenService
  ) { }

  createAgent(name:string){
    var url:string=`agent/_post.php?`;

    return this.http.requestPost(url,{name:name})
      .toPromise() as Promise<any>
  }
}

export interface ICar{
  imp_date:string,
  exp_date:string,
  operator:number,
  category:number,
  no:number,
  number:string,
  province:string,
  vat:string,
  status:number,
  brand:number,
  agent:number,
  ownership:number,
  lease:number,
  casis:string,
  engine:string,
  weight:number,
  total_weight:number
}
export interface OptionSearch{
  sp:number,
  lp:number,
  id?:number,
  operator?:number,
  category?:number,
  status?:number,
  vat?:String,
  number?:String,
  agent?:number,
  ownership?:number,
}