"use client"
import React, { useState } from 'react'

function Info() {
    const [name ,setName]=useState("Aroob")
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Info
