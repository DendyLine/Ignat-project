interface ICommentCardProps {
    name: string,
    comment: string,
}

export const CommentCard = (props: ICommentCardProps) => {
    return (
        <div className='CommentCard'>
            <div className='user'>
                <div className='ava'></div>
                <div className='nickname'>{props.name} <img className='mark' src='/icons/Group3.svg'
                                                            alt='stars'/></div>
            </div>
            <p>{props.comment}</p>
        </div>
    )
}