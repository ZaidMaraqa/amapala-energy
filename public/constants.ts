import { ASSETS } from "@/assets";
import { PAGES } from "@/config";

export const aboutUsSections = [
  {
      title: "Our Inspiration",
      content: [
        "Our inspiration is the town of AMAPALA, on the Honduran Island 'La Isla del Tigre'. In the 19th and 20th centuries, Amapala was a thriving community based on the transportation of the region's natural resources around the globe.",
        "Since then, due to the violence, corruption, and troubles which have come to be synonymous with Latin America, this influence faded.",
        "Therefore, AMAPALA represents the belief that Latin America's abundant energy and natural resource capacity can yet again be at the forefront of the region's prosperity and influence around the globe.",
        // "At FAULMATA Energy Group we are driven by the goal of turning this potential into reality, and spearheading the region's sustainable development, prosperity and influence around the globe.",
      ],            
      image: ASSETS.city, 
      right: false
  },
  {
      title: "Our Mission and Vision",
      content: [
          "**Our mission** at FAULMATA Energy Group is to be at the forefront of the energy transition in Latin America. Simply, we are driven by the goal of transforming the region&apos;s potential into reality, in a manner that will ensure Latin America's population finally reaps the rewards of the region&apos;s energy and natural resource capacity.",
          "In short, we believe the energy transition is Latin America's chance to stand tall and change the script… Hence, **our vision** at **FAULMATA** Energy Group, is to be recognised as the go-to and best platform, consultancy and partner to businesses navigating any domain of the Latin American energy and natural resource sector. ",
          "**Our vision** is to be ONE-STOP-SHOP, because whatever the country and whatever the sector in Latin American energy, we do it… and BOUTIQUE, because this is all we do."
      ],
      image: ASSETS.currency, 
      right: true
  },
  {
      title: "What Sets Us Apart?",
      content: [
        "Our people's passion for Latin America and belief in its innate potential.",
        "In every country in the region, the energy transition represents an incredible opportunity.",
        "Globally however, the focus on Latin America's role in this transition is centered on just a couple of key emerging markets like Brazil, Chile, Argentina, and Chile, among others.",
        "Yet, at FAULMATA Energy Group, we believe that this narrow attention is misplaced. Therefore, we are here to plug this gap in the market.",
        "By coupling a unique country-by-country driven specialism with a holistic regional understanding, we provide top-of-the-line and tailored insights into the entirety of the Latin American energy and natural resource sector, leaving no stone unturned or misunderstood."
      ],
      image: ASSETS.countries, 
      right: true
  }
];

export const servicesData = [
    {
      id: 'left',
      imagUrl: ASSETS.icons.microphone,
      title: 'Energy Leader Interviews',
      description: 'AMAPALA brings you exclusive discussions with industry leaders and experts, exploring what awaits the Latin American energy and natural resource sector.',
      link: PAGES.BLOGS
    },
    {
      id: 'middle',
      imagUrl: ASSETS.icons.faulmata,
      title: 'Faulmata Consulting',
      description: 'Whatever the country, whatever the sector, contact us to request and benefit from our tailored expertise and services. This is your gateway to a long and prosperous relationship with FAULMATA. Take a look at our services here…',
      link: PAGES.ABOUT_US_CONSULTING
    },
    {
      id: 'right',
      imagUrl: ASSETS.icons.location,
      title: 'Country Specfic Expertise',
      description: 'FAULMATA is the first news consultancy platform of its kind, offering both a holistic and country-by-country understanding of the entire Latin American energy and natural resource sector. Engage with our latest country-specific insights here…',
      link: PAGES.BLOGS
    }
  ];

  export const navLinks1 = [
    { href: `${PAGES.HOME}#heroSection`, label: 'Home' },
    { href: `${PAGES.HOME}#aboutSection`, label: 'About' },
    { href: `${PAGES.HOME}#servicesSection`, label: 'Our Services' },
    { href: `${PAGES.HOME}#insightsSection`, label: 'Latest Insights' }
  ];

  export const navLinks2 = [
    { href: PAGES.CONTACT_US, label: 'Contact Us' },
    { href: PAGES.BLOGS, label: 'News and Analysis' },
    { href: `${PAGES.HOME}#subscribeSection`, label: 'Subscribe' }
  ];

