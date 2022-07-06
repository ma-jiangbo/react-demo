import React, { useState } from 'react'
import styles from './Menu.css'
import storage from '@/utils/storage'
import routers from '../../../routes'

const Menu: React.FC = (props) => {

    const [isOpen, setIsOpen] = useState(Boolean(storage.get('collapse')))

    const renderRoutes = (routerList: RouteItem[]) => {
        return <div></div>
    }

    return (
        <div className={styles.menu}>
            <div className={styles.collapse}>
                {isOpen ? '关闭' : '展开'}
            </div>
            {renderRoutes(routers)}
        </div>
    )
}

export default Menu