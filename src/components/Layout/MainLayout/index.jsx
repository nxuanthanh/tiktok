import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import Header from '../components/Header'
import classNames from 'classnames/bind'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)
function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    )
}

MainLayout.propTypes = {}

export default MainLayout
