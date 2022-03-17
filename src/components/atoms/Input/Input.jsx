import React from 'react'
import { InputWrapper } from './styles'

const Input = ({ className, ...rest }) => {
  return (
    <div>

    <InputWrapper className={className} {...rest}>
    </InputWrapper>
    </div>
  )
}

export default Input
