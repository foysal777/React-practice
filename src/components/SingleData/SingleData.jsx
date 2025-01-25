import React from 'react'

const SingleData = ({singleData}) => {
   const {name ,id, website , phone} = singleData
    singleData
           console.log(singleData)
    return (

        <div>
        <div className='border-2 border-teal-600 p-5'>
            
                <h1 className='text-3xl font-bold text-red-500'>{id}</h1>
                <p className='text-2xl text-blue-500'>{name}</p>
                <p>{website}</p>
                <p>{phone}</p> 
                <br />
               
            
        </div>
        <br />
        </div>
    )
}

export default SingleData