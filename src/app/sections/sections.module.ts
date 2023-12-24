import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  exports:[
    AboutComponent,HomeComponent
  ],
  imports: [
    CommonModule
  ],
  
})
export class SectionsModule { }


