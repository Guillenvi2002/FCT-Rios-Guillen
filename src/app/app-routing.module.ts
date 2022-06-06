import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RiosComponent } from './pages/rios/rios.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "courses", component: CoursesComponent},
  {path: "feature", component: FeaturesComponent},
  {path: "team", component: EquipoComponent},
  {path: "appoint", component: AppointmentComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "rios", component: RiosComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: ErrorComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
