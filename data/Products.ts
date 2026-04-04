export type Product = {
    id: number;
    productId: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    age: string;
    sold: number;
};

export const products: Product[] = [
        {
        id: 1,
        productId: "prodb73738",
        name: "Nulo",
        price: 5000,
        stock: 57,
        image: "/nulo_cat_feed1.png",
        age: "adult",
        sold: 19,
      },
      {
        id: 2,
        productId: "prodb7m738",
        name: "Nulo",
        price: 7500,
        stock: 78,
        image: "/nulo_cat_feed2.png",
        age: "adult",
        sold: 61,
      },
      {
        id: 3,
        productId: "prodb73v38",
        name: "Nulo",
        price: 5000,
        stock: 17,
        image: "/nulo_cat_feed3.png",
        age: "adult",
        sold: 13,
      },
      {
        id: 4,
        productId: "prodb73732",
        name: "Nulo",
        price: 7500,
        stock: 81,
        image: "/nulo1.png",
        age: "adult",
        sold: 0,
      },
      {
        id: 5,
        productId: "prodbi3738",
        name: "Royal Canis",
        price: 5000,
        stock: 27,
        image: "/royal_canis_dog1.png",
        age: "adult",
        sold: 64,
      },
      {
        id: 6,
        productId: "prodb73708",
        name: "Royal Canis",
        price: 7500,
        stock: 63,
        image: "/royal_canis_dog2.png",
        age: "adult",
        sold: 140,
      },
      {
        id: 7,
        productId: "prodb73g38",
        name: "Royal Canis",
        price: 5000,
        stock: 34,
        image: "/royal_canis_dog3.png",
        age: "adult",
        sold: 100,
      },
      {
        id: 8,
        productId: "prodb7373u",
        name: "Royal Canis",
        price: 7500,
        stock: 5,
        image: "/royal_canis_dog4.png",
        age: "adult",
        sold: 17,
      }
]