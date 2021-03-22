import logo from './logo.svg';
import ProductList from './components/product/ProductList'
import Container from './components/UI/Container/';
import mockData from './data/mockData.json';
import ComponentWithState from './components/UI/ComponentWithState';
import ApartmentPage from './pages/Apartment';
import './App.css';

function App() {
  return (
<Container>
<ApartmentPage />
  <ComponentWithState />
  <ProductList items={mockData} />
    </Container>
  );
}

export default App;
