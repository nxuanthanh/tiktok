import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons'
import {
	faCircleXmark,
	faCoins,
	faEllipsisVertical,
	faGear,
	faLanguage,
	faMagnifyingGlass,
	faPlus,
	faSignOut,
	faSpinner,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import images from 'assets/images'
import classNames from 'classnames/bind'
import AccountItem from 'components/AccountItem'
import Button from 'components/Button'
import Popper from 'components/Popper'
import Menu from 'components/Popper/Menu'
import { useState } from 'react'
import styles from './Header.module.scss'
import 'tippy.js/dist/tippy.css'
const cx = classNames.bind(styles)

function Header(props) {
	const [searchResult, setSearchResult] = useState([])
	const currentUser = true

	const menuItemList = [
		{
			icon: <FontAwesomeIcon icon={faLanguage} />,
			label: 'English',
			children: {
				title: 'Language',
				data: [
					{ code: 'en', label: 'English' },
					{ code: 'vi', label: 'Vietlabelse' },
				],
			},
		},
		{
			icon: <FontAwesomeIcon icon={faCircleQuestion} />,
			label: 'Feedback and help',
			to: '/feedback',
		},
		{
			icon: <FontAwesomeIcon icon={faKeyboard} />,
			label: 'Keyboard shortcuts',
		},
	]

	const hasUserMenu = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			label: 'View profile',
			to: '/@vtvt24',
		},
		{
			icon: <FontAwesomeIcon icon={faCoins} />,
			label: 'Get coins',
			to: '/coin',
		},
		{
			icon: <FontAwesomeIcon icon={faGear} />,
			label: 'Settings',
			to: '/settings',
		},
		...menuItemList,
		{
			icon: <FontAwesomeIcon icon={faSignOut} />,
			label: 'Log out',
			to: '/logout',
			separate: true,
		},
	]

	const handleOnchange = () => {
		// something to do here...
	}

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img src={images.logo} alt="" />

				<HeadlessTippy
					interactive
					visible={searchResult.length > 0}
					render={(attrs) => (
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
						<input placeholder="Search accounts and videos" spellCheck={false} />
						<button className={cx('clear')}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>

						<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

						<button className={cx('search-btn')}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</HeadlessTippy>

				<div className={cx('actions')}>
					<Button outline className={cx('plus-icon')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
						Upload
					</Button>
					{currentUser ? (
						<>
							<Tippy content={'Messages'}>
								<img src={images.message} alt="" className={cx('message')} />
							</Tippy>
							<Tippy content={'Inbox'}>
								<img src={images.notify} alt="" className={cx('notify')} />
							</Tippy>
						</>
					) : (
						<>
							<Button primary>Login</Button>
						</>
					)}

					<Menu items={currentUser ? hasUserMenu : menuItemList} onChange={handleOnchange}>
						<button className={cx(`${currentUser ? 'avatar-btn' : 'more-btn'}`)}>
							{currentUser ? (
								<>
									<img
										className={cx('user-avatar')}
										src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1662706800&x-signature=LP7skuuaeqlmGOqvqZRvvJKk9%2Fc%3D"
										alt="vtv24"
									/>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faEllipsisVertical} />
								</>
							)}
						</button>
					</Menu>
				</div>
			</div>
		</header>
	)
}

Header.propTypes = {}

export default Header
