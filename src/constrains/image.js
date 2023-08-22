import faker from "@faker-js/faker"

export const images = async () => {
    let data = await [
        faker.image.animals(),
        faker.image.transport(),
        faker.image.cats(),
        faker.image.food(),
        faker.image.abstract(),
        faker.image.cats(),
        faker.image.abstract(),
        faker.image.business(),
        faker.image.animals(),
        faker.image.transport(),
        faker.image.abstracts(),
    ]

    console.log("data image", data);
    return data
}