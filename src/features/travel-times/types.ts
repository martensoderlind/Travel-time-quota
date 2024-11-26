export type Location = {
  lat: number;
  lng: number;
  name: string;
};

export type PublicTransportTrip = {
  departureTime: string;
  arrivalTime: string;
  duration: string;
};

export type Coordinates = {
  lat: string;
  lng: string;
};

export type Trip = {
  id: number;
  from: Location;
  to: Location;
  publicTransitTime: number;
  carTime: number;
};

export type PublicLeg = {
  Origin: Origin;
  Destination: Origin;
  Notes: {
    Note: [
      {
        value: string;
        key: string;
        type: string;
        routeIdxFrom: number;
        routeIdxTo: number;
        txtN: string;
      }
    ];
  };
  JourneyDetailRef: {
    ref: string;
  };
  JourneyStatus: string;
  Product: [
    {
      icon: {
        res: string;
      };
      operatorInfo: {
        name: string;
        nameS: string;
        nameN: string;
        nameL: string;
        id: string;
      };
      name: string;
      internalName: string;
      displayNumber: string;
      num: string;
      line: string;
      lineId: string;
      catOut: string;
      catIn: string;
      catCode: string;
      cls: string;
      catOutS: string;
      catOutL: string;
      operatorCode: string;
      operator: string;
      admin: string;
      routeIdxFrom: number;
      routeIdxTo: number;
      matchId: string;
    }
  ];
  Stops: {
    Stop: Stop[];
  };
  JourneyDetail: {
    ref: string;
    dayOfOperation: string;
  };
  id: string;
  idx: number;
  name: string;
  number: string;
  category: string;
  type: string;
  reachable: boolean;
  waitingState: string;
  direction: string;
  directionFlag: string;
  duration: string;
};
export type Stop = {
  name: string;
  id: string;
  extId: string;
  routeIdx: number;
  lon: number;
  lat: number;
  arrTime: string;
  arrDate: string;
  minimumChangeDuration: string;
};

export type Walk = {
  Origin: Origin;
  Destination: Destination;
  GisRef: GisRef;
  GisRoute: GisRoute;
  Product: Product;
  id: string;
  idx: number;
  name: string;
  type: string;
  duration: string;
  dist: number;
  minimumChangeDuration?: string;
};
export type PublicTransport = {
  Origin: Origin;
  Destination: Destination;
  Notes: { Note: string[] };
  JourneyDetailRef: { ref: string };
  JourneyStatus: string;
  Product: Product[];
  JourneyDetail: {
    ref: string;
    dayOfOperation: string;
  };
  id: string;
  idx: number;
  name: string;
  number: string;
  category: string;
  type: string;
  reachable: boolean;
  waitingState: string;
  direction: string;
  directionFlag: string;
  duration: string;
  minimumChangeDuration: string;
};

type GisRef = {
  ref: string;
};
type GisRoute = {
  dist: number;
  durS: string;
  dirGeo: number;
};
type Destination = {
  name: string;
  type: string;
  id: string;
  extId: string;
  lon: number;
  lat: number;
  time: string;
  date: string;
  minimumChangeDuration: string;
};
type Origin = {
  name: string;
  type: string;
  id: string;
  lon: number;
  lat: number;
  time: string;
  date: string;
  minimumChangeDuration: string;
};
type Product = {
  icon: string[];
  name: string;
  internalName: string;
};

export type CarData = {
  code: string;
  routes: Routes[];
  waypoints: Waypoints[];
};
type Waypoints = {
  hint: string;
  distance: number;
  name: string;
  location: number[];
};

type Routes = {
  geometry: string;
  legs: Leg;
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
};

type Leg = {
  steps: string[];
  summary: string;
  weight: number;
  duration: number;
  distance: number;
};
