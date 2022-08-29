import { React } from 'react'
import YoutubeEmbed from '../components/YoutubeEmbed'

function Tabs({ openTab, setOpenTab }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
            <li className="mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 0 ? 'bg-principiaBlue' : 'text-principiaBlue')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(0)
                }}
                href="#link1">
                Software y Hardware
              </a>
            </li>
            <li className="mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1 ? 'bg-principiaBlue' : 'text-principiaBlue')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                href="#link2">
                Lenguajes de Programación
              </a>
            </li>
            <li className="mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2 ? 'bg-principiaBlue' : 'text-principiaBlue')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                href="#link3">
                Código Binario
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 0 ? 'block' : 'hidden'} id="link1">
                  <YoutubeEmbed youtubeId={'3F-kuNGlNco'} />
                </div>
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link2">
                  <YoutubeEmbed youtubeId={'pWw4UtQhdek'} />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link3">
                  <YoutubeEmbed youtubeId={'f5Onw5qTOz4'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
