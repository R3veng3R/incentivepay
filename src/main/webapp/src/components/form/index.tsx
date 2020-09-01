import React from 'react';
import {Field, Formik, Form as FormikForm, FormikValues} from 'formik';
import * as Yup from 'yup';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {Div, ErrorDiv} from "../../pages/styles/home-styles";

type ResultFormProps = {
    onSubmit: (values: FormikValues) => void;
}


const INITIAL_VALUES = {
    name: '',
    lastName: '',
    middleName: '',
    gia9x5: 0,
    gia9x4: 0,
    gia9x3: 0,

    gia11x100: 0,
    gia11x82: 0,
    gia11x72: 0,
    gia11x62: 0,
    gia11x52: 0,

    gia11mathx100: 0,
    gia11mathx79: 0,
    gia11mathx64: 0,
    gia11mathx35: 0,
    gia11mathx30: 0,

    independentDiagnostics5: 0,
    independentDiagnostics4: 0,
    independentDiagnostics3: 0,

    voshMunicipalityWinner: 0,
    voshMunicipalityPrize: 0,

    voshRegionWinner: 0,
    voshRegionPrize: 0,

    voshWinner: 0,
    voshPrize: 0,

    moshWinner: 0,
    moshPrize: 0,

    museumsParksEstatesWinner: 0,
    museumsParksEstatesPrize: 0,

    olimpsUniversmskWinner: 0,
    olimpsUniversmskPrize: 0,

    mskStudyOlimpWinner: 0,
    mskStudyOlimpPrize: 0,

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
    wordskillsVSEROSPrize: 0,
    wordskillsVSEROSInstock: 0,

    wordskillsRegionWinner: 0,
    wordskillsRegionPrize: 0,
    wordskillsRegionInstock: 0,

    gramotaoperatorasemifinal: 0,

    kadetStarWinner: 0,
    kadetStarPrize: 0,

    artikInStart: 0,
    artikInEnd: 0,

    projectSinceMunicipalityWinner: 0,
    projectSinceMunicipalityPrize: 0,
    projectSinceMunicipalityInstock: 0,

    projectSinceRegionWinner: 0,
    projectSinceRegionPrize: 0,
    projectSinceRegionInstock: 0,

    contestMunicipalityWinner: 0,
    contestMunicipalityPrize: 0,

    contestRegionWinner: 0,
    contestRegionPrize: 0,

    kvnSemifinalWinner: 0,
    kvnSemifinalPrize: 0,

    kvnfinalWinner: 0,
    kvnfinalPrize: 0,

    teacherHightlevel: "",
    teacherExpertlevel: "",

    notteacherHightlevel: "",
    notteacherExpertlevel: "",

    fivexfive: 0,

    daysbefore: 0,

    link: ""


}

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное поле'),
    lastName: Yup.string()
        .required('Обязательное поле'),
    middleName: Yup.string()
        .required('Обязательное поле'),

    gia9x5: Yup.number(),
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

    voshMunicipalityWinner: Yup.number(),
    voshMunicipalityPrize: Yup.number(),

    voshRegionWinner: Yup.number(),
    voshRegionPrize: Yup.number(),

    voshWinner: Yup.number(),
    voshPrize: Yup.number(),

    moshWinner: Yup.number(),
    moshPrize: Yup.number(),

    museumsParksEstatesWinner: Yup.number(),
    museumsParksEstatesPrize: Yup.number(),

    olimpsUniversmskWinner: Yup.number(),
    olimpsUniversmskPrize: Yup.number(),

    mskStudyOlimpWinner: Yup.number(),
    mskStudyOlimpPrize: Yup.number(),

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


    abilimpiksVSEROSWinner: Yup.number(),
    abilimpiksVSEROSPrize: Yup.number(),
    abilimpiksVSEROSInstock: Yup.number(),

    wordskillsVSEROSWinner: Yup.number(),
    wordskillsVSEROSPrize:  Yup.number(),
    wordskillsVSEROSInstock:  Yup.number(),

    wordskillsRegionWinner:  Yup.number(),
    wordskillsRegionPrize:  Yup.number(),
    wordskillsRegionInstock:  Yup.number(),

    gramotaoperatorasemifinal:  Yup.number(),

    kadetStarWinner:  Yup.number(),
    kadetStarPrize:  Yup.number(),

    artikInStart:  Yup.number(),
    artikInEnd:  Yup.number(),

    projectSinceMunicipalityWinner:  Yup.number(),
    projectSinceMunicipalityPrize:  Yup.number(),
    projectSinceMunicipalityInstock:  Yup.number(),

    projectSinceRegionWinner:  Yup.number(),
    projectSinceRegionPrize:  Yup.number(),
    projectSinceRegionInstock:  Yup.number(),

    contestMunicipalityWinner:  Yup.number(),
    contestMunicipalityPrize:  Yup.number(),

    contestRegionWinner:  Yup.number(),
    contestRegionPrize:  Yup.number(),

    kvnSemifinalWinner:  Yup.number(),
    kvnSemifinalPrize:  Yup.number(),

    kvnfinalWinner:  Yup.number(),
    kvnfinalPrize:  Yup.number(),

    teacherHightlevel: Yup.string(),
    teacherExpertlevel: Yup.string(),

    notteacherHightlevel: Yup.string(),
    notteacherExpertlevel: Yup.string(),

    fivexfive: Yup.number(),

    daysbefore: Yup.number(),

    link: Yup.string()
        .required('Обязательное поле'),



});

export const ResultForm: React.FC<ResultFormProps> = ({onSubmit}) => (
    <>
        <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={FormSchema}
            onSubmit={ values => onSubmit(values)}>
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur, handleSubmit,
              }) => (
                <FormikForm>
                    <Form.Group controlId="formLastName">
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
                        <Form.Control
                            type="text"
                            name="middleName"
                            placeholder="Отчество"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.middleName}
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
                                    name="gia11x100"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x100}
                                />

                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "82-73"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="gia11x82"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x82}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "72-63"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="gia11x72"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x72}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "62-53"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="gia11x62"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x62}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "52-40"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="gia11x52"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11x52}
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
                                    name="gia11mathx100"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx100}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "79-65"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="gia11mathx79"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx79}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "64-36"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="gia11mathx64"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx64}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "35-31"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="gia11mathx35"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx35}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Баллы "30-27"</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="gia11mathx30"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gia11mathx30}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты независимого мониторинга (За каждого обучающегося, получившего)
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
                                    <p><strong>8</strong></p>
                                </Div>
                                <Div className="col-md-6">
                                    Муниципальный этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="voshMunicipalityWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.voshMunicipalityWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призёр</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="voshMunicipalityPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.voshMunicipalityPrize}
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
                                            name="voshRegionWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.voshRegionWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призёр</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="voshRegionPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.voshRegionPrize}
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
                                            name="voshWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.voshWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призёр</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="voshPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.voshPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты Московской олимпиады школьников
                            <p><strong>9</strong></p>
                        </Div>
                        <Div className="col-md-6">
                            Региональный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="moshWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.moshWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="moshPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.moshPrize}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты метапредметных олимпиад «Музеи. Парки. Усадьбы»
                            <p><strong>12</strong></p>
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Команда-победитель</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="museumsParksEstatesWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.museumsParksEstatesWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Команда-призер</InputGroup.Text>
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

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Олимпиады организованные ВУЗами г. Москва
                            <p><strong>7,96</strong></p>
                        </Div>

                        <Div className="col-md-6">
                            Региональный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="olimpsUniversmskWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.olimpsUniversmskWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm"> Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="olimpsUniversmskPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.olimpsUniversmskPrize}
                                />
                            </InputGroup>

                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Московская городская исследовательская культурологическая олимпиада «История и культура
                            храмов городов России»
                            VII Московская метапредметная олимпиада «Не прервётся связь поколений»
                            <p><strong>15,17</strong></p>
                        </Div>

                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="mskStudyOlimpWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mskStudyOlimpWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="mskStudyOlimpPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mskStudyOlimpPrize}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
                                <Div className="col-md-6">
                                    Предметные олимпиады от Городского методического центра
                                    <p><strong>13,14,95,98,101</strong></p>
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
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призёр</InputGroup.Text>
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
                                            name="olimpRegionMetodCentrWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.olimpRegionMetodCentrWinner}
                                        />
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
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
                                <Div className="col-md-6">
                                    Метапредметная викторина на иностранных языках «Московский школьник 21 века. Языки и
                                    страны»
                                    «Московский школьник 21 века»
                                    <p><strong>64,97</strong></p>
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
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призёр</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="metaInYazMunicipalityPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.metaInYazMunicipalityPrize}
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
                                            name="metaInYazRegionWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.metaInYazRegionWinner}
                                        />

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
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
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
                                            name="sportRegionWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sportRegionWinner}
                                        />

                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="sportRegionPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sportRegionPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                            <Div className="row">
                                <Div className="col-md-6">&nbsp;</Div>
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
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="sportVSEROSPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sportVSEROSPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>

                            <Div className="row">
                                <Div className="col-md-6">&nbsp;</Div>
                                <Div className="col-md-6">
                                    ГТО
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Золотой значок </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
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
                                            type="number"
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
                                            type="number"
                                            name="sportGTOBronze"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sportGTOBronze}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                        </Div>
                    </Div>


                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
                                <Div className="col-md-6">
                                    Результаты участия в чемпионате «Абилимпикс» и другие конкурсы для участия детей с ОВЗ
                                    <p><strong>5,70,71</strong></p>
                                </Div>

                                <Div className="col-md-6">
                                    Отборочный
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
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
                                            type="number"
                                            name="abilimpiksOtborPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.abilimpiksOtborPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                            <Div className="row">
                                <Div className="col-md-6">&nbsp;</Div>
                                <Div className="col-md-6">
                                    Городской этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
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
                                            type="number"
                                            name="abilimpiksGorodPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.abilimpiksGorodPrize}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Участник </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="abilimpiksGorodInstock"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.abilimpiksGorodInstock}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                            <Div className="row">
                                <Div className="col-md-6">&nbsp;</Div>
                                <Div className="col-md-6">
                                    Всероссийский этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
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
                                            type="number"
                                            name="abilimpiksVSEROSPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.abilimpiksVSEROSPrize}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Участник </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="abilimpiksVSEROSInstock"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.abilimpiksVSEROSInstock}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
                                <Div className="col-md-6">
                                    Результаты участия во Всероссийской олимпиаде профессионального мастерства WORLD
                                    SKILLS
                                    (JUNIOR SKILLS, KIDSKILLS)
                                    <p><strong>1,2,3,4</strong></p>
                                </Div>

                                <Div className="col-md-6">
                                    Всероссийский этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="wordskillsVSEROSWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.wordskillsVSEROSWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="wordskillsVSEROSPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.wordskillsVSEROSPrize}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Участник </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="wordskillsVSEROSInstock"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.wordskillsVSEROSInstock}
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
                                            name="wordskillsRegionWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.wordskillsRegionWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="wordskillsRegionPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.wordskillsRegionPrize}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Участник </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="wordskillsRegionInstock"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.wordskillsRegionInstock}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>

                            <Div className="row">
                                <Div className="col-md-6">&nbsp;</Div>
                                <Div className="col-md-6">
                                    Грамоты Оператора полуфинала
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm"> </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="gramotaoperatorasemifinal"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.gramotaoperatorasemifinal}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Городской фестиваль юных талантов «Кадетская звездочка»
                            <p><strong>57</strong></p>
                        </Div>
                        <Div className="col-md-6">
                            Заключительный региональный этап
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="kadetStarWinner"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.kadetStarWinner}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Призёр </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="kadetStarPrize"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.kadetStarPrize}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Большая Арктическая экспедиция
                            <p><strong>43</strong></p>
                        </Div>

                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">2 отборочный этап - набор в команду </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="artikInStart"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.artikInStart}
                                />
                            </InputGroup>

                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">заключительный этап </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="artikInEnd"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.artikInEnd}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
                                <Div className="col-md-6">
                                    Конкурсы научно-исследовательских работ и творческих проектов
                                    <p><strong>15,27,31,35,37,38,39,48,54,59,77,92,93,94</strong></p>
                                </Div>

                                <Div className="col-md-6">
                                    Муниципальный этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="projectSinceMunicipalityWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.projectSinceMunicipalityWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="projectSinceMunicipalityPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.projectSinceMunicipalityPrize}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Сертификат участника (не более 3-х проектов)</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="projectSinceMunicipalityInstock"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.projectSinceMunicipalityInstock}
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
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="projectSinceRegionWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.projectSinceRegionWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="projectSinceRegionPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.projectSinceRegionPrize}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Сертификат участника кол-во(не более 3-х)</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="projectSinceRegionInstock"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.projectSinceRegionInstock}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
                                <Div className="col-md-6">
                                    Московские городские конкурсные мероприятия.
                                    Проектные работы невнесённые в перечень мероприятий
                                    <p><strong>22-26,32,35-53,58,62-66,73-91,99,100</strong></p>
                                </Div>

                                <Div className="col-md-6">
                                    Муниципальный этап
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="contestMunicipalityWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contestMunicipalityWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="contestMunicipalityPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contestMunicipalityPrize}
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
                                            name="contestRegionWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contestRegionWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="contestRegionPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contestRegionPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-12">
                            <Div className="row">
                                <Div className="col-md-6">
                                    Чемпионат игр КВН города Москвы среди команд школьников и студентов колледжей «Вернисаж профессий»
                                    <p><strong>65</strong></p>
                                </Div>

                                <Div className="col-md-6">
                                    Полуфинал
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="kvnSemifinalWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.kvnSemifinalWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="kvnSemifinalPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.kvnSemifinalPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>


                            <Div className="row">
                                <Div className="col-md-6">&nbsp;</Div>
                                <Div className="col-md-6">
                                    Финал
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Победитель </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="kvnfinalWinner"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.kvnfinalWinner}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-1">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">Призер</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="number"
                                            name="kvnfinalPrize"
                                            placeholder=""
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.kvnfinalPrize}
                                        />
                                    </InputGroup>
                                </Div>
                            </Div>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты прохождения независимой диагностики учителями-предметниками (по преподаваемому
                            предмету), открывшими свой результат (ЕГЭ)
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Высокий уровень </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="teacherHightlevel"
                                    placeholder="Да/Нет"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.teacherHightlevel}
                                />
                            </InputGroup>

                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Экспертный уровень </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="teacherExpertlevel"
                                    placeholder="Да/Нет"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.teacherExpertlevel}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результаты прохождения независимой диагностики по профессиональным компетенциям
                            педагогическими работниками (воспитатели, логопеды, психологи, дефектологи), открывшими свой
                            результат.
                        </Div>

                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Высокий уровень </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="notteacherHightlevel"
                                    placeholder="Да/Нет"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.notteacherHightlevel}
                                />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Экспертный уровень </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="notteacherExpertlevel"
                                    placeholder="Да/Нет"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.notteacherExpertlevel}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Результат участия в акции «Пять на пять»
                        </Div>
                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">кол-во по которому набрано более 70 баллов</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="fivexfive"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fivexfive}
                                />
                            </InputGroup>
                        </Div>
                    </Div>

                    <Div className="row border mb-2 p-2">
                        <Div className="col-md-6">
                            Посещаемость дошкольниками образовательной организации
                        </Div>

                        <Div className="col-md-6">
                            <InputGroup size="sm" className="mb-1">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">кол-во дней</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="number"
                                    name="daysbefore"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.daysbefore}
                                />
                            </InputGroup>
                        </Div>
                    </Div>
                    <Form.Group controlId="link">
                        <Form.Control
                            type="text"
                            name="link"
                            placeholder="Ссылка на GoogleDrive/YandexDisk со сканами конкурсами"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.link}
                            className={touched.link && errors.link ? "error" : ""}
                        />
                        {touched.link && errors.link ? (
                            <ErrorDiv>{errors.link}</ErrorDiv>
                        ) : null}
                    </Form.Group>

                    <Div className="row center justify-content-center">
                        <Button type='submit' >
                            Отправить
                        </Button>
                    </Div>
                </FormikForm>
            )}
        </Formik>
    </>
)
