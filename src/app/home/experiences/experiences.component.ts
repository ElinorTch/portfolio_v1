import { Component, HostListener } from '@angular/core';
import { EXPERIENCES } from './experience';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(max-width: 699px)'])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });
  }

  setActive(value: string, index: number): void {
    this.activeExp = value;
    this.indexExp = index;
  }
}
