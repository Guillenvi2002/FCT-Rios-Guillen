import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RiosComponent } from './pages/rios/rios.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "courses", component: CoursesComponent},
  {path: "rios", component: RiosComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: ErrorComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
