import React from 'react';

export default function ItemEntry () {
    const item = []
    return (
        <section>
            <h2>Add Product</h2>
            <p>Please enter the following information.</p>
            <form>
                <label>Product Name:
                    <input type='text' />
                </label>
                <br />
                <label>Product Type:
                    <select>
                        <option>type 1</option>
                        <option>type 2</option>
                        <option>type 3</option>
                    </select>
                </label>
                <br />
                <label> Product Price:
                    <input type='text' /> USD
                </label>
                <br />
                <button>Add Item</button>
            </form>
        </section>
    )
}