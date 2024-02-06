
import WorkIteam from './WorkIteam'

const data =[
    {
    year:'2020',
    title:'Testing',
    Duration: '3 Year',
    details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of'
    },
    {
    year:'2020',
    title:'Testing',
    Duration: '3 Year',
    details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of'
    },
    {
    year:'2020',
    title:'Testing',
    Duration: '3 Year',
    details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of'
    },
    {
    year:'2020',
    title:'Testing',
    Duration: '3 Year',
    details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of'
    },
]

const Work = () => {
  return (
    <div id='work' className=' max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className=' text-4xl font-bold text-center text-gray-700'>Work</h1>
        {data.map((item, idx)=>(
                <WorkIteam
                    key={idx}
                    year={item.year}
                    titel={item.title}
                    Duration={item.Duration}
                    details={item.details} 
                 />

            ))}

    </div>
  )
}

export default Work