import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { ProjectsComponent } from "./Components/projects/projects.component";
import { ContactComponent } from "./Components/contact/contact.component";


const routes: Routes = [
  { path: "", component: AboutComponent},
  { path: "resume", component: ResumeComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
