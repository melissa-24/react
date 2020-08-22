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
    //const [btnDisabled, setBtnDisabled] = useState(false);
    //const [productState, setProductState] = useState({});

//change handler
    const handleChanges = (event) => {
        event.persist();
        setFormState({...formState, [event.target.name] : event.target.value});
   
    };

    //logs CURRENT VALUE OF formState when changed
    useEffect(() => {
        console.log('formState val', formState);
    }, [formState]);

//submit
    const submitForm = (event) => {
        event.preventDefault();
        //test to see what data will be sent 🔽
        console.log('data captured!', formState);
        
    };

//yup form schema
const formSchema = yup.object().shape({
    name: yup.string().required().label('Name').min(2, 'Must be at least 2 characters'),
    price: yup.number().required().label('Price').min(0.99, 'Price must be at least 0.99 USD'),
    description: yup.string().required().label('Description').min(2, 'must be at least 2 characters'),
    category: yup.string().oneOf(['animal product', 'cereal', 'bean']).required(),
    location: yup.string().min(3).max(3).required()
    
});

    return (
        <section>
            <h2>Add Product</h2>
            <p>Please enter the following information.</p>
            <Formik 
            initialValues={{...blankState}}
            validationSchema={ formSchema }
            onSubmit = { submitForm }>
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor='name'>Product Name: </label>
                        <Field id='name' name='name' type='text' placeholder='Rosecoco Beans' value = { formState.name } onChange= { handleChanges }/>
                        {errors.name && touched.name ? (
                            <p style={{color:'red',fontWeight: 'bold'}}>
                                {errors.name}
                            </p>
                        ) : null }
                        <br />
                        <label htmlFor='price'>Price: </label>
                        <Field id='price' name='price' type='number' step='0.05' placeholder='10.00' value = { formState.price } onChange= { handleChanges }/>
                        {errors.price && touched.price ? (
                            <p>{ errors.price }</p>
                        ) : null }
                        <br />
                        <label htmlFor='category'>Category: </label>
                        <Field as='select' id='category' name='category' value = { formState.category } onChange= { handleChanges }>
                            <option value=''>-- choose a category --</option>
                            <option value='animal product'>Animal Product</option>
                            <option value='bean'>Bean</option>
                            <option value='cereal'>Cereal</option>
                        </Field>
                        {errors.category && touched.category ? (
                            <p>{ errors.category }</p>
                        ) : null}
                        <br />
                        <label htmlFor='description'>Description: </label>
                        <Field id='description' name='description' as='textarea' placeholder='describe this item in 1-2 sentences' value = { formState.description } onChange= { handleChanges }/>
                        {errors.description && touched.description ? (
                            <p>{ errors.description }</p>
                        ) : null}
                        <br />
                        <label htmlFor='location'>Location: </label>
                        <Field  id='location' name='location' type='text' placeholder='KEN' value = { formState.location } onChange= { handleChanges }/>
                        {errors.location && touched.location ? (
                            <p>{ errors.location }</p>
                        ) : null}
                        <br />
                        <button type='submit'>Add Product</button>
                    </Form>
                )}
            </Formik>       
        </section>
    )
}