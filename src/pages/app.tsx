import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import BasicLayout from '@/Layout/BasicLayout'
import Home from './home'
import Todo from './todo'
import User from './user'
import UserAccount from './user/account'

const App: React.FC = () => {
    return (
        <BasicLayout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='/user' element={<User />} />
                <Route path='/user/account' element={<UserAccount />} />
            </Routes>
        </BasicLayout>
    )
}

export default App