import { ASSETS } from "@/assets";
import { PAGES } from "@/config";


export const servicesData = [
    {
      id: 'left',
      imagUrl: ASSETS.solarPanels,
      title: 'Energy Leader Interviews',
      description: 'AMAPALA brings you exclusive discussions with industry leaders and experts, exploring what awaits the Latin American energy and natural resource sector.'
    },
    {
      id: 'middle',
      imagUrl: ASSETS.solarPanels,
      title: 'AMAPALA Consulting',
      description: 'Whatever the country, whatever the sector, contact us to request a specialized report, tailored advice and insights. This is your gateway to a long and prosperous relationship with AMAPALA Energy Insights.'
    },
    {
      id: 'right',
      imagUrl: ASSETS.countryProfiles,
      title: 'Country Profiles',
      description: 'AMAPALA is the first news consultancy platform of its kind, covering the entirety of the Latin American energy and natural resource sector. Access and download our country-by-country insights here.'
    }
  ];

  export const newsData = [
    {
      id: 'article1',
      imagUrl: ASSETS.turbines,
      title: 'Renewable Energy Growth in Brazil',
      description: 'Brazil continues to lead the way in renewable energy investments, with significant growth in wind and solar projects over the past year.'
    },
    {
      id: 'article2',
      imagUrl: ASSETS.turbines,
      title: 'Argentina Energy Transition',
      description: 'Argentina is making strides in its energy transition, focusing on increasing the share of renewables in its energy mix and reducing dependency on fossil fuels.'
    },
    {
      id: 'article3',
      imagUrl: ASSETS.turbines,
      title: 'Chile Solar Power Expansion',
      description: 'Chile is rapidly expanding its solar power capacity, aiming to become one of the leading producers of solar energy in Latin America.'
    },
    {
      id: 'article4',
      imagUrl: ASSETS.turbines,
      title: 'Colombia Hydropower Developments',
      description: 'Colombia is investing heavily in hydropower projects, leveraging its abundant water resources to boost renewable energy production.'
    }
  ];

  export const navLinks1 = [
    { href: '#heroSection', label: 'Home' },
    { href: '#aboutSection', label: 'About' },
    { href: '#servicesSection', label: 'Our Services' },
    { href: '#insightsSection', label: 'Latest Insights' }
  ];

  export const navLinks2 = [
    { href: PAGES.CONTACT_US, label: 'Contact Us' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms & Conditions' }
  ];

