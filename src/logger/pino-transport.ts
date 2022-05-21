import pino, { TransportMultiOptions } from 'pino';

const { LOG_ERR_LEVEL, LOG_INFO_LEVEL } = process.env;

const transport = pino.transport(<TransportMultiOptions>{
  targets: [
    {
      level: LOG_ERR_LEVEL,
      target: 'pino-pretty',
      options: { destination: 1 },
    },
    {
      level: LOG_INFO_LEVEL,
      target: 'pino-pretty',
      options: { destination: 1 },
    },
  ],
});

export default pino(transport);
