import Gateway from '@/plugins/seven-gravity-gateway/slave';

describe('slave', () => {
  it('init() should instantiate gateway slave with passed config', () => {
    Gateway.init({ slaveId: 'TestSlaveId', debug: true });
    // fake load event
    Gateway.api.config.load({});
    expect(Gateway.api.slaveId).toEqual('TestSlaveId');
    expect(Gateway.api.config.debug).toBeTruthy();
  });
});
