import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function AccountItem() {
	return (
		<div className={cx('wrapper')}>
			<img
				className={cx('avatar')}
				src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1662706800&x-signature=LP7skuuaeqlmGOqvqZRvvJKk9%2Fc%3D"
				alt="vtv24"
			/>

			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span>vtv24news</span>
					<FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
				</h4>
				<span className={cx('username')}>VTV24</span>
			</div>
		</div>
	)
}

AccountItem.propTypes = {}

export default AccountItem
