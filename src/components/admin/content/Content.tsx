import React from 'react'
import './styleContent.css'
interface Props {
    children: React.ReactNode
}

const Content = ({
    children
}: Props) => {
    return (
        <div className='admin-content__container'>
          {children}
        </div>
      )
}

export default Content