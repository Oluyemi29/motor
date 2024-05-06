import Image from "next/image";
import './page.css'
import Cars from '../../public/images/Group135.png'
import Car1 from '../../public/images/CL 1.png'
import Car2 from '../../public/images/Hyundai-Logo 1.png'
import Car3 from '../../public/images/SL 1.png'
import Car4 from '../../public/images/TL 1.png'
import Car5 from '../../public/images/Vector.png'
import Car6 from '../../public/images/HL 1.png'
import Car7 from '../../public/images/fl 1.png'
import Car8 from '../../public/images/images 1.png'
import Car9 from '../../public/images/Ford l 1.png'
import purpleCar from '../../public/images/2017 Nissan GT-R NISMO First Look_ Once And Future King Of The Nürburgring 1.png'
import ThirdCar1 from '../../public/images/download 3.png'
import ThirdCar2 from '../../public/images/Group 143.png'
import FourthCar1 from '../../public/images/download (6) 2.png'
import Ford from '../../public/images/Fordy.png'


export default function Home() {
  return (
    <div>
      <div className="Hero-section pl-2 md:pl-10 pt-52 md:pt-48">
        <h1 className="text-customedWhite text-3xl md:text-[2.5rem]  font-extrabold">The Thrill of ride <br/> meets the beauty.</h1>
        <p className="text-black mt-5 text-sm">Lorem ipsum dolor sit amet consectetur. A congue imperdiet <br/> pharetra purus ut tellus ac eu morbi. Nullam.</p>
      <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite mt-10">Buy Now</button>
      </div>
      <hr className="border-1 mt-5 border-solid border-deepedBlue"/>
      <div className="flex items-center flex-row md:w-3/4 m-auto justify-between px-1 md:px-10 py-2">
        <Image
        alt="12345" 
        src={Car1}
        width={250}
        height={250}
        className="md:w-10 w-6 h-4 md:h-8"
        />
        <Image
        alt="12345" 
        src={Car2}
        width={250}
        height={250}
        className="md:w-10 w-6 h-4 md:h-8"
        />
        <Image
        alt="12345" 
        src={Car3}
        width={250}
        height={250}
        className="md:w-10 w-6 h-4 md:h-8"
        />
        <Image
        alt="12345" 
        src={Car4}
        width={250}
        height={250}
        className="md:w-10 w-6 h-4 md:h-8"
        />
        <Image
        alt="12345" 
        src={Car5}
        width={250}
        height={250}
        className="w-24 h-3"
        />
        <Image
        alt="12345" 
        src={Car6}
        width={250}
        height={250}
        className="md:w-10 w-6 h-4 md:h-8"
        />
        <Image
        alt="12345" 
        src={Car7}
        width={250}
        height={250}
        className="md:w-10 w-6 h-4 md:h-8"
        />
        <Image
        alt="12345" 
        src={Car8}
        width={250}
        height={250}
        className="md:w-10 w-5 h-4 md:h-8"
        />
        <Image
        alt="12345" 
        src={Car9}
        width={250}
        height={250}
        className="md:w-10 w-4 h-8 md:h-8"
        />

      </div>
      <hr className="border-1 mb-5 border-solid border-deepedBlue" />
      <div className="md:px-10 px-1 w-full justify-between mb-5 md:mb-10 md:mt-20 flex-col md:flex-row flex">
        <div className="md:w-2/5 w-full md:mt-10">
          <h1 className="text-[1.5rem] md:text-[3rem] font-semibold text-deepedBlue2">Luxury Meet <br/> Affordability.</h1>
          <p className="md:text-[1rem] text-[0.7rem] md:mt-10 mt-2">Lorem ipsum dolor sit amet consectetur. <br/> A congue imperdiet pharetra purus ut <br/> tellus ac eu morbi. Nullam.</p> 
          
          <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite mt-6 md:mt-10">Buy Now</button>
        </div>

        <div className="md:w-3/5 mt-5 md:mt-0 w-full"> 
          <Image
          alt="12345" 
          src={purpleCar}
          width={250}
          height={250}
          className="w-full"
          />
        </div>
      </div>

      <div className="md:px-10 px-1 w-full gap-5 md:flex-row flex-col-reverse justify-between mb-5 md:mb-10 mt-5 md:mt-20 flex">
        <div className="w-full"> 
          <Image
          alt="12345" 
          src={ThirdCar1}
          width={250}
          height={250}
          className="w-full"
          />
        </div>
      <div className="w-full"> 
          <Image
          alt="12345" 
          src={ThirdCar2}
          width={250}
          height={250}
          className="w-full"
          />
        </div>
        <div className="md:w-2/4 w-full md:mx-10 mx-1 md:mt-10">
          <h1 className="md:text-[3rem] text-[1.5rem] font-semibold text-deepedBlue2">Luxury Meet <br/> Affordability.</h1>
          <p className="md:text-[1rem] text-[0.7rem] md:mt-5 mt-2">Lorem ipsum dolor sit amet consectetur. <br/> A congue imperdiet pharetra purus ut <br/> tellus ac eu morbi. Nullam.</p> 
          
          <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite mt-5 md:mt-10">Buy Now</button>
        </div>
      </div>

      <div className="md:px-10 px-1 w-full justify-between md:flex-row flex-col mb-10 md:mt-20 mt-5 flex">
        <div className="md:w-2/5 mb-5 md:mb-0 w-full md:mt-5">
          <h1 className="md:text-[3rem] text-[1.5rem] font-semibold text-deepedBlue2">When Dream <br/> Hit The Road.</h1>
          <p className="md:text-[1rem] text-[0.7rem] md:mt-10 mt-5">Lorem ipsum dolor sit amet consectetur. <br/> A congue imperdiet pharetra purus ut <br/> tellus ac eu morbi. Nullam.</p> 
          
          <button className="text-[1rem] bg-white boxing shadow-inner-md px-4 py-2 rounded-md text-deepedBlue md:mt-10 mt-5">Buy Now</button>
        </div>

        <div className="md:w-3/5 w-full"> 
          <Image
          alt="12345" 
          src={FourthCar1}
          width={250}
          height={250}
          className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
