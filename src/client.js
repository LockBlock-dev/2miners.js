const axios = require('axios').default
const errors = require('./errors')
const pkg = require("../package.json")

exports.Client = class Client {
    constructor(pool) {
      /**
      * Pool you want stats from
      * Available pools : btg, solo-btg, zec, solo-zec, zen, solo-zen, eth, solo-eth, etc, solo-etc, exp, solo-exp, etp, solo-etp, clo, solo-clo, xmr, solo-xmr, xzc, solo-xzc, zel, solo-zel, grin, solo-grin, mwc, solo-mwc, rvn, solo-rvn, ae, solo-ae, beam, solo-beam, ctxc, solo-ctxc, ckb, solo-ckb
      * Find these pools at : https://2miners.com
      * @type {String}
      */
      this.pool = pool

      /**
      * The base API Url
      * @type {String}
      */
      this.baseApiUrl = `https://${pool.toLowerCase()}.2miners.com/api`
    }

    /**
    * Build url to the API
    * @param  {String} path API endpoint
    * @return {String} url
    * @private
    */
    #buildURL(path) {
      return `${this.baseApiUrl}/${path}`
    }

    /**
    * Make request against the API
    * @param  {String} path API endpoint
    * @param  {Object} [options] request options
    * @return {Promise} promise
    * @private
    */
    #request(path, data) {

      var options = {
        method: "GET",
        url: this.#buildURL(path),
        headers: {
          "User-Agent": `2miners.js ${pkg.version} (https://github.com/LockBlock-dev/2miners.js)`,                  
          "Content-Type": "application/json",
          "Accept-Encoding": "UTF8",
        }
      }

      data ? options.data = data : null

      return axios(options)
      .then(response => {
        if (typeof(response.data) === "object") {
          return response.data
        } else {
          try {
            const data = JSON.parse(response.data)
            if (data.ok) {
              return data.result
            }
          } catch (err) {
            throw new errors.ParseError(`Error parsing response: ${response.data}`, response)
          }
        }
      })
      .catch(error => {
        throw new errors.APIError(error, error.response.status, options.method, options.url)
      })
    }

    /**
    * Get an account stats.
    * @param  {String} address - wallet address
    * @example wallet("0xfd2D76F7Cf04863F2B221E56Af6fF94105EC2e5e")
    * @return {Promise}
    */
    wallet(address) {
      return this.#request(`accounts/${address}`)
    }

    /**
    * Get all pool blocks.
    * @example blocks()
    * @return {Promise}
    */
    blocks() {
      return this.#request("blocks")
    }

    /**
    * Get all pool miners.
    * @example miners()
    * @return {Promise}
    */
    miners() {
      return this.#request("miners")
    }

    /**
    * Get all pool payments.
    * @example payments()
    * @return {Promise}
    */
    payments() {
      return this.#request("payments")
    }

    /**
    * Get all pool stats.
    * @example stats()
    * @return {Promise}
    */
    stats() {
      return this.#request("stats")
    }

}
