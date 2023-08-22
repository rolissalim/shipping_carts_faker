import { faker } from '@faker-js/faker';
import { sizeData } from './size';


export const generateProductData = (numberOfData = 5) => {
    return Array.from(Array(numberOfData).keys()).map(() => {
        let randomSize = Math.floor(Math.random() * 4) + 1;
        return {
            id: faker.datatype.uuid(),
            code: `${faker.datatype.string(4).toLowerCase()}-${faker.commerce.color()}`,
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            color: faker.commerce.color(),
            short_desc: faker.lorem.words(6),
            image: faker.image.business(),
            size: sizeData()[randomSize],
            desc: faker.commerce.productDescription(),
        }

    });
}