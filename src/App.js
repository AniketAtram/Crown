import Categories from './components/CategoriesComponent/Categories.component';
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
    <Categories categoriesData={data} />
  );
}

export default App;
