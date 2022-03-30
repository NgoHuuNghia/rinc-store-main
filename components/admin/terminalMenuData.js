import { FaGamepad, FaStore, FaUserAlt } from 'react-icons/fa';
import {AiOutlineUnorderedList, AiOutlineFileAdd, AiFillDashboard, AiFillStar} from 'react-icons/ai'
import { MdWidgets, MdComputer, MdAttachMoney } from 'react-icons/md';
import { RiAlertFill } from 'react-icons/ri';

export const terminalDashboardData = [
  {
    menu: 'Dashboard',
    menuIcon: <AiFillDashboard />,
    dropDown: [
      { label: 'Main', icon: <AiFillStar />, url: '/admin' },
      { label: 'Alerts', icon: <RiAlertFill />, url: '/admin' },
      { label: 'Sales', icon: <MdAttachMoney />, url: '/admin' },
    ],
  },
]

export const terminalMenuData = [
  {
    menu: 'Games',
    menuIcon: <FaGamepad />,
    dropDown: [
      { label: 'List', icon: <AiOutlineUnorderedList />, url: '/admin/games' },
      { label: 'Add new', icon: <AiOutlineFileAdd />, url: '/admin' },
    ],
  },
  {
    menu: 'Genres',
    menuIcon: <MdWidgets />,
    dropDown: [
      { label: 'List', icon: <AiOutlineUnorderedList />, url: '/admin' },
      { label: 'Add new', icon: <AiOutlineFileAdd />, url: '/admin' },
    ],
  },
  {
    menu: 'Platform',
    menuIcon: <MdComputer />,
    dropDown: [
      { label: 'List', icon: <AiOutlineUnorderedList />, url: '/admin' },
      { label: 'Add new', icon: <AiOutlineFileAdd />, url: '/admin' },
    ],
  },
  {
    menu: 'Stores',
    menuIcon: <FaStore />,
    dropDown: [
      { label: 'List', icon: <AiOutlineUnorderedList />, url: '/admin' },
      { label: 'Add new', icon: <AiOutlineFileAdd />, url: '/admin' },
    ],
  },
  {
    menu: 'Users',
    menuIcon: <FaUserAlt />,
    dropDown: [
      { label: 'List', icon: <AiOutlineUnorderedList />, url: '/admin/users' },
      { label: 'Add new', icon: <AiOutlineFileAdd />, url: '/admin' },
    ],
  },
];
