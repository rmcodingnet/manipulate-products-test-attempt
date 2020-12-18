import React from 'react';


const Form = (props) => {

    return (
        //Attempted to rig this together although I know the placement of the props for this now is incorrect
        //This would need to be rewritten and form would need to be a child of ProductList.
            <form 
            onSubmit={() => props.addToDB(
                document.getElementById('name'), 
                document.getElementById('category').value, 
                document.getElementById('price').value
                )}>
                <label for="name">Name</label>
                <input id="name" type="text" />
                <label for="category">Category</label>
                <select id="category" name="category">
                    <option value="meat">Meat</option>
                    <option value="greens">Greens</option>
                    <option value="fish">Fish</option>
                </select>
                <label for="price">Price</label>
                <input id="price" name="price" />
                <input type="submit"/>
            </form> 
    );
};

export default Form;