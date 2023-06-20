import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

// Requirements for the project
// - Data array in a separate .js file
//     Title, description, price, cover image, rating, review count, location, open spots
// - Use .map() and props
// - Style & polished
// - Mobile designed

function App() {
  return (
    <div className='main--app'>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
