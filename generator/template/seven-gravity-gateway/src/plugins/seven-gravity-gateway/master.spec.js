import GatewayMaster from '@/plugins/seven-gravity-gateway/master';

describe('master', () => {
  describe('init()', () => {
    it('init() should instantiate gateway master', () => {
      GatewayMaster.init({
        debug: true,
      });
      expect(GatewayMaster.api.msgSender).toEqual('Master');
    });
  });

  describe('addSlave()', () => {
    it('should add slave with passed config', () => {
      GatewayMaster.addSlave({
        slaveId: 'DummySlave',
        frameId: 'DummySlave',
      });
      expect(GatewayMaster.api.slaves.DummySlave).toBeDefined();
      expect(GatewayMaster.api.slaves.DummySlave.frameId).toEqual('DummySlave');
    });
  });
});
