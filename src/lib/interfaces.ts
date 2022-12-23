export interface ICoordinate {
  x: number;
  y: number;
}

export interface IMapObject {
  city: string;
  features: object[];
}

export interface ICityInfo {
  city: string;
  coordinates: ICoordinate;
}

export interface IAirlineInfo {
  id: string;
  city: string[];
  cooidinates: ICoordinate[];
}
