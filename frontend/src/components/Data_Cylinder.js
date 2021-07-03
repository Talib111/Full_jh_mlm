import React from 'react'
import '../Styles/my_tree_view.css'

function Data_Cylinder(props) {
    return (
        <>
        <div className="data_cylinder" style={{backgroundColor: props.color}}><h6>{props.name}</h6><h4>{props.value}</h4></div>
       
        </>
    )
}

export default Data_Cylinder
