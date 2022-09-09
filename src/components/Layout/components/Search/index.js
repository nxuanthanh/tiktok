import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import AccountItem from 'components/AccountItem'
import { useDebounce } from 'components/hooks'
import Popper from 'components/Popper'
import { useEffect, useRef, useState } from 'react'
import 'tippy.js/dist/tippy.css'
import styles from './Search.module.scss'
const cx = classNames.bind(styles)

function Search(props) {
	const [searchResult, setSearchResult] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [loading, setLoading] = useState(false)
	const [showSearchResult, setShowSearchResult] = useState(true)

	const inputRef = useRef()

	const debounced = useDebounce(searchValue, 500)

	const handleOnChange = (e) => {
		setSearchValue(e.target.value)
	}

	const handleOnClear = (e) => {
		setSearchValue('')
		setSearchResult([])
		inputRef.current.focus()
	}

	const handleHideSearchResult = (e) => {
		setShowSearchResult(false)
	}

	useEffect(() => {
		if (debounced.trim() === '') {
			setSearchResult([])
			return
		}

		setLoading(true)

		fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debounced}&type=less`)
			.then((res) => res.json())
			.then((res) => {
				setSearchResult(res.data)
				setLoading(false)
			})
			.catch(() => {
				setLoading(false)
			})
	}, [debounced])

	return (
		<HeadlessTippy
			interactive
			visible={showSearchResult && searchResult.length > 0}
			onClickOutside={handleHideSearchResult}
			render={(attrs) => (
				<div className={cx('search-result')} tabIndex="-1" {...attrs}>
					<Popper>
						<h3 className={cx('search-title')}>Accounts</h3>

						{searchResult.map((result) => (
							<AccountItem key={result.id} data={result} />
						))}
					</Popper>
				</div>
			)}
		>
			<div className={cx('search')}>
				<input
					ref={inputRef}
					placeholder="Search accounts and videos"
					spellCheck={false}
					value={searchValue}
					onChange={handleOnChange}
					onFocus={() => setShowSearchResult(true)}
				/>
				{searchValue && !loading && (
					<button className={cx('clear')} onClick={handleOnClear}>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				)}

				{loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

				<button className={cx('search-btn')}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>
		</HeadlessTippy>
	)
}

Search.propTypes = {}

export default Search
