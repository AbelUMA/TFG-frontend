import { React, useState } from 'react'
import Card from '../components/Card'
import Box from '../components/Box'
import { initialCards } from '../data/cards'

function DragAndDrop() {
  const shuffleCards = initialCards.sort(() => Math.random() - 0.5)

  const [cards, setCards] = useState(shuffleCards)
  const [boxes, setBoxes] = useState(shuffleCards)

  return (
    <>
      <div className="container mx-auto mt-20 select-none overflow-hidden">
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
          <span className="text-[#e9943b]">Arrastra y suelta</span> las tarjetas
          en los correspondientes <span className="text-[#e9943b]">huecos</span>{' '}
        </h1>
      </div>

      <div className="mt-20 flex items-stretch select-none">
        <Card targetKey="card" cards={cards}></Card>
        <Box targetKey="card" boxes={boxes}></Box>
      </div>
    </>
  )
}

export default DragAndDrop
