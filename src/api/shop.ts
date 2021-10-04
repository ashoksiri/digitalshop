/**
 * Mocking client-server processing
 */
// @ts-ignore
import _products from './data.json'

const TIMEOUT = 100

export default {
    getProducts: (cb: any, timeout?: any) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    buyProducts: (payload: any, cb: any, timeout: any) => setTimeout(() => cb(), timeout || TIMEOUT)
}
