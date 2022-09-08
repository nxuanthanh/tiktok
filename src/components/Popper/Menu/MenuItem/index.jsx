import classNames from 'classnames/bind'
import Button from 'components/Button'
import styles from './MenuItem.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
	const classes = cx('menu-item', {
		separate: data.separate,
	})
	return (
		<div>
			<Button className={cx(classes)} leftIcon={data.icon} to={data.to} onClick={onClick}>
				{data.label}
			</Button>
		</div>
	)
}

MenuItem.propTypes = {}

export default MenuItem
