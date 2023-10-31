import { IFilial } from './types'

export const DEFAULT_CENTER = [55.752823, 37.622405];
export const FILIALS_URL = 'http://172.17.1.53:8082/filials';

export const filials: IFilial[] = [
    {
        id: '9661438e-6f92-429f-93fa-456a7438f4c0',
        name: 'Офис на Арбате',
        country: 'Россия',
        region: 'Московская область',
        district: 'Московский район',
        city: 'Москва',
        street: 'Новый арбат',
        houseNumber: 15,
        buildNumber: '',
        apartmentNumber: 3,
        latitude: '55.752141',
        longitude: '37.592411',
        phoneNumber: '+7 495 510-28-88',
        email: 'info.moscow@myinsurance.ru',
    },
    {
        id: '9661438e-6f92-429f-93fa-456a7438f4c1',
        name: 'Офис 2',
        country: 'Россия',
        region: 'Казанская область',
        district: 'Казанский район',
        city: 'Казань',
        street: 'Молодежная',
        houseNumber: 15,
        buildNumber: '',
        apartmentNumber: 3,
        latitude: '55.817132',
        longitude: '49.086453',
        phoneNumber: '+7 495 510-28-88',
        email: 'info.kazan@myinsurance.ru',
    },
    {
        id: '9661438e-6f92-429f-93fa-456a7438f4c2',
        name: 'Офис 3',
        country: 'Россия',
        region: 'Казанская область',
        district: 'Казанский район',
        city: 'Казань',
        street: 'Николая Ершова',
        houseNumber: 62,
        buildNumber: '',
        apartmentNumber: 3,
        latitude: '55.796514',
        longitude: '49.178265',
        phoneNumber: '+7 495 510-28-88',
        email: 'info.kazan@myinsurance.ru',
    },
]

// {
//     "id": "9661438e-6f92-429f-93fa-456a7438f4c0",
//     "name": "Офис на Арбате",
//     "country": "Россия",
//     "region": "Московская область",
//     "district": "Московский район",
//     "city": "Москва",
//     "street": "Новый арбат",
//     "houseNumber": 15,
//     "buildNumber": "",
//     "apartmentNumber": 3,
//     "latitude": "55.752141",
//     "longitude": "37.592411",
//     "phoneNumber": "+7 495 510-28-88",
//     "email": "info.moscow@myinsurance.ru"
// }

// [
//     {
//         "id": "9661438e-6f92-429f-93fa-456a7438f4c0",
//         "name": "Офис на Арбате",
//         "city": "Москва",
//         "street": "Новый арбат",
//         "houseNumber": 15,
//         "buildNumber": "",
//         "apartmentNumber": 3,
//         "mainPoint": true,
//         "phoneNumber": "+7 495 510-28-88",
//         "email": "info.moscow@myinsurance.ru",
//         "latitude": "55.752141",
//         "longitude": "37.592411",
//         "startTime": "09:00:00",
//         "endTime": "18:00:00",
//         "startTimeUtc": "06:00:00",
//         "endTimeUtc": "15:00:00",
//         "workDays": "Понедельник, Вторник, Среда, Четверг, Пятница"
//     }
// ]