import GatewayMaster from '@nsoft/seven-gravity-gateway/master';

let instance = null;

export default {
  /**
   * Initialize gateway.
   *
   * @param {Object.<{}>} [config.slaves] - Object with slave details
   * @param {String} config.slaves.slaveId - Unique identifier of a frame
   * @param {Object} [config.slaves.data] - Data passed to slave to run the product load phase
   * @param {Function} [config.slaves.init] - Slave initialization callback
   * @param {Function} [config.slaves.load] - Callback which will be triggered when slave starts
   *   to load
   * @param {Function} [config.slaves.loaded̉] - Slave loaded callback
   * @param {Array} [config.allowedOrigins] - Array of allowed origins
   * @param {Boolean} [config.debug] - Debug setting
   *
   * @returns {Object} - Returns master instance
   */
  init(config) {
    instance = GatewayMaster(config);
    return instance;
  },

  /**
   * Add slave.
   *
   * @param {Object} config - Object with slave details
   * @param {String} config.frameId - Id of iframe element
   * @param {String} config.slaveId - Unique identifier of a frame instance
   * @param {Object} config.data - Data passed to slave to run the product load phase
   * @param {Function} [config.init] - Slave initialization callback
   * @param {Function} [config.load] - Callback which will be triggered when slave starts
   *   to load
   *
   * @returns {Promise.<{*}>} - Resolves when slave emits Slave.Loaded event
   */
  addSlave(config) {
    return new Promise((resolve) => {
      this.api.addSlave(Object.assign({
        loaded: (message) => {
          resolve(message);
        },
      }, config));
    });
  },

  get api() {
    return instance;
  },
};
