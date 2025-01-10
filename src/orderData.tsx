import { Order } from "./types/order";

export const orderInitialData: Order[] = [
  {
    id: "AA01",
    shop: "Nguyen Van A",
    customer: "Le Tung B",
    shopContact: "0332060870",
    customerContact: "0223606780",
    customerAddress: "abc, quan1, tphcm",
    note: "note gi cung duoc",
    receiveAddress: "abc, quan1, tphcm",
    receiver: "Cao Anh Huy",
    location: [1, 2],
    status: "done",
    packages: [
      {
        id: 'PP01',
        weight: 20,
        height: 10,
        width: 8,
        note: "note gi thi note",
        type: "done",
        status: "ko biet",
        location: [1, 2],
        items: [
          {
            id: "II01",
            name: "aoTT01",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II02",
            name: "aoTT02",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II03",
            name: "aoTT03",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II04",
            name: "aoTT04",
            number: 5,
            note: "ao dep",
          }
        ],
      },
      {
        id: 'PP02',
        weight: 20,
        height: 10,
        width: 8,
        note: "note gi thi note",
        type: "done",
        status: "ko biet",
        location: [1, 2],
        items: [
          {
            id: "II05",
            name: "aoTT05",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II06",
            name: "aoTT06",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II07",
            name: "aoTT07",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II08",
            name: "aoTT08",
            number: 5,
            note: "ao dep",
          }
        ],
      }
    ],
  },
  {
    id: "AA02",
    shop: "Nguyen Van A",
    customer: "Le Tung B",
    shopContact: "0332060870",
    customerContact: "0223606780",
    customerAddress: "abc, quan1, tphcm",
    note: "note gi cung duoc",
    receiveAddress: "abc, quan1, tphcm",
    receiver: "Cao Anh Huy",
    location: [1, 2],
    status: "done",
    packages: [
      {
        id: 'PP03',
        weight: 20,
        height: 10,
        width: 8,
        note: "note gi thi note",
        type: "done",
        status: "ko biet",
        location: [1, 2],
        items: [
          {
            id: "II011",
            name: "aoTT01",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II022",
            name: "aoTT02",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II033",
            name: "aoTT03",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II044",
            name: "aoTT04",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II0441",
            name: "aoTT041",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II0442",
            name: "aoTT042",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II0443",
            name: "aoTT043",
            number: 5,
            note: "ao dep",
          }
        ],
      },
      {
        id: 'PP04',
        weight: 20,
        height: 10,
        width: 8,
        note: "note gi thi note",
        type: "done",
        status: "ko biet",
        location: [1, 2],
        items: [
          {
            id: "II055",
            name: "aoTT05",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II066",
            name: "aoTT06",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II077",
            name: "aoTT07",
            number: 5,
            note: "ao dep",
          },
          {
            id: "II088",
            name: "aoTT08",
            number: 5,
            note: "ao dep",
          }
        ],
      }
    ],
  }
]