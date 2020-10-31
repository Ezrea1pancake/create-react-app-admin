import { GET, POST } from '../configs/ajax/base';
import { serverPrefix } from '../configs/ajax/config';

const { location } = window;

const loginRequest = (data) => POST(`${serverPrefix.shop}user/login`, data);

const getShopAuthImage = () => `${location.origin}/financial-shop-server/authImage?v=${Date.now()}`;

// 获取登录所需公钥
const requestPublicKey = () => GET(`${serverPrefix.shop}user/publicKey`);

export { loginRequest, getShopAuthImage, requestPublicKey };
