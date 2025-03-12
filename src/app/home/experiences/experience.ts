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
    enterprise: 'MBOA DIGITAL',
    job: 'Développeur Full Stack',
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
    link: '',
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
    link: '',
  },
  {
    enterprise: 'Fond Routier',
    job: 'Technicien stagiaire',
    date: 'Juin 2020 - Aout 2020',
    description: [
      "Mise en place des boites mail Outlook de l'entreprise",
      "Extension du reseau LAN de l'entreprise",
      'Assistance à la gestion du parc informatique',
      'Mise en place des cameras de surveillance',
    ],
    stack: [],
    link: '',
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
    link: '',
  },
];
