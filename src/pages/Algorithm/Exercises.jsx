import { React } from 'react'
import { useParams } from 'react-router-dom'
import Exercise2 from '../../components/Exercises/Exercise2'
import Exercise3 from '../../components/Exercises/Exercise3'
import Exercise4 from '../../components/Exercises/Exercise4'

function Exercises() {
  let { id } = useParams()

  return {
    2: <Exercise2 />,
    3: <Exercise3 />,
    4: <Exercise4 />,
  }[id]
}

export default Exercises
