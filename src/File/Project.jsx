
import sujeet from '../assets/Images/1.jpg'
import sujee from '../assets/Images/2.jpg'
import suje from '../assets/Images/3.jpg'
import suj from '../assets/Images/4.jpg'
import ProjectIteam from './ProjectIteam'

const Project = () => {
  return (
    <div id='project' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text text-4xl font-bold text-center text-[#001b5e]'>Project</h1>
        <p className=' text-center py-8'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectIteam img={sujeet} titel={sujeet}/>
            <ProjectIteam img={sujee} titel={sujee}/>
            <ProjectIteam img={suje} titel={suje}/>
            <ProjectIteam img={suj} titel={suj}/>
        </div>
    </div>
  )
}

export default Project