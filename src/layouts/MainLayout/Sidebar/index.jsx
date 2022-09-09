import React from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function Sidebar(props) {
    return (
        <div className={cx('wrapper')}>Sidebar pages</div>
    )
}

Sidebar.propTypes = {}

export default Sidebar
