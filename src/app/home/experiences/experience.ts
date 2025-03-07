export interface Experience {
  enterprise: string;
  job: string;
  date: string;
  description: string[];
  stack: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    enterprise: 'MBOA DIGITAL',
    job: 'Développeur Full Stack (Angular/NestJs)',
    date: 'Avril 2024 - Août 2024',
    description: [
      "Développement d'une application de gestion d'un espace de coworking",
      'Gestion des réservations, souscriptions, produits et sessions',
      'Modélisation des données et des processus de paiement',
      'Mise en place des tests unitaires et systèmes',
      'Déploiement sur AWS',
    ],
    stack: [
      'Angular',
      'NestJs',
      'JestJs',
      'AWS (SQS, SNS, S3, Lambda, Cloudfront)',
      'Bitbucket pipeline',
      'Jira',
    ],
  },
  {
    enterprise: 'Institut Saint Jean',
    job: 'Assistant DSI',
    date: 'Juin 2022 - Mars 2024',
    description: [
      'Conteneurisation et orchestration avec Docker',
      "Déploiement et configuration d'un serveur Moodle local",
      'Assistance à la gestion des équipes et des projets',
      'Supervision des juniors',
    ],
    stack: ['Docker', 'Moodle'],
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
    stack: ['Docker', 'Moodle'],
  },
];
