import { Car } from './models/Car.js'
import { House } from './models/house.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  houses = [
    new House(
      {
        titleText: 'Rare Opportunity: Like-New Mansion',
        price: 250000,
        squareFeet: 11000,
        locationCity: 'Caldwell',
        locationState: 'ID',
        imgUrl: 'https://static1.squarespace.com/static/5fc42d3b9955c744b550776c/t/615a47e437180f62d8ae178b/1633306598200/d509370d-54b0-4741-91d6-444c1dffee43.jpeg?format=1500w',
        roomNum: 7,
        description: 'Large McMansion Well Known for it\'s appearance on a renowned reality television series.',
        listedDate: '06/03/2025',
      }
    ),
    new House(
      {
        titleText: 'No LowBalling, I know what i have!!',
        price: 550000,
        squareFeet: 32,
        locationCity: 'Missoula',
        locationState: 'MO',
        imgUrl: 'https://images.unsplash.com/photo-1619998959756-5f31b7a6269c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        roomNum: 1.5,
        description: 'This right here is the definition of bougoise livin\'!!!',
        listedDate: '02/14/2016',
      }
    ),
  ]



  cars = [
    new Car(
      {
        make: 'mazda',
        model: 'miata',
        year: 1996,
        color: 'red',
        mileage: 200000,
        imgUrl: 'https://images.unsplash.com/photo-1725199583250-9f59567ba965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pYXRhfGVufDB8fDB8fHwy',
        isManualTransmission: true,
        cylinders: 4,
        price: 2000,
        fuelType: 'gas',
        listedAt: '12/12/2020',
        titleStatus: 'clean'
      }
    ),
    new Car(
      {
        make: 'vw',
        model: 'beetle',
        year: 1960,
        color: 'blue',
        mileage: 300000,
        imgUrl: 'https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dnclMjBiZWV0bGV8ZW58MHx8MHx8fDI%3D',
        isManualTransmission: true,
        cylinders: 4,
        price: 40000,
        fuelType: 'gas',
        listedAt: '12/12/2010',
        titleStatus: 'rebuilt'
      }
    ),
    new Car(
      {
        make: 'bat',
        model: 'mobile',
        year: 1968,
        color: 'black',
        mileage: 2000,
        imgUrl: 'https://images.unsplash.com/photo-1671877077293-ae670e67f2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bW9iaWxlfGVufDB8fDB8fHwy',
        isManualTransmission: false,
        cylinders: 10,
        price: 4200000,
        fuelType: 'batfuel',
        listedAt: '6/8/2024'
      }
    ),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())