export type Location = {
  lat: number;
  lng: number;
  name: string;
};

export type Trip = {
  id: number;
  from: Location;
  to: Location;
  publicTransitTime: number;
  carTime: number;
};
