import React, { useState } from 'react'
import { InputField, InputFieldIcon, Container } from './styles'
import { DPIconSkraggleEyeOpen } from 'icons'
import { DPIconSkraggleEyeClose } from 'icons'



const Input = ({ type, placeholder }) => {

  const [click, setClick] = useState(false)


  return (

    <Container>
      <InputField type={click ? type === 'text' : 'password'} placeholder={placeholder} />
      {type === 'password' && <InputFieldIcon onClick={() => { setClick(!click) }}>
        {click ? <DPIconSkraggleEyeOpen /> : <DPIconSkraggleEyeClose />}
      </InputFieldIcon>}

    </Container>
  )
}

export default Input



