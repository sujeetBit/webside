
import {TypeAnimation} from "react-type-animation"
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
const Home = () => {
  return (
    <div id='main'>
        <img className='w-full h-[500px] object-cover object-left scale-x-[-1]' src='https://picsum.photos/200/300'></img>
        <div className='w-full h-[500px] absolute top-0 left-0 bg-white/50 '>        
        <div className="max-w-[700px] m-auto w-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-hxl text-4xl font-bold text-gray-800 pt-36">I am Sujeet</h1>
            <h2 className="flex sm:text-3xl">I am a
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Devloper',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Testing',
        1000,
        'Enginnerar',
        1000,
        'Web Devloper',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />

            </h2>
            <div className="flex justify-between pt-4 max-[200px] w-full:">
                <FaTwitter className="cursor-pointer m-2" size={20}/>
                <FaInstagram className="cursor-pointer m-2" size={20}/>
                <FaFacebook className="cursor-pointer m-2" size={20}/>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Home