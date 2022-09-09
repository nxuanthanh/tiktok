import { NotFound } from 'components'
import { MainLayout } from 'layouts'
import { Fragment } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { publicRoutes } from 'routes'
import './app.scss'

function App() {
	return (
		<div className="app">
			<Outlet />
			<Routes>
				{publicRoutes.map(({ path, component, layout }, idx) => {
					let Layout = MainLayout

					if (layout) {
						Layout = layout
					} else if (layout === null) {
						Layout = Fragment
					}

					return <Route key={idx} path={path} element={<Layout>{component}</Layout>} />
				})}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
