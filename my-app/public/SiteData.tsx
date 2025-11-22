export interface Houselisting {
  id: string;
  images: string[];
  title: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  description: string;
};


export const Featuredlistings: Houselisting[] = [
    {
    id: "1",
    images: ["/images/House1.jpg", "/houses/Houseinterior1.jpg"],
    title: "Modern Family Home",
    price: 489000,
    beds: 4,
    baths: 3,
    sqft: 2450,
    address: "182 Willow Creek Rd, Portland, OR",
    description:
      "A bright modern home with an open floor plan, updated kitchen, and a large fenced backyard. Located in a quiet, family-friendly neighborhood close to schools."
  },
  {
    id: "2",
    images: ["/images/House2.jpg", "/houses/Houseinterior2.jpg"],
    title: "Luxury Downtown Condo",
    price: 729000,
    beds: 2,
    baths: 2,
    sqft: 1350,
    address: "350 Market St Apt 2107, San Francisco, CA",
    description:
      "A high-rise luxury condo with floor-to-ceiling windows, skyline views, gym access, and 24/7 security. Steps away from top restaurants and tech offices."
  },
  {
    id: "3",
    images: ["/images/House3.jpg", "/houses/Houseinterior3.jpg"],
    title: "Cozy Suburban Cottage",
    price: 319000,
    beds: 3,
    baths: 2,
    sqft: 1580,
    address: "74 Maplewood Ln, Raleigh, NC",
    description:
      "A cozy renovated cottage featuring a farmhouse-style kitchen, hardwood floors, and a private patio. Perfect starter home in a quiet neighborhood."
  },
  {
    id: "4",
    images: ["/images/House4.jpg", "/houses/Houseinterior4.jpg"],
    title: "Spacious Country Estate",
    price: 899000,
    beds: 5,
    baths: 4,
    sqft: 4200,
    address: "982 County Rd 44, Austin, TX",
    description:
      "A huge custom-built estate on 2 acres with a pool, modern kitchen, oversized garage, and panoramic country views. Ideal for privacy lovers."
  },
  {
    id: "5",
    images: ["/images/House5.jpg", "/houses/Houseinterior5.jpg"],
    title: "Urban Loft Studio",
    price: 259000,
    beds: 1,
    baths: 1,
    sqft: 740,
    address: "120 Riverfront Ave Unit 205, Chicago, IL",
    description:
      "A stylish industrial loft with exposed brick, tall ceilings, and modern updates. Walkable to coffee shops, transit, and the riverwalk."
  },
  {
    id: "6",
    images: ["/images/House6.jpg", "/houses/Houseinterior6.jpg"],
    title: "Newly Built Townhouse",
    price: 379000,
    beds: 3,
    baths: 2.5,
    sqft: 1760,
    address: "412 Valencia Dr, Orlando, FL",
    description:
      "A 2024-build townhouse with smart-home features, energy-efficient appliances, and a community pool. Low HOA and close to shopping."
  },
  {
    id: "7",
    images: ["/images/House7.jpg", "/houses/Houseinterior7.jpg"],
    title: "Lakefront Vacation Cabin",
    price: 564000,
    beds: 3,
    baths: 2,
    sqft: 1920,
    address: "15 Pine Shore Rd, Lake Tahoe, NV",
    description:
      "A rustic cabin with direct lake access, a wood-burning fireplace, and wraparound deck. Perfect for weekend getaways or short-term rentals."
  },
  {
    id: "8",
    images: ["/images/House8.jpg", "/houses/Houseinterior8.jpg"],
    title: "Compact City Home",
    price: 309000,
    beds: 2,
    baths: 1,
    sqft: 980,
    address: "508 Redwood St, Denver, CO",
    description:
      "A compact and efficient home featuring modern interior finishes, updated bathrooms, and a small private yard. Ideal for young professionals."
  }]


