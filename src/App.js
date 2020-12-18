import ProductList from './components/ProductList/ProductList'
import Form from './components/Form/Form'
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  //Added new product in an attempt to pass the form data to ProductList 
  //however as mentioned in the form file I would need to have the form as a child of ProductList
  //and use the addToDatabase function inside the ProductList Component

  let newProduct = null
  const addToDatabase = (event, name,category,price) => {
    event.preventDefault()
    let idVal = (Date.now() + '-' + Math.random()).toString();
    let nameVal = name
    let categoryVal = category;
    let priceVal = price;

    // let toSave = [...products];

   return newProduct = {id: idVal, name: nameVal, category: categoryVal, price: priceVal}; 
}
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/add">
          <Form addToDB={addToDatabase}/>
        </Route>
        <Route path="/">
          <ProductList newItem={newProduct}/>  
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
