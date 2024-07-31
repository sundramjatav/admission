import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
const items = [
    {
        icon: "face",
        copy: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img:"https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, {
        icon: "pets",
        copy: '02. Sed do eiusmod tempor incididunt ut labore.',
        img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        icon: "stars",
        copy: '03. Consectetur adipiscing elit.',
        img:"https://images.unsplash.com/photo-1649433658557-54cf58577c68?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        icon: "invert_colors",
        copy: '04. Ut enim ad minim veniam, quis nostrud exercitation.',
        img:"https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        icon: "psychology",
        copy: '05. Llamco nisi ut aliquip ex ea commodo consequat.',
        img:"https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        icon: "brightness_7",
        copy: '06. Misi ut aliquip ex ea commodo consequat.',
        img:"https://images.unsplash.com/photo-1656221009909-4f202547cd94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const Card = (props) => {
    return (
        <li className="border card">
            <div className='flex gap-5 flex-col md:flex-row items-center'>
                <div className='w-20 h-20 rounded-md bg-blue-100 overflow-hidden'>
                    <img src={props.img} className="w-full h-full bg-cover" alt="" />
                </div>
                <div className=''>
                    <p className='text-xl font-bold'>[Client Name]</p>
                    <p className='text-xl'>
                        MBBS Student</p>
                       
                </div>
            </div>

            <div>
                <p className='md:text-sm text-xs mt-5'>Securing admission to my dream medical college seemed daunting until I found [Company Name]. Their expert guidance and support were instrumental in my success</p>
            </div>
        </li>
    );
};

const Carousel = () => {
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(items);

    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems]);

    const handleAnimationEnd = () => {
        if (moveClass === 'prev') {
            shiftNext([...carouselItems]);
        } else if (moveClass === 'next') {
            shiftPrev([...carouselItems]);
        }
        setMoveClass('');
    };

    const shiftPrev = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    };

    const shiftNext = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    };

    const handleClick = (direction) => {
        setMoveClass(direction);
    };

    return (
        <div className="carouselwrapper module-wrapper">
            <div className="ui">
                <button onClick={() => handleClick('next')} className="prev">
                    <span className="material-icons">chevron_left</span>
                </button>
                <button onClick={() => handleClick('prev')} className="next ">
                    <span className="material-icons">chevron_right</span>
                </button>
            </div>
            <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`} >
                {carouselItems.map((t, index) => (
                    <Card key={t.copy + index} icon={t.icon}  copy={t.copy} img={t.img} />
                ))}
            </ul>
        </div>
    );
};

export default Carousel;
