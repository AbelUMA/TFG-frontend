import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Exercise1 from '../../components/Exercises/Exercise1'
import Exercise2 from '../../components/Exercises/Exercise2'
import Exercise3 from '../../components/Exercises/Exercise3'
import { algorithmYourself } from '../../data/algorithmYourself.js'

function Exercises() {
  let { id } = useParams()

  const [fetchData, setFetchData] = useState([{}])

  useEffect(() => {
    setFetchData(algorithmYourself)
  }, [])

  return {
    1: <Exercise1 />,
    2: <Exercise2 fetchData={algorithmYourself} />,
    3: <Exercise3 fetchData={algorithmYourself} />,
  }[id]
}

export default Exercises
