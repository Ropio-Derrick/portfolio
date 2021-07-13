import React from 'react'
import { Button } from 'react-bootstrap'
import {Motion,spring} from 'react-motion'

function motionslider() {

  return (
    <div>
        <Motion 
            defaultStyle={{x:-200, opacity:0}} 
            style={{x:spring(0), opacity:spring(1)}} >

            { style => (
                <div style={{
                    opacity:style.opacity,
                    transform:`translateX(${style.x}px)`}}>
                    {style.opacity}
                    <h1>fhsjdfdf</h1>
                    <h1>fhsjdfdf</h1>
                    <h1>fhsjdfdf</h1>
                    <h1>fhsjdfdf</h1>
                    <h1>fhsjdfdf</h1>
                </div>
            )}

        </Motion>



        <Button>
            
        </Button>
    </div>
  )
}

export default motionslider