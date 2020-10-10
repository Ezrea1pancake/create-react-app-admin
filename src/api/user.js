import { POST } from '../configs/ajax/base';
import { serverPrefix } from '../configs/ajax/config';

export const loginRequest = (data) => POST(`${serverPrefix.shop}user/login`, data);
