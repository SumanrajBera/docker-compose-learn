import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  async function getReq() {
    const response = await axios.get("http://localhost:3000/api/message")
    console.log(response.data)
  }

  useEffect(() => {
    getReq()
  }, [])
  return (
    <div>Lets change</div>
  )
}

export default App