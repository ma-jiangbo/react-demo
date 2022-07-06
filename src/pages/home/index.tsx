import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.css'

const Home: React.FC = () => {
    return (
        <div>
            <h2 className={styles.page}>Home Page</h2>
            <Link to={'/todo'}>todoList</Link>
        </div>
    )
}

export default Home