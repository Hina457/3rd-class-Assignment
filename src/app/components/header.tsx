
import Image from "next/image";
import logo from "..//components/public/images/logo.png";



export default function Header(){
    return(
        <div>
                       
            <div className="navbar bg-black h-44 w-auto m-0">
        
            
                <nav className="flex items-center text-white">
                    
           
                <Image src={logo} alt="logo"  width={170} height={150}/>   
                <ul className="flex-1 text-center pl-9">
        <li className="list-none inline-block font-serif hover:text-green-300">
          <a href="#">End of Season sale</a></li>
         <li className="list-none inline-block px-5 pt-20 pl-6 font-serif  hover:text-green-300"> <a href="#" className="no-underline">Limited Edition</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">law 2024</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">unstiched</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">Women </a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">salt</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">Men</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">Jewellry</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">Shoes</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">Bags</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">kids</a></li>
          <li className="list-none inline-block px-5 font-serif hover:text-green-300"><a href="#" className="no-underline">Fragrances</a></li>
       
      </ul>
                </nav>
           
        
            </div>
           
           
       </div>
    )
}