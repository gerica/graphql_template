import * as testResolver from './testResolver';
import * as randomResolver from './randomResolver';
import * as messageResolver from './messageResolver';
import * as serverLessResolver from './serverLessResolver';

export default {
  Query: {
    ...testResolver.query,
    ...randomResolver.query,
    ...messageResolver.query,
    ...serverLessResolver.query,
  },
  Mutation: {
    ...messageResolver.mutation,
  },
};
