export interface IFilial {
    id: string;
    name: string;
    country: string;
    region: string;
    district: string;
    city: string;
    street: string;
    houseNumber: number;
    buildNumber?: string;
    apartmentNumber: number;
    latitude: string; // '55.817132',
    longitude: string; // '49.086453',
    phoneNumber: string;
    email: string;
}