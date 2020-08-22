import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

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
    name: yup.string().required().label('Name').min(2, 'Must be at least 2 characters'),
    price: yup.number().required().label('Price').min(0.99, 'must be at least 0.99 USD'),
    description: yup.string().required().label('Description').min(2, 'must be at least 2 characters'),
    category: yup.string().oneOf(['animal product', 'cereal', 'bean']).required(),
    location: yup.string().min(3).max(3)
    
});

    return (
        <section>
            <div>
                <h1>Formik Form!</h1>
                <Formik 
                initialValues={{...blankState}}
                validationSchema={ formSchema }
                onSubmit = { values => console.log('formik onSubmit values', values)}>
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor='name'>Product Name: </label>
                            <Field id='name' name='name' type='text' placeholder='Rosecoco Beans'/>
                            {errors.name && touched.name ? (
                                <p style={{color:'red',fontWeight: 'bold'}}>
                                    {errors.name}
                                </p>
                            ) : null }
                            <label htmlFor='price'>Price: </label>
                            <Field id='price' name='price' type='number' step='0.05' placeholder='10.00'/>
                            <label htmlFor='category'>Category: </label>
                            <Field as='select' id='category' name='category'>
                                <option value=''>-- choose a category --</option>
                                <option value='animal'>Animal Product</option>
                                <option value='bean'>Bean</option>
                                <option value='cereal'>Cereal</option>
                            </Field>
                            <label htmlFor='description'>Description: </label>
                            <Field id='description' name='description' as='textarea' placeholder='describe this item in 1-2 sentences'/>
                            <label htmlFor='location'>Location: </label>
                            <Field  id='location' name='location' type='number' placeholder='KEN'/>
                        </Form>
                    )}
                </Formik>
            </div>
            <h2>Add Product</h2>
            <p>Please enter the following information.</p>
{/* FORM */}
            <form >
{/* NAME INPUT*/}
                <label htmlFor='name'>Product Name: </label>
                <input id='name' name='name' type='text' placeholder='Rosecoco Beans' value={ formState.name } /> 
                <br />
{/* CATEGORY INPUT*/}
                <label htmlFor='category'>Category: </label>
                <select id='category' name='category' value={ formState.category }  >
                    <option value=''>-- choose a category --</option>
                    <option value='animal product'>Animal Product</option>
                    <option value='cereal'>Cereal</option>
                    <option value='bean'>Bean</option>
                </select>
                <br />
{/* PRICE INPUT*/}
                <label htmlFor='price'>Price (USD): </label>
                    <input id='price' name='price' type='number' placeholder='10.00' step='0.05' value={ formState.price } min='0.01'  />
                <br />
{/* DESCRIPTION TEXTAREA*/}
                <label htmlFor='description'>Description: </label>
                <textarea id='description' name='description' value={ formState.description } placeholder='Please describe the product in 1-2 sentences.' />   
                <br />
{/* SUBMIT BUTTON*/}
                <button disabled={ btnDisabled } type='submit'>Add This Item</button>
            </form>
        </section>
    )
}