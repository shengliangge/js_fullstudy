import { get, post } from './http'
export const Login = (params) => post('/users/login', params)
export const Register = (params) => post('/users/register', params)
export const api3 = p => get('', p)   //示例
