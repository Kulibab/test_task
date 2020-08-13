import React from 'react'
import c from './Gradient.module.css'

const Gradient = ({firstGrad, secondGrad, id, removeGradient,}) => {
    return <div className={c.cardWrap} style={{background: `linear-gradient(90deg, ${firstGrad}, ${secondGrad})`}}>
            <span>
                {firstGrad}
            </span>
            <span>
                {secondGrad}
            </span>
        <span className={c.deleteBtn} onClick={() => removeGradient(id)}>&times;</span>
    </div>
}

export default Gradient;