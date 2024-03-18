export const Footer = () => {
    return (
        <div className='Footer'>
            <div className='whiteBlock'>
                <div className='menu'>
                    <p className='title'>Контакт - центр</p>
                    <p>098 900 09 09 </p>
                    <p>Пн - Пт 09:00 - 21:00</p>
                    <p>Пн - Пт 09:00 - 21:00</p>
                </div>
                <div className='menu'>
                    <p className='title'>Покупцям</p>
                    <p>Оплата і доставка</p>
                    <p>Повернення</p>
                    <p>Повернення</p>
                </div>
                <div className='menu'>
                    <p className='title'>Особистий кабінет</p>
                    <p>Мої дані</p>
                    <p>Історія замовлень</p>
                    <p>Улюблені</p>
                    <p>Розсилки</p>
                </div>
                <div className='menu'>
                    <p className='title'>Про нас</p>
                    <p>Про компанію</p>
                    <p>Новини</p>
                    <p>Стати партнером</p>
                    <p>Угода користувача</p>
                </div>
            </div>
            <div className='BlackBlock'>
                <div className='menu'><a href='/news'>новинки</a><a href='/men'>чоловіки</a><a href='/women'>жінки</a><a
                    href='/acsessories'>аксесуари</a><a href='/discounts'>акції</a></div>
                <img src='/icons/rights.svg' alt='rights reserved'/>
            </div>
        </div>
    )
}