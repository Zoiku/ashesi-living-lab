import './Dashboard.css'
import {useState} from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chart from '../Components/Chart'
import axios from 'axios'
import Tooltip from '@material-ui/core/Tooltip'
import { useEffect } from 'react'

const Dashboard = () => {

    const [labs, setLabs] = useState({
        rooms: ['LAB 222'],
        current_room: 'LAB 222' 
    })
    const [selectedVariable, setVariable] = useState('Humidity')
    const [state, setState] = useState({
        Humidity: [],
        Light: [],
        Motion: [],
        Temperature: []
    })

    const handleChange = event => setLabs({...labs, current_room: event.target.value})
    const average = array => array.length > 0 ? Math.round(((array.reduce((a, b) => parseInt(a) + parseInt(b)) / array.length) + Number.EPSILON) * 100) / 100 : 0 
        
    const isActiveLight = (num) => num < 1 ? "Lights are off" : "Lights are in use"
    const isActiveTemperature = (num) => num < 68 ? "Below room temperature" : "Above room temperature"
    const isActiveMotion = (num) => num < 1 ? "Room is not being used" : "Room being used"

    const suggested_action_light = (motion) => {
        if(motion < 2) {
            return "Below minimal level. Turn off all lights"
        }else if(motion > 1 & motion < 10) {
            return "Minimal motion detected. Conserve power by reducing Light levels"
        }else {
            return "Maximum motion detected. Keep Lights on"
        }
    }
    const suggested_action_humidity = (motion) => {
        if(motion < 2) {
            return "Below minimal level. Turn off all coolers"
        }else if(motion > 1 & motion < 10) {
            return "Minimal motion detected. Conserve power by reducing Cooler levels."
        }else {
            return "Maximum motion detected. Keep Coolers on"
        }
    }
    const suggested_action_motion = (motion) => {
        if(motion < 2) {
            return "Below minimal level. Turn off all gadgets"
        }else if(motion > 1 & motion < 10) {
            return "Minimal motion detected. Conserve power by reducing gadget levels."
        }else {
            return "Maximum motion detected. Keep gadgets on"
        }
    }

    useEffect(() => {
        axios.get('https://ashesilivinglabapi.herokuapp.com/api/get')
            .then(response => {
                const stream = Object.values(response.data).slice(-60)
                const Humidity = stream.map(data => data['Humidity'])
                const Light = stream.map(data => data['Light'])
                const Motion = stream.map(data => data['Motion'])
                const Temperature = stream.map(data => data['Temperature'])
            
                setState({...state, 
                    Humidity: Humidity,
                    Light: Light,
                    Motion: Motion,
                    Temperature: Temperature
                })
            })
    }, [state])

    return(
        <div className="Dashboard Page">
            <div>
                <h1 className='page-header'>Dashboard</h1>

                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'end'}}>
                    <FormControl>
                        <Select variant="filled" sx={{width: '200px', fontSize: 18}} value={labs.current_room} onChange={handleChange}>
                            {labs.rooms.map((room, index) => <MenuItem key={index} value={room}><span>{room}</span></MenuItem>)}
                        </Select>
                    </FormControl>
                    <div>
                        <div>Room</div>
                        <h2>{labs.current_room}</h2>
                    </div>
                </Box>

                <div style={{ margin: '50px 0 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <div style={{textAlign: 'center', marginBottom: '40px', color: 'gray'}}>
                        <   div>Latest Room Temperature</div>
                        <   small style={{fontSize: '10px'}}>Delayed by 5s</small> 
                        </div>
                        <div className="inner">
                            <p>{state.Temperature.slice(-1)} &#xb0;C</p>
                        </div>
                    </div>

                    <div style={{width: '50%'}}>
                        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '20px', borderRadius: '2px', padding: '10px', color: '#000', outline: '1px solid gray'}}>
                            <div style={{textAlign: 'center'}}>
                                <div style={{fontSize: '18px', marginBottom: '15px'}}>{selectedVariable} Graphical Report For {labs.current_room} </div>
                                <div>
                                    <ul>
                                        <li style={{fontSize: '11px'}}>Average Lightening Intensity over 60 seconds: {average(state.Light)} Lux</li>
                                        <li style={{fontSize: '11px'}}>Average Temperature over 60 seconds: {average(state.Humidity)}&#xb0;C</li>
                                        <li style={{fontSize: '11px'}}>Average Motion over 60 seconds: {average(state.Motion)}ms</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Chart label={`${selectedVariable} in ${labs.current_room} over 60 seconds`} values={state[`${selectedVariable}`]} />
                    </div>
                </div>

                <div style={{margin: '100px 0 0 0'}}>
                    <div style={{textAlign: 'center', margin: '0 0 15px 0', color: 'GrayText'}}>Latest data from {labs.current_room} <small>(Delayed by 5s)</small> </div>
                    <div className='grid-container'>
                        <Tooltip title="Click to view report and change graph">
                            <div className="grid-item" onClick={() => setVariable('Humidity')}>
                                <div>
                                    <div>Humidity</div>
                                    <div>{state.Humidity.slice(-1)} %rh</div>
                                </div>
                            </div>
                        </Tooltip>

                        <Tooltip title="Click to view report and change graph">
                            <div className="grid-item" onClick={() => setVariable('Light')}>
                                <div>
                                    <div>Light</div>
                                    <div>{state.Light.slice(-1)} Lux</div>
                                </div>
                            </div>
                        </Tooltip>

                        <Tooltip title="Click to view report and change graph">
                            <div className="grid-item" onClick={() => setVariable('Motion')}>
                                <div>
                                    <div>Motion</div>
                                    <div>{state.Motion.slice(-1)} ms</div>
                                </div>
                            </div>
                        </Tooltip>
                    </div>
                    <div style={{textAlign: 'center', fontSize: 'small', margin: '20px 0 20px 0', color: 'GrayText'}}>Select any of the cards to change the Graph above and the suggested Report below.</div>
                </div>

                <div style={{margin: '40px 0 0 0', padding: '30px 20px 50px 30px', color: 'gray'}}>
                    {selectedVariable === "Humidity" && 
                        <div style={{margin: "0 0 40px 0"}}>
                        <h2 className="special-header">Humidity Report for {labs.current_room} </h2>
                        <div>
                            <ul className="special-lists" style={{margin: '15px 0'}}>
                                <li>Average humidity over 60 seconds is {average(state.Humidity)} %rh</li>
                                <li>{isActiveTemperature(state.Humidity.slice(-1))}</li>
                                <li>Suggested action based on average motion: {suggested_action_humidity(average(state.Motion))}</li>
                            </ul>
                        </div>
                        </div>
                    }
                    
                    {selectedVariable === "Light" && 
                        <div style={{margin: "0 0 40px 0"}}>
                            <h2 className="special-header">Lightening Report for {labs.current_room} </h2>
                            <div>
                                <ul className="special-lists" style={{margin: '10px 0'}}>
                                    <li>Average Lightening over 60 seconds is {average(state.Light)} Lux</li>
                                    <li>{isActiveLight(state.Humidity.slice(-1))}</li>
                                    <li>Suggested action based on average motion: {suggested_action_light(average(state.Motion))}</li>
                                </ul>
                            </div>
                        </div>
                    }

                    {selectedVariable === "Motion" && 
                        <div style={{margin: "0 0 40px 0"}}>
                            <h2 className="special-header">Motion Report for {labs.current_room} </h2>
                            <div>
                                <ul className="special-lists" style={{margin: '10px 0'}}>
                                    <li>Average Motion over 60 seconds is {average(state.Motion)} ms</li>
                                    <li>{isActiveMotion(state.Humidity.slice(-1))}</li>
                                    <li>Suggested action based on average motion: {suggested_action_motion(average(state.Motion))}</li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard