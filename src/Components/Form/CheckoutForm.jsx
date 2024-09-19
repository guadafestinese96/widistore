//https://formspree.io/f/xvgpjpkb

import { Formik, Form, Field, ErrorMessage } from "formik";
import './FormApp.css'
import Swal from 'sweetalert2'
import { useContext } from "react";
import CartContext from "../Cart/CartContext";

import ProductsToBuy from "./ProductsToBuy";

export default function CheckoutForm() {
    const { cart } = useContext(CartContext);
    console.log(cart)
   

    return (
        <div className="formContainer">
            <div className="productosElegidos">
                <ProductsToBuy/>
            </div>
            <Formik
                initialValues={{
                    message: "Productos elegidos"
                }}
                validate={
                    values => {
                        let errors = {};
                        if (!values.name) {
                            errors.name = "Este campo es requerido";
                        } else if (!values.celular) {
                            errors.celular = "Este campo es requerido";
                        } else if (!values.email) {
                            errors.email = "Este campo es requerido";
                        } else if (!values.emailConfirm) {
                            errors.emailConfirm = "Este campo es requerido";
                        }else if (!values.message) {
                            errors.message = "Este campo es requerido";
                        }
                        return errors;
                    }}
                onSubmit={
                    (values, { setSubmitting }) => {
                        let url = "https://formspree.io/f/meojdpqz"
                        let formData = new FormData();
                        formData.append("name", values.name)
                        formData.append("name", values.celular)
                        formData.append("email", values.email)
                        formData.append("emailConfirm", values.emailConfirm)
                        formData.append("message", values.message)

                        fetch(url, {
                            method: "POST",
                            body: formData,
                            headers: {
                                'Accept': 'application/json'
                            }
                        }).then(response => {
                            setSubmitting(false)
                            Swal.fire("Gracias por contactarnos!")
                            values.name = ""
                            values.celular = ""
                            values.email = ""
                            values.emailConfirm = ""
                            values.message = ""

                        })


                    }
                }
            >
                {
                    ({ isSubmitting, values }) => (

                        <Form className="formBox">

                            <div className="formData">

                                <div className="formMsj">
                                    <div className="formUp">
                                        <div>
                                            <label className="labelsForm" htmlFor="name">Nombre</label>
                                            <Field type="text" name="name" className="fields"></Field>
                                            <ErrorMessage className="labelsForm formError" name="name" component="p" />
                                        </div>
                                        <div>
                                            <label className="labelsForm" htmlFor="celular">Celular</label>
                                            <Field type="number" name="celular" className="fields"></Field>
                                            <ErrorMessage className="labelsForm formError" name="celular" component="p" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="labelsForm" htmlFor="email">Email</label>
                                        <Field type="email" name="email" className="fields emailField"></Field>
                                        <ErrorMessage className="labelsForm formError" name="email" component="p" />
                                    </div>
                                    <div>
                                        <label className="labelsForm" htmlFor="emailConfirm">Email</label>
                                        <Field type="email" name="email" className="fields emailField"></Field>
                                        <ErrorMessage className="labelsForm formError" name="emailConfirm" component="p" />
                                    </div>

                                    <div>
                                        <label className="labelsForm" htmlFor="message">Mensaje</label>
                                        <Field className="fields textareaField" component="textarea" value={values.message} name="message"></Field>
                                        <ErrorMessage className="labelsForm formError" name="message" component="p" />
                                    </div>
                                    <div className="divButton">
                                        <button type="submit" disabled={isSubmitting} className="buttonForm">{isSubmitting ? "Enviando..." : "Enviar Mensaje"}</button>
                                    </div>
                                </div>


                            </div>


                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}