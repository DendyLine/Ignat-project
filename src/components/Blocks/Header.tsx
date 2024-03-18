export const Header = () => {
    return (
        <div className='Header'>
            <div className='middle'>
                <div className='left'>
                    <div><a href='/numb'>098 900 09 09</a></div>
                    <div><a href='/help'>Допомога</a></div>
                </div>
                <div className='right'><a href='/logIn'>Увійти</a> / <a href='/signUp'>Зареєструватися</a></div>
            </div>
            <div className='bottom'>
                <div className='logo'><img src='../../assets/icons/Logo.png' alt='logo'/></div>
                <div className='menu'><a href='/news'>НОВИНКИ</a><a href='/men'>ЧОЛОВІКИ</a><a href='/women'>ЖІНКИ</a><a
                    href='/acsessories'>АКСЕСУАРИ</a><a href='/discounts'>АКЦІЇ</a></div>
                <div className='searchbar'>
                    <input type="text"/>
                    <img className='ico' src='../../assets/icons/search.svg' alt='search'/>
                    <a href='/chosen'><img src='../../assets/icons/heart.svg' alt="heart"/></a>
                    <a href='/bag'><img src='../../assets/icons/bag.svg' alt='bag'/></a>
                </div>
            </div>
        </div>
    )
}