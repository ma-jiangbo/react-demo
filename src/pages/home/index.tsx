import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.css'

const Home: React.FC = () => {
    return (
        <div>
            <Link to={'/todo'}>todoList</Link>
        </div>
    )
}

export default Home