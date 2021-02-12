import { Injectable } from '@angular/core';
import { HttpService } from '../api/http.service';
import { AuthenService } from './authen.service';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpService,
    private authen: AuthenService
  ) { }

  loadCar(option:OptionSearch){
    var url:string=`car/_get.php?sp=${option.sp}&lp=${option.lp}`;
    if(option.id){
      url = `car/_get.php?id=${option.id}`;
    }else if(option.operator){
      url=`car/_get.php?sp=${option.sp}&lp=${option.lp}&operator=${option.operator}&category=${option.category}&status=${option.status}&vat=${option.vat}&number=${option.number}&agent=${option.agent}&ownership=${option.ownership}`;
    }
    return this.http.requestGet(url,this.authen.getAuthenticated())
      .toPromise() as Promise<any>
  }
}

export interface OptionSearch{
  sp:Number,
  lp:Number,
  id?:Number,
  operator?:Number,
  category?:Number,
  status?:Number,
  vat?:String,
  number?:Number,
  agent?:Number,
  ownership?:Number,
}