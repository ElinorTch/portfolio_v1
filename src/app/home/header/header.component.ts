import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeDownload04 } from '@ng-icons/huge-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ hugeDownload04 })],
})
export class HeaderComponent {}
