import { Component } from '@angular/core';
import { Link } from './link';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeMenu01 } from '@ng-icons/huge-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: provideIcons({ hugeMenu01 }),
})
export class NavbarComponent {
  show: boolean = false;

  showNavbar(): void {
    this.show = !this.show;
    document.body.classList.toggle('overflow-hidden', this.show);
  }

  links: Link[] = [
    {
      name: 'Accueil',
      target: '#header',
    },
    {
      name: 'Expériences',
      target: '#experiences',
    },
  ];
}
