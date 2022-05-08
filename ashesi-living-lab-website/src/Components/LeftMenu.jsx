import './LeftMenu.css'
import {NavLink} from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SettingsIcon from '@mui/icons-material/Settings'
import Tooltip from '@mui/material/Tooltip'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import {useNavigate} from "react-router-dom"


const LeftMenu = () => {
    const navigate = useNavigate()

    const icon_size = {
        fontSize: '20px',
    }

    return (
        <div className="LeftMenu">
            <ul>
                <Tooltip title=''>
                    <NavLink to='/dashboard'><li><HomeRoundedIcon sx={icon_size} /></li></NavLink>
                </Tooltip>

                <Tooltip title=''>
                    <NavLink to='/apiendpoints'><li><IntegrationInstructionsIcon sx={icon_size} /></li></NavLink>
                </Tooltip>
                
                <Tooltip title=''>
                    <NavLink to='/settings'><li className='gear'><SettingsIcon sx={icon_size} /></li></NavLink>
                </Tooltip>

                <Tooltip title=''>
                    <li onClick={() => navigate('/')} style={{cursor: 'pointer'}}><LogoutRoundedIcon sx={icon_size} /></li>
                </Tooltip>
            </ul>
        </div>
    )
}

export default LeftMenu