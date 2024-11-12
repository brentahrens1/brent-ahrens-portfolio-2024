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
import superlaPreviewOne from '../assets/projects/superla/superla-preview-1.png';
import superlaPreviewTwo from '../assets/projects/superla/superla-preview-2.png';
import gettingSmartDesktop from '../assets/projects/getting-smart/getting-smart-desktop.png';
import muirDesktop from '../assets/projects/muir/muir-desktop.png';
import muirPreviewOne from '../assets/projects/muir/muir-preview-1.png'
import muirPreviewTwo from '../assets/projects/muir/muir-preview-2.png'
import checkerhallDesktop from '../assets/projects/checker-hall/checkerhall-desktop.png';
import checkerhallPreviewOne from '../assets/projects/checker-hall/checkerhall-preview-1.png';

export const projects = [
  {
    title: 'Young Arts',
    description: 'An annual workshop that supports artists across 10 disciplines at all stages of development.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I worked as a Frontend Engineer is collaboration with Studio LaRocca. The Young Arts website was designed by the legendary design studio Pentagram.
    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> For many young people, applying to YoungArts may be the first step in affirming “I am an artist.”
        YoungArts is one of the only organizations in the U.S. that supports artists across 10 disciplines at all stages of
        development, beginning with the critical moment when they decide to pursue a life in the arts, and continuing throughout
        their careers.
    </p>
    </>,
    year: '2022',
    url: 'https://www.youngarts.org/',
    previewImageOne: youngartsPreviewOne,
    previewImageTwo: youngartsPreviewTwo,
    bgColor: '#3DC3FC',
    slug: 'youngarts',
    tags: ['Wordpress', 'Tailwind', 'Timber/Twig', 'Figma'],
    featured: true,
    desktop: youngartsDesktop,
    mobile: youngartsMobile,
    iframe: false
  },
  {
    title: 'Working Not Working',
    description: 'A job board where companies can find the top creative talent.',
    longDescription: <>
      <p><span className=' text-black font-bold'>The website:</span> I Worked as a Full Stack Software Engineer, building out onboarding flows, profile pages, status updates and much more. 
      </p>
      <p>
        <span className=' text-black font-bold'>The company:</span> With over 100,000 experienced Creatives on our site, 
          spanning various roles, skills, and industries, you can be confident with our new, personalized talent recommendations. 
          We serve up only the most qualified candidates for you based on your specific job post criteria. Additionally, you can 
          search for and invite Creatives to apply to your jobs. Our convenient Saved Search feature will notify you whenever new 
          candidates match your requirements.
      </p>
    </>,
    year: '2022',
    url: 'https://www.workingnotworking.com/',
    previewImageOne: wnwPreviewOne,
    previewImageTwo: wnwPreviewTwo,
    bgColor: '#3D50FC',
    slug: 'workingnotworking',
    tags: ['Ruby on Rails', 'SASS', 'SQL', 'Figma'],
    featured: true,
    desktop: wnwDesktop,
    mobile: wnwMobile,
    iframe: false
  },
  {
    title: 'Tempopay',
    description: 'A company dedicated to make managing healthcare costs simple.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I Worked as a Software Enginner in collaboration with the Redesign Health design team. 
    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> TempoPay helps people access the care they need, and then 
      set up a flexible, personalized payment plan that works with the rhythm of their life. Because there's no interest, fees, 
      or credit check, there's no reason to defer care.
    </p>
    </>,
    year: '2022',
    url: 'https://www.tempopay.com/',
    previewImageOne: tempopayPreviewOne,
    previewImageTwo: tempopayPreviewTwo,
    bgColor: '#F9E59E',
    slug: 'tempopay',
    tags: ['Next Js', 'Contentful', 'SCSS', 'Figma'],
    featured: false,
    desktop: tempopayDesktop,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Ace Hotel',
    description: 'A chain of boutique hotels with locations across the country and abroad.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I worked as a Frontend Engineer for Atelier Ace the creative agency behind all the Ace Hotel properties. 

    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> Ace Hotel is a collection of international boutique hotels. 
      We're in Seattle, Palm Springs, New York, Brooklyn, Kyoto, Sydney, Toronto and Athens. Our taste tends toward historical 
      reverence hand-in-hand with considered, contemporary design, and we think really good restaurants, public art and lobby 
      parties are important. Each hotel is globally minded but locally focused, paying tribute to the places and communities 
      that brings them to life. We're glad you're here.
    </p>
    </>,
    year: '2022',
    url: 'https://acehotel.com/',
    previewImageOne: acePreviewOne,
    previewImageTwo: acePreviewTwo,
    bgColor: '#B39474',
    slug: 'acehotel',
    tags: ['Vue Js', 'SCSS', 'Nuxt Js', 'Figma'],
    featured: false,
    desktop: aceDesktop,
    mobile: aceMobile,
    iframe: false
  },
  {
    title: 'Getting Smart',
    description: 'A podcast that explores and highlights innovations in learning.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I worked as a Frontend Engineer is collaboration with Studio LaRocca. The Getting Smart website was designed by the legendary design studio Pentagram.
    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> Getting Smart actively builds the future of learning by 
      designing, accelerating and amplifying equitable innovations that empower all people to thrive and lead in a complex world.
    </p>
    </>,
    year: '2022',
    url: 'https://www.gettingsmart.com/',
    previewImageOne: gettingSmartPreviewOne,
    previewImageTwo: gettingSmartPreviewTwo,
    bgColor: 'rgb(176, 58, 50)',
    slug: 'gettingsmart',
    tags: ['wordpress', 'tailwind', 'timber/twig'],
    featured: false,
    desktop: gettingSmartDesktop,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Elyse Walker',
    description: 'An online shop for one of the most sought-after purveyors of premium curated apparel, jewelry and accessories.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I worked as a Frontend Engineer in collaboration with Hugo & Marie creative agency. Implementing a custom Shopify theme.    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> elysewalker is one of the most sought-after purveyors of 
      premium curated apparel, jewelry and accessories. Over the last 25 years, the company has garnered a reputation among 
      fashion designers and brands as well as a global, passionate and loyal customer following. 
    </p>
    </>,
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
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I worked as a Frontend Engineer is collaboration with Studio LaRocca.
    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> Muir welcomes guests to a refined, distinctly Nova Scotian 
      hospitality experience, in the absolute centre of downtown in the heart of the Halifax Waterfront.
    </p>
    </>,
    year: '2022',
    url: 'https://muirhotel.com/',
    previewImageOne: muirPreviewOne,
    previewImageTwo: muirPreviewTwo,
    bgColor: 'rgb(165, 163, 167)',
    slug: 'muir',
    tags: ['wordpress', 'tailwind', 'timber/twig', 'Figma'],
    featured: false,
    desktop: muirDesktop,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Super LA',
    description: 'A one-stop shop for all your real estate project needs.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I worked as a Software Engineer in collaboration with the SuperLA design team.
    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> We are a one-stop shop for all your real estate project needs. 
      As a vertically integrated design-build firm, we can take your project from inception, through design, permitting, 
      construction, leasing/sales, and operation, all under one roof.
    </p>
      </>,
    year: '2024',
    url: 'https://www.super.la',
    previewImageOne: superla,
    previewImageTwo: superlaPreviewOne,
    bgColor: '#ca9a8e',
    slug: 'superla',
    tags: ['webflow', 'javascript', 'css', 'e-commerce'],
    featured: false,
    desktop: superla,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Checker Hall',
    description: 'A neighborhood bar and restaurant in Highland Park, Los Angeles.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I worked as the Software Engineer to build this custom design in Webflow with custom illustrations and scroll animations.
    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> Located on the second floor of a thoughtfully-restored masonic hall in the heart of L.A.'s Highland Park, we are proud to serve our neighborhood with thoughtfully curated food, drinks and music. We celebrate and continue the building's nearly century-long history as a community gathering place.
    </p>
      </>,
    year: '2022',
    url: 'https://www.checkerhall.com/',
    previewImageOne: checkerhallDesktop,
    previewImageTwo: checkerhallPreviewOne,
    bgColor: 'rgb(123, 143, 127)',
    slug: 'checkerhall',
    tags: ['Webflow', 'Javascript', 'CSS', 'Figma'],
    featured: false,
    desktop: checkerhallDesktop,
    mobile: wnwMobile,
    iframe: true
  },
];