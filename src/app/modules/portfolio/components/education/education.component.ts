import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEducationItem } from '../../interface/IEducation.interface';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  public academicList = signal<IEducationItem[]>([
    {
      title: 'MBA Executivo em Gestão de Pessoas e RH',
      institution: 'Faculdade Líbano',
      period: 'Concluído',
      type: 'academic',
      badge: 'Pós-Graduação',
    },
    {
      title: 'Bacharelado em Administração',
      institution: 'Faculdade Lusófona RJ',
      period: 'Concluído',
      type: 'academic',
      badge: 'Graduação',
    },
    {
      title: 'Administração: Estratégia em Finanças',
      institution: 'Faculdade de Minas',
      period: 'Concluído',
      type: 'academic',
      badge: 'Especialização',
    },
  ]);
}
