import React, { useState, useEffect } from 'react';
import products from '../../database/db';

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState(null);
    const [sortedField, setSortedField] = useState(null);
    const [filteredProduct, setFilteredProduct] = useState(null);

    useEffect(() => {
        addProductsToState();
    }, [])


    const addProductsToState = () => {
        setAllProducts(products);
    }

    let sortedProducts = allProducts ? [...allProducts] : null;

    if(props.newItem != null && allProducts) {
        allProducts.push(props.newItem);
    }

    if (sortedField != null ) {
        sortedProducts.sort((a,b) => {
            if (a[sortedField] < b[sortedField]) {
                console.log("returned -1")
                return -1;
            }
            if (a[sortedField] < b[sortedField]) {
                console.log("returned 1")
                return 1;
            }
            console.log("returned 0" )
            return 0;
        });

        console.log("Sorted product");

        console.log(sortedProducts)
    }

    const showMeats = () => {
        setFilteredProduct(allProducts.filter(product => product.category === 'meat'))
    }

    const showGreens = () => {
        setFilteredProduct(allProducts.filter(product => product.category === 'greens'))
    }

    const showFish = () => {
        setFilteredProduct(allProducts.filter(product => product.category === 'fish'))
    }

    const getNearestVal = (item) => {
        //So this is using hardcoded numbers 
        //which most likely isn't the correct way to do things
        //if you click on the first item though you will get one result 😅
        let sixItems = allProducts.filter(product => product.category === item.category && product.price <= item.price + 50 && product.price >= item.price + 50)
        console.log(sixItems);
        setFilteredProduct(sixItems)
    }


    let tableResult = null

    if (filteredProduct != null) {
       tableResult = filteredProduct.map(product => (
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
            </tr>
        )) 
    } else if (allProducts != null ) {
       tableResult = allProducts.map(product => (
            <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td onClick={() => getNearestVal(product)}>{product.price}</td>
            </tr>
        ))
    }

    return (
        <>
            <button onClick={() => showMeats()}>Filter meat</button>
            <button onClick={() => showGreens()}>Filter greens</button>
            <button onClick={() => showFish()}>Filter fish</button>
            <button onClick={() => setFilteredProduct(null)}>Remove Filter</button>
            <table>
                <caption>Products</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th><button type="button" onClick={() => setSortedField('category')}>Category</button></th>
                        <th><button type="button" onClick={() => setSortedField('price')}>Price</button></th>
                    </tr>
                </thead>
                <tbody>
                    {tableResult}
                </tbody>
            </table>
        </>
    );
};

export default ProductList;