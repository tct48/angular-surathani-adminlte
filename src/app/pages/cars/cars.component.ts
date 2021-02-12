import { Component, OnInit } from '@angular/core';
import { CarService, OptionSearch } from 'src/app/services/etc/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers:[CarService]
})
export class CarsComponent implements OnInit {

  constructor(
    private car_service:CarService
  ) {
    this.initialForm();
  }

  ngOnInit(): void {
  }

  agent: any;
  lease: any;
  ownership: any;
  items:any;
  option:OptionSearch={
    sp:0,
    lp:15
  }

  initialForm(){
    this.loadAgent();
    this.loadLease();
    this.loadOwnership();
    this.onLoadCar();
  }

  // โหลดข้อมูลตัวแทน
  loadAgent() {
    this.agent = [
      {
        _id: 0,
        name: "any"
      },
      {
        _id: 1,
        name: "วรพล มหาชัย"
      },
      {
        _id: 2,
        name: "อินทิรา เอี่ยมเดช"
      }
    ]
  }

  // โหลดข้อมูลผู้เช่าซื้อ
  loadLease() {
    this.lease = [
      {
        _id: 0,
        name: "any"
      },
      {
        _id: 1,
        name: "กฤษ สินธนกุล"
      },
      {
        _id: 2,
        name: "เทวา กำปาเชื้อ"
      }
    ]
  }

  // โหลดข้อมูลผู้ถือกรรมสิทธิ์
  loadOwnership() {
    this.ownership = [
      {
        _id: 0,
        name: "any"
      },
      {
        _id: 1,
        name: "ซุน โงกุน"
      },
      {
        _id: 2,
        name: "เจ้าชาย เบจิต้า"
      }
    ]
  }

  onLoadCar(){
    this.car_service.loadCar(this.option).then(result=>{
      this.items = result.items;
      console.log(this.items);
    }).catch(err=>{
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
      _id: 2,
      name: "ลบชั่วคราว"
    },
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


  page: string = "Cars";
}

export interface IModel {
  _id: number,
  name: string
}
