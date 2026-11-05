import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/office.svg',
      alt: 'Pacote Office (Word, Excel, PowerPoint) - CIUG',
      title: 'Pacote Office (Word, Excel, PowerPoint) - CIUG',
    },
    {
      src: 'assets/icons/knowledge/administrative.svg',
      alt: 'Rotinas Administrativas e Apoio Operacional - SENAI',
      title: 'Rotinas Administrativas e Apoio Operacional - SENAI',
    },
    {
      src: 'assets/icons/knowledge/rh.svg',
      alt: 'Assistência de RH e Gestão de Pessoas - SENAI / MBA',
      title: 'Assistência de RH e Gestão de Pessoas - SENAI / MBA',
    },
    {
      src: 'assets/icons/knowledge/customer-service.svg',
      alt: 'Atendimento ao Público e Comercial - SENAI',
      title: 'Atendimento ao Público e Comercial - SENAI',
    },
    {
      src: 'assets/icons/knowledge/logistics.svg',
      alt: 'Técnico em Logística e Expedição de Materiais - SENAC / SENAI',
      title: 'Técnico em Logística e Expedição de Materiais - SENAC / SENAI',
    },
    {
      src: 'assets/icons/knowledge/archive.svg',
      alt: 'Organização, Arquivamento e Tramitação de Processos',
      title: 'Organização, Arquivamento e Tramitação de Processos',
    },
    {
      src: 'assets/icons/knowledge/invoice.svg',
      alt: 'Emissão de Notas Fiscais e Gestão Documental',
      title: 'Emissão de Notas Fiscais e Gestão Documental',
    },
    {
      src: 'assets/icons/knowledge/finance.svg',
      alt: 'Administração e Estratégia em Finanças',
      title: 'Administração e Estratégia em Finanças',
    },
  ]);
}
