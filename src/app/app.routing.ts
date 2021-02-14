import { Routes, RouterModule } from '@angular/router'
import { AppURL } from './app.url'
import { AgentComponent } from './pages/agent/agent.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeaseComponent } from './pages/lease/lease.component';
import { OwnershipComponent } from './pages/ownership/ownership.component';
import { TrashComponent } from './pages/trash/trash.component';

const RouterLists: Routes = [
  { path: '', component: DashboardComponent },
  { path: AppURL.Dashboard, component: DashboardComponent },
  { path: AppURL.Car, component: CarsComponent },
  { path: AppURL.CreateCar, component: CreateCarComponent },
  { path: AppURL.Trash, component:TrashComponent },
  { path: AppURL.Agent, component:AgentComponent },
  { path: AppURL.Ownership, component:OwnershipComponent },
  { path: AppURL.Lease, component:LeaseComponent }
]

export const AppRouting = RouterModule.forRoot(RouterLists);
