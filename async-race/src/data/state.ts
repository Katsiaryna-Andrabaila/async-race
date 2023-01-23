import { State } from './types';

const state: State = {
    page: 1,
    raceAnimationIDs: {},
    winnerPage: 1,
    sort: '',
    order: '',
};

/* let cars: Car[] = [];
let carsAmount: string | null = '';
// const updatedBody: NewCar = {};
(async () => {
    const response = await getCars(1);
    cars = response.items;
    carsAmount = response.amount;
})();

const state = {
    cars,
    carsAmount,
    updatedBody: {},
}; */

export default state;
