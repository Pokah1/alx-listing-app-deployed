import { PropertyProps } from "@/interfaces";
// constants/index.ts
export const HERO_IMAGE_URL = "/images/hero.jpg";

export const Svgs = [
  { label: "Beach House", icon: "/assets/beach-house.svg" },
  { label: "Apartment", icon: "/assets/apartment.svg" },
  { label: "Cabins", icon: "/assets/cabins.svg" },
  { label: "Camping", icon: "/assets/camping.svg" },
  { label: "Castles", icon: "/assets/castles.svg" },
  { label: "Countryside", icon: "/assets/countryside.svg" },
  { label: "Farm house", icon: "/assets/frm-house.svg" }, // typo fix from "From house"
  { label: "House", icon: "/assets/house.svg" },
  { label: "Island", icon: "/assets/island.svg" },
  { label: "Lakefront", icon: "/assets/lakefront.svg" },
  { label: "Mansion", icon: "/assets/mansion.svg" },
  { label: "Newkey", icon: "/assets/newkey.svg" },
  { label: "Newpool", icon: "/assets/newpool.svg" },
  // { label: "Rooms", icon: "/assets/rooms.svg" },
  // { label: "Treehouse", icon: "/assets/treehouse.svg" },
  // { label: "Tropical", icon: "/assets/tropical.svg" },
  // { label: "Villa", icon: "/assets/villa.svg" },
];


export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/assets/villa-arrecife-2.jpg",
    discount: "",
    description: "An elegant beachfront villa offering stunning ocean views, private pool, and Balinese-style interiors.",
    reviews: [
      { user: "Alice", comment: "Breathtaking views and peaceful vibes!", rating: 5 },
      { user: "John", comment: "Clean, spacious, and just a few steps from the beach.", rating: 4.8 }
    ]
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/assets/entire-cabin-3.jpg",
    discount: "30",
    description: "Cozy chalet tucked in the mountains with fireplace and panoramic views of the valley.",
    reviews: [
      { user: "Liam", comment: "Perfect for a snowy weekend retreat!", rating: 4.6 },
      { user: "Maya", comment: "Loved the fireplace and the peaceful setting.", rating: 4.8 }
    ]
  },
  {
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "/assets/earthen-4.jpg",
    discount: "",
    description: "Minimalist desert home with mid-century charm, surrounded by cacti and sunshine.",
    reviews: [
      { user: "Nora", comment: "Felt like a true retreat! Great for couples.", rating: 5 },
      { user: "Chris", comment: "Perfect balance of style and comfort.", rating: 4.9 }
    ]
  },
  {
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "/assets/private-5.jpg",
    discount: "15",
    description: "Modern penthouse overlooking downtown with floor-to-ceiling windows and skyline views.",
    reviews: [
      { user: "Sophia", comment: "Luxurious and central. Worth every dollar.", rating: 5 },
      { user: "Jake", comment: "Amazing views, especially at night!", rating: 4.7 }
    ]
  },
  {
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "/assets/gokce-6.jpg",
    discount: "20",
    description: "A secluded riverside cabin with rustic charm and access to private kayaking adventures.",
    reviews: [
      { user: "Ella", comment: "Loved waking up to the river each morning.", rating: 4.8 },
      { user: "Mark", comment: "So peaceful and fun for kayaking!", rating: 4.6 }
    ]
  },
  {
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "/assets/luxury-7.jpg",
    discount: "",
    description: "Stunning beachfront property with a private pool, in-house chef, and lush tropical garden.",
    reviews: [
      { user: "Zara", comment: "Unforgettable stay — the chef was amazing!", rating: 5 },
      { user: "Tom", comment: "Truly luxurious, and beachfront access is a plus!", rating: 4.9 }
    ]
  },
  {
    name: "Lakeside Chalet",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "/assets/palais-8.jpg",
    discount: "10",
    description: "Charming chalet by the lake with easy access to hiking trails and serene mountain views.",
    reviews: [
      { user: "Olivia", comment: "Serene and beautiful. Great for nature lovers!", rating: 4.7 },
      { user: "Dylan", comment: "Clean, cozy, and close to scenic trails.", rating: 4.6 }
    ]
  },
  {
    name: "Tropical Garden Villa",
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "/assets/villa-lamp-9.jpg",
    discount: "25",
    description: "Tropical villa surrounded by lush greenery, modern amenities, and privacy.",
    reviews: [
      { user: "Emily", comment: "So peaceful and private. Felt like paradise.", rating: 5 },
      { user: "Ben", comment: "Loved the garden atmosphere!", rating: 4.8 }
    ]
  },
  {
    name: "Urban Loft",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "/assets/villa-l-oui-10.jpg",
    discount: "",
    description: "Stylish city loft in the heart of Berlin with industrial design and modern comfort.",
    reviews: [
      { user: "Max", comment: "Trendy and super central. Loved the vibe!", rating: 4.6 },
      { user: "Anna", comment: "Perfect location to explore Berlin.", rating: 4.5 }
    ]
  },
  {
    name: "Secluded Forest Cabin",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/assets/designer-villa-11.jpg",
    discount: "40",
    description: "Hidden cabin in the woods with a hot tub and cozy interiors for winter getaways.",
    reviews: [
      { user: "James", comment: "A hidden gem! The hot tub was fantastic.", rating: 4.9 },
      { user: "Lily", comment: "Felt so remote and peaceful.", rating: 4.7 }
    ]
  },
  {
    name: "Cliffside Villa",
    address: { state: "Amalfi", city: "Salerno", country: "Italy" },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "/assets/roysl-zephyr-12.jpg",
    discount: "50",
    description: "Elegant villa perched on cliffs with infinity pool and unbeatable sea views.",
    reviews: [
      { user: "Isabella", comment: "Dream stay! Sea views were out of this world.", rating: 5 },
      { user: "Leo", comment: "Truly breathtaking. Worth every penny.", rating: 4.95 }
    ]
  },
  {
    name: "Coastal Escape Villa",
    address: { state: "Noosa", city: "Queensland", country: "Australia" },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/assets/riad-mayo-13.jpg",
    discount: "",
    description: "Bright and breezy coastal home just steps from the beach. Ideal for families.",
    reviews: [
      { user: "Mason", comment: "Loved walking to the beach every morning!", rating: 4.8 },
      { user: "Chloe", comment: "Comfortable, clean, and super family-friendly.", rating: 4.75 }
    ]
  },
  {
    name: "Historical Villa",
    address: { state: "Florence", city: "Tuscany", country: "Italy" },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "/assets/casa-de-14.jpg",
    discount: "35",
    description: "Charming 18th-century villa with traditional decor, nestled in the heart of Tuscany.",
    reviews: [
      { user: "Gianna", comment: "Authentic experience with great breakfast.", rating: 4.7 },
      { user: "Marco", comment: "Felt like I stepped back in time. Loved it!", rating: 4.6 }
    ]
  },
  {
    name: "Downtown Apartment",
    address: { state: "Tokyo", city: "Tokyo", country: "Japan" },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "/assets/happy-vally-15.jpg",
    discount: "",
    description: "Compact yet stylish apartment located in central Tokyo, near metro and shops.",
    reviews: [
      { user: "Kenji", comment: "Great location, clean, and well equipped.", rating: 4.8 },
      { user: "Yui", comment: "Convenient and quiet despite being central.", rating: 4.85 }
    ]
  },
  {
    name: "Luxury Safari Lodge",
    address: { state: "Serengeti", city: "Mara", country: "Tanzania" },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "/assets/almyros-16.jpg",
    discount: "20",
    description: "Premium safari lodge offering luxury tents, wildlife views, and daily guided tours.",
    reviews: [
      { user: "Kofi", comment: "The safari tours were unforgettable!", rating: 5 },
      { user: "Amina", comment: "Luxury and wilderness perfectly blended.", rating: 4.95 }
    ]
  },
  {
    name: "Countryside Cottage",
    address: { state: "Cotswolds", city: "Gloucestershire", country: "UK" },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "2", shower: "1", occupants: "2-4" },
    image: "/assets/villa-white-stone-17.jpg",
    discount: "25",
    description: "Charming English countryside cottage with cozy interiors and a wood-burning fireplace.",
    reviews: [
      { user: "Amelia", comment: "So romantic and relaxing!", rating: 4.7 },
      { user: "George", comment: "Loved the quiet setting and rustic feel.", rating: 4.5 }
    ]
  }
];


