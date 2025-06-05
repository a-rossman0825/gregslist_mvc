import { generateId } from "../utils/GenerateId.js";


export class House {
  constructor(data) {
    this.id = generateId();
    this.titleText = data.titleText;
    this.price = data.price;
    this.squareFeet = data.squareFeet;
    this.locationCity = data.locationCity;
    this.locationState = data.locationState;
    this.imgUrl = data.imgUrl;
    this.roomNum = data.roomNum;
    this.description = data.description;
    this.listedDate = data.listedDate == undefined ? new Date() : new Date(data.listedDate);
    this.favoriteStatus = false;

  }

  get listingHTMLTemplate() {
    return `
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="position-relative shadow car-border" style="border-color: ${this.priceRangeColor};">
            <img
            src="${this.imgUrl}"
            alt="haunted mansion" class="car-img" />
            <div>
              <span class="car-price bg-dark fs-2 px-2 d-inline-block" style="color: ${this.priceRangeColor};">$${this.priceWithCommas}</span>
            </div>
            <div>
              <div class="p-3">
                <h3>${this.titleText}</h3>
              </div>
              <div class="row align-items-center justify-content-around px-2">
                <div class="col-4">${this.listedDateString}</div>
                <div class="col-2">${this.roomNum}br</div>
                <div class="col-2">${this.squareFeetWithCommas}ft²</div>
                <div class="col-4">${this.locationCity}, ${this.locationState}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-1">
                  <i class="text-secondary fs-3 mdi mdi-${this.favoriteStatusCheck}"></i>
                </div>
                <div class="col-1">
                  <i class="text-secondary fs-3 mdi mdi-trash-can" type="button" onclick="app.housesController.confirmDelete('${this.id}')"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
  }

  get priceRangeColor() {
    if (this.price <= 100000){
      return 'green';
    } else if (this.price <= 250000) {
      return 'yellow';
    } else if (this.price <= 400000) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  get listedDateString() {
    return this.listedDate.toLocaleDateString('en-US', { month: 'numeric', day: '2-digit', year: 'numeric'});
  }

  get priceWithCommas() {
    return this.price.toLocaleString();
  }

  get favoriteStatusCheck() {
    if (!this.favoriteStatus) {
      return `star-outline`;
    } else {
      return 'star'
    }
  }

  get squareFeetWithCommas() {
    return this.squareFeet.toLocaleString();
  }
}