import logo from './logo.svg';
import ProductList from './components/product/ProductList'
import Container from './components/UI/Container/';
import mockData from './data/mockData.json';

import './App.css';

function App() {
  return (
<Container>
  <ProductList items={mockData} />
    </Container>
  );
}

export default App;
