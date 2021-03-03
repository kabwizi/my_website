import React, { useContext, useReducer } from "react";

interface labelWithButton {
  title: string;
  description: string;
  buttonText: string;
}

interface labelWithoutButton {
  title: string;
  description: string;
}

interface webSiteText {
  sectionIntroPhoneAndWebsite: {
    phone: {
      message1: string;
      message2: string;
      message3: string;
      message4: string;
      message5: string;
    };
    website: {
      message1: string;
      message2: string;
    };
  };
  section1: {
    parent: labelWithButton;
  };
  //Soyez visible
  section2: {
    parent: labelWithoutButton;
    child: {
      child1: labelWithoutButton;
      child2: labelWithoutButton;
      child3: labelWithoutButton;
      child4: labelWithoutButton;
    };
  };
  //mobile
  //Soyez où vos clients sont
  section3: {
    parent: labelWithoutButton;
    child: {
      child1: labelWithoutButton;
      child2: labelWithoutButton;
      child3: labelWithoutButton;
    };
  };
  //web
  //Restez accessible
  section4: {
    parent: labelWithoutButton;
    child: {
      child1: labelWithoutButton;
      child2: labelWithoutButton;
      child3: labelWithoutButton;
    };
  };
  //seo
  //Faite vous trouver
  section5: {
    parent: labelWithoutButton;
    child: {
      child1: string;
      child2: string;
      child3: string;
      child4: string;
    };
  };
  //Mon processus
  section6: {
    parent: labelWithoutButton;
    child: {
      child1: labelWithoutButton;
      child2: labelWithoutButton;
      child3: labelWithoutButton;
      child4: labelWithoutButton;
    };
  };
  //Languages
  section7: {
    parent: labelWithoutButton;
  };
  //Il n'y a pas de petit budget, seulement des arrangements
  section8: {
    parent: labelWithoutButton;
  };
  //Contactez-moi
  section9: {
    parent: labelWithoutButton;
    child: {
      child1: string;
      child2: string;
      child3: string;
      child4: string;
      child5: string;
    };
    label: {
      label1: string;
      label2: string;
      label3: string;
    };
  };
  footer: string;
}

export interface IData {
  language: [webSiteText, webSiteText];
  languageIndex: number;
}

export interface IACtion {
  type: "CHANGE_LANGUAGE";
  payload: IPayload;
}
export interface IPayload {
  languageIndex?: number;
}
function reducer(state: IData, action: IACtion) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, languageIndex: action.payload.languageIndex! };
  }
}

const myContext = React.createContext<{
  data: IData;
  dispatch: React.Dispatch<IACtion>;
} | null>(null);

export default function WebsiteMainContext({ children }: any) {
  const [data, dispatchData] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ data, dispatch: dispatchData }}>
      {children}
    </myContext.Provider>
  );
}

export const useData = () => {
  return useContext(myContext);
};

const initialState: IData = {
  languageIndex: 0,
  language: [
    /**francais */
    {
      sectionIntroPhoneAndWebsite: {
        phone: {
          message1:
            "Bonjour, je m'appelle Ana, j'ai un projet pour une application mobile et je me demande si vous pouvez m'aider.",
          message2:
            "Bonjour Ana! J'espère que vous allez bien. Oui bien sûr, quelles sont vos disponibilités pour un appel téléphonique ou vidéo?",
          message3:
            "Parfait, je finis mon travail à 16h, le temps de rentrer à la maison, 17h ça vous va?",
          message4: "Un appel vidéo.",
          message5: "Oui cela me va, à bientôt.",
        },
        website: {
          message1:
            "Bonjour, Serge, c'est Ana Gouchi, nous avons parlé par téléphone tout à l'heure concernant l'application mobile TravelCook. Moi et mon mari sommes vraiment excités de débuter ce projet avec vous. Attaché au courriel vous verrez une brève description du projet et notre vision dans un document Word. Nous nous tenons à votre disposition pour tout autre renseignement. Cordialement.",
          message2:
            "Bonjour, madame Ana Gouchi, je vous envoie ce message pour vous notifier que j'ai bien reçu votre courriel et lu votre description concernant le projet TravelCook. Je tiens aussi à vous notifier que j'ai actuellement ouvert votre dossier et débuté le projet. Comme convenu la première étape sera celle du désigné de l'application et de l'expérience utilisateur (UX et UI). Une fois cette étape complétée, je vous enverrai un courriel contenant les informations sur le travail réalisé et un lien Figma vous permettant de voir la maquette (soit le travail en lui-même). Nous trouverons ensuite un horaire qui vous convient afin de discuter sur le travail, savoir si la maquette répond au mieux à votre vision et les modifications à apporter. Je me tiens à votre disposition pour tout autre renseignement.",
        },
      },
      section1: {
        parent: {
          title: "Développeur Mobile & Web",
          description:
            "Bonjour! Je me nomme Serge Kabwizi. Je suis un programeur indépendant full stack et je me specialise dans la conception d’application mobile et de site web sur mesure.",
          buttonText: "Contactez-moi",
        },
      },
      section2: {
        parent: {
          title: "Soyez visible",
          description:
            "Que vous soyez une multinationale, une petite entreprise ou un indépendant, que ce soit pour présenter vos services, vos produits, votre savoir-faire ou encore votre passion, une présence en ligne est indispensable pour accroitre votre visibilité, vous démarquer de la concurrence et développer une clientèle.",
        },
        child: {
          child1: {
            title: "Site web",
            description:
              "Offrez-vous la visibilité que vous méritez grâce à un site web unique qui représente au mieux votre savoir faire, votre vision, votre différence et vos valeurs.",
          },
          child2: {
            title: "Mobile",
            description:
              "Voyez grand, allez à la conquête des nouveaux marchés grâce à des applications mobiles performantes sur téléphone intelligent, soyez où vos clients sont.",
          },
          child3: {
            title: "Design",
            description:
              "Logos, icônes, image, couleur, typographie et illustrations, pour tous vos projets, je prendrai soin de vous rendre unique et inoubliable.",
          },
          child4: {
            title: "Consultation",
            description:
              "Pour chaque projet, je vous propose plusieurs alternatives répondant toutes à vos besoins, tout en vous recommandant la meilleure.",
          },
        },
      },
      section3: {
        parent: {
          title: "Soyez où vos clients sont",
          description:
            "Uber, Spotify, Whatsapp ou encore Intagram, tous ont su prendre avantage du téléphone intelligent et l’utiliser comme outil de fidélisation. Plus besoin d’intermédiaire! Vous êtes en contact direct avec vos clients potentiels.",
        },
        child: {
          child1: {
            title: "IOS et Android",
            description:
              "Votre clientèle est-elle sur iPhone ou Android? Êtes-vous dans une contrainte budgétaire face à cette décision? N’ayez aucun souci, je prends soin de rendre votre application accessible sur toutes les plateformes.",
          },
          child2: {
            title: "Performance",
            description:
              "Nous savons tous qu’une application lente, qui se fige ou qui s’arrête tout d’un coup, est une vraie source de frustration et pourrait même causer sa désinstallation. Pour éviter cela, la performance de votre application est ma priorité.",
          },
          child3: {
            title: "Paiement & publicité",
            description:
              "C’est bien d’avoir une application mobile, mais c’est encore mieux de pouvoir générer un revenu avec. Je vous offre donc des conseils quant aux systèmes de paiement, et je m’assure que toute transaction se fasse en sécurité.",
          },
        },
      },
      section4: {
        parent: {
          title: "Restez accessible",
          description:
            "Trouver votre place sur internet et opter pour une communication de masse, disponible en tout temps et partout. Démarquez-vous de vos concurrents en investissant sur votre image et votre crédibilité.",
        },
        child: {
          child1: {
            title: "Commerce en ligne",
            description:
              "Que ce soit pour du dropshipping ou pour vos propres produits, rien de tel qu’une présence en ligne pour faire grimper vos ventes.",
          },
          child2: {
            title: "Blog",
            description:
              "Un sujet vous passionne, il est fort probable que des milliers de personnes tous comme vous, partage cette même passion. Quoi de mieux qu’un blog pour vous réunir et agrandir votre réseau.",
          },
          child3: {
            title: "Portfolio",
            description:
              "Que ce soit pour vous présenter ou pour présenter votre entreprise, un portfolio est sans doute le meilleur moyen. Accessible en tout temps, il est une preuve de vos compétences, votre savoir-faire ainsi que de vos services.",
          },
        },
      },
      section5: {
        parent: {
          title: "Faite vous trouver",
          description:
            "Grâce à la SEO (référencement naturel), améliorez le classement de votre site web dans le navigateur de recherche, ou encore mieux, optez pour la SEA (référencement payant) et devenez prioritaire dans tous les résultats de recherche.",
        },
        child: {
          child1: "Performance",
          child2: "accessibilité",
          child3: "Bonne pratique",
          child4: "SEO",
        },
      },
      section6: {
        parent: {
          title: "Mon processus",
          description:
            "Tout projet étant important à mes yeux, tous passent par les mêmes processus. Ces étapes me permettent de garantir un haut standard à toute ma clientèle.",
        },
        child: {
          child1: {
            title: "Connaitre ce que vous faites",
            description:
              "La première étape de notre travail consiste à connaitre ce que vous faites, ce que vous vendez ou ce que vous voulez partager avec le reste du monde. Notre objectif à cette étape est de découvrir l'image que vous désirez projeter à votre clientèle.",
          },
          child2: {
            title: "Connaitre vos clients",
            description:
              "Dans la deuxième étape de notre travail, nous nous renseignons sur votre public cible. Notre but est d’identifier l'image qu'ils ont actuellement de vous.",
          },
          child3: {
            title: "Prototype",
            description:
              "Dans la troisième étape de notre travail, nous tâchons de représenter graphiquement au mieux votre savoir-faire, votre passion, votre vision par rapport aux attentes de vos clients.",
          },
          child4: {
            title: "Conception",
            description:
              "Et enfin, dans la dernière étape de notre travail, nous vous concevons un site web ou une application mobile fidèle au design retenu et à toutes les étapes précédentes.",
          },
        },
      },
      section7: {
        parent: {
          title: "Languages",
          description:
            "Voici une liste non exhaustive des langages de programmation et de logiciel de développement que j’utilise la majeure partie du temps, allant du simple brouillon au design, puis à la réalisation complète du projet.",
        },
      },
      section8: {
        parent: {
          title: "Il n'y a pas de petit budget, seulement des arrangements",
          description:
            "Mon premier objectif est votre satisfaction. Pour ce faire, je vous offre une totale transparence sur mes tarifs. Mes prix varient dépendamment du temps pour la réalisation du projet, de mon expertise et du niveau de détails que vous souhaitez.",
        },
      },
      section9: {
        parent: {
          title: "Contactez-moi",
          description:
            "Pour tout renseignement, n'hésitez pas, vous pouvez en tout temps me contacter. Dans le plaisir de bientôt pouvoir travailler avec vous.",
        },
        child: {
          child1: "Nom complet (Obligatoire)",
          child2: "Courriel (Obligatoire)",
          child3: "Message (Obligatoire)",
          child4: "Ajouter une pièce jointe",
          child5: "Envoyez le message",
        },
        label: {
          label1: "Nom complet",
          label2: "Courriel",
          label3: "Message",
        },
      },
      footer: "© 2019 Tout droit réservé",
    },
    /**anglais */
    {
      sectionIntroPhoneAndWebsite: {
        phone: {
          message1:
            "Hello, my name is Ana, I have a project for a mobile app and I am wondering if you can help me.",
          message2:
            "Hello Ana! I hope you are well. Yes of course, what are your availability for a phone or video call?",
          message3:
            "Perfect, I finish my work at 4 p.m., time to get home, 5 p.m. are you okay?",
          message4: "A video call.",
          message5: "Yes that's fine with me, see you soon.",
        },
        website: {
          message1:
            "Hello, Serge, it's Ana Gouchi, we spoke by phone earlier about the TravelCook mobile application. Me and my husband are really excited to start this project with you. Attached to the email you will see a brief description of the project and our vision in a Word document. We are at your disposal for any further information. Cordially.",
          message2:
            "Hello, Mrs. Ana Gouchi, I am sending you this message to notify you that I have received your email and read your description concerning the TravelCook project. I also want to notify you that I have currently opened your file and started the project. As agreed, the first step will be the designate of the application and the user experience (UX and UI). Once this step is completed, I will send you an email containing information on the work done and a Figma link allowing you to see the model (ie the work itself). We will then find a schedule that suits you to discuss the work, find out if the model best meets your vision and the changes to be made. I am at your disposal for any other information.",
        },
      },
      section1: {
        parent: {
          title: "Mobile & Web Developer",
          description:
            "Hello! my name is Serge Kabwizi. I am a full stack freelance programmer and I specialize in designing custom mobile apps and websites.",
          buttonText: "contact me",
        },
      },
      section2: {
        parent: {
          title: "Be visible",
          description:
            "Whether you are a multinational, a small business or an independent, whether it is to present your services, your products, your know-how or your passion, an online presence is essential to increase your visibility, to stand out from the crowd. competition and develop a clientele.",
        },
        child: {
          child1: {
            title: "Website",
            description:
              "Give yourself the visibility you deserve with a unique website that best represents your expertise, your vision, your difference and your values.",
          },
          child2: {
            title: "Mobile",
            description:
              "Think big, conquer new markets with powerful mobile applications on smartphones, be where your customers are.",
          },
          child3: {
            title: "Design",
            description:
              "Logos, icons, image, color, typography and illustrations, for all your projects, I will take care of making you unique and unforgettable.",
          },
          child4: {
            title: "Consultation",
            description:
              "For each project, I offer several alternatives that all meet your needs, while recommending the best.",
          },
        },
      },
      section3: {
        parent: {
          title: "Be where your customers are",
          description:
            "Uber, Spotify, Whatsapp and Instagram, all have taken advantage of the smartphone and use it as a loyalty tool. No more middleman! You are in direct contact with your potential customers.",
        },
        child: {
          child1: {
            title: "Performance",
            description:
              "We all know that a slow application that freezes or suddenly stops is a real source of frustration and could even cause it to be uninstalled. To avoid this, the performance of your application is my priority.",
          },

          child2: {
            title: "IOS and Android",
            description:
              "Are your customers on iPhone or Android? Are you in a budgetary constraint facing this decision? Don't worry, I take care to make your application accessible on all platforms.",
          },
          child3: {
            title: "Payment & advertising",
            description:
              "It's great to have a mobile app, but it's even better to be able to generate income with it. So I offer advice on payment systems, and I make sure that all transactions are safe.",
          },
        },
      },
      section4: {
        parent: {
          title: "Stay accessible",
          description:
            "Find your place on the internet and opt for mass communication, available anytime and anywhere. Stand out from your competition by investing in your image and credibility.",
        },
        child: {
          child1: {
            title: "E-commerce",
            description:
              "Whether it's for dropshipping or your own products, there's nothing like an online presence to boost your sales.",
          },
          child2: {
            title: "Blog",
            description:
              "You are passionate about a subject, it is very likely that thousands of people, all like you, share this same passion. What better way to bring you together and expand your network than a blog.",
          },
          child3: {
            title: "Portfolio",
            description:
              "Whether it is to introduce yourself or to present your business, a portfolio is arguably the best way. Accessible at all times, it is proof of your skills, your know-how and your services.",
          },
        },
      },
      section5: {
        parent: {
          title: "Make you find",
          description:
            "Thanks to SEO (natural referencing), improve the ranking of your website in the search browser, or even better, opt for SEA (paid referencing) and become a priority in all search results.",
        },
        child: {
          child1: "Performance",
          child2: "accessibility",
          child3: "Good practice",
          child4: "SEO",
        },
      },
      section6: {
        parent: {
          title: "My process",
          description:
            "Any project being important to me, all go through the same processes. These steps allow me to guarantee a high standard to all my customers.",
        },
        child: {
          child1: {
            title: "Know what you are doing",
            description:
              "The first step in our job is to know what you do, what you sell or what you want to share with the rest of the world. Our goal at this stage is to discover the image you want to project to your customers.",
          },
          child2: {
            title: "Know your customers",
            description:
              "In the second step of our work, we learn about your target audience. Our goal is to identify the image they currently have of you.",
          },
          child3: {
            title: "Prototype",
            description:
              "In the third step of our work, we try to best represent your know-how, your passion, your vision in relation to the expectations of your customers.",
          },
          child4: {
            title: "Design",
            description:
              "And finally, in the last step of our work, we design a website or a mobile application faithful to the design chosen and to all the previous steps.",
          },
        },
      },
      section7: {
        parent: {
          title: "Languages",
          description:
            "Here is a non-exhaustive list of the programming and development software languages ​​that I use most of the time, ranging from a simple draft to design, then to the complete realization of the project.",
        },
      },
      section8: {
        parent: {
          title: "There is no small budget, only arrangements",
          description:
            "My first goal is your satisfaction. To do this, I offer you total transparency on my prices. My prices vary depending on the time for the completion of the project, my expertise and the level of detail you want.",
        },
      },
      section9: {
        parent: {
          title: "Contact me",
          description:
            "For any information, do not hesitate, you can contact me at any time. Looking forward to working with you soon.",
        },
        child: {
          child1: "Full name (Required)",
          child2: "Email (Required)",
          child3: "Message (Required)",
          child4: "Add attachment",
          child5: "Send message",
        },
        label: {
          label1: "Full name",
          label2: "E-mail",
          label3: "Message",
        },
      },
      footer: "© 2019 All rights reserved",
    },
  ],
};
