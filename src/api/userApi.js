import axiosClient from './axiosClient'

const userApi = {
	getAll(params) {
		const url = '/users/search'
		return axiosClient.get(url, { params })
	},
}

export default userApi
