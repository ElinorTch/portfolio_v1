import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  hugeGithub,
  hugeGitlab,
  hugeLeetcode,
  hugeLinkedin02,
} from '@ng-icons/huge-icons';
import { SocialLink } from './social-link';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
  viewProviders: [
    provideIcons({ hugeGithub, hugeGitlab, hugeLinkedin02, hugeLeetcode }),
  ],
})
export class SocialComponent {
  links: SocialLink[] = [
    {
      icon: 'hugeGithub',
      url: 'https://github.com/ElinorTch/',
    },
    {
      icon: 'hugeGitlab',
      url: 'https://gitlab.com/ElinorTch',
    },
    {
      icon: 'hugeLinkedin02',
      url: 'https://www.linkedin.com/in/elinor-tchamo/',
    },
    {
      icon: 'hugeLeetcode',
      url: 'https://leetcode.com/u/0Eqpa8maNB/',
    },
  ];
}
