import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";


export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses);

    console.log('Houses Controller is ready 🏡');
    housesService.loadHouses();
  }
  drawHouses() {

    const houses = AppState.houses;
    let houseListingsContent = '';
    houses.forEach(house => houseListingsContent += house.listingHTMLTemplate);
    const houseListingsElm = document.getElementById('house-listings');
    houseListingsElm.innerHTML = houseListingsContent;
  }

  submitHouse() {
    event.preventDefault();
    const formElm = event.target;
    const houseData = getFormData(formElm);
    housesService.createHouseListing(houseData);
    // @ts-ignore
    formElm.reset();
  }

  confirmDelete(houseId) {
    const confirmed = window.confirm('Are you sure you want to permanently delete this house listing?');
    if (!confirmed) { return }
    housesService.deleteHouse(houseId);
  }

  toggleHouseForm() {
    document.getElementById('house-form').classList.toggle('d-none');
  }
}