import {useState} from 'react';
import {CommentCard} from "../CommentCard.tsx";

export const Block5 = () => {
    const feedback = [
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
        {
            name: 'Жора Ремінгтон',
            comment: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...'
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 4;
    const totalComments = feedback.length;
    const totalPages = Math.ceil(totalComments / commentsPerPage);

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = feedback.slice(indexOfFirstComment, indexOfLastComment);

    const paginate = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className='Block5'>
            <h5>Відгуки наших клієнтів</h5>
            <div className='arrows'>
                <img src='/icons/ArrowLeft.svg' alt='arrowRight'
                     onClick={() => paginate(currentPage - 1)}
                     style={{opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? '' : 'pointer'}}/>
                <img src='/icons/ArrowRight.svg' alt='arrowLeft' onClick={() => paginate(currentPage + 1)}
                     style={{
                         opacity: indexOfLastComment >= totalComments ? 0.5 : 1,
                         cursor: indexOfLastComment >= totalComments ? '' : 'pointer'
                     }}/>
            </div>
            <div
                className='counter'>{currentPage.toString().padStart(2, '0')}/{totalPages.toString().padStart(2, '0')}</div>
            {currentComments.map((comment, index) => (
                <CommentCard key={index} name={comment.name} comment={comment.comment}/>
            ))}
        </div>
    );
};

