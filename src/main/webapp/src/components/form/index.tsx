import React from 'react';
import {Field, Formik, Form as FormikForm} from 'formik';
import * as Yup from 'yup';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {Div, ErrorDiv} from "../../pages/styles/home-styles";
import {FormDTO} from "../../types";

type ResultFormProps = {
    onSubmit: (formDTO: FormDTO) => void;
}

const INITIAL_VALUES = {
    name: '',
    lastName: '',
    gia9x5: 0,
    gia9x4: 0,
    gia9x3: 0,
    gia9x2: 0,
    gia9x1: 0,
}

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное поле'),
    lastName: Yup.string()
        .required('Обязательное поле'),
    gia9x5: Yup.number()
        .typeError('Должен быть номер'),
    gia9x4: Yup.number(),
    gia9x3: Yup.number(),
    gia9x2: Yup.number(),
    gia9x1: Yup.number(),
});

export const ResultForm: React.FC<ResultFormProps> = ( { onSubmit }) => (
    <>
        <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={FormSchema}
            onSubmit={values => {

                onSubmit({
                    name: values.name,
                    lastName: values.lastName
                });
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur, handleSubmit,
              }) => (
                <FormikForm>
                    <Form.Group controlId="formName">
                        <Form.Label>Имя :</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Имя"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={touched.name && errors.name ? "error" : ""}
                        />
                        {touched.name && errors.name ? (
                            <ErrorDiv>{errors.name}</ErrorDiv>
                        ) : null}
                    </Form.Group>

                    <Form.Group controlId="formLastName">
                        <Form.Label>Фамилия :</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Фамилия"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            className={touched.lastName && errors.lastName ? "error" : ""}
                        />
                        {touched.lastName && errors.lastName ? (
                            <ErrorDiv>{errors.lastName}</ErrorDiv>
                        ) : null}
                    </Form.Group>

                    <Div className="row">
                        <Div className="col-md-6">
                            Результаты ГИА - 9
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценка "5"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x5"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia9x5}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценка "4"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x4"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia9x4}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценка "3"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x3"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia9x3}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценка "2"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x2"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia9x2}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценка "1"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x1"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia9x1}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Button type='submit'>
                        Submit
                    </Button>
                </FormikForm>
            )}
        </Formik>
    </>
)
