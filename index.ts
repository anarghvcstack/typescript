interface Coordinates {
  x: number;
  y: number;
}

interface IMap {
  location: string;
  coordinates: Coordinates
}

class MapClass {
  location: string;
  coordinates: Coordinates;
}

let myMap: Array<IMap> = [
  {
    location: 'Trivandrum',
    coordinates: {
      x: 1,
      y: 2
    }
  },
  {
    location: 'Kochi',
    coordinates: {
      x: 1,
      y: 2
    }
  }
]

let myMap2: MapClass = {
  location: 'Trivandrum',
  coordinates: {
    x: 1,
    y: 2
  }
}

console.log('New feature');