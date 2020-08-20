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