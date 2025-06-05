import { AppState } from "../AppState.js";


export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses);

    console.log('Houses Controller is ready 🏡');
  }
  drawHouses() {
    const houses = AppState.houses;
    let houseListingsContent = '';
    houses.forEach((house) => houseListingsContent += house.listingHTMLTemplate);
    const houseListingsElm = document.getElementById('house-listings');
    houseListingsElm.innerHTML = houseListingsContent;
  }
}