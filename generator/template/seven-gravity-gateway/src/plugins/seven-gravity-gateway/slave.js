import GatewaySlave from '@nsftx/seven-gravity-gateway/slave';

let instance = null;

export default {
  /**
   * Initialize gateway.
   *
   * @param {Object} config.slaveId - Unique identifier of a frame
   * @param {Object} [config.data] - Data which will be passed to master on init phase
   * @param {Array} [config.allowedOrigins] - Array of allowed origins
   * @param {Boolean} [config.debug] - Debug setting
   * @param {String | Worker} [config.worker] - Web worker configuration
   * @param {Object} [config.eventPropagation] - Events which will be propagated to master frame
   * @param {Object} [config.eventListeners] - Events which are required from master frame
   *
   * @returns {Promise.<{*}>} - Returns master data if any
   */
  init(config) {
    return new Promise((resolve) => {
      instance = GatewaySlave(Object.assign({
        load: (message) => {
          resolve(message);
        },
      }, config));
    });
  },

  get api() {
    return instance;
  },
};
