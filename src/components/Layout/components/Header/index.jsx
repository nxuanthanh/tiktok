import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from 'assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import Popper from 'components/Popper'
import AccountItem from 'components/AccountItem'
import Button from 'components/Button'
const cx = classNames.bind(styles)

function Header(props) {
    const [searchResult, setSearchResult] = useState([])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="" />

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <h3 className={cx('search-title')}>Accounts</h3>

                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </Popper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx('actions')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />} >Upload</Button>
                    <Button primary className={cx('plus-icon')}>Login</Button>
                </div>
            </div>

        </header >
    )
}

Header.propTypes = {}

export default Header
