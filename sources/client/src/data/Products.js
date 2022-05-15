const products = [
  {
    _id: "1",
    name: "Black Checkered Vans Slip On",
    image: "/images/_black-checkered-vans-slip-on.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "2",
    name: "Air Force 1 Off-White",
    image: "/images/air-force-1-off-white-volt.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 599,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "3",
    name: "Air Jordan 3 Retro OG",
    image: "/images/air-jordan-3-retro-og.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 929,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    _id: "4",
    name: "Air Jordan 4 Cool Grey",
    image: "/images/air-jordan-4-cool-grey.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 399,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    _id: "5",
    name: "Balenciaga Speed Trainer",
    image: "/images/balenciaga_speed_trainer.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 250,
    countInStock: 7,
    rating: 1,
    numReviews: 2,
  },
  {
    _id: "6",
    name: "Converse Micheal Jordan 1984",
    image: "/images/converse-michael-jordan-1984.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 199,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    _id: "7",
    name: "Jordan 1 Fearless",
    image: "/images/jordan-1-fearless.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 599,
    countInStock: 2,
    rating: 5,
    numReviews: 0,
  },
  {
    _id: "8",
    name: "Jordan 1 Turbo Green",
    image: "/images/jordan-1-turbo-green.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 699,
    countInStock: 2,
    rating: 3,
    numReviews: 0,
  },
  {
    _id: "9",
    name: "Jordan 5 Retro Supreme",
    image: "/images/jordan-5-retro-supreme.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 1199,
    countInStock: 2,
    rating: 4,
    numReviews: 0,
  },
  {
    _id: "10",
    name: "Jordan 6 Infrared",
    image: "/images/jordan-6-infrared.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 999,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "11",
    name: "Nike Air Force 1 Low",
    image: "/images/nike-air-force-1-low.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 399,
    countInStock: 2,
    rating: 5,
    numReviews: 0,
  },
  {
    _id: "12",
    name: "Red Jordan Space Jam",
    image: "/images/red-jordan-space-jams.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 999,
    countInStock: 2,
    rating: 3,
    numReviews: 0,
  },
  {
    _id: "13",
    name: "Revenge X Vans (Pink)",
    image: "/images/revenge-x-storm-vans-pink.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 899,
    countInStock: 4,
    rating: 4,
    numReviews: 0,
  },
  {
    _id: "14",
    name: "Vans Old School",
    image: "/images/vans-old-skool.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 199,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    _id: "15",
    name: "Revenge X Vans",
    image: "/images/vans-x-storm-revenge.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 399,
    countInStock: 10,
    rating: 4,
    numReviews: 0,
  },
  {
    _id: "16",
    name: "Yeezy Boost 350 V2 Verdi",
    image: "/images/yeezy-boost-350-v2-verdi.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 999,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
];

export default products;
