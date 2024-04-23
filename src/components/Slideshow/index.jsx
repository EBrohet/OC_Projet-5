import '../../styles/Slideshow.scss'
import arrow from '../../assets/big_arrow.png'
import { useState } from 'react';

function Slideshow({logement}) {
    const totalSlide = logement.pictures.length
    const [count, setCount] = useState(1);
    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCount(count === totalSlide ? 1 : count + 1);
        setCurrent(current === totalSlide - 1 ? 0 : current + 1);
    };

    const prevImage = () => {
        setCount(count === 1 ? totalSlide : count - 1);
        setCurrent(current === 0 ? totalSlide - 1 : current - 1);
    };

    return totalSlide === 1 ? (
        <div className='gallery'>
            {logement.pictures.map((url, index) => (
                <img key={index} className='image' src={url} alt={logement.title} />
            ))}
        </div>
    ) : (
        <div className='gallery'>
            {logement.pictures.map((url, index) => (
                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                    {index === current && (
                        <img className='image' src={url} alt={logement.title} />
                    )}
                </div>
            ))}
            <img src={arrow} alt='suivant' className='arrow next-arrow' onClick={nextImage} />
            <img src={arrow} alt='précédent' className='arrow prev-arrow' onClick={prevImage} />
            <p className='number'>{count}/{totalSlide}</p>
        </div>
    )
}

export default Slideshow