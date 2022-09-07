import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from 'assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function Header(props) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="" />

                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    {/* <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action')}></div>
            </div>

        </header >
    )
}

Header.propTypes = {}

export default Header
