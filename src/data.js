import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    icon: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    serviceH4: 'saving money',
    serviceP: 'Save money, adventure big.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    serviceH4: 'endless hiking',
    serviceP: 'Hiking is always amazing. Join us.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    serviceH4: 'amazing comfort',
    serviceP: 'Stress free & Comfortable.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    alt: 'china image',
    date: 'august 26th, 2023',
    title: 'tibet adventure',
    description: 'An amazing adventure in Tibet',
    location: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    alt: 'new zeland',
    date: 'May 26th, 2023',
    title: 'New Zeland adventure',
    description: 'Swim in crystal clear water',
    location: 'New Zeland',
    duration: 10,
    price: 2000,
  },
  {
    id: 3,
    image: tour3,
    alt: 'New York Image',
    date: 'June 3rd, 2023',
    title: 'New York Adventure',
    description: 'Beautiful views from your balcony',
    location: 'New York',
    duration: 7,
    price: 1500,
  },
  {
    id: 4,
    image: tour4,
    alt: 'South Africa',
    date: 'December 1st, 2023',
    title: 'South Africa Adventure',
    description: 'Adventure awaits',
    location: 'South Africa',
    duration: 10,
    price: 3000,
  },
];
