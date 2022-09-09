import { HeaderOnly } from 'layouts'
import config from 'config'
import { Following, Home, Profile } from 'pages'
import Upload from 'pages/Upload'

export const publicRoutes = [
	{ path: config.routes.home, component: <Home /> },
	{ path: config.routes.profile, component: <Profile /> },
	{ path: config.routes.upload, component: <Upload />, layout: HeaderOnly },
	{ path: config.routes.following, component: <Following /> },
]

export const privateRoutes = []
