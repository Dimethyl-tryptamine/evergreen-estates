"use client";
import CheckBox from "../componenets/CheckBox";
import Menu from "../componenets/Menu";
import { useState,useRef } from "react";
import { Range } from "react-range";

const Search = () => {

  const input1 = useRef<HTMLInputElement | null>(null);
    const input2 = useRef<HTMLInputElement | null>(null);
  

  const [filters, setFilters] = useState<{
    minPrice: number | null;
    maxPrice: number | null;
    category: string[];
    }>({
    minPrice: null,
    maxPrice: null,
    category: [], 
});

  const [checkedTags, setCheckedTags] = useState<{ [key: string]: boolean }>({});

  const handleTagToggle = (tag: string) => {
    setCheckedTags(prev => ({
      ...prev,
      [tag]: !prev[tag]
    }));
  };

  const handleClick = () => (
    console.log("button pressed")
  )

  
  




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


                <form 
                                    
                    
                
                    className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-5 p-3  text-[.9rem]">

                    
                    
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
                        <CheckBox key={tag} checked={checkedTags[tag] || false} onToggle={handleTagToggle} text={tag} />
                        ))}

                    
                        <div className="hidden xs:flex relative h-5 w-full">
                            <input
                                type="range"
                                min={0}
                                max={1000000}
                                value={filters.minPrice || 0}
                                onChange={(e) =>
                                setFilters((prev) => ({ ...prev, minPrice: Number(e.target.value) }))
                                }
                                className="absolute w-full pointer-events-none appearance-none"
                                style={{ zIndex: 2 }}
                            />
                            <input
                                type="range"
                                min={0}
                                max={1000000}
                                value={filters.maxPrice || 1000000}
                                onChange={(e) =>
                                setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
                                }
                                className="absolute w-full pointer-events-none appearance-none"
                                style={{ zIndex: 1 }}
                            />
                        </div>
                        
                    

                    <button onClick={handleClick} className=" xs:hidden bg-[#228000] text-3xl text-white rounded">Apply Filters</button>

                    <div className=" grid grid-cols-1 gap-1 xs:hidden">
                        <input type="number" ref={input1} placeholder=" Min price" className="w-20 bg-[#141616] rounded" />
                        <input type="number" ref={input2} placeholder=" Max price" className="w-20 bg-[#141616] rounded"  />
                    </div>


                    
                        
                    
                    

                    
                </form>

                
            </div>
            
            
            <div className="text-[#228000] m-2 mt-3 rounded-2xl bg-[#202324]"> 
                
                itemsshowcase#1

            </div>




        </div>
    
    )
}

export default Search;