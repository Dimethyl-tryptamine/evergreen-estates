'use client'
import React, { useEffect } from "react";
import { getFeaturedListings } from "../../../public/SiteData";
import { Houselisting } from "../../../public/SiteData";



const  Listing = () => {

    const [loading, setLoading] = React.useState(true);
    const [listings, setListings] = React.useState<Houselisting[]>([]);
    const [error, setError] = React.useState<string | null>(null);

    

   useEffect(() => {
        const getListings = async () => { 
            try { 
                setLoading(true);
                setError("");
                setListings([]);
                const data = await getFeaturedListings();
                setListings(data);
            } catch (err) {
                setError("Failed to fetch listings");
            } finally {
                setLoading(false);
            }
            
        }
        getListings();
        
    },[])

    if (loading) {
        return <div>
            loading...
        </div>
    }

    if (error) {
        return <div>
            {error}
        </div>
    }

    if (listings.length === 0) {
        return <div>
            No listings found
        </div>
    }


   
    return(
        <div className="2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-1 justify-center justify-items-center">

            {listings.map((listing: Houselisting) => (

                


                <div key={listing.id} className="bg-[#3A3F42] max-w-100   rounded-lg shadow-md overflow-hidden m-4">
                    <img src={listing.images[0]} alt={listing.title} className="w-full h-48 object-cover"/>
                    <div className="p-4 ">
                        
                        <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
                        <span className="text-green-600 font-bold mb-2">${listing.price.toLocaleString()}</span>
                        <p className="text-sm text-black font-sans ">{listing.description}</p>
                    
                    </div>
                </div>

                    
                
            ))}
                

        
        </div>
)}

export default Listing;
