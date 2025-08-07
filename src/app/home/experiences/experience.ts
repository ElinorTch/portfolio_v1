export interface Experience {
    enterprise: string;
    job: string;
    date: string;
    description: string[];
    stack: string[];
    link: string;
}

export const EXPERIENCES: Experience[] = [
    {
        enterprise: 'Paratonnerres',
        job: 'Développeur Full Stack',
        date: 'Avril 2025 - septembre 2025',
        description: [
            "Conception et développement de composants logiciels en Java exposant des services REST consommés par une interface Angular",
            "Développement d’un logiciel desktop d’analyse de risque foudre en JavaFX (interface) avec un back-end Spring",
            "Conception d’une architecture modulaire avec interface graphique et services REST en Spring",
            "Implémentation d’un système de gestion des licences avec génération et validation de clés avec PostgreSQL (Spring Boot / Angular)",
            "Mise en place d’un pipeline CI-CD sur GitLab pour l’automatisation",
            "Notifications en temps réel via RabbitMQ avec abonnements clients aux mises à jour",
        ],
        stack: [
            'Angular',
            'Java-Spring',
            'JavaFX',
            'JUnit',
            'Hostinger',
            'Github Action',
            'RabbitMQ',
            'PostgreSQL/SQLite',
        ],
        link: 'https://france-paratonnerres.com/',
    },
    {
        enterprise: 'MBOA DIGITAL',
        job: 'Développeur Full Stack',
        date: 'Avril 2024 - Août 2024',
        description: [
            "Développement d'une application de gestion d'un espace de coworking",
            'Gestion des réservations, souscriptions, produits et sessions',
            'Modélisation des données et des processus de paiement',
            'Mise en place des tests unitaires et systèmes',
            'Mise en œuvre d’une architecture cloud évolutive basée sur AWS (serverless)',
            'Mise en place d’une chaîne CI/CD avec Bitbucket Pipelines'
        ],
        stack: [
            'Angular',
            'NestJs/Java-Spring',
            'JestJs/JUnit',
            'AWS (SQS, SNS, S3, Lambda, Cloudfront)',
            'Bitbucket pipeline',
            'Jira',
        ],
        link: 'https://mboadigital.tech/home',
    },
    {
        enterprise: 'Saint Jean',
        job: 'Assistant DSI',
        date: 'Juin 2022 - Mars 2024',
        description: [
            'Conteneurisation et orchestration avec Docker',
            "Déploiement et configuration d'un serveur Moodle local",
            'Assistance à la gestion des équipes et des projets',
            'Supervision des juniors',
        ],
        stack: [
            'Java',
            'SpringBoot',
            'Angular',
            'TailwindCss',
            'ionic',
            'nodeJS',
            'Docker',
            'Moodle',
        ],
        link: 'https://institutsaintjean.org/',
    },
    {
        enterprise: 'Fond Routier',
        job: 'Technicien stagiaire / Developpeur Full Stack',
        date: 'Juin 2020 - Aout 2020',
        description: [
            "Développement d’une application web visant à automatiser les cours théoriques d’auto-école (Angular, Django)",
            "Conception de l’interface utilisateur, intégration des modules pédagogiques, et mise en place de la logique métier côté serveur",
            "Mise en place des boites mail Outlook de l'entreprise",
            "Extension du reseau LAN de l'entreprise",
            'Assistance à la gestion du parc informatique',
            'Mise en place des cameras de surveillance',
        ],
        stack: ["Angular", "Python/Django", "SQL"],
        link: 'https://fondsroutiercameroun.org/',
    },
    {
        enterprise: 'Fagiciel',
        job: 'Developpeur natif PHP',
        date: 'Juin 2018 - Aout 2018',
        description: [
            'Application de gestion des arrivees des employes',
            'Connexion a la base de donnee',
            'Modelisation (UML - MERISE)',
        ],
        stack: ['PHP', 'HTML', 'PHPmyAdmin'],
        link: 'http://fagiciel.com/',
    },
];
