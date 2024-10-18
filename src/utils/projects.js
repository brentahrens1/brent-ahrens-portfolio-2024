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
    description: 'with The National Foundation for the Advancement of Artists',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> This is a website by Frank LaRocca Studios that I had the privilege of working on. 
       Implementing a custom Wordpress theme using Timber/Twig as well as PHP, SCSS, Javascript, Tailwind 
       and ACF to help bring to life a design from the legendary design agency Pentagram.
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
    tags: ['wordpress', 'tailwind', 'timber/twig'],
    featured: true,
    desktop: youngartsDesktop,
    mobile: youngartsMobile,
    iframe: false
  },
  {
    title: 'Working Not Working',
    description: 'Website where hirers can find the top creative talent.',
    longDescription: <>
      <p><span className=' text-black font-bold'>The website:</span> Worked as a Frontend Engineer to restyle the entire website
       using SASS and Tachyons. I also collaborated with a backend engineer to build out new onboarding flows, Status updates,
        Profile pages, and advanced filters and searches. 
      </p>
      <p>I also helped develop a new platform for Working Not Working called NTRNL which helps companies with employee 
        retention and management.
      </p>
      <p>Both websites were built with Ruby on Rails.</p>
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
    tags: ['Ruby on Rails', 'SASS', 'SQL'],
    featured: true,
    desktop: wnwDesktop,
    mobile: wnwMobile,
    iframe: false
  },
  {
    title: 'Tempopay',
    description: 'A company dedicated to make managing healthcare costs simple.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I developed this website designed by Redesign Health using 
    Next Js and Contentful.
    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> TempoPay helps people access the care they need, and then 
      set up a flexible, personalized payment plan that works with the rhythm of their life. Because there's no interest, fees, 
      or credit check, there's no reason to defer care.
    </p>
    <p>Employers and health plans that partner with TempoPay can keep pace with employees and members, 
      and make sure they have everything they need to stay physically and financially healthy.</p>
    </>,
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
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> I worked as a frontend engineer on the Ace Hotel website 
    helping to implement new pages and features. This website was built with Vue Js and Python. I was also tasked with building 
    out custom designed Squarespace websites for all the food and beverage associated with the many Ace Hotel properties. 

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
    tags: ['Vue Js', 'SASS'],
    featured: false,
    desktop: aceDesktop,
    mobile: aceMobile,
    iframe: false
  },
  {
    title: 'Getting Smart',
    description: 'Explore and highlight innovations in learning to empower all people to build capacity to thrive and steward in a complex and uncertain future.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> This is a website by Frank LaRocca Studios that I had the 
    privilege of working on. Implementing a custom Wordpress theme using Timber/Twig as well as PHP, SCSS, Javascript, 
    Tailwind and ACF to help bring to life a design from the legendary design agency Pentagram.
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
    description: 'Styling for real life, luxury for every day.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> This is a website by Frank Hugo & Marie that I had the 
    privilege of working on. Implementing a custom Shopify theme using Liquid, Javascript, SCSS to help bring to develop a 
    huge online e commerce platform for massive fashion brand.
    </p>
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
    <p><span className=' text-black font-bold'>The website:</span> At a time when best-in-class brands aspire to transcend 
    product—to be a trusted resource, to create signature experiences, and to build a community—elysewalker has made these 
    elements the foundation of its brand, and the key to its success
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
    tags: ['wordpress', 'tailwind', 'timber/twig'],
    featured: false,
    desktop: muirDesktop,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Super LA',
    description: 'A one-stop shop for all your real estate project needs.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> This is a website I developed using Webflow. 
    Leaning into transitions and scroll effects, also building custom online store.
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
    tags: ['webflow', 'javascript', 'css', 'ecommerce'],
    featured: false,
    desktop: superla,
    mobile: wnwMobile,
    iframe: true
  },
  {
    title: 'Checker Hall',
    description: 'A neighborhood bar and restaurant in Highland Park, Los Angeles.',
    longDescription: <>
    <p><span className=' text-black font-bold'>The website:</span> At a time when best-in-class brands aspire to transcend 
    product—to be a trusted resource, to create signature experiences, and to build a community—elysewalker has made these 
    elements the foundation of its brand, and the key to its success
    </p>
    <p>
      <span className=' text-black font-bold'>The company:</span> Muir welcomes guests to a refined, distinctly Nova Scotian 
      hospitality experience, in the absolute centre of downtown in the heart of the Halifax Waterfront.
    </p>
      </>,
    year: '2022',
    url: 'https://www.checkerhall.com/',
    previewImageOne: checkerhallDesktop,
    previewImageTwo: checkerhallPreviewOne,
    bgColor: 'rgb(123, 143, 127)',
    slug: 'checkerhall',
    tags: ['webflow', 'javascript', 'css'],
    featured: false,
    desktop: checkerhallDesktop,
    mobile: wnwMobile,
    iframe: true
  },
];