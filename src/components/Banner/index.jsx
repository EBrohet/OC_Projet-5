import '../../styles/Banner.scss'

function Banner({page}) {
    const home = page === 'home';

    return home ? (
        <div className='global banner'>
            <h1 className='titre'>
                Chez vous, partout et ailleurs
            </h1>
        </div>
    ) : (
        <div className='global none'></div>
    )
}

export default Banner