import { ASSETS } from "@/assets";
import { PAGES } from "@/config";

export const aboutUsSections = [
  {
      title: "Our Inspiration",
      content: [
          "Our inspiration is the town of AMAPALA, on the Honduran Island 'La Isla del Tigre'. In the 19th and 20th centuries, Amapala was a thriving community based on the transportation of the region's natural resources around the globe.",
          "Since then, due to the violence, corruption, and troubles which have come to be synonymous with Latin America, this influence faded.",
          "Therefore, AMAPALA represents the belief that Latin America's abundant energy and natural resource capacity can yet again be at the forefront of the region's prosperity and influence around the globe.",
          "At FAULMATA Energy Insights we are driven by the goal of turning this potential into reality, and spearheading the region's sustainable development, prosperity and influence around the globe.",
      ],            
      image: ASSETS.cathederal, 
      right: false
  },
  {
      title: "Our Mission",
      content: [
          "From oil and gas, to hydrogen, mining and renewables, FAULMATA Energy Insights aims to be at the forefront of the energy transition in Latin America. **Our mission** is to be the go-to platform and business partner to understand and navigate the future of Latin American energy.",
          "**Our aim** is to help businesses and individuals with current or possible future interests in the region to make self-empowering strategic decisions, in a manner that will ensure the region's population finally reaps the rewards of its energy and natural resource capacity.",
          "In short, the energy transition is Latin America's chance to stand tall and change the script… **FAULMATA** Energy Insights is here to make this happen."
      ],
      image: ASSETS.placeholder, 
      right: true
  },
  {
      title: "What Sets Us Apart?",
      content: [
          "Our people's passion for Latin America and its innate potential.",
          "In every country in the region, the energy transition represents an incredible opportunity. We have noticed that globally, the attention and narratives regarding Latin America's role in this transition are focused on a couple of key emerging markets like Brazil, Chile, Argentina, and Chile, among others. At AMAPALA Energy Insights, we believe that this narrow focus is misplaced, and forgets the vast opportunities rendered by every country in the region.",
          "Hence, AMAPALA seeks to be your very first dedicated Latin America one-stop-shop energy and natural resource boutique news consultancy, providing both specialized and tailored advice, as well as open media market insight.",
          "Coupling a unique country-by-country driven specialism, with a holistic understanding of the entirety of the Latin American energy and natural resource sector, we are ONE-STOP-SHOP, because whatever the country, whatever the sector, we do it… and BOUTIQUE, because this is all we do."
      ],
      image: ASSETS.placeholder, 
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
    { href: PAGES.BLOGS, label: 'Articles' },
    { href: '#', label: 'Country Profiles' }
  ];

