import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import { useFormik, withFormik, ErrorMessage } from 'formik';
import axios from 'axios';
import './ItemEntry.css';

//blank object for item data
const blankState = {
    name: '',
    price: '',
    description: '',
    category: '',
    location: ''
};

//yup schema
    const formSchema = yup.object({
        name: yup.string().required().label('Name').min(2, 'Must be at least 2 characters.'),
        price: yup.number().required().label('Price').min(0.99, 'Price must be at least 0.99 USD'),
        description: yup.string().required().label('Description').min(2, 'must be at least 2 characters'),
        category: yup.string().oneOf(['animal product', 'cereal', 'bean']).required(),
        location: yup.string().min(3, 'Must be at lest 3 characters.').required()
    
});

const ItemEntry = () => {
//form state
    const formik = useFormik({        
        initialValues: {...blankState},
        validationSchema: yup.object({
            name: yup.string().required().label('Name').min(2, 'Must be at least 2 characters.'),
            price: yup.number().required().label('Price').min(0.99, 'Price must be at least 0.99 USD'),
            description: yup.string().required().label('Description').min(2, 'must be at least 2 characters'),
            category: yup.string().oneOf(['animal product', 'cereal', 'bean']).required(),
            location: yup.string().min(3, 'Must be at lest 3 characters.').required()       
        }),
        onSubmit: values => {
            console.log('values submitted:', values);
            axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log('🌟 Data was posted!', res.data)
            })
            .catch(err => {
                console.log('⛔ An error occurred!', err)
            });
        }
    });

    return (
        <section>
            <h2>Add Product</h2>
            <p>Please enter the following information.</p>

                    <form onSubmit = { formik.handleSubmit }>
                        <label htmlFor='name'>Product Name: </label>              
                        <input id='name' name='name' type='text' placeholder='Rosecoco Beans' onChange={ formik.handleChange } value={ formik.values.name } onBlur= {formik.handleBlur}/>
                        {formik.errors.name && formik.errors.name ? <span className='errorMsg'>{formik.errors.name}</span> : null}
                        

                        <br />

                        <label htmlFor='price'>Price: </label>
                        <input id='price' name='price' type='number' step='0.05' placeholder='10.00' onChange={ formik.handleChange } value={ formik.values.price } />
                        
                        <br />

                        <label htmlFor='category'>Category: </label>
                        <select id='category' name='category' onChange={ formik.handleChange } value={ formik.values.category }>
                            <option value=''>-- choose a category --</option>
                            <option value='animal product'>Animal Product</option>
                            <option value='bean'>Bean</option>
                            <option value='cereal'>Cereal</option>
                        </select>

                        <br />

                        <label htmlFor='description'>Description: </label>
                        <textarea id='description' name='description' as='textarea' placeholder='describe this item in 1-2 sentences' onChange={ formik.handleChange } value={ formik.values.description }/>

                        <br />

                        <label htmlFor='location'>Location: </label>
                        <input id='location' name='location' type='text' placeholder='KEN' onChange={ formik.handleChange } value={ formik.values.location }/>

                        <br />

                        <button type='submit'>Add Product</button>
                    </form>    
        </section>
    )
}

export default ItemEntry;