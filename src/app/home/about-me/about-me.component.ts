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
    protected devTechnologies: string[] = ["NodeJS", "Angular", "NestJS/Express", "Java/JavaFX/Spring", "Javascript/typescript", ];
    protected dataTechnologies: string[] = ["Python/PySpark", "Hadoop/Cassandra", "SSIS/NIFI/ElasticStack", "PowerBI/Tableau", "Kafka"];
}
