import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/services/etc/people.service';
import { CarService, OptionSearch } from 'src/app/services/etc/car.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarService, PeopleService]
})
export class CarsComponent implements OnInit {
  asyncSelected: string = "";
  constructor(
    private car_service: CarService,
    private people_service: PeopleService
  ) {
    this.initialForm();
  }

  ngOnInit(): void {
  }

  agent: any;
  lease: any;
  ownership: any;
  items: any;
  total_items: number = 0;
  maxSize = 15;
  bigCurrentPage = 2;
  editable:boolean = false;

  option: OptionSearch = {
    sp: 0,
    lp: 15
  }

  // form search
  searchForm = new FormGroup({
    operator: new FormControl(''),
    category: new FormControl(''),
    status: new FormControl(''),
    vat: new FormControl(''),
    number: new FormControl(''),
    agent: new FormControl(''),
    ownership: new FormControl(''),
  })

  form = new FormGroup({
    imp_date: new FormControl('', Validators.required),
    exp_date: new FormControl('', Validators.required),
    operator: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    no: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
    vat: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    agent: new FormControl('', Validators.required),
    ownership: new FormControl('', Validators.required),
    lease: new FormControl('', Validators.required),
    casis: new FormControl('', Validators.required),
    engine: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    total_weight: new FormControl('', Validators.required),
  })

  // เปิดโหลดข้อมูลครั้งแรก
  initialForm() {
    this.loadAgent();
    this.loadLease();
    this.loadOwnership();
    this.onLoadCar();
  }

  // โหลดข้อมูลตัวแทน
  loadAgent() {
    this.people_service.loadAgent().then(result => {
      this.agent = result.items;
    })
  }

  // โหลดข้อมูลผู้เช่าซื้อ
  loadLease() {
    this.people_service.loadlease().then(result => {
      this.lease = result.items;
    })
  }

  // โหลดข้อมูลผู้ถือกรรมสิทธิ์
  loadOwnership() {
    this.people_service.loadOwnership().then(result => {
      this.ownership = result.items;
      console.log(this.ownership)
    })
  }

  // แสดงข้อมูลรถทั้งหมด
  onLoadCar() {
    this.car_service.loadCar(this.option).then(result => {
      this.items = result.items;
      this.total_items = result.total_items;
    }).catch(err => {
    })
  }

  onView(_id: number) {
    this.editable=true;
    this.car_service.loadCarById(_id).then(result => {
      this.form.controls['imp_date'].setValue(result.imp_date);
      this.form.controls['exp_date'].setValue(result.exp_date);
      this.form.controls['operator'].setValue(result.operator_id);
      this.form.controls['category'].setValue(result.category_id);
      this.form.controls['no'].setValue(result.no);
      this.form.controls['number'].setValue(result.number);
      this.form.controls['province'].setValue(result.prov);
      this.form.controls['vat'].setValue(result.vat);
      this.form.controls['status'].setValue(result.status_id);
      this.form.controls['brand'].setValue(result.brand_id);
      this.form.controls['agent'].setValue(result.agent_id);
      this.form.controls['ownership'].setValue(result.ownership_id);
      this.form.controls['lease'].setValue(result.lease_id);
      this.form.controls['casis'].setValue(result.cassis);
      this.form.controls['engine'].setValue(result.engine);
      this.form.controls['weight'].setValue(result.weight);
      this.form.controls['total_weight'].setValue(result.total_weight);
    })
  }

  onCancel(){
    this.form.reset();
    this.editable = false;
  }

  onDelete(_id:number){
    this.car_service.deleteCar(_id).then(result=>{
      alert('ลบข้อมูลสำเร็จ');
      this.onLoadCar();
    }).catch(err=>{
      console.log(err);
    })
  }

  onSearch() {
    this.option.operator = this.searchForm.controls['operator'].value;
    this.option.category = this.searchForm.controls['category'].value;
    this.option.status = this.searchForm.controls['status'].value;
    this.option.vat = this.searchForm.controls['vat'].value;
    this.option.number = this.searchForm.controls['number'].value;
    this.option.agent = this.searchForm.controls['agent'].value;
    this.option.ownership = this.searchForm.controls['ownership'].value;
    this.onLoadCar();
  }

  onSubmit() {
    if (this.form.invalid) {
      alert("กรอกข้อมูลให้ครบถ้วน");
    }
    console.log(this.form.value);
    this.car_service.createCar(this.form.value).then(result => {
      alert('เพิ่มข้อมูลสำเร็จ');
    }).catch(err => {
      alert(err);
      console.log(err);
    })
  }

  // Data Operator
  operator: IModel[] = [
    {
      _id: 1,
      name: "เกรซ"
    },
    {
      _id: 2,
      name: "ทรัพย์"
    },
    {
      _id: 3,
      name: "ลักษมณ"
    },
    {
      _id: 4,
      name: "อมรพงษ์"
    },
    {
      _id: 8,
      name: "ประกอบการลูกค้า"
    }
  ];

  // Data Category
  category: IModel[] = [
    {
      _id: 1,
      name: "กระบะบรรทุก"
    },
    {
      _id: 2,
      name: "กึ่งพ่วง"
    },
    {
      _id: 3,
      name: "กึ่งพ่วงวัสดุยาว"
    },
    {
      _id: 4,
      name: "บรรทุกของเหลว"
    },
    {
      _id: 5,
      name: "บรรทุกเฉพาะกิจ"
    },
    {
      _id: 6,
      name: "ตู้บรรทุก"
    },
    {
      _id: 7,
      name: "พ่วง"
    },
    {
      _id: 8,
      name: "ลากจูง"
    },
    {
      _id: 9,
      name: "บรรทุกวัตถุอันตราย"
    }
  ]

  // Data Province
  province: IModel[] = [
    {
      _id: 1,
      name: "สฎ"
    },
    {
      _id: 2,
      name: "นฐ"
    }
  ]

  // Data Status
  status: IModel[] = [
    {
      _id: 3,
      name: "999"
    },
    {
      _id: 5,
      name: "1"
    },
    {
      _id: 9,
      name: "89"
    },
    {
      _id: 10,
      name: "ตัดเงื่อนไข"
    },
    {
      _id: 12,
      name: "รอจด"
    },
    {
      _id: 13,
      name: "ว่าง"
    },
    {
      _id: 14,
      name: "*"
    },
    {
      _id: 15,
      name: "โยก"
    },
    {
      _id: 16,
      name: "ลอย"
    },
    {
      _id: 19,
      name: "แอบต่อภาษี"
    },
    {
      _id: 21,
      name: "ย้ายออก"
    },
    {
      _id: 22,
      name: "อายัด"
    }
  ]

  // Data Brand
  brand: IModel[] = [
    {
      _id: 1,
      name: "FUSO"
    },
    {
      _id: 2,
      name: "HINO"
    },
    {
      _id: 3,
      name: "ISUZU"
    },
    {
      _id: 4,
      name: "KATO"
    },
    {
      _id: 5,
      name: "KOBELCO"
    },
    {
      _id: 6,
      name: "KOMATSU"
    },
    {
      _id: 7,
      name: "MAN"
    },
    {
      _id: 8,
      name: "MITSUBISHI"
    },
    {
      _id: 9,
      name: "NISSAN"
    },
    {
      _id: 10,
      name: "SAMMIT"
    },
    {
      _id: 11,
      name: "SCANIA"
    },
    {
      _id: 12,
      name: "TADANO"
    },
    {
      _id: 13,
      name: "TOYOTA"
    },
    {
      _id: 14,
      name: "UD"
    },
    {
      _id: 15,
      name: "VOLVO"
    },
    {
      _id: 16,
      name: "XCMG"
    },
    {
      _id: 17,
      name: "พ่วง"
    },
    {
      _id: 18,
      name: "-"
    }
  ]

  // มีการเปลี่ยนหน้า Pagination
  pageChanged(event: any): void {
    this.option.sp = event.page - 1;
    this.onLoadCar();
  }

  page: string = "Cars";
}

export interface IModel {
  _id: number,
  name: string
}

export interface IFrmSearch {
  operator?: number,
  category?: number,
  status?: number,
  vat?: string,
  number?: string,
  agent?: number,
  ownership?: number
}