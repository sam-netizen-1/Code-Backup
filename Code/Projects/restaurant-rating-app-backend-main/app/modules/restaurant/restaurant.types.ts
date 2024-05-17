export type reviewsType = {
    name: string,
    Food: number,
    Ambience: number,
    Service: number,
    Cleanliness: number,
    Overall: number
};


export interface IRestaurant {
    id: string,
    nameOfRestaurant: string,
    address: string,
    managerName: string,
    reviews :reviewsType[]
}

export class RestaurantResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}

