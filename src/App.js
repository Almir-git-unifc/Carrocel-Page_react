import './App.css';
import { useEffect, useState, useRef } from 'react';

function App() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);


  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }
/**  Está com erro de usabilidade. Ao chegar ao extremo da direita não retorna automaticamente ao inicio, e nem dá aviso ao usuário  */

  const handleRightClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }
/**  Está com erro de usabilidade. Ao chegar ao extremo da esquerda não retorna automaticamente ao inicio, e nem dá aviso ao usuário  */

  if (!data || !data.length) return null;

  return (

    <div className="container">
      <div className="logo">
        <img src="/static/images/super-shoes.png" alt="Super Shoes Logo" />
      </div>

      <div className="carousel" ref={carousel}>

        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (

            <div className="item" key={id}>

              <div className="image">
                <img src={image} alt={name} />
              </div>

              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">US$ {oldPrice} </span>
                <span className="price">US$ {price} </span>
              </div>


            </div>
          );
        })}
      </div>

      <div className="buttons">
        <button onClick={ handleLeftClick } >
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={ handleRightClick } >
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>

    </div>
  );
}

export default App;
