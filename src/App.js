import React, { Component } from 'react';
import cars from './data/cars.json';

class CarItem extends Component {
  render() {
    const { car, id } = this.props
    return (
      <li>
        <p>Key:{id}</p>
        <p>{car.name}</p>
        <p>{car.company}y</p>
      </li>
    );
  }
}


export default class CarsList extends Component {
  render() {
    return (
      <li>
        {
          cars.map(car => {
            return <CarItem
              id={car.id}
              key={car.id}
              car={car}
            />
          })
        }
      </li>
    );
  }
}
