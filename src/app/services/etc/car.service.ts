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
    }else if(option.operator || option.number || option.vat){
      url=`car/_get.php?sp=${option.sp}&lp=${option.lp}&operator=${option.operator}&category=${option.category}&status=${option.status}&vat=${option.vat}&number=${option.number}&agent=${option.agent}&ownership=${option.ownership}`;
    }

    console.log(url)
    return this.http.requestGet(url,this.authen.getAuthenticated())
      .toPromise() as Promise<any>
  }

  loadCarById(_id:number){
    var url:string=`car/_get.php?id=${_id}`;
    
    return this.http.requestGet(url,this.authen.getAuthenticated())
      .toPromise() as Promise<any>
  }

  deleteCar(_id:number){
    var url:string=`car/_delete.php?_id=${_id}`;
    console.log(url)
    return this.http.requestDelete(url,this.authen.getAuthenticated())
      .toPromise() as Promise<any>
  }

  createCar(model:ICar){
    var url:string=`car/_post.php?`;

    return this.http.requestPost(url,model)
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