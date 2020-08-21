import React, {useState, useEffect} from 'react';
import * as yup from 'yup';

//blank object for item data
const blankState = {
    name: '',
    price: '',
    description: '',
    category: '',
    location: ''
};

export default function ItemEntry () {
//form state
    const [formState, setFormState] = useState({...blankState});
//button disabled state
    const [btnDisabled, setBtnDisabled] = useState(false);
    //const [productState, setProductState] = useState({});

//change handler
    const handleChanges = (event) => {
        event.persist();
        setFormState({...formState, [event.target.name] : event.target.value});
        console.log('formState val', formState);
    };

//submit
    const submitForm = (event) => {
        event.preventDefault();
        //test to see what data will be sent 🔽
        console.log('data captured!', formState);
    };

//yup form schema
const formSchema = yup.object().shape({
    name: yup.string().required('Please enter your name!'),
    
});

    return (
        <section>
            <h2>Add Product</h2>
            <p>Please enter the following information.</p>
{/* FORM */}
            <form onSubmit= { submitForm }>
{/* NAME INPUT*/}
                <label htmlFor='name'>Product Name: </label>
                <input id='name' name='name' type='text' placeholder='Rosecoco Beans' value={ formState.name } onChange={ handleChanges }/> 
                <br />
{/* CATEGORY INPUT*/}
                <label htmlFor='category'>Category: </label>
                <select id='category' name='category' value={ formState.category } onChange={ handleChanges } >
                    <option value=''>-- choose a category --</option>
                    <option value='animal product'>Animal Product</option>
                    <option value='cereal'>Cereal</option>
                    <option value='bean'>Bean</option>
                </select>
                <br />
{/* PRICE INPUT*/}
                <label htmlFor='price'>Price (USD): </label>
                    <input id='price' name='price' type='number' placeholder='10.00' step='0.05' value={ formState.price } min='0.01' onChange={ handleChanges } />
                <br />
{/* DESCRIPTION TEXTAREA*/}
                <label htmlFor='description'>Description: </label>
                <textarea id='description' name='description' value={ formState.description } placeholder='Please describe the product in 1-2 sentences.' onChange={ handleChanges }/>   
                <br />
{/* SUBMIT BUTTON*/}
                <button disabled={ btnDisabled } type='submit'>Add This Item</button>
            </form>
        </section>
    )
}