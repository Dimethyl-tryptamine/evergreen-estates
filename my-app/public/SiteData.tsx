export interface Houselisting {
  id: string;
  images: string[];
  tags: string[];
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  description: string;
};

export async function getFeaturedListings(): Promise<Houselisting[]> {
  const featuredListings: Houselisting[] = [
     {
    id: "1",
    images: ["/images/house1.jpg", "/images/house1-2.jpg"],
    tags: ["featured", "luxury", "pool"],
    title: "Modern Luxury Villa",
    price: 850000,
    beds: 5,
    baths: 4,
    sqft: 4200,
    address: "12 Beverly Hills Dr, Los Angeles, CA",
    description:
      "A stunning luxury villa featuring a private pool, open-concept living space, and panoramic city views. Designed with modern architecture and high-end finishes."
  },
  {
    id: "2",
    images: ["/images/house2.jpg", "/images/house2-2.jpg"],
    tags: ["modern", "downtown", "condo"],
    title: "Downtown Skyline Condo",
    price: 620000,
    beds: 2,
    baths: 2,
    sqft: 1350,
    address: "300 Market St, San Francisco, CA",
    description:
      "A sleek high-rise condo in the heart of downtown with floor-to-ceiling windows, gym access, and incredible skyline views."
  },
  {
    id: "3",
    images: ["/images/house3.jpg", "/images/house3-2.jpg"],
    tags: ["cozy", "family", "suburban"],
    title: "Cozy Suburban Family Home",
    price: 410000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    address: "88 Maplewood Ln, Austin, TX",
    description:
      "A warm and inviting family home located in a quiet suburban neighborhood with a large backyard and updated kitchen."
  },
  {
    id: "4",
    images: ["/images/house4.jpg", "/images/house4-2.jpg"],
    tags: ["estate", "large-land", "luxury"],
    title: "Private Country Estate",
    price: 1200000,
    beds: 6,
    baths: 5,
    sqft: 6000,
    address: "990 Countryside Rd, Nashville, TN",
    description:
      "Expansive estate on private land featuring a guest house, large garden, and premium interior design throughout."
  },
  {
    id: "5",
    images: ["/images/house5.jpg", "/images/house5-2.jpg"],
    tags: ["starter", "affordable", "city"],
    title: "Affordable City Apartment",
    price: 280000,
    beds: 1,
    baths: 1,
    sqft: 750,
    address: "45 River St, Chicago, IL",
    description:
      "A compact and efficient city apartment perfect for first-time buyers, close to transit, shops, and restaurants."
  },
  {
    id: "6",
    images: ["/images/house6.jpg", "/images/house6-2.jpg"],
    tags: ["modern", "townhouse", "garage"],
    title: "Modern Townhouse with Garage",
    price: 520000,
    beds: 3,
    baths: 3,
    sqft: 2100,
    address: "77 Pinecrest Ave, Seattle, WA",
    description:
      "A newly built townhouse featuring smart home tech, private garage, and spacious open-plan living areas."
  }
    
  ];
  return featuredListings;
}
