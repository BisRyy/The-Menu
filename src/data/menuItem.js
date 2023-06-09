import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { fCurrency } from '../utils/formatNumber';

// ----------------------------------------------------------------------

const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  const menuItem = {
    id: faker.datatype.uuid(),
    _id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    ingredients: ['Angus beef patty', 'Cheddar cheese', 'Lettuce', 'Tomato', 'Onion', 'Pickles'],
    price: fCurrency(faker.datatype.number({ min: 4, max: 99, precision: 0.01 })),
    allergenInformation: 'Contains dairy, gluten, and soy.',
    nutritionalInformation: [
      'calories: 550',
      'totalFat: 30',
      'saturatedFat: 12',
      'cholesterol: 80',
      'sodium: 850',
      'totalCarbohydrates: 42',
      'dietaryFiber: 4',
      'sugars: 9',
      'protein: 25',
    ],
    vegetarian: sample(['Non-vegetarian', 'Vegetarian', 'Vegan']),
    image: `/assets/images/avatars/avatar_${setIndex}.jpg`,
    type: sample([
      'Main Course',
      'Dessert',
      'Beverage',
      'Appetizer',
      'Side Dish',
      'Salad',
      'Soup',
      'Breakfast',
      'Lunch',
      'Dinner',
    ]),
    availability: sample(['Available all day', 'Breakfast', 'Lunch', 'Dinner', 'Weekend', 'Weekdays']),
    rating: 4.5,
    reviews: [
      {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        avatar: `/assets/images/avatars/avatar_${setIndex % 24}.jpg`,
        rating: 4.5,
        comment: faker.lorem.sentence(),
        createdAt: faker.date.past().toDateString(),
      },
    ],
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['', 'new', '', '']),
  };

  return menuItem;
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
