/* eslint-disable react/prop-types */

function Card({ backgroundSrc, item }) {
  return (
    <div className='cursor-pointer flex-grow aspect-[6/4] overflow-hidden group'>
      <div className="h-full flex justify-center items-center bg-cover bg-no-repeat bg-center transition-all ease-out duration-[11000ms] group-hover:scale-110 group-hover:bg-opacity-5 "
        style={{ backgroundImage: `url(${backgroundSrc})` }}>
        <div className="text-neutral-700 bg-neutral-300 bg-opacity-70 w-[120px] text-center p-4 group-hover:font-semibold transition-all group-hover:bg-amber-300 ">
          <div className='uppercase'>{item}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;