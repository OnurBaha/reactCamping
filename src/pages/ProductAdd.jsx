import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from 'yup'

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
                    <FormField >
                        <Field name='title' placeholder='Ürün Adi'></Field>
                        <ErrorMessage name='title' render={error=>
                            <Label pointing basic color='red' content={error}></Label>
                        }></ErrorMessage>
                    </FormField>
                    <FormField >
                       <Field name='price' placeholder='Ürün Fiyati'></Field>
                       <ErrorMessage name='price' render={error=>
                            <Label pointing basic color='red' content={error}></Label>
                        }></ErrorMessage>
                    </FormField>
                    <Button color='green' type='submit'>Ekle</Button>
                </Form>
            </Formik>
    )
}
