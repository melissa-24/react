import React, {useState, useEffect} from 'react';

const blankState = {
    name: '',
    price: '',
    description: '',
    category: '',
    location: ''
}

export default function ItemEntry () {
    const [productState, setProductState] = useState({...blankState})
    console.log(productState)
    return (
        <section>
            <h2>Add Product</h2>
            <p>Please enter the following information.</p>
            <form>
                <label>Product Name:
                    <input type='text' />
                </label>
                <br />
                <label>Category:
                    <select>
                        <option>-- select a category --</option>
                        <option>Animal Product</option>
                        <option>Cereals</option>
                        <option>Beans</option>
                    </select>
                </label>
                <br />
                <label>Price:
                    <input type='text' /> USD
                </label>
                <br />
                <label>Description:
                    <textarea />
                </label>
                <br />
                <button>Add This Item</button>
            </form>
        </section>
    )
}