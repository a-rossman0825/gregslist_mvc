import { AppState } from "../AppState.js";
import { House } from "../models/house.js";
import { loadState, saveState } from "../utils/Store.js";


class HousesService {


  createHouseListing(houseData) {
    console.log(houseData);
    const newHouse = new House(houseData);
    const houses = AppState.houses;
    houses.push(newHouse);

    console.log('added House!', AppState.houses);
    this.saveHouses();
  }

  deleteHouse(houseId) {
    const houses = AppState.houses;
    const houseIndex = houses.findIndex(house => house.id == houseId);
    houses.splice(houseIndex, 1);

    this.saveHouses();
  }

  saveHouses() {
    saveState('houses', AppState.houses);
  }

  loadHouses() {
    const housesFromLocalStorage = loadState('houses', [House]);
    if (housesFromLocalStorage.length == 0) {
      AppState.houses = AppState.houses;
    }
    else {
      AppState.houses = housesFromLocalStorage;
    }
  }
}

export const housesService = new HousesService();