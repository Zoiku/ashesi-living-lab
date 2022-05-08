import {Route, Routes} from 'react-router-dom'
import AppLayout from './Layouts/AppLayout'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import ApiEndpoints from './Pages/ApiEndpoints'

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />

            <Route element={<AppLayout />}>
              <Route exact path="/dashboard/" element={<Dashboard />} />
              <Route exact path="/apiendpoints/" element={<ApiEndpoints />} />
              <Route exact path="/settings/" element={<Settings />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App
