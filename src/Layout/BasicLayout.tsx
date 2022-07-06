import React, { ReactNode } from 'react'
import Menu from '@/components/Menu'
import styles from './index.css'

const BasicLayout: React.FC<{ children: ReactNode | ReactNode[] }> = (props) => {

    return (
        <div className={styles.layout}>
            <Menu />
            <main>
              {props.children}
            </main>
        </div>
    )
}

export default BasicLayout