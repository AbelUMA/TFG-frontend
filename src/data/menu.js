import { CgGames } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'

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
        title: 'Arrastrar y soltar',
        url: '/drag-and-drop',
        icon: '',
      },
      {
        id: 4,
        title: 'Juego 1',
        url: '/juego-1',
        icon: '',
      },
      {
        id: 5,
        title: 'Juego 2',
        url: '/juego-2',
        icon: '',
      },
    ],
  },
]
