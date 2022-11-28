import React,{useState} from 'react'
import useCollapse from 'react-collapsed'
import {BsFillCaretDownFill,BsFillCaretUpFill} from 'react-icons/bs'

const Card = ({item,name,desc,title,style,one,two,three}) => {
    const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <div>
        {/* <motion.div key={id} transition={{layout:{ duration: 1, type: "spring"}}} layout {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })} className=" bg-white rounded-xl p-3">
        <motion.h2 layout="position" className=" text-black">{name}</motion.h2>
        <motion.div className=" text-black">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque rerum molestiae perspiciatis facere. Velit necessitatibus cumque quidem ipsam repudiandae totam recusandae ducimus aut, saepe, quia, optio tempore amet ipsa debitis quisquam.</p>
        </motion.div>
        </motion.div> */}
      <div className={`${style}  shadow-md shadow-white   w-[300px] mx-auto text-black rounded-xl flex flex-col  max-h-[600px] p-3 text-center`}>
        <div>
        <p className='mx-2 font-bold text-base'>{name}</p>
        </div>
        <div>
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        className="mx-2 "
      >
        {isExpanded ? '' : 'Know More'}
      </button>
      <div className='mx-[130px]'><button {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>{isExpanded ? <BsFillCaretUpFill />: <BsFillCaretDownFill/>} </button>
        </div>
      </div>
      <div>
        
      <section {...getCollapseProps()}>
      <h2 className=' p-2 font-black'>{title}</h2>
        <div>{desc}</div>
        <div className=' underline font-bold text-lg'>Achievements/Tasks</div>
        <div className=' font-semibold'>
            <ul>
                <li>{one}</li>
                <li>{two}</li>
                <li>{three}</li>
            </ul>
        </div>
        </section>

      </div>
    </div>
    </div>
  )
}

export default Card
