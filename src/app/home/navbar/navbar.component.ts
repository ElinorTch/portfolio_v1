import { Component } from '@angular/core';
import { Link } from './link';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeMenu01 } from '@ng-icons/huge-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: provideIcons({ hugeMenu01 }),
})
export class NavbarComponent {
  links: Link[] = [
    {
      name: 'Accueil',
      target: '',
    },
    {
      name: 'Expériences',
      target: '',
    },
    {
      name: 'Compétences',
      target: '',
    },
    {
      name: 'Contact',
      target: '',
    },
  ];
}
