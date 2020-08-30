import React from 'react';
import {Field, Formik, Form as FormikForm} from 'formik';
import * as Yup from 'yup';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {Div, ErrorDiv} from "../../pages/styles/home-styles";

const INITIAL_VALUES = {
    name: '',
    lastName: '',
    gia9x5: 0,
    gia9x4: 0,
    gia9x3: 0,
    gia9x2: 0,
    gia9x1: 0,

    gia11x5: 0,
    gia11x4: 0,
    gia11x3: 0,
    gia11x2: 0,
    gia11x1: 0,

    gia11mathx5: 0,
    gia11mathx4: 0,
    gia11mathx3: 0,
    gia11mathx2: 0,
    gia11mathx1: 0,
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

    gia11x4: Yup.number(),
    gia11x3: Yup.number(),
    gia11x2: Yup.number(),
    gia11x1: Yup.number(),

    gia11mathx4: Yup.number(),
    gia11mathx3: Yup.number(),
    gia11mathx2: Yup.number(),
    gia11mathx1: Yup.number(),

});

export const ResultForm: React.FC = () => (
    <>
        <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={FormSchema}
            onSubmit={values => {
                console.log(values);
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

                    <Div className="row">
                        <Div className="col-md-6">
                            Результаты ГИА - 11
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "100-83"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia11x5"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x5}
                                />

                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "82-73"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x4"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x4}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "72-63"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x3"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x3}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "62-53"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x2"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x2}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "52-40"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x1"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x1}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row">
                        <Div className="col-md-6">
                            Результаты ГИА-11 Математика (профиль)
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "100-80"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia11mathx5"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx5}
                                />

                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "82-73"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia11mathx4"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx4}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "72-63"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia11mathx3"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx3}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "62-53"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia11mathx2"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx2}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "52-40"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x1"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx1}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row">
                        <Div className="col-md-6">
                            Результаты независимого мониторинга (За каждого обучающегося, получившего:)
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "100-83"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia11x5"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx5}
                                />

                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "82-73"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x4"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx4}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "72-63"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x3"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx3}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "62-53"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x2"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx2}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "52-40"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="gia9x1"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx1}
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
