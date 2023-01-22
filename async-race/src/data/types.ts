export type Car = {
    name: string;
    color: string;
    id: number;
};

export type CarsOnPage = {
    items: Car[];
    amount: string | null;
};

export type NewCar = Omit<Car, 'id'>;

export type Winner = {
    id: number;
    wins: number;
    time: number;
};

export type WinnersOnPage = {
    items: Winner[];
    amount: string | null;
};

export enum Path {
    garage = '/garage',
    engine = '/engine',
    winners = '/winners',
}

export interface State {
    page: number;
    raceAnimationIDs: RaceAnimationIDs;
    winnerPage: number;
}

export type RaceAnimationIDs = {
    [key: number]: number;
};
