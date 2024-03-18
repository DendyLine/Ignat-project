interface IItemCardProps {
    title: string,
    section: string,
    params: string,
    price: string,
    imageUrl: string,
}

export const ItemCard = (props: IItemCardProps) => {
    return (
        <div className='ItemCard'>
            <div className='image'
                 style={{background: `url(${props.imageUrl}) center no-repeat`, backgroundSize: "cover"}}>
                <div className='heart'><img src='../assets/icons/Vector.svg' alt='heart'/></div>
            </div>
            <div className='title'><h4>{props.title}</h4></div>
            <div className='description'>
                <p>{props.section}</p>
                <p>{props.params}</p></div>
            <div className='price'>{props.price}</div>
        </div>
    )
}