import {
	faCircleXmark,
	faEllipsisVertical,
	faMagnifyingGlass,
	faPlus,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import HeadlessTippy from '@tippyjs/react/headless'
import {
	Keyboard,
	Language,
	Logout,
	Message,
	Notify,
	Profile,
	Question,
	Setting,
	Tiktok,
} from 'assets/icons'
import images from 'assets/images'
import classNames from 'classnames/bind'
import AccountItem from 'components/AccountItem'
import Button from 'components/Button'
import Image from 'components/image'
import Popper from 'components/Popper'
import Menu from 'components/Popper/Menu'
import { useState } from 'react'
import 'tippy.js/dist/tippy.css'
import styles from './Header.module.scss'
const cx = classNames.bind(styles)

function Header(props) {
	const [searchResult, setSearchResult] = useState([])
	const currentUser = true

	const menuItemList = [
		{
			icon: <Language />,
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
			icon: <Question />,
			label: 'Feedback and help',
			to: '/feedback',
		},
		{
			icon: <Keyboard />,
			label: 'Keyboard shortcuts',
		},
	]

	const hasUserMenu = [
		{
			icon: <Profile />,
			label: 'View profile',
			to: '/@vtvt24',
		},
		{
			icon: <Tiktok />,
			label: 'Get coins',
			to: '/coin',
		},
		{
			icon: <Setting />,
			label: 'Settings',
			to: '/settings',
		},
		...menuItemList,
		{
			icon: <Logout />,
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
				<img src={images.logo} alt="" className={cx('logo')} />

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
								<Message className={cx('message')} />
							</Tippy>
							<Tippy content={'Inbox'}>
								<Notify className={cx('notify')} />
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
									<Image
										className={cx('user-avatar')}
										src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1662706800&x-signature=LP7skuuaeqlmGOqvqZRvvJKk9%2Fc%3D"
										alt="vtv24"
										// fallback="https://yt3.ggpht.com/yti/AJo0G0mCy6ZyPqQ8Wo82XcG89NDUROvwEyC86v2oS_R3bg=s88-c-k-c0x00ffffff-no-rj-mo"
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
