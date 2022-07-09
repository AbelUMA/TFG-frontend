import { React } from 'react'
import { DropTarget } from 'react-drag-drop-container'

function Box({ boxes, targetKey, handleScore }) {
  const handleDrop = (e) => {
    let box = boxes.find((o) => o.class === e.dragData)
    var bgColor = box.color
    // Match
    if (e.dragData.toUpperCase() === e.srcElement.innerHTML) {
      e.target.classList.remove('border-dashed')
      e.target.classList.remove('text-gray-500')
      e.target.style.backgroundColor = bgColor
      handleScore()
    }
  }

  return (
    <div className="md:w-1/2 lg:w-1/2 md:h-screen">
      <h2 className="font-black text-3xl text-center">Huecos para completar</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Comienza arrastrando tarjetas {''}
        <span className="text-[#e9943b] font-bold">
          y aparecerán en este lugar
        </span>
      </p>
      <ul className="grid grid-cols-3 gap-4 mx-10">
        {boxes.map((box) => (
          <DropTarget
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

export default Box
