import { LoginOptions } from '../store/authentication/types';


export async function callApi(method: string, url: string, path: string, data?: any) {
    // const res = await fetch(`${url}/api${path}`, {
    //     method,
    //     headers: {
    //         Accept: 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // return res.json()

    return [
        {
            "id": "5dc90576747e88e26c58034d",
            "name": "Fishland",
            "amount": 27,
            "unit_price": "3,552.78",
            "price": "26,118.37",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc90576d7d2b49493be137b",
            "name": "Empirica",
            "amount": 85,
            "unit_price": "3,013.18",
            "price": "35,185.13",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc905765e807f55a2469bb4",
            "name": "Fossiel",
            "amount": 68,
            "unit_price": 145.4,
            "price": "38,570.08",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc9057652837c8d9b96ae7c",
            "name": "Geekmosis",
            "amount": 98,
            "unit_price": "2,605.87",
            "price": "20,807.06",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc9057602b2dd2f8e267987",
            "name": "Koffee",
            "amount": 67,
            "unit_price": "2,946.95",
            "price": "12,859.03",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc90576b1828173566a48fa",
            "name": "Ecolight",
            "amount": 23,
            "unit_price": "1,737.14",
            "price": "16,696.52",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc905765b5535e0d3e153d4",
            "name": "Magnemo",
            "amount": 40,
            "unit_price": 785.36,
            "price": "11,871.50",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc905765ee8197eb16e628f",
            "name": "Ecrater",
            "amount": 100,
            "unit_price": "2,187.64",
            "price": "14,547.67",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc905762c83b5c883a4ce9a",
            "name": "Ontagene",
            "amount": 43,
            "unit_price": 674.63,
            "price": "15,752.11",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc90576770f5167fbaa9dfd",
            "name": "Oulu",
            "amount": 82,
            "unit_price": 669.54,
            "price": "32,286.41",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc905760defad2431d4ad16",
            "name": "Optyk",
            "amount": 95,
            "unit_price": "1,240.22",
            "price": "10,485.14",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc90576259ef4eef4cb0ce9",
            "name": "Autograte",
            "amount": 47,
            "unit_price": "2,054.89",
            "price": "16,468.28",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc9057615630fa3cd75d38a",
            "name": "Orbiflex",
            "amount": 29,
            "unit_price": "3,943.82",
            "price": "38,890.30",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc90576fd0bcae85d318b86",
            "name": "Eyeris",
            "amount": 43,
            "unit_price": 210.57,
            "price": "37,501.78",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc905761f917a8f15423f1c",
            "name": "Comtour",
            "amount": 43,
            "unit_price": "1,759.39",
            "price": "21,607.92",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc90576c3da2163ce16e720",
            "name": "Ramjob",
            "amount": 27,
            "unit_price": "2,579.29",
            "price": "39,022.56",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc905764db2c3d9435a56d9",
            "name": "Roughies",
            "amount": 72,
            "unit_price": "1,664.62",
            "price": "20,591.70",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc90576b54978c6d988937f",
            "name": "Centregy",
            "amount": 80,
            "unit_price": "2,454.99",
            "price": "39,110.88",
            "img_url": "http://placehold.it/32x32"
        },
        {
            "id": "5dc9057620297d4162cee6fa",
            "name": "Anocha",
            "amount": 70,
            "unit_price": "2,460.19",
            "price": "20,699.85",
            "img_url": "http://placehold.it/32x32"
        }
    ]
}

export function callLogin(options: LoginOptions) {
    const {login,password} = options
    const db = [
        ['user', '1'],
        ['some@gmail.com', '1'],

    ]

    const dbHasUser = db.filter(([_login, _password]) => _login === login && _password === password).length!==0

    return dbHasUser
        ? {
            status: 200,
            result: {
                user: login,
                token: '86fasfgfsogHGad'
            }
        }
        : {
            status: 400,
            error:'Неверный логин или пароль'
        }
}
