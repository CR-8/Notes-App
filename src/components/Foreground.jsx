import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {


    const ref = useRef(null);

    const data = [{
        icon: 'FaRegFileAlt',
        desc: 'This is Amazing.',
        filesize: '0.9mb',
        close: true,
        tag: {
            isOpen: false,
            text: 'Download Now',
            tagColor:"green",
        },
    },
    {
        icon: 'FaRegFileAlt',
        desc: 'This is Amazing.',
        filesize: '0.9mb',
        close: true,
        tag: {
            isOpen: true,
            text: 'Open',
            tagColor:"blue",
        },
    },
    {
        icon: 'FaRegFileAlt',
        desc: 'This is Amazing.',
        filesize: '0.9mb',
        close: true,
        tag: {
            isOpen: true,
            text: 'Download Now',
            tagColor:"green",
        },
    }];

    

    return (
        <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] px-10 flex gap-5 flex-wrap">
        {data.map((item) => (
            <Card data={item} referance={ref}/>
        ))}
        </div>
    );
}

export default Foreground
