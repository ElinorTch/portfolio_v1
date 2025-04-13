import { Component, inject, OnInit } from '@angular/core';
import { Dialog, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { Link } from '../link';

@Component({
  selector: 'app-responsive-nav',
  standalone: true,
  imports: [],
  templateUrl: './responsive-nav.component.html',
  styleUrl: './responsive-nav.component.scss',
})
export class ResponsiveNavComponent {
  data = inject(DIALOG_DATA);
  links!: Link[];

  ngOnInit(): void {
    this.links = this.data.links;
  }
}
