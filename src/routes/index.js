import { HeaderOnly } from 'components/Layout'
import routes from 'config/routes'
import { Following, Home, Profile } from 'pages'
import Upload from 'pages/Upload'

export const publicRoutes = [
	{ path: routes.home, component: <Home /> },
	{ path: routes.profile, component: <Profile /> },
	{ path: routes.upload, component: <Upload />, layout: HeaderOnly },
	{ path: routes.following, component: <Following /> },
]

export const privateRoutes = []
