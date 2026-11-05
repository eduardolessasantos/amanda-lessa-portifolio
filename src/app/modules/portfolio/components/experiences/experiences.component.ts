import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Estágio — Apoio às Rotinas Administrativas',
        p: 'Tribunal Regional Eleitoral (TRE) | 1 ano e 3 meses',
      },
      text: '<p>Apoio ativo às rotinas administrativas do órgão público, atuando com organização metódica e arquivamento de processos e documentos oficiais. Execução e acompanhamento da tramitação ágil de processos e expedientes entre os diversos setores do tribunal, conforme as prioridades e demandas internas.</p>',
    },
    {
      summary: {
        strong: 'Apoio Administrativo & Emissão de Documentos',
        p: 'Contelli Contabilidade | 45 dias',
      },
      text: '<p>Atuação em rotinas de escritório contábil, compreendendo a emissão de notas fiscais eletrônicas, conferência, triagem, organização e arquivamento de documentos contábeis e fiscais. Recepção e atendimento inicial aos clientes e parceiros com cordialidade e eficiência.</p>',
    },
    {
      summary: {
        strong: 'Estágio — Atendimento ao Público & Call Center',
        p: 'Clínica Amor Saúde São Gonçalo | 3 meses',
      },
      text: '<p>Atendimento ao público de forma presencial e por meio de call center, fornecendo orientações gerais aos pacientes, realizando agendamento, cancelamento e confirmação de consultas e exames médicos, além de prestar suporte contínuo às rotinas administrativas da clínica médica.</p>',
    },
  ]);
}
