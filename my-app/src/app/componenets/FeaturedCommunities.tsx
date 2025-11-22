import Listing from "./Listing";


const FeaturedCommunities = () => {



  return (

    <>


        <div  className="w-full  h-full bg-[#202324] text-2xl text-[#228100] ">
            <div className="flex font-bold text-3xl">

                <img src="/images/logo/evergreen_logo.png" alt="EverGreen_Estates_Logo" width={40}  className="mr-1"/> Featured Communities 
            </div>

            <Listing/>
        </div>

        

    </>

)}

export default FeaturedCommunities;