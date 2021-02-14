import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarsComponent } from './pages/cars/cars.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppcontentComponent } from './components/appcontent/appcontent.component';

// Service
import { CarService } from './services/etc/car.service';
import { HttpClientModule } from '@angular/common/http';

// ValorSoftware
import { NgSelect2Module } from 'ng-select2';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrashComponent } from './pages/trash/trash.component';
import { AgentComponent } from './pages/agent/agent.component';
import { OwnershipComponent } from './pages/ownership/ownership.component';
import { LeaseComponent } from './pages/lease/lease.component';


const PageComponent = [
  CarsComponent,
  TrashComponent,
  CreateCarComponent,
  DashboardComponent,
  AppcontentComponent,
];

const PageLayout = [
  AppmenuComponent,
  AppfooterComponent,
  AppheaderComponent,
  AppsettingComponent,
];

const IAnugularComponent = [
  FormsModule,
  NgSelect2Module,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  TooltipModule.forRoot(),
  TypeaheadModule.forRoot(),
  PaginationModule.forRoot()  
]

const EAngularComponent= [
  TooltipModule,
  TypeaheadModule,
  PaginationModule,
  
]
@NgModule({
  declarations: [
    AppComponent,
    PageLayout,
    PageComponent,
    AgentComponent,
    OwnershipComponent,
    LeaseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    HttpClientModule,
    IAnugularComponent,
  ],
  exports:[
    EAngularComponent
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
