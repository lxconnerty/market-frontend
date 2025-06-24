import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Свежие яблоки', price: 120 },
  { id: 2, name: 'Молоко деревенское', price: 80 },
  { id: 3, name: 'Хлеб домашний', price: 60 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleOrder = () => {
    alert(`Заказ оформлен: ${cart.map(item => item.name).join(', ')}`);
    setCart([]);
  };

  return (
    <div style={{ fontFamily: 'Arial', margin: '0 auto', width: '80%', padding: '20px' }}>
      <h1>Локальный рынок продуктов</h1>
      <h2>Каталог товаров</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            {product.name} - {product.price}₽
            <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>Добавить в корзину</button>
          </li>
        ))}
      </ul>

      <h2>Корзина</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price}₽</li>
          ))}
        </ul>
      ) : (
        <p>Корзина пуста</p>
      )}

      {cart.length > 0 && (
        <button onClick={handleOrder}>Оформить заказ</button>
      )}
    </div>
  );
};

export default App;
