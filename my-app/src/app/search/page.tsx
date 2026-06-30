"use client";
import { getFeaturedListings, Houselisting } from "../../../public/SiteData";
import CheckBox from "../componenets/CheckBox";
import Listing from "../componenets/Listing";
import Menu from "../componenets/Menu";
import { useState,useRef, useEffect,  } from "react";



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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [listings, setListings] = useState<Houselisting[]>([]);    
    



    useEffect(() => { // Fetch listings when the component mounts
        const getListings = async () => {
            try {
                setLoading(true);
                setError(null);
                console.log(filters);

                const data = await getFeaturedListings();
                setListings(data)

            

            } catch (err) {
            setError("Failed to fetch listings");
            } finally {
            setLoading(false);
            }}
        getListings();
        
    },[]);

    const filteredListings = listings.filter((listing) => { // Apply filters to the listings
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

        



  




    return (
        <div className="bg-[#141616] ">




            <div className="flex w-full items-center bg-[#202324] ">
                
                <img className="w-10 h-10 mx-1"  src={"/images/logo/evergreen_logo.png"}/>


                <span className="text-3xl mt-1 text-[#228000]">
                    EverGreen Estates
                </span>

                

                <nav className="ml-auto  justify-end  mr-2">

                    <div className="xs:hidden">
                        <Menu/>
                    </div>


                    
                </nav>

            </div>

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
                            setFilters(prev => {
                            const tags = prev.tags;

                            return {
                                ...prev,
                                tags: checked
                                ? [...tags, tag.toLowerCase()]
                                : tags.filter(t => t !== tag.toLowerCase())
                            };
                            });
                        }}
                        />
                    ))}

                
                    
                    
                    

                    <button  className=" xs:hidden bg-[#228000] text-3xl text-white rounded">Apply Filters</button>

                    

                    
                        
                    
                    

                    
                </form>

                
            </div>
            
            
            <div className="text-[#228000] m-2 mt-3 rounded-2xl bg-[#202324]"> 
                
                <Listing listings={filteredListings}  error={error}  loading={loading}  />

            </div>




        </div>
    
    )
}

export default Search;