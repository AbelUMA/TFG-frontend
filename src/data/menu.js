import { CgGames } from 'react-icons/cg'
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineLaptop,
} from 'react-icons/ai'
import { BiBrain } from 'react-icons/bi'

export const sidebarMenu = [
  {
    id: 1,
    title: 'Home',
    url: '/home',
    icon: <AiOutlineHome />,
    submenu: '',
  },
  {
    id: 2,
    title: 'Juegos',
    url: '#',
    icon: <CgGames />,
    submenu: [
      {
        id: 3,
        title: 'Arrastrar y Soltar',
        url: '/drag-and-drop',
        icon: '',
      },
      {
        id: 4,
        title: 'Quiz',
        url: '/quiz',
        icon: '',
      },
      {
        id: 5,
        title: 'Algoritmos',
        url: '/algorithm',
        icon: '',
      },
    ],
  },
  {
    id: 6,
    title: 'Conceptos básicos',
    url: '/basics-of-programming',
    icon: <BiBrain />,
    submenu: '',
  },
  {
    id: 7,
    title: '¡A programar!',
    url: '/programming',
    icon: <AiOutlineLaptop />,
    submenu: '',
  },
  {
    id: 8,
    title: 'Información',
    url: '/info',
    icon: <AiOutlineInfoCircle />,
    submenu: '',
  },
  {
    id: 9,
    title: 'Sobre mí',
    url: '/about-me',
    icon: <AiOutlineUser />,
    submenu: '',
  },
]
