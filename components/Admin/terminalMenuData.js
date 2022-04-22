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
    menu: 'Misc',
    menuIcon: <MdWidgets />,
    dropDown: [
      { label: 'Genres', icon: <MdWidgets />, url: '/admin/misc/genres' },
      { label: 'Platforms', icon: <MdComputer />, url: '/admin/misc/platforms' },
      { label: 'Stores', icon: <FaStore />, url: '/admin/misc/stores' },
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
