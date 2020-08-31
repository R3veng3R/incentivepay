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
    middleName: '',
    gia9x5: 0,
    gia9x4: 0,
    gia9x3: 0,

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

    independentDiagnostics5: 0,
    independentDiagnostics4: 0,
    independentDiagnostics3: 0,

    VOSHMunicipalityWinner: 0,
    VOSHMunicipalityPrize: 0,

    VOSHRegionWinner: 0,
    VOSHRegionPrize: 0,

    VOSHWinner: 0,
    VOSHPrize: 0,

    MOSHWinner: 0,
    MOSHPrize: 0,

    museumsParksEstatesWinner: 0,
    museumsParksEstatesPrize: 0,

    oLimpsUniversMSKWinner: 0,
    oLimpsUniversMSKPrize: 0,

    MSKStudyOlimpWinner: 0,
    MSKStudyOlimpPrize: 0,

    olimpMunicipalityMetodCentrWinner: 0,
    olimpMunicipalityMetodCentrPrize: 0,
    olimpRegionMetodCentrWinner: 0,
    olimpRegionMetodCentrPrize: 0,

    metaInYazMunicipalityWinner: 0,
    metaInYazMunicipalityPrize: 0,

    metaInYazRegionWinner: 0,
    metaInYazRegionPrize: 0,

    sportMunicipalityWinner: 0,
    sportMunicipalityPrize: 0,

    sportRegionWinner: 0,
    sportRegionPrize: 0,

    sportVSEROSWinner: 0,
    sportVSEROSPrize: 0,

    sportGTOGold: 0,
    sportGTOSilver: 0,
    sportGTOBronze: 0,

    abilimpiksOtborWinner: 0,
    abilimpiksOtborPrize: 0,

    abilimpiksGorodWinner: 0,
    abilimpiksGorodPrize: 0,
    abilimpiksGorodInstock: 0,
//
    abilimpiksVSEROSWinner: 0,
    abilimpiksVSEROSPrize: 0,
    abilimpiksVSEROSInstock: 0,

    wordskillsVSEROSWinner: 0,


}

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное поле'),
    lastName: Yup.string()
        .required('Обязательное поле'),
    middleName: Yup.string()
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

    independentDiagnostics5: Yup.number(),
    independentDiagnostics4: Yup.number(),
    independentDiagnostics3: Yup.number(),

    VOSHMunicipalityWinner: Yup.number(),
    VOSHMunicipalityPrize: Yup.number(),

    VOSHRegionWinner: Yup.number(),
    VOSHRegionPrize: Yup.number(),

    VOSHWinner: Yup.number(),
    VOSHPrize: Yup.number(),

    MOSHWinner: Yup.number(),
    MOSHPrize: Yup.number(),

    museumsParksEstatesWinner: Yup.number(),
    museumsParksEstatesPrize: Yup.number(),

    oLimpsUniversMSKWinner: Yup.number(),
    oLimpsUniversMSKPrize: Yup.number(),

    MSKStudyOlimpWinner: Yup.number(),
    MSKStudyOlimpPrize: Yup.number(),

    olimpMunicipalityMetodCentrWinner: Yup.number(),
    olimpMunicipalityMetodCentrPrize: Yup.number(),
    olimpRegionMetodCentrWinner: Yup.number(),
    olimpRegionMetodCentrPrize: Yup.number(),

    metaInYazRegionWinner: Yup.number(),
    metaInYazRegionPrize: Yup.number(),

    sportMunicipalityWinner: Yup.number(),
    sportMunicipalityPrize: Yup.number(),

    sportRegionWinner: Yup.number(),
    sportRegionPrize: Yup.number(),

    sportVSEROSWinner: Yup.number(),
    sportVSEROSPrize: Yup.number(),

    sportGTOGold: Yup.number(),
    sportGTOSilver: Yup.number(),
    sportGTOBronze: Yup.number(),


});

export const ResultForm: React.FC<ResultFormProps> = ({onSubmit}) => (
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

                    <Form.Group controlId="formMiddleName">
                        <Form.Label>Отчество :</Form.Label>
                        <Form.Control
                            type="text"
                            name="middleName"
                            placeholder="Отчество"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={touched.middleName && errors.middleName ? "error" : ""}
                        />
                        {touched.middleName && errors.middleName ? (
                            <ErrorDiv>{errors.middleName}</ErrorDiv>
                        ) : null}
                    </Form.Group>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты ГИА - 9
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценка "5"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
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
                                    type="number"
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
                                    type="number"
                                    name="gia9x3"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia9x3}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты ГИА - 11
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "100-83"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
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
                                    type="number"
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
                                    type="number"
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
                                    type="number"
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
                                    type="number"
                                    name="gia9x1"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x1}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты ГИА-11 Математика (профиль)
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "100-80"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
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
                                    type="number"
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
                                    type="number"
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
                                    type="number"
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
                                    type="number"
                                    name="gia11mathx1"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx1}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты независимого мониторинга (За каждого обучающегося, получившего:)
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценкка 5</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="independentDiagnostics5"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.independentDiagnostics5}
                                />

                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценкка 4</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="independentDiagnostics4"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.independentDiagnostics4}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Оценкка 3</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="independentDiagnostics3"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.independentDiagnostics3}
                                />
                            </InputGroup>

                        </Div>
                    </Div>


                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
                                <Div className="col-md-6">
                                    Результаты Всероссийской олимпиады школьников
                                </Div>
                                <Div className="col-md-6">
                                    Муниципальный этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="VOSHMunicipalityWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.VOSHMunicipalityWinner}
                                        />
                                        {touched.VOSHMunicipalityWinner && errors.VOSHMunicipalityWinner ? (
                                            <ErrorDiv>{errors.VOSHMunicipalityWinner}</ErrorDiv>
                                        ) : null}
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призёр</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="VOSHMunicipalityPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.VOSHMunicipalityPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>

                            <Div className="row">
                                <Div className="col-md-6">&nbsp;</Div>
                                <Div className="col-md-6">
                                    Региональный этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="VOSHRegionWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.VOSHRegionWinner}
                                        />
                                        {touched.gia9x5 && errors.gia9x5 ? (
                                            <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                        ) : null}
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призёр</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="VOSHRegionPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.VOSHRegionPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>

                            <Div className="row">
                                <Div className="col-md-6">&nbsp;</Div>
                                <Div className="col-md-6">
                                    Заключительный этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="VOSHWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.VOSHWinner}
                                        />
                                        {touched.gia9x5 && errors.gia9x5 ? (
                                            <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                        ) : null}
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призёр</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="VOSHPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.VOSHPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                        </Div>
                    </Div>

                    <Div className="row border">
                        <Div className="col-md-6">
                            Результаты Московской олимпиады школьников
                        </Div>

                        <Div className="col-md-6">
                            Региональный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="MOSHWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.MOSHWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="MOSHPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.MOSHPrize}
                                />
                            </InputGroup>

                        </Div>
                    </Div>

                    <Div className="row border">
                        <Div className="col-md-6">
                            Результаты метапредметных олимпиад «Музеи. Парки. Усадьбы»


                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Команда-победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="museumsParksEstatesWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.museumsParksEstatesWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Команда-призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="museumsParksEstatesPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.museumsParksEstatesPrize}
                                />
                            </InputGroup>

                        </Div>
                    </Div>

                    <Div className="row border">
                        <Div className="col-md-6">
                            Олимпиады организованные ВУЗами г. Москва


                        </Div>
                        <Div className="col-md-6">
                            Региональный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="oLimpsUniversMSKWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.oLimpsUniversMSKWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm"> Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="oLimpsUniversMSKPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.oLimpsUniversMSKPrize}
                                />
                            </InputGroup>

                        </Div>
                    </Div>

                    <Div className="row border">
                        <Div className="col-md-6">
                            Московская городская исследовательская культурологическая олимпиада «История и культура
                            храмов городов России»
                            VII Московская метапредметная олимпиада «Не прервётся связь поколений»


                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="MSKStudyOlimpWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.MSKStudyOlimpWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="MSKStudyOlimpWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.MSKStudyOlimpWinner}
                                />
                            </InputGroup>

                        </Div>
                    </Div>

                    /////////

                    <Div className="row border">
                        <Div className="col-md-6">
                            Предметные олимпиады от Городского методического центра


                        </Div>
                        <Div className="col-md-6">
                            Муниципальный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="olimpMunicipalityMetodCentrWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.olimpMunicipalityMetodCentrWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призёр </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="olimpMunicipalityMetodCentrPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.olimpMunicipalityMetodCentrPrize}
                                />
                            </InputGroup>

                        </Div>


                        <Div className="col-md-6">
                            Региональный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="olimpRegionMetodCentrWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.olimpRegionMetodCentrWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призёр </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="olimpRegionMetodCentrPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.olimpRegionMetodCentrPrize}
                                />
                            </InputGroup>

                        </Div>
                    </Div>

                    <Div className="row border">
                        <Div className="col-md-6">
                            Метапредметная викторина на иностранных языках «Московский школьник 21 века. Языки и страны»
                            «Московский школьник 21 века»


                        </Div>
                        <Div className="col-md-6">
                            Муниципальный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="metaInYazMunicipalityWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.metaInYazMunicipalityWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призёр </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="museumsParksEstatesPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.museumsParksEstatesPrize}
                                />
                            </InputGroup>

                        </Div>


                        <Div className="col-md-6">
                            Региональный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="metaInYazRegionWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.metaInYazRegionWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призёр </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="metaInYazRegionPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.metaInYazRegionPrize}
                                />
                            </InputGroup>

                        </Div>
                    </Div>

                    <Div className="row border">
                        <Div className="col-md-6">
                            Результаты участия в командных соревнованиях по любительскому спорту


                        </Div>
                        <Div className="col-md-6">
                            Межрайонный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="sportMunicipalityWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportMunicipalityWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="sportMunicipalityPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportMunicipalityPrize}
                                />
                            </InputGroup>

                        </Div>
                        <Div className="col-md-6">
                            Региональный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="sportRegionWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportRegionWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="sportRegionPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportRegionPrize}
                                />
                            </InputGroup>

                        </Div>
                        <Div className="col-md-6">
                            Всероссийский этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="sportVSEROSWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportVSEROSWinner}
                                />
                                {touched.gia9x5 && errors.gia9x5 ? (
                                    <ErrorDiv>{errors.gia9x5}</ErrorDiv>
                                ) : null}
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="sportVSEROSPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportVSEROSPrize}
                                />
                            </InputGroup>

                        </Div>
                        <Div className="col-md-6">
                            ГТО
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Золотой значок </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="sportGTOGold"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportGTOGold}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Серебряный значок </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="sportGTOSilver"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportGTOSilver}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Бронзовый значок </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="sportGTOBronze"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sportGTOBronze}
                                />
                            </InputGroup>

                        </Div>

                    </Div>

                    <Div className="row border">
                        <Div className="col-md-6">
                            Результаты участия в чемпионате «Абилимпикс» и другие конкурсы для участия детей с ОВЗ

                        </Div>
                        <Div className="col-md-6">
                            Отборочный
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborWinner}
                                />

                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborPrize}
                                />
                            </InputGroup>

                        </Div>
                        <Div className="col-md-6">
                            Городской этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborPrize}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Учасник </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="abilimpiksOtborPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborPrize}
                                />
                            </InputGroup>
                        </Div>
                        <Div className="col-md-6">
                            Городской этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksGorodWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksGorodWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksGorodPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksGorodPrize}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Учасник </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksGorodInstock"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksGorodInstock}
                                />
                            </InputGroup>
                        </Div>
                        <Div className="col-md-6">
                            Всероссийский этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksVSEROSWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksVSEROSWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksVSEROSPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksVSEROSPrize}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Учасник </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksVSEROSInstock"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksVSEROSInstock}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border">
                        <Div className="col-md-6">
                            Результаты участия в чемпионате «Абилимпикс» и другие конкурсы для участия детей с ОВЗ

                        </Div>
                        <Div className="col-md-6">
                            Отборочный
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborWinner}
                                />

                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborPrize}
                                />
                            </InputGroup>

                        </Div>
                        <Div className="col-md-6">
                            Городской этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborPrize}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Учасник </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksOtborPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksOtborPrize}
                                />
                            </InputGroup>
                        </Div>
                        <Div className="col-md-6">
                            Городской этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksGorodWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksGorodWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksGorodPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksGorodPrize}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Учасник </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksGorodInstock"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksGorodInstock}
                                />
                            </InputGroup>
                        </Div>
                        <Div className="col-md-6">
                            Всероссийский этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksVSEROSWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksVSEROSWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksVSEROSPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksVSEROSPrize}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Учасник </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="abilimpiksVSEROSInstock"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.abilimpiksVSEROSInstock}
                                />
                            </InputGroup>
                        </Div>
                    </Div>


                    <Button type='submit'>
                        Отправить
                    </Button>
                </FormikForm>
            )}
        </Formik>
    </>
)
