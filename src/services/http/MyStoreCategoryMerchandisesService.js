import Service from '../Service';
export default class MyStoreCategoryMerchandisesService extends Service {
	constructor($application) {
		super($application);
	}
	//获取订单列表
	async list(storeId, categoryId, page = 1, limit = 15) {
		let listData = null;
		let totalNum = null;
		let totalPage = null;
		let currentPage = null;
		let response = null;
		if (this.$application.needMock()) {
			response = await this.services('mock.myStoreCategoryMerchandises').mock(storeId, categoryId, page, limit);
		} else {
			//服务器交互代码
			response = await this.httpGet(`store/${storeId}/category/${categoryId}/merchandises`, {
				limit: limit,
				page: page
			});
		}
		listData = response.data;
		let pagination = response.meta.pagination;
		totalNum = pagination.total;
		currentPage = pagination['current_page'];
		totalPage = pagination['total_pages'];
		console.log('MAM------',[listData, totalNum, currentPage, totalPage]);
		return [listData, totalNum, currentPage, totalPage];
	}
}
