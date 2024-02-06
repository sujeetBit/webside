
const WorkIteam = ({ year, titel, Duration, details})=> {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className="mb-10 ml-10">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 left-1.5"/>
            <p className="flex flex-wrap gap-4 items-center jetify-start text-xs md:text-sm">
                <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">{year}</span>
                <span className="text-lg font-semibold text-[#001b5e]">{titel}</span>
                <span>{Duration}</span>
            </p>
            <p>{details}</p>
        </li>
    </ol>
  );
};
 export default WorkIteam