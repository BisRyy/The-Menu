import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { fCurrency } from '../utils/formatNumber';

// ----------------------------------------------------------------------

const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    dsc: faker.commerce.productDescription(),
    img: `/assets/images/avatars/avatar_${setIndex}.jpg`,
    price: fCurrency(faker.datatype.number({ min: 4, max: 99, precision: 0.01 })),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    discount: faker.datatype.number({ min: 5, max: 30 }),
    status: sample(['available', 'sold out', '']),
    isVerified: faker.datatype.boolean(),
    country: faker.address.country(),
    cover: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex < 10 && setIndex > 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    // status: sample(['sale', 'new', '', '']),
    role: sample([
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer',
    ]),
  };
});

// ----------------------------------------------------------------------

// const menuItem = [...Array(24)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   img: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   name: faker.commerce.productName(),
//   dsc: faker.commerce.productDescription(),
//   price: faker.datatype.float({ precision: 0.01, max: 200, min: 25 }),
//   status: sample(['available', 'finished']),
//   isVerified: faker.datatype.boolean(),
//   country: faker.address.country(),
//   role: sample([
//     'Leader',
//     'Hr Manager',
//     'UI Designer',
//     'UX Designer',
//     'UI/UX Designer',
//     'Project Manager',
//     'Backend Developer',
//     'Full Stack Designer',
//     'Front End Developer',
//     'Full Stack Developer',
//   ]),
// }));

export default products;
