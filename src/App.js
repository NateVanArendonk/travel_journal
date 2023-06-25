import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import Data from "./data"


// Requirements for the project
// - Data array in a separate .js file
//     Title, description, price, cover image, rating, review count, location, open spots
// - Use .map() and props
// - Style & polished
// - Mobile designed

function App() {
  const cards = Data.map(item => {
      return (
          <Card
              key={item.id}
              item={item}
          />
      )
  })  

  console.log(cards)

  return (
    <div className='main--app'>
      <Navbar />
      {cards}
      <Footer />
    </div>
  );
}

export default App;
