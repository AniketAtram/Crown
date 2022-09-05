import './App.css';

function App() {

  const data = [
    {
      id: 1,
      title: "Hats"
    },
    {
      id: 2,
      title: "Jackets"
    },
    {
      id: 3,
      title: "Sneakers"
    },
    {
      id: 4,
      title: "Mens"
    },
    {
      id: 5,
      title: "Womens"
    },
  ];

  return (
    <div className="categories-container">
      {
        data.map((item) => (
          <div className='category-container' key={item.id}>
            {/* {image} */}
            <div className='category-body-conatiner'>
              <h2>{item.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
