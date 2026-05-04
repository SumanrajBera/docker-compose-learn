import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [response, setResponse] = useState("")
  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message)
      })
  }, [])
  return (
    <div>{response}</div>
  )
}

export default App