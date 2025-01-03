import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

function Card({data, referance}) {
    return (
        <motion.div drag dragConstraints={referance} whileDrag={{scale:1.2}} dragElastic={.1} className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-5 py-10 overflow-hidden">
            <FaRegFileAlt/>
            <p className="text-sm mt-10 leading-tight ">{data.desc}</p>
            <div className= "footer absolute bottom-0 w-full left-0 ">
                <div className="flex items-center justify-between mb-3 h-10 py-3 px-8">
                    <h5>{data.filesize}</h5>
                    <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose/> : <LuDownload size="0.8em" color='#fff'/>}
                    </span> 
                </div>
                {
                    data.tag.isOpen && <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center rounded-lg`}>
                    <h3 className='text-sm font-semibold'>{data.tag.text}</h3>
                    </div>
                }
                
            </div>
        </motion.div>
    )
}

export default Card
