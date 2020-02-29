import { Command, MockingConfig } from './index';
import { traceFunction } from 'helpers/util';
import ConfigOptions from 'enums/ConfigOptions';

@traceFunction()
export default class Logs extends Command {
  constructor(config?: MockingConfig) {
    super('logs', config);
  }

  public async execute() {
    if (this.config.get(ConfigOptions.SHORT_LOGS)) {
      const args = ['logs', '--tail', '500', ...this.flags, this.id];
      return this.spawn('docker', args);
    }

    const args = ['logs', ...this.flags, this.id];
    return this.spawn('docker', args);
  }
}
