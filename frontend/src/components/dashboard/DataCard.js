import React from 'react'
import { FaReact} from 'react-icons/fa'



function DataCard(props) {
    return (
       <>
       <div className="data_card pb-2 pt-2" style={{backgroundColor: props.color}}><h6 className="text-center">{props.title}</h6><h5>{props.value}</h5></div>
       </>
    )
}

export default DataCard
