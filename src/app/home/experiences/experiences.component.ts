import { Component, HostListener } from '@angular/core';
import { EXPERIENCES } from './experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences = EXPERIENCES;
  activeExp = this.experiences[0].enterprise;
  indexExp = 0;
  isMobile!: Boolean;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 700;
  }

  setActive(value: string, index: number): void {
    this.activeExp = value;
    this.indexExp = index;
  }
}
