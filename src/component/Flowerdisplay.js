import React from 'react'
import Lazyload from 'react-lazyload'

const flower = (props)=>{
    
    const renderList = props.dataList.map((data)=>{

    return(
        <Lazyload height={200} throttle={500}>
            <h3>{data.name}</h3>
            <p>{data.color}</p>
            <img src={data.img}></img>
        </Lazyload>
        

    )
    
    })

    return(
        <div className="grid">
            {renderList}
        </div>
     )


}

export default flower;