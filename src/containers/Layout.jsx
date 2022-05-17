import React from 'react'
const Layout = ({children}) => {
    return ( //componente quien recibe un hijo
    <div className="Layout">
        {children}
    </div>
    );
}

export default Layout;