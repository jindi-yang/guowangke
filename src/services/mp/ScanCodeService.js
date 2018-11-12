import Service from '../Service';
export default class scanCodeService extends Service {
	constructor($application) {
		super($application);
	}
	//扫码
	scanCode() {
		return new Promise((resvole, reject) => {
			return wx.scanCode({
				success: (res) => {
					return resvole(res);
				}
			});
		});
	}

}
