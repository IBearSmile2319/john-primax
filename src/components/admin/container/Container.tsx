import React, { useState } from 'react'
import Content from '../content/Content'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import './styleContainer.css'

interface Props {
    children: React.ReactNode
}

const Container = ({
    children
}: Props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }
    const handleMenuClose = () => {
        setMenuOpen(false)
    }
    return (
        <div className="admin-body">
            <div className="admin__container">
                <Header
                    setMenuOpen={handleMenuOpen}
                />
                <Sidebar
                    menuOpen={menuOpen}
                    setMenuOpen={handleMenuOpen}
                    setMenuClose={handleMenuClose}
                />
                <Content>
                    {children}
                </Content>
            </div>
        </div>
    )
}

export default Container