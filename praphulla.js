let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]
let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
  }
  let sizes = cars.map(car => {
    if (car.capacity <= 3){
      return "small";
    }
    if (car.capacity <= 5){
      return "medium";
    }
    return "large";
  });