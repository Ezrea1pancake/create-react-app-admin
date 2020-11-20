import { GET, POST } from '../configs/ajax/base';
import { serverPrefix } from '../configs/ajax/config';

// const { location } = window;

// 请求资讯管理列表
const queryShopComponentsByPage = (data) =>
    GET(`${serverPrefix.shop}shop/queryShopComponentsByPage`, data);

// 请求资讯管理列表
const aaa = (data) => POST(`${serverPrefix.shop}shop/queryShopComponentsByPage`, data);

export { queryShopComponentsByPage, aaa };
