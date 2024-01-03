import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react'
import * as Yup from 'yup'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {

    const initialValues = { title: "", price: 50 }

    const schema = Yup.object({
        title: Yup.string().required("Ürün Adı Zorunlu."),
        price: Yup.number().required("Ürün fiyatı zorunlu")
    })
    return (
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=> {
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name='title' placeholder='Ürün Adi'/>
                    <KodlamaIoTextInput name='price' placeholder='Ürün Fiyati'/>
                    
                    <Button color='green' type='submit'>Ekle</Button>
                </Form>
            </Formik>
    )
}
