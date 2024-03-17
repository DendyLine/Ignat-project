export const Block1Page  = () => {
    const textH1 = 'Швидше.\nВище.\nСильніше.'
    return(
        <div className = 'Block1Page'>
            <div className = 'left'>
                <div className = 'left-content'>
                    <div><h1>{textH1}</h1></div>
                    <div className = 'nike'>Разом із Nike</div>
                </div>
            </div>
            <div className = 'right'>
                <div className="right-content">
                    <div className = 'discounts'>Знижки до 40%</div>
                    <div className = 'week'>Залишився лише тиждень</div>
                </div>
            </div>
        </div>
    )
}