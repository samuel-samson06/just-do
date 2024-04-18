import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackComponent() {
    const navigate = useNavigate()
    function backToHomePage(){
        navigate(-1)
    }

  return (
    <React.Fragment>
        <p onClick={backToHomePage} className=' cursor-pointer font-semibold text-2xl'>←</p>
    </React.Fragment>
  )
}

export default BackComponent