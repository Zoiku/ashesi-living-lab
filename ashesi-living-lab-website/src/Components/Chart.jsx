import {Line} from 'react-chartjs-2'

const Chart = ({label,values}) => {
    const options = {
      scales: {
          yAxes: [{
            scaleLabel: {
              display: false,
            }
          }],
          xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Time'
              }
            }]
        }     
    }

    const data = {
        labels: Array.from(Array(60).keys()),

        datasets: [{
            label: label,
            data: values,
            borderWidth: 2,
            borderColor: '#8963BA'
        }]
    }

    return <div><Line height={250} data={data} options={options} /></div>
}

export default Chart