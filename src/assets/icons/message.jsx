import PropTypes from 'prop-types'
import { forwardRef } from 'react'

function Message({ className, width = '26', height = '29' }, ref) {
	return (
		<svg
			ref={ref}
			className={className}
			width={width}
			height={height}
			viewBox="0 0 48 48"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
			></path>
		</svg>
	)
}

Message.propTypes = {
	className: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
}

export default forwardRef(Message)
