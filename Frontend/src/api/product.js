export const dummyProducts = [
  {
    id: 1,
    name: "Laptop Pro 15\"",
    price: 75000,
    category: "electronic",
    image: "/images/laptop.png",
    description: "High performance laptop with 16GB RAM and 512GB SSD.",
  },
  {
    id: 2,
    name: "Smartphone X12",
    price: 32000,
    category: "electronic",
    image: "/images/mobile.png",
    description: "Latest smartphone with OLED display and triple camera setup.",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 8000,
    category: "electronic",
    image: "/images/headphones.png",
    description: "Noise-cancelling over-ear wireless headphones with long battery life.",
  },
  {
    id: 4,
    name: "Organic Apples - 1kg",
    price: 250,
    category: "grocery",
    image: "/images/apples.png",
    description: "Fresh organic apples, handpicked and pesticide-free.",
  },
  {
    id: 5,
    name: "Brown Rice - 5kg",
    price: 400,
    category: "grocery",
    image: "/images/rice.png",
    description: "Healthy brown rice sourced from organic farms.",
  },
  {
    id: 6,
    name: "Ceramic Vase",
    price: 1200,
    category: "home-decor",
    image: "/images/vase.png",
    description: "Elegant handmade ceramic vase for your living room.",
  },
  {
    id: 7,
    name: "Wall Clock",
    price: 700,
    category: "home-decor",
    image: "/images/clock.png",
    description: "Modern design wall clock with silent movement.",
  },
  {
    id: 8,
    name: "LED Table Lamp",
    price: 1500,
    category: "home-decor",
    image: "/images/lamp.png",
    description: "Energy-saving LED lamp with adjustable brightness.",
  },
];

export const fetchProducts = (cat) =>
  new Promise((res) =>
    setTimeout(() => res(dummyProducts.filter((p) => p.category === cat)), 500)
  );
