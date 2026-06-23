import React from "react";
import { getFeaturedListings } from "../../../public/SiteData";
import { Houselisting } from "../../../public/SiteData";

const getListings = async () => { // Fetch the featured listings from the SiteData.tsx file
    const data = await getFeaturedListings();
   return  data;
}





const  Listing = async () => {



    const data = await getListings();




   
    return(
        <div className="2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-1 justify-center justify-items-center">

            {data.map((listing: Houselisting) => (

                


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
