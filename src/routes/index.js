import { HeaderOnly } from 'components/Layout'
import { Following, Home, Profile } from 'pages'
import Upload from 'pages/Upload'

export const publicRoutes = [
	{ path: '/', component: <Home /> },
	{ path: '/profile', component: <Profile /> },
	{ path: '/upload', component: <Upload />, layout: HeaderOnly },
	{ path: '/following', component: <Following /> },
]

export const privateRoutes = []
