import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

MainLayout.propTypes = {}

export default MainLayout
