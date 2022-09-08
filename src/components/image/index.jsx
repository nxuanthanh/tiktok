import images from 'assets/images'
import classnames from 'classnames'
import { forwardRef, useState } from 'react'
import styles from './image.module.scss'
function Image({ src, alt, classname, fallback = images.fallback, ...props }, ref) {
	const [_fallback, setFallback] = useState('')

	const handleError = () => {
		setFallback(fallback)
	}

	return (
		<img
			src={_fallback || src}
			alt={alt}
			className={classnames(styles.wrapper, classname)}
			ref={ref}
			onError={handleError}
			{...props}
		/>
	)
}

Image.propTypes = {}

export default forwardRef(Image)
