import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons'
import {
	faCircleXmark,
	faEllipsisVertical,
	faLanguage,
	faMagnifyingGlass,
	faPlus,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import images from 'assets/images'
import classNames from 'classnames/bind'
import AccountItem from 'components/AccountItem'
import Button from 'components/Button'
import Popper from 'components/Popper'
import Menu from 'components/Popper/Menu'
import { useState } from 'react'
import styles from './Header.module.scss'
const cx = classNames.bind(styles)

function Header(props) {
	const [searchResult, setSearchResult] = useState([])
	const MenuItemList = [
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

	const handleOnchange = () => {
		// something to do here...
	}

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img src={images.logo} alt="" />

				<Tippy
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
				</Tippy>

				<div className={cx('actions')}>
					<Button outline className={cx('plus-icon')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
						Upload
					</Button>
					<Button primary>Login</Button>

					<Menu items={MenuItemList} onChange={handleOnchange}>
						<button className={cx('more-btn')}>
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</button>
					</Menu>
				</div>
			</div>
		</header>
	)
}

Header.propTypes = {}

export default Header
