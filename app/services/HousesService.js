import { AppState } from "../AppState.js";
import { House } from "../models/house.js";


class HousesService {


  createHouseListing(houseData) {
    console.log(houseData);
    const newHouse = new House(houseData);
    const houses = AppState.houses;
    houses.push(newHouse);

    console.log('added House!', AppState.houses);
  }
}

export const housesService = new HousesService();