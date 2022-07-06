import React from 'react'

function BasicsOfProgramming() {
  return (
    <div className="mt-5 flex items-stretch select-none">
      <div className="md:w-1/2 lg:w-1/2 mx-5">
        <h2 className="font-black text-3xl text-center">
          Conceptos básicos sobre la programación
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Pulsa sobre una{' '}
          <span className="text-indigo-600 font-bold">Pestaña</span> para elegir
          un {''}
          <span className="text-indigo-600 font-bold">Tema</span>
        </p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 md:h-screen">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
      </div>
    </div>
  )
}

export default BasicsOfProgramming
