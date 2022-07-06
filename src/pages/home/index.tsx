import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to={'/todo'}>todoList</Link>
        </div>
    )
}

export default Home