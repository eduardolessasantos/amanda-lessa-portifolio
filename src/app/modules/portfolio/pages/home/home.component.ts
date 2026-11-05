import { Component } from '@angular/core';

// Components
import { HeaderComponent } from '../../components/header/header.component';
import { EducationComponent } from '../../components/education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public currentYear = new Date().getFullYear();
}
