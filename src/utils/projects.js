import testOne from '../assets/projects/test-1.png';
import testTwo from '../assets/projects/test-2.png';
import wnwDesktop from '../assets/projects/wnw/wnwdesktop.png';
import wnwMobile from '../assets/projects/wnw/wnw-mobile.png';
import wnwPreviewOne from '../assets/projects/wnw/wnw-preview-1.png'
import wnwPreviewTwo from '../assets/projects/wnw/wnw-preview-2.png'
import tempopayDesktop from '../assets/projects/tempopay/tempopay-desktop.png';
import tempopayPreviewOne from '../assets/projects/tempopay/tempopay-preview-1.png'
import tempopayPreviewTwo from '../assets/projects/tempopay/tempopay-preview-2.png'
import youngartsDesktop from '../assets/projects/youngarts/youngarts-desktop.png';
import youngartsMobile from '../assets/projects/youngarts/youngarts-mobile.png';
import youngartsPreviewOne from '../assets/projects/youngarts/young-arts-preview-1.png'
import youngartsPreviewTwo from '../assets/projects/youngarts/young-arts-preview-2.png'
import aceDesktop from '../assets/projects/acehotel/acehotelDesktop.png'
import aceMobile from '../assets/projects/acehotel/ace-mobile.png'
import acePreviewOne from '../assets/projects/acehotel/ace-preview-1.png'
import acePreviewTwo from '../assets/projects/acehotel/ace-preview-2.png'
import gettingSmartPreviewOne from '../assets/projects/getting-smart/getting-smart-preview-1.png'
import gettingSmartPreviewTwo from '../assets/projects/getting-smart/getting-smart-preview-2.png'
import elyseWalkerDesktop from '../assets/projects/elyse-walker/elyseWalkerDesktop.png'
import elyseWalkerMobile from '../assets/projects/elyse-walker/elyseWalkerMobile.png'
import elyseWalkerPreviewOne from '../assets/projects/elyse-walker/elyseWalkerPreviewOne.png'
import elyseWalkerPreviewTwo from '../assets/projects/elyse-walker/elyseWalkerPreviewTwo.png'
import superla from '../assets/projects/superla/superla-desktop.png';

export const projects = [
  {
    title: 'Young Arts',
    description: 'with The National Foundation for the Advancement of Artists',
    year: '2022',
    url: 'https://www.youngarts.org/',
    previewImageOne: youngartsPreviewOne,
    previewImageTwo: youngartsPreviewTwo,
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
    previewImageOne: wnwPreviewOne,
    previewImageTwo: wnwPreviewTwo,
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
    previewImageOne: tempopayPreviewOne,
    previewImageTwo: tempopayPreviewTwo,
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
    previewImageOne: acePreviewOne,
    previewImageTwo: acePreviewTwo,
    bgColor: '#B39474',
    slug: 'acehotel',
    tags: ['Vue Js', 'SASS'],
    featured: false,
    desktop: aceDesktop,
    mobile: aceMobile,
    iframe: false
  },
  {
    title: 'Getting Smart',
    description: 'Explore and highlight innovations in learning to empower all people to build capacity to thrive and steward in a complex and uncertain future.',
    year: '2022',
    url: 'https://www.gettingsmart.com/',
    previewImageOne: gettingSmartPreviewOne,
    previewImageTwo: gettingSmartPreviewTwo,
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
    previewImageOne: elyseWalkerPreviewOne,
    previewImageTwo: elyseWalkerPreviewTwo,
    bgColor: 'rgb(49, 91, 124)',
    slug: 'elysewalker',
    tags: ['Shopify Liquid', 'JQuery', 'CSS'],
    featured: false,
    desktop: elyseWalkerDesktop,
    mobile: elyseWalkerMobile,
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
    title: 'Super LA',
    description: 'A one-stop shop for all your real estate project needs.',
    year: '2024',
    url: 'https://www.super.la',
    previewImageOne: testOne,
    previewImageTwo: testTwo,
    bgColor: '#ca9a8e',
    slug: 'superla',
    tags: ['webflow', 'javascript', 'css', 'ecommerce'],
    featured: false,
    desktop: superla,
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