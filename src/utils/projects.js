import testOne from '../assets/projects/test-1.png';
import testTwo from '../assets/projects/test-2.png';
import wnwDesktop from '../assets/projects/wnw/wnwdesktop.png';
import wnwMobile from '../assets/projects/wnw/wnw-mobile.png';
import tempopayDesktop from '../assets/projects/tempopay/tempopay-desktop.png';
import youngartsDesktop from '../assets/projects/youngarts/youngarts-desktop.png';
import youngartsMobile from '../assets/projects/youngarts/youngarts-mobile.png';

export const projects = [
  {
    title: 'Young Arts',
    description: 'with The National Foundation for the Advancement of Artists',
    year: '2022',
    url: 'https://www.youngarts.com/',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: '#3DC3FC',
    slug: 'youngarts',
    tags: ['wordpress', 'tailwind', 'timber/twig'],
    featured: true,
    desktop: youngartsDesktop,
    mobile: youngartsMobile,
    iframe: false
  },
  {
    title: 'Working Not Working',
    description: 'Website where hirers can find the top creative talent.',
    year: '2022',
    url: 'https://www.workingnotworking.com/',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: '#3D50FC',
    slug: 'workingnotworking',
    tags: ['Ruby on Rails', 'SASS', 'SQL'],
    featured: true,
    desktop: wnwDesktop,
    mobile: wnwMobile,
    iframe: false
  },
  {
    title: 'Tempopay',
    description: 'A company dedicated to make managing healthcare costs simple.',
    year: '2022',
    url: 'https://www.tempopay.com/',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: '#F9E59E',
    slug: 'tempopay',
    tags: ['Next Js', 'Contentful', 'SCSS'],
    featured: false,
    desktop: tempopayDesktop,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Ace Hotel',
    description: 'A chain of boutique hotels with locations across the country and abroad.',
    year: '2022',
    url: 'https://acehotel.com/',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: '#B39474',
    slug: 'acehotel',
    tags: ['Vue Js', 'SASS'],
    featured: false,
    desktop: wnwDesktop,
    mobile: wnwMobile,
    iframe: false
  },
  {
    title: 'Getting Smart',
    description: 'Explore and highlight innovations in learning to empower all people to build capacity to thrive and steward in a complex and uncertain future.',
    year: '2022',
    url: 'https://www.gettingsmart.com/',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: 'rgb(176, 58, 50)',
    slug: 'gettingsmart',
    tags: ['wordpress', 'tailwind', 'timber/twig'],
    featured: false,
    desktop: wnwDesktop,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Elyse Walker',
    description: 'Styling for real life, luxury for every day.',
    year: '2022',
    url: 'https://elysewalker.com/',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: 'rgb(49, 91, 124)',
    slug: 'elysewalker',
    tags: ['Shopify Liquid', 'JQuery', 'CSS'],
    featured: false,
    desktop: wnwDesktop,
    mobile: wnwMobile,
    iframe: false
  },
  {
    title: 'Muir',
    description: 'A Marriott Autograph Collection boutique hotel in Halifax, Nova Scotia.',
    year: '2022',
    url: 'https://muirhotel.com/',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: 'rgb(165, 163, 167)',
    slug: 'muir',
    tags: ['wordpress', 'tailwind', 'timber/twig'],
    featured: false,
    desktop: wnwDesktop,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Checker Hall',
    description: 'A neighborhood bar and restaurant in Highland Park, Los Angeles.',
    year: '2022',
    url: 'https://www.checkerhall.com/',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: 'rgb(123, 143, 127)',
    slug: 'checkerhall',
    tags: ['webflow', 'javascript', 'css'],
    featured: false,
    desktop: wnwDesktop,
    mobile: wnwMobile,
    iframe: true
  },
];