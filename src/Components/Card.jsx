import React from "react";
import { FcLike } from "react-icons/fc";

function Card(props) {
  let { course } = props;
  return (
    <div className='bg-black bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
    <div className='relative '>
        <img src={props.course.image.url} alt="Course Image" className='' />

        <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
            <button>
                
                    <FcLike fontSize="1.75rem" />
                
            </button>
        </div>
    </div>



    <div className='p-4'>
        <p className='text-white text-lg font-semibold leading-6'>{props.course.title}</p>
        <p className='mt-2 text-white'>
            {props.course.description}

        </p>
    </div>

</div>
)
}

export default Card;
