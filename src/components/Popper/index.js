import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

function Popper({ children }) {
	return <div className={cx('wrapper')}>{children}</div>
}

Popper.propTypes = {}

export default Popper
