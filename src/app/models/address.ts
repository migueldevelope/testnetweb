import { Geolocalization } from './geolocalization';

export interface Address {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocalization?: Geolocalization;
}