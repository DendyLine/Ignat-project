import { useState } from 'react';
import { Block1Page } from '../components/Block1Page.tsx';

export const Block1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalBlocks = 3; // Загальна кількість блоків

    const handleArrowClick = (direction: string) => {
        if (direction === 'left') {
            setCurrentIndex(currentIndex === 0 ? totalBlocks - 1 : currentIndex - 1);
        } else {
            setCurrentIndex(currentIndex === totalBlocks - 1 ? 0 : currentIndex + 1);
        }
    };

    return (
        <div className='Block1'>
            {currentIndex === 0 && <Block1Page />}
            {currentIndex === 1 && <Block1Page />}
            {currentIndex === 2 && <Block1Page />}

            <div className="arrows">
                <img src='../../../public/icons/Arrow%20Left.png' alt='arrowLeft' onClick={() => handleArrowClick('left')} />
                <img src='../../../public/icons/Arrow%20Right.png' alt='arrowRight' onClick={() => handleArrowClick('right')} />
            </div>
            <div className = 'mini-bricks'>
                <div className = {currentIndex === 0? 'whiteBrick' : 'brick'}></div>
                <div className = {currentIndex === 1? 'whiteBrick' : 'brick'}></div>
                <div className = {currentIndex === 2? 'whiteBrick' : 'brick'}></div>
            </div>
        </div>
    );
};