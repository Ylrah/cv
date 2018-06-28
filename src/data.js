export default {
  name: 'Harly GOMA',
  photo: 'cat.gif',
  personalInfo: {
    // dni: '38.553.444',
    birthday: new Date(1990, 2 - 0, 6),
    civilStatus: 'Célibataire',
    voiture: 'Permis B'
  },
  contact: {
    location: '28340 Rohaire, France',
    email: 'harly.goma@gmail.com',
    phone: '06-23-72-26-47',
    github: 'Ylrah'
  },
  studies: [
    {
      period: 'Etudiant développeur web & mobile',
      place: 'Wild Code School-année 2018',
      position: 'Programmation informatique, applications spécifiques'
    },
    {
      period: 'Technicien supérieur réseau informatique',
      place: 'Groupe Supérieur de Formation ISF-année 2013-2016',
      position: 'Réseaux informatique et Télécommunication'

    }
    //,
    //{
    //  degree: 'Cursos online',
    //  place: 'Platzi.com',
    //  description: 'Ver perfil en platzi.com/@agusmoita'
    //}
  ],
  experience: [

    {
      period: 'Feb 2013 - Sept 2016',
      place: 'Technicien informatique et support utilisateurs',
      position: 'Au sien du groupe ISF sur différents sites (ALENÇON, LE MANS, LOUÉ, SABLÉSUR-SARTHE…).Installations de postes clients, configuration serveur Windows 2008/2012,réparation de postes, renouvellement et recyclage de postes, accompagnement utilisateursur hard/softwares.',


    },
    {
      period: 'Feb 2012 - 2013',
      place: 'Technicien déploiment MMA ',
      position: 'Installation des postes clients avec mise en place de migrations sur l’ensemble du territoire français.',

    },
    {
      period: 'Nov 2011 - Déc 2011',
      place: 'Stage Administrateur et responsable réseaux Adjoint au centre EPIDE d’Alençon',
      position: 'Configuration de postes clients, création de compte utilisateur (Active Directory) Maintenance et installation de postes et matériels multimédias (rétroprojecteur vidéo, imprimante).',


    },

  ],


  skills: [
    'Javascript', 'HTML5',
    'CSS3', 'Node.js',
    'Bootstrap 4', 'Linux',
    'Vue.js', 'Git',
    'Android', 'ionic', 'Angular.js', 'npm'
  ],
  languages: [
    {
      language: 'Français',
      level: 'langue natale',
    },

    {
      language: 'Anglais',
      level: 'Compétence professionnelle limitée',

    },

    {
      language: 'Créole',
      level: 'langue natale',
    },

    {
      language: 'Japonais',
      level: 'Notions élémentaires',


    }
  ]
}
