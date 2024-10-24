
import Image from "next/image";
import banner from "..//components//public/images/banner.jpg";
import pic1 from "../components//public/images/pic1.webp";
import pic2 from "../components/public/images/pic2.webp";
import men1 from "../components/public/images/men1.webp";
import men2 from "../components/public/images/men2.webp";
import kids from "../components/public/images/kids.webp";
import shoes from "../components/public/images/shoes.webp";
import bed from "..//components//public/images/bed.webp";
import men4 from "../components//men4.webp";
import winter from "..//components/public/images/winter.webp";





export default function Hero(){
    return(
        <div>
         

            <div className="banner m-0 p-0 shadow-md">
   
   <Image src={banner} alt="banner"  width={1600} height={300}/>   
   </div>
  <div className="collec text-center text-5xl font-semibold pt-8" >
    <h1>Collections!</h1>
  </div>

   <div className="flex-container w-auto h-auto justify-center flex flex-row flex-wrap">

            <div className="flex-box h-45 w-45 rounded-sm m-6 pt-20 shadow-2xl">
              <Image src={pic1} alt="Pic1" height={300} width={300}/>
              <div className="head to-cyan-950 font-mono text-lg text-center">
                <h1>Winter collection</h1>
              
              </div>
            </div>
            

            <div className="flex-box  h-45 w-45 rounded-sm m-6 pt-20 shadow-2xl">
            <Image src={pic2} alt="Pic2" height={300} width={300}/>
             <div className="head to-cyan-950 font-mono text-lg text-center">
                <h1>Lawn collection</h1>
            \
              </div>
              </div>

        

            <div className="flex-box  h-45 w-45 rounded-sm m-6 pt-20 shadow-2xl">
            <Image src={men1} alt="men1" height={300} width={300}/>
            <div className="head to-cyan-950 font-mono text-lg text-center">
                <h1>Garments</h1>
    
              </div>
            </div>


            <div className="flex-box  h-45 w-45 rounded-sm m-6 pt-20 shadow-2xl">
            <Image src={men2} alt="men2" height={300} width={300}/>
            <div className="head to-cyan-950 font-mono text-lg text-center">
            <h1>Essential collection</h1>
           



  </div></div>

  <div className="flex-box  h-45 w-45 rounded-sm m-6 pt-15 shadow-2xl">
            <Image src={kids} alt="kids" height={300} width={300}/>
            <div className="head to-cyan-950 font-mono text-lg text-center">
                <h1>kids</h1>
      
              </div>
            </div>


            <div className="flex-box  h-45 w-45 rounded-sm m-6 pt-15 shadow-2xl">
            <Image src={shoes} alt="shoes" height={300} width={300}/>
            <div className="head to-cyan-950 font-mono text-lg text-center">
                <h1>Shoes</h1>
          
              </div>
            </div>


            <div className="flex-box  h-45 w-45 rounded-sm m-6 pt-15 shadow-2xl">
            <Image src={bed} alt="bed" height={300} width={300}/>
            <div className="head to-cyan-950 font-mono text-lg text-center">
                <h1>Bed</h1>
        
              </div>
            </div>

            <div className="flex-box  h-45 w-45 rounded-sm m-6 pt-15 shadow-2xl">
            <Image src={winter} alt="winter" height={300} width={300}/>
            <div className="head to-cyan-950 font-mono text-lg text-center">
                <h1>Chunri collection</h1>
             
            </div>



      
</div></div>
         

        
        </div>
    )
}