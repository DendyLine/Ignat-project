import {useState} from 'react';
import {Block1Page} from '../Block1Page.tsx';

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

    const handleBrickClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className='Block1'>
            {currentIndex === 0 && <Block1Page/>}
            {currentIndex === 1 && <Block1Page/>}
            {currentIndex === 2 && <Block1Page/>}

            <div className="arrows">
                <img src='../../assets/icons/Arrow%20Left.png' alt='arrowLeft'
                     onClick={() => handleArrowClick('left')}/>
                <img src='../../assets/icons/Arrow%20Right.png' alt='arrowRight'
                     onClick={() => handleArrowClick('right')}/>
            </div>
            <div className='mini-bricks'>
                <div className={currentIndex === 0 ? 'whiteBrick' : 'brick'} onClick={() => handleBrickClick(0)}></div>
                <div className={currentIndex === 1 ? 'whiteBrick' : 'brick'} onClick={() => handleBrickClick(1)}></div>
                <div className={currentIndex === 2 ? 'whiteBrick' : 'brick'} onClick={() => handleBrickClick(2)}></div>
            </div>
        </div>
    );
};