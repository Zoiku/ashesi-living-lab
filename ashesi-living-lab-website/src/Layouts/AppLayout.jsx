import './AppLayout.css'
import {Outlet} from 'react-router-dom'
import LeftMenu from '../Components/LeftMenu'

const AppLayout = () => (
    <div className="AppLayout">
        <LeftMenu />
        <div className="pages-container">
            <Outlet />
        </div>
    </div>
)

export default AppLayout