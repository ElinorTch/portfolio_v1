import { Component, HostListener, inject } from '@angular/core';
import { Link } from './link';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeMenu01 } from '@ng-icons/huge-icons';
import { CommonModule } from '@angular/common';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { ResponsiveNavComponent } from './responsive-nav/responsive-nav.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIcon, CommonModule, DialogModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: provideIcons({ hugeMenu01 }),
})
export class NavbarComponent {
  show: boolean = false;
  dialog = inject(Dialog);
  showNavbar = true;
  private lastScrollY = window.scrollY;

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

  openDialog() {
    this.dialog.open(ResponsiveNavComponent, {
      minWidth: '300px',
      data: {
        links: this.links,
      },
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;

    this.showNavbar = currentScrollY < this.lastScrollY || currentScrollY < 10;

    this.lastScrollY = currentScrollY;
  }
}
