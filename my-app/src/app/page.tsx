'use client'
import { getListings, Houselisting } from "../../public/SiteData";
import { useState, useEffect} from "react";
import FeaturedCommunities from "./componenets/FeaturedCommunities"
import Hero from "./componenets/Hero"



export interface filters {
    minPrice: number | null;
    maxPrice: number | null;
    tags: string[];
    search: string;

}

const initialFilters: filters = {
    minPrice: null,
    maxPrice: null,
    tags: [],
    search: "",
};

const Home = () => {

  


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [listings, setListings] = useState<Houselisting[]>([]); 

  useEffect(() => { // Fetch listings when the component mounts
    const fetchListings = async () => {
        try {
            setLoading(true);
            setError(null);
            

            const data = await getListings();
            setListings(data) 

        

        } catch (err) {
        setError("Failed to fetch listings");
        } finally {
        setLoading(false);
        }}
    fetchListings();
    
  },[]);

  



  return (
    <>

      <Hero/>
      <FeaturedCommunities 
      listings={listings} 
      error={error} 
      loading={loading} 
    />
    </>


)}

export default Home

