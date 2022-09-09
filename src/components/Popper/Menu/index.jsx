import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import Popper from 'components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)

function Menu({ children, items = [], hideOnClick = false, onChange }) {
	const [history, setHistory] = useState([{ data: items }])

	const current = history[history.length - 1]

	return (
		<Tippy
			interactive
			hideOnClick={hideOnClick}
			placement="bottom-end"
			delay={[0, 600]}
			offset={[12, 8]}
			onHide={() => {
				setHistory((prev) => prev.slice(0, 1))
			}}
			render={(attrs) => (
				<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
					<Popper className={cx('menu-content')}>
						{history.length > 1 && (
							<Header
								title={current.title}
								onBack={() => {
									setHistory((prev) => prev.slice(0, prev.length - 1))
								}}
							/>
						)}
						<div className={cx('menu-body')}>
							{current.data.map((item, idx) => {
								const isParent = !!item.children

								return (
									<MenuItem
										key={idx}
										data={item}
										onClick={() => {
											if (isParent) {
												setHistory((prev) => [...prev, item.children])
											} else {
												onChange ?? onChange()
											}
										}}
									/>
								)
							})}
						</div>
					</Popper>
				</div>
			)}
		>
			{children}
		</Tippy>
	)
}

Menu.propTypes = {
	children: PropTypes.node.isRequired,
	items: PropTypes.array,
	hideOnClick: PropTypes.bool,
	onChange: PropTypes.func,
}

export default Menu
