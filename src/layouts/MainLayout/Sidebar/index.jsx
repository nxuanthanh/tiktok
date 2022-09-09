import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)
function Sidebar(props) {
	return <div className={cx('wrapper')}>Sidebar pages</div>
}

export default Sidebar
