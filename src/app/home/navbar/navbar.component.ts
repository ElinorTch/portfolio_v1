import { Component } from '@angular/core';
import { Link } from './link';
import test from 'node:test';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
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
