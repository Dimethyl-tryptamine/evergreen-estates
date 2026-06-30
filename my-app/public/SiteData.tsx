 export interface Houselisting {
  id: string;
  images: string[];
  tags: string[];
  title: string;
  price: number;
  stars: number;
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
    tags: ["luxury", "swimming pool", "garden", "garage"],
    title: "Modern Luxury Villa",
    price: 850000,
    beds: 5,
    stars: 4.5,
    baths: 4,
    sqft: 4200,
    address: "12 Beverly Hills Dr, Los Angeles, CA",
    description:
      "A stunning luxury villa featuring a private pool, open-concept living space, and panoramic city views."
  },

  {
    id: "2",
    images: ["/images/house2.jpg", "/images/house2-2.jpg"],
    tags: ["modern", "downtown", "condo", "air conditioning", "balcony"],
    title: "Downtown Skyline Condo",
    price: 620000,
    beds: 2,
    stars: 4.0,
    baths: 2,
    sqft: 1350,
    address: "300 Market St, San Francisco, CA",
    description:
      "High-rise condo with skyline views, balcony, and modern amenities."
  },

  {
    id: "3",
    images: ["/images/house3.jpg", "/images/house3-2.jpg"],
    tags: ["cozy", "family", "suburban", "fireplace", "hardwood floors"],
    title: "Cozy Suburban Family Home",
    price: 410000,
    beds: 3,
    stars: 4.2,
    baths: 2,
    sqft: 1800,
    address: "88 Maplewood Ln, Austin, TX",
    description:
      "Warm family home with fireplace, hardwood floors, and large backyard."
  },

  {
    id: "4",
    images: ["/images/house4.jpg", "/images/house4-2.jpg"],
    tags: ["estate", "large-land", "luxury", "garden", "fireplace", "garage"],
    title: "Private Country Estate",
    price: 1200000,
    beds: 6,
    stars: 4.8,
    baths: 5,
    sqft: 6000,
    address: "990 Countryside Rd, Nashville, TN",
    description:
      "Expansive estate with large land, fireplace, garden, and garage."
  },

  {
    id: "5",
    images: ["/images/house5.jpg", "/images/house5-2.jpg"],
    tags: ["starter", "affordable", "city", "heating system", "basement"],
    title: "Affordable City Apartment",
    price: 280000,
    beds: 1,
    stars: 4.0,
    baths: 1,
    sqft: 750,
    address: "45 River St, Chicago, IL",
    description:
      "Compact apartment with basement storage and heating system."
  },

  {
    id: "6",
    images: ["/images/house6.jpg", "/images/house6-2.jpg"],
    tags: ["modern", "townhouse", "garage", "attic", "hardwood floors"],
    title: "Modern Townhouse with Garage",
    price: 520000,
    beds: 3,
    stars: 4.5,
    baths: 3,
    sqft: 2100,
    address: "77 Pinecrest Ave, Seattle, WA",
    description:
      "Smart townhouse with garage, attic space, and hardwood floors."
  }
    
  ];
  return featuredListings;
}
