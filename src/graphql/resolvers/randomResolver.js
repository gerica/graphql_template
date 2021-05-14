import { RandomDie } from '../../api/services/index';

const query = {
  info: () => 'Random service',
  getDie: (_, { numSides }) => new RandomDie(numSides || 6),
};
const mutation = {};
export { query, mutation };
