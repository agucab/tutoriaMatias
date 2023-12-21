
import React from "react"

const Colors = ({Color1, Color2, Color3, Color4, Likes, Days}) => {
    return (
        <div className= 'Colors'>
        <div>
        
        </div>
        <span className="VerdeOscuro" style={{backgroundColor:'blueviolet'}}>{Color1}</span>
        <span className="VerdeMilitar">{Color2}</span>
        <span className="VerdeClarito">{Color3}</span>
        <span className="VerdeAgua">{Color4}</span>
        <h5 className="Likes">{Likes}</h5>
        <h5 className="Days">{Days}</h5>

        </div>
    )
}

export default Colors 