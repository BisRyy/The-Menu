import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  status: sample(['active', 'banned']),
  role: sample([
    'Chef',
    'Waiter',
    'Waitress',
    'Manager',
    'Cook',
    'Hostess',
    'Waiter',
    'Waitress',
    'Cashier',
    'Accountant',
  ]),
}));

export default users;
