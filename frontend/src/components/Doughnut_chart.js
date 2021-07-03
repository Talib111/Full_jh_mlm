import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import '../Styles/chart.css'

function Doughnut_chart() {
    
    const data = {
        labels: ['jan','feb','mar','apr','may'],
        datasets: [{ label: 'sales for 2020 (M)', data: [3,2,2,1,5],backgroundColor: ['red','blue','green','orange','yellow']}]
    }

    const options = {
        title:{display: true, text: 'Doughnut Chart'}
    }
    return (
       <React.Fragment>
           <div className="Doughnut_chart"> <Doughnut  data={data} options={options} /></div>
          
       </React.Fragment>
    )
}

export default Doughnut_chart
