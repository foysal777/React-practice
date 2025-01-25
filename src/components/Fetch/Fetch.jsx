import { useEffect, useState } from "react"
import SingleData from "../SingleData/SingleData"


const Data = () => {

    const [allData, setData] = useState([])
    console.log(allData)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setData(data))


    }, [])

    return (

        <div>Data Length : {allData.length}


            {
                allData.map(singleData =>

                    <SingleData singleData={singleData} ></SingleData>
                )
            }



        </div>


    )

}

export default Data