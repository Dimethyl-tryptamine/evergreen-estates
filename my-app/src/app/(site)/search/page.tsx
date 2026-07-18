"use client";

import CheckBox from "../../componenets/CheckBox";
import { useState, useEffect } from 'react';
import Menu from "../../componenets/Layout/Menu";
import Listing from "../../componenets/Listing";
import { Houselisting } from "../../../../public/SiteData";
import { getListings } from "../../../../public/SiteData";





const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


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



const Search = () => {

    
    const [filters, setFilters] = useState<filters>(initialFilters);
    
    

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [listings, setListings] = useState<Houselisting[]>([]); 


    
    const filteredListings : Houselisting[] = listings.filter((listing) => { // Apply filters to the listings
        if (filters.minPrice != null && listing.price < filters.minPrice) {
            return false;
        }

        if (filters.maxPrice != null && listing.price > filters.maxPrice) {
            return false;
        }

        if (filters.tags && filters.tags.length > 0) {
            const hasMatch = listing.tags.some(tag =>
            filters.tags.includes(tag.toLocaleLowerCase())
            );

            if (!hasMatch) return false;
        }

        return true;
    });

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
        <div className="bg-[#141616] ">




           

            <div className="text-[#228000] m-2 mt-3 rounded-2xl bg-[#202324] text-base">

                <span className="ml-3">
                    Tags and Filters
                </span>


                <form className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-5 p-3  text-[.9rem]">
                    {[
                    "Swimming Pool",
                    "Garage",
                    "Basement",
                    "Attic",
                    "Fireplace",
                    "Garden",
                    "Balcony",
                    "Patio",
                    "Air Conditioning",
                    "Heating System",
                    "Hardwood Floors",
                    "Carpeted Floors"
                    ].map(tag => (
                    <CheckBox
                        key={tag}
                        text={tag}
                        filter={filters}
                        onChange={(checked) => {
                            setFilters((prev: any) => {
                                const tags: string[] = prev?.tags || [];

                                return {
                                    ...prev,
                                    tags: checked
                                    ? [...tags, tag.toLowerCase()]
                                    : tags.filter((t: string) => t !== tag.toLowerCase())
                            };
                            });
                        }}
                        />
                    ))}

                
                    
                    
                    

                    <button  className=" xs:hidden bg-[#228000] text-3xl text-white rounded">Apply Filters</button>

                    

                    

                    
                </form>

                
            </div>
            
            
            <div className="text-[#228000] m-2 mt-3 rounded-2xl bg-[#202324]"> 
                
                <Listing 
                listings={filteredListings} 
                error={error} 
                loading={loading} />
                    
            </div>




        </div>
    
    )
}

export default Search;