import Menu from "./Menu";
const Header = () => {


    


    





    
  return (
  
    <div className="w-full h-[90vh] bg-[url(/images/header-bg.jpg)] bg-cover bg-center flex flex-col  text-4xl ">
        <div className=" w-full h-[90vh] bg-linear-to-t from-[#202324] to-[#202324]/30  flex  relative  ">

           
            

            <div className="ml-2 w-full max-w-full ">
                <span className=" text-shadow-lg font-sans whitespace-normal " 
                style={{ 
                    
                    color: '#228100', opacity: 0.9,
                    textShadow:' 0px 3px 3px rgba(0, 0, 0, .7)',
                    
                }}
                >Welcome To Evergreen Estates</span> 
                
                <br/>


                <span className=" text-[#228100] font-sans"
                style={{
                    textShadow: '0px 4px 5px rgba(0, 0, 0, .7)',
                    
                }}>Where comfort meets convenience</span>
                
            </div>
            <Menu/>
        </div>
    </div>
    
    
)};
    

export default Header;