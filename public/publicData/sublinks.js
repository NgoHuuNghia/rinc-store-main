import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const sublinks = [
  {
    id: 1,
    page: 'store',
    mainUrl: '/',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/' },
      { label: 'connect', icon: <FaCreditCard />, url: '/' },
    ],
  },
  {
    id: 2,
    page: 'community',
    mainUrl: '/community',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/community' },
      { label: 'libraries', icon: <FaBook />, url: '/community' },
      { label: 'help', icon: <FaBook />, url: '/community' },
      { label: 'billing', icon: <FaBook />, url: '/community' },
    ],
  },
  {
    id: 3,
    page: 'about',
    mainUrl: '/about',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/about' },
      { label: 'customers', icon: <FaBriefcase />, url: '/about' },
    ],
  },
  {
    id: 4,
    page: 'support',
    mainUrl: '/support',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/support' },
      { label: 'libraries', icon: <FaBook />, url: '/support' },
      { label: 'help', icon: <FaBook />, url: '/support' },
      { label: 'billing', icon: <FaBook />, url: '/support' },
    ],
  },
];

export default sublinks;
