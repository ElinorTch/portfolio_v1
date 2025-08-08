import {Component} from '@angular/core';
import {EXPERIENCES} from "../experiences/experience";

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
    protected technologies: string[] = ["Angular/React", "Java/JavaFX/Spring", "Javascript/typescript", "NestJS/Express/NodeJS"]
}
