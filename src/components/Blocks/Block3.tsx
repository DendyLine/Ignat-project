import {ItemCard} from "../ItemCard.tsx";
import {useEffect, useState} from "react";
import manInWhiteSlim from "../../assets/pictures/manInWhiteSlim.png"
import femaleFighter from "../../assets/pictures/femaleFighter.png"
import chainMan from "../../assets/pictures/chainMan.jpeg"
export const Block3 = () => {
    const info = [
        {
            title: 'Термобілизна для бодібілдерів',
            section: 'Для чоловіків',
            params: '2 кольори',
            price: '4000 грн',
            imgSrc: manInWhiteSlim
        },
        {
            title: 'Майка для бодібілдерів',
            section: 'Для жінок',
            params: '6 кольорів',
            price: '1100 грн',
            imgSrc: femaleFighter
        },
        {
            title: 'Ланцюжок для бодібілдерів',
            section: 'Аксесуари',
            params: '30 кг.',
            price: '2000 грн',
            imgSrc: chainMan
        },
        {
            title: 'Ланцюжок для бодібілдерів',
            section: 'Аксесуари',
            params: '30 кг.',
            price: '2000 грн',
            imgSrc: chainMan
        },
        {
            title: 'Термобілизна для бодібілдерів',
            section: 'Для чоловіків',
            params: '2 кольори',
            price: '4000 грн',
            imgSrc: manInWhiteSlim
        },
        {
            title: 'Майка для бодібілдерів',
            section: 'Для жінок',
            params: '6 кольорів',
            price: '1100 грн',
            imgSrc: femaleFighter
        },
        {
            title: 'Майка для бодібілдерів',
            section: 'Для жінок',
            params: '6 кольорів',
            price: '1100 грн',
            imgSrc: femaleFighter
        },
        {
            title: 'Ланцюжок для бодібілдерів',
            section: 'Аксесуари',
            params: '30 кг.',
            price: '2000 грн',
            imgSrc: chainMan
        },
        {
            title: 'Термобілизна для бодібілдерів',
            section: 'Для чоловіків',
            params: '2 кольори',
            price: '4000 грн',
            imgSrc: manInWhiteSlim
        },
    ]
    const itemsPerPage = 3; // Кількість елементів, що відображаються на одній сторінці

    const [startIndex, setStartIndex] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const totalItems = info.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(totalPages);
    }, [info.length, itemsPerPage]);

    const handleNextClick = () => {
        if (startIndex + itemsPerPage < info.length) {
            setStartIndex(startIndex + itemsPerPage);
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevClick = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex(startIndex - itemsPerPage);
            setCurrentPage(currentPage - 1);
        }
    };

    const visibleInfo = info.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='Block3'>
            <h3>Найгарячіші товари</h3>
            <div className='arrows'>
                <img
                    src='../../assets/icons/Arrow%202.png'
                    alt='arrowRight'
                    onClick={handlePrevClick}
                    style={{opacity: startIndex === 0 ? 0.5 : 1}}
                />
                <img
                    src='../../assets/icons/Arrow%201.png'
                    alt='arrowLeft'
                    onClick={handleNextClick}
                    style={{opacity: startIndex + itemsPerPage >= info.length ? 0.5 : 1}}
                />
            </div>
            <div
                className='counter'>{currentPage.toString().padStart(2, '0')}/{totalPages.toString().padStart(2, '0')}</div>
            {visibleInfo.map(point => (
                <ItemCard key={point.title} title={point.title} section={point.section} params={point.params}
                          price={point.price} imageUrl={point.imgSrc}/>
            ))}
        </div>
    );
};