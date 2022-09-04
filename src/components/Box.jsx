import { React, memo, useState } from 'react'
import { DropTarget } from 'react-drag-drop-container'

function Box({ boxes, targetKey, setIsOpenPopup }) {
  const [score, setScore] = useState(1)

  const handleDrop = (e) => {
    let box = boxes.find((o) => o.class === e.dragData)
    var bgColor = box.color
    // Match
    if (e.dragData.toUpperCase() === e.srcElement.innerHTML) {
      e.target.classList.remove('border-dashed')
      e.target.classList.remove('text-gray-500')
      e.target.style.backgroundColor = bgColor
      setScore(score + 1)
      if (score === 9) {
        setIsOpenPopup(true)
      }
    }
  }

  return (
    <div className="w-1/2 h-screen">
      <h2 className="font-black text-3xl text-center">Huecos para completar</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Comienza arrastrando tarjetas {''}
        <span className="text-principiaOrange font-bold">
          y aparecerán en este lugar
        </span>
      </p>
      <ul className="grid grid-cols-3 gap-4 mx-10">
        {boxes.map((box) => (
          <DropTarget
            key={box.id}
            targetKey={targetKey}
            dropData={box.class}
            onHit={handleDrop}>
            <li
              key={box.id}
              className="text-lg font-bold mx-auto box-content flex justify-center items-center text-center h-12 w-32 p-4 border-4 rounded-md border-dashed text-gray-500">
              {box.text}
            </li>
          </DropTarget>
        ))}
      </ul>
    </div>
  )
}

export default memo(Box)
