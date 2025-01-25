import React from 'react'

const SingleData = ({singleData}) => {
   const {name ,id, website , phone} = singleData
    singleData
           console.log(singleData)
    return (
        <div>
            
                <h1>{id}</h1>
                <h1>{website}</h1>
                <h1>{phone}</h1>
            
        </div>
    )
}

export default SingleData