import { Twisters } from 'twisters';
import './helper.js';
import a8_0x2b848d from './logger.js';
import a8_0x4fdc4d from './core.js';
import { privateKey } from './wallet.js';
import { RPC } from './rpc.js';

class Twist {
  constructor() {
    this.twisters = new Twisters();
  }

  ['log'](_0x473819 = '', _0x19fcde = '', _0x552abc = new a8_0x4fdc4d(), _0x5e0f7d) {

    const account = privateKey.find((keyObj) => keyObj.pk === _0x19fcde);
    
    if (!account) {
      a8_0x2b848d.info("Account not found for key: " + _0x19fcde);
      return;
    }

    const index = privateKey.indexOf(account); 
    const accountIndex = index + 1; 

    if (_0x5e0f7d === undefined) {
      a8_0x2b848d.info("Account " + accountIndex + " - " + _0x473819);
      _0x5e0f7d = '-';
    }

    const _0x256172 = _0x552abc.address ?? '-';
    const _0x22977f = _0x552abc.balance ?? '-';
    const _0x4efdd1 = _0x552abc.point ?? {};
    const _0x3dce94 = _0x4efdd1.totalPoints ?? '-';
    const _0x1fcfc9 = _0x4efdd1.today ?? '-';

    const logText = `
[acc][${accountIndex}] Address      : ${_0x256172}
[acc][${accountIndex}] Balance      : ${_0x22977f} ${RPC.SYMBOL}
[acc][${accountIndex}] Point        : Total ${_0x3dce94} | Today ${_0x1fcfc9}
[acc][${accountIndex}] Status       : ${_0x473819}
[acc][${accountIndex}] Delay        : ${_0x5e0f7d}
    `;

    this.twisters.put(_0x19fcde, { 'text': logText });

    
    a8_0x2b848d.info(logText.trim());  
  }

  ["info"](_0x25250f = '') {
    this.twisters.put(0x2, {
      'text': `
Info : ${_0x25250f}
      `
    });
    return;
  }

  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }

  ["clear"](_0x2cffe2) {
    this.twisters.remove(_0x2cffe2);
  }
}

export default new Twist();
