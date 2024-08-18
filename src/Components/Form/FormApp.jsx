import { Formik, Form, Field, ErrorMessage } from "formik";
import './FormApp.css'
import Swal from 'sweetalert2'
import userImg from "../../assets/user.png"

export default function FormApp() {
    return (
        <div className="formContainer">
            <Formik
                initialValues={{ message: "Hola me contacto para consultar por " }}
                validate={
                    values => {
                        let errors = {};
                        if (!values.name) {
                            errors.name = "Este campo es requerido";
                        } else if (!values.celular) {
                            errors.celular = "Este campo es requerido";
                        } else if (!values.email) {
                            errors.email = "Este campo es requerido";
                        } else if (!values.message) {
                            errors.message = "Este campo es requerido";
                        }
                        return errors;
                    }}
                onSubmit={
                    (values, { setSubmitting }) => {
                        let url = "https://formspree.io/f/mwpekgjy"
                        let formData = new FormData();
                        formData.append("name", values.name)
                        formData.append("name", values.celular)
                        formData.append("email", values.email)
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