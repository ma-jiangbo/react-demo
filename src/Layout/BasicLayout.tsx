import React, { ReactNode } from 'react'
import Menu from '@/components/Menu'

const BasicLayout: React.FC<{ children: ReactNode | ReactNode[] }> = (props) => {

    return (
        <div>
            <Menu />
            <main>
              {props.children}
            </main>
        </div>
    )
}

export default BasicLayout