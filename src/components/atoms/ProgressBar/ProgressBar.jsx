import React from 'react'
import {ProgressBarWrapper, ProgressBarOuter, Percentage, Container} from './styles'


const ProgressBar = ({ className, ...rest }) => {
  return (
    <ProgressBarWrapper className={className}>
    <Container>
    <h2 className='text'>Yearly Goal</h2>  
    <ProgressBarOuter className={className} {...rest}>
      <Percentage className={className} {...rest}/>
    </ProgressBarOuter>
    <div  className='label'>
      <div className='container'>
       <span className='amount'>$19540.23</span>
      <span className='raised__target'>raised</span>
      <span className='percent'>(12%)</span></div>
      <div>
        <span className='raised__target'>Target</span>
        <span className='amount'>$500,00</span>
      </div>
    </div>
    </Container>
   </ProgressBarWrapper>
  )
}

export default ProgressBar