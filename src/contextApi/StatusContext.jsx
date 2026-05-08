import React,{useState} from 'react'
import { createContext } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'

// creating contect instance an that can provided state globaly
export const serviceSuccessContect=createContext()
export const authContext=createContext()

// accesing entair app as childewn
function StatusContext(children) {

    // created state for sharing globaly
    const [serviceSuccessStatus,setServiceSuccessStstus]=useState("")
  return (
    <>
    {/* providing state to entair app globalyc  */}
    <serviceSuccessContect.Provider value={{serviceSuccessStatus,setServiceSuccessStstus}}>

        {children}


    </serviceSuccessContect.Provider>
    </>
  )
}

export default StatusContext