import React from 'react'

function Information() {
  return (
    <div className="mt-5 flex items-stretch select-none">
      <div className="md:w-full lg:w-full mx-5">
        <h2 className="font-black text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-principiaBlue to-principiaPurple py-3">
          ¿Cuál es el objetivo de esta aplicación?
        </h2>
        <p className="text-xl font-semibold mt-20 mb-10">
          El objetivo es claro:{' '}
          <span className="text-principiaGreen font-bold">
            aprender las bases de la programación.
          </span>{' '}
          Después de haber visitado, usado y curioseado la aplicación que tienes
          delante, vas a poseer los conocimientos básicos de como funciona la
          porgramación,{' '}
          <span className="text-principiaGreen font-bold">
            qué es y cómo trabajan los lenguajes de programación y su sintaxis,
            qué son las variables, algoritmos, estructuras de control y un largo
            etcétera.
          </span>{' '}
          Para ello, recomendamos seguir un tour:
        </p>
        <ul className="mx-5 text-xl font-semibold list-decimal space-y-4 indent-2">
          <li>
            Como primeros pasos, te invitamos a que visites{' '}
            <span className="text-principiaGreen font-bold">
              "Conceptos básicos"
            </span>{' '}
            para empezar por los cimientos de un lenguaje de programación y como
            funcionan estos. Encontrarás desde{' '}
            <span className="text-principiaGreen font-bold">
              {' '}
              qué se entiende por la programación, pasando por la sintaxis de un
              pseudolenguaje, hasta llegar a qué son los algoritmos
            </span>
            .
          </li>
          <li>
            Una vez aprendido dichos conceptos, el siguiente paso sería visitar
            el juego{' '}
            <span className="text-principiaGreen font-bold">
              "Arrastrar y Soltar"
            </span>
            , donde, a primera vista es un juego sencillo pero que si visitamos
            el primer punto, nos preparará un{' '}
            <span className="text-principiaGreen font-bold">repaso</span> sobre
            lo anterior.
          </li>
          <li>
            A continuación, podemos meternos de lleno en el{' '}
            <span className="text-principiaGreen font-bold">"Quiz"</span>, otro
            juego que nos hará fortalecer los conocimientos recien adquiridos y
            que tiene un toca más de dificultad.{' '}
            <span className="text-principiaGreen font-bold">
              ¡El objetivo es contestar a una serie de preguntas para conseguir
              un pleno!
            </span>
          </li>
          <li>
            Por último, nos tendremos que atrever a entrar de lleno en la
            programación. Este sitio se encuentra en{' '}
            <span className="text-principiaGreen font-bold">"Algoritmos"</span>{' '}
            como último juego. Aquí es donde vamos a juntar todo y atrevernos a{' '}
            <span className="text-principiaGreen font-bold">
              rellenar nuestras primeras lineas de código{' '}
            </span>{' '}
            donde se revisará para decirnos que hemos hecho correcto o que hemos
            hecho mal. También tendremos un{' '}
            <span className="text-principiaGreen font-bold">
              apartado visual en vivo sobre como funciona y avanza un programa
              con su código
            </span>
            .
          </li>
        </ul>
        <p className="text-xl font-semibold mt-10 mb-10">
          Si hemos seguido todos los pasos recomendados, nos hemos adentrado sin
          darnos cuenta en el{' '}
          <span className="text-principiaGreen font-bold">
            maravilloso mundo de la PROGRAMACIÓN.{' '}
          </span>
          Ni que decir tiene que cada quién puede usar y seguir los pasos que
          crea conveniente, lo importante es aprender y hacernos curioso,{' '}
          <span className="text-principiaGreen font-bold">
            ¡ya que la informática no cierra las puertas a nadie nunca!
          </span>
        </p>
      </div>
    </div>
  )
}

export default Information
