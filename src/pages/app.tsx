import React, { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import BasicLayout from '@/Layout/BasicLayout'
import routers from '@/router/baseRouter'

const App: React.FC = () => {
    return (
        <BasicLayout>
            {useRoutes(routers)}
            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='/user' element={<User />} />
                <Route path='/user/account' element={<UserAccount />} />
            </Routes> */}
        </BasicLayout>
    )
}

export default App