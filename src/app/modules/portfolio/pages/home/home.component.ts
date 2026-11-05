import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { EducationComponent } from '../../components/education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    EducationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public currentYear = new Date().getFullYear();
}
