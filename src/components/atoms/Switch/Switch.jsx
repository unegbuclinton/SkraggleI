import React from 'react'
import { SwitchInput,Label,Switched } from './styles'

function Switch() {
  return (
    <Label>
        <SwitchInput type='checkbox'/>
        <Switched />
    </Label>
  )
}

export default Switch