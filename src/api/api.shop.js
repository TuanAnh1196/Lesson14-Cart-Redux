import RequestHelper from "../helpers/request.helper"
import { appConfig } from "../config/app.config"

export default class ShopApi {
    //API Shop
    static getShopList(params) {
        return RequestHelper.get(appConfig.apiUrl + "shops", params);
    }

    static getShopById(id) {
        return RequestHelper.get(appConfig.apiUrl + `shops/${id}`);
    }

}