import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

interface Props {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const CustomLinkActive = ({ to, children, className, onClick }: Props) => {
    const path = window.location.pathname;
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <Link to={to}
            onClick={onClick}
            className={`${className ? className : ''}  ${
                match || path.includes(to) ? 'active' : ''
            }`}
        >
            {children}
        </Link>
    )
}

export default CustomLinkActive
