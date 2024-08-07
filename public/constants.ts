import { ASSETS } from "@/assets";
import { PAGES } from "@/config";

export const servicesData = [
    {
      id: 'left',
      imagUrl: ASSETS.amapalaWithBg,
      title: 'Energy Leader Interviews',
      description: 'AMAPALA brings you exclusive discussions with industry leaders and experts, exploring what awaits the Latin American energy and natural resource sector.'
    },
    {
      id: 'middle',
      imagUrl: ASSETS.amapalaWithBg,
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

