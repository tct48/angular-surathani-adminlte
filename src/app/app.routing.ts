import { Routes, RouterModule } from '@angular/router'
import { AppURL } from './app.url'
import { CarsComponent } from './pages/cars/cars.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const RouterLists: Routes = [
  { path: '', component: DashboardComponent },
  { path: AppURL.Dashboard, component: DashboardComponent },
  { path: AppURL.Car, component: CarsComponent },
  { path: AppURL.CreateCar, component: CreateCarComponent }
]

export const AppRouting = RouterModule.forRoot(RouterLists);
