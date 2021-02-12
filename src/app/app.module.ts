import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarsComponent } from './pages/cars/cars.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppcontentComponent } from './components/appcontent/appcontent.component';

// Service
import { CarService } from './services/etc/car.service';
import { HttpClientModule } from '@angular/common/http';

const PageComponent = [
  CarsComponent,
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
@NgModule({
  declarations: [
    AppComponent,

    PageLayout,
    PageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
