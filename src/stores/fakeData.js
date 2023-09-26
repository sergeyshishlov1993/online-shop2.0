import { defineStore } from "pinia";
import { useCartData } from "./cartData";
import { reactive } from "vue";

export const useItemStore = defineStore("itemStore", () => {
  // ----------------item card data---------------------

  const { cartData } = useCartData();
  const itemArr = reactive([
    {
      src: "firstCard.png",
      title: "Lira Earrings",
      price: "$ 20,00",
      id: 1,

      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a  maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in  molestie diam bibendum sed 1",

      aditionalInformation: {
        weight: "0.3 kg",
        dimentions: "15 x 10 x 1 cm",
        colours: "Black, Browns, White",
        material: "Metal",
      },

      reviews: [
        {
          namePersone: "Scarlet withch",
          date: "6 May, 2020",
          stars: 5,
          gradeStar: 0,
          reviewText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        },
      ],
    },
    {
      src: "SecondCard.png",

      title: "Hal Earrings",
      price: "$ 25,00",
      id: 2,

      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a  maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in  molestie diam bibendum sed 2",

      aditionalInformation: {
        weight: "0.3 kg",
        dimentions: "15 x 10 x 1 cm",
        colours: "Black, Browns, White",
        material: "Metal",
      },

      reviews: [
        {
          namePersone: "Scarlet withch",
          date: "6 May, 2020",
          stars: 5,
          gradeStar: 0,
          reviewText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        },
      ],
    },
    {
      src: "thirdCard.png",
      title: "Kaede Hair Pin Set Of 3 ",
      price: "$ 30,00",
      id: 3,

      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a  maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in  molestie diam bibendum sed 3",

      aditionalInformation: {
        weight: "0.3 kg",
        dimentions: "15 x 10 x 1 cm",
        colours: "Black, Browns, White",
        material: "Metal",
      },

      reviews: [
        {
          namePersone: "Scarlet withch",
          date: "6 May, 2020",
          stars: 5,
          gradeStar: 0,
          reviewText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        },
      ],
    },
    {
      src: "fourCard.png",
      title: "Hair Pin Set of 3",
      price: "$ 20,00",
      id: 4,

      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a  maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in  molestie diam bibendum sed 4",

      aditionalInformation: {
        weight: "0.3 kg",
        dimentions: "15 x 10 x 1 cm",
        colours: "Black, Browns, White",
        material: "Metal",
      },

      reviews: [
        {
          namePersone: "Scarlet withch",
          date: "6 May, 2020",
          stars: 5,
          gradeStar: 0,
          reviewText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        },
      ],
    },
    {
      src: "fiveCard.png",
      title: "Plaine Necklace",
      price: "$ 19,00",
      id: 5,

      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a  maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in  molestie diam bibendum sed 5",

      aditionalInformation: {
        weight: "0.3 kg",
        dimentions: "15 x 10 x 1 cm",
        colours: "Black, Browns, White",
        material: "Metal",
      },

      reviews: [
        {
          namePersone: "Scarlet withch",
          date: "6 May, 2020",
          stars: 5,
          gradeStar: 0,
          reviewText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        },
      ],
    },
    {
      src: "sixCard.png",
      title: "Yuki Hair Pin Set of 3",
      price: "$ 29,00",
      id: 6,

      productDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam  placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a  maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in  molestie diam bibendum sed 6",

      aditionalInformation: {
        weight: "0.3 kg",
        dimentions: "15 x 10 x 1 cm",
        colours: "Black, Browns, White",
        material: "Metal",
      },

      reviews: [
        {
          namePersone: "Scarlet withch",
          date: "6 May, 2020",
          stars: 5,
          gradeStar: 0,
          reviewText:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
        },
      ],
    },
  ]);

  function getProductToCart(counter, id) {
    const index = +id + 1;

    if (cartData.cart.some((item) => item.id == index)) {
      cartData.cart.find((item) => item.id == index).quantity += counter;
    } else {
      cartData.cart.push({ ...itemArr[id], quantity: counter });
    }

    cartData.showSuccessAlert = true; //show a modal window for successful adding to cart
  }

  return {
    itemArr,
    getProductToCart,
  };
});
