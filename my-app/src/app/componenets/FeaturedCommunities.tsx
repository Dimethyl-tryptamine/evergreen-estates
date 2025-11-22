import Listing from "./Listing";
import Nav from "./Nav";


const FeaturedCommunities = () => {



  return (

    <>


        <div  className="w-full  flex  h-full bg-[#202324] text-2xl text-[#228100] ">
            


            
            
            


            <div className="w-full max-w-7xl mx-auto   flex flex-col gap-6 ">
                
                    <div className="flex">


                        <img src="/images/logo/evergreen_logo.png" alt="EverGreen_Estates_Logo" className=" md:w-20 md:h-20 mr-1 w-10 h-10 flex justify-center items-center"/> 
                        <span className="items-center mt-1 md:text-4xl md:mt-5 text-2xl font-bold">
                            Featured Communities
                        </span>

                        <Nav/>
                    </div>

                    
                

                <Listing/>
                
                
    

                
            
            </div>

            
        </div>

        

    </>

)}

export default FeaturedCommunities;