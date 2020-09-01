import React, {useEffect, useState} from "react";
import {PageWrapper} from "./styles/home-styles";
import {ResultForm} from "../components/form";
import Api from "../utils/Api";
import {Loader} from "../components/loader";
import {FormikValues} from "formik";

export const HomePage: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect( () => {

        checkApi()
            .then( (result) => console.log(result.data) );

    }, []);

    const checkApi = async () => {
        return await Api.get(`/api/payments`);
    }

    const onSubmitForm = async (values: FormikValues) => {
        setLoading(true)

        try {
            const result = await Api.post(`/api/payments`, values);
        } catch (e) {}

        setLoading(false);
    }

    return (
        <PageWrapper>
            <Loader isHidden={!isLoading}/>
            <ResultForm onSubmit={onSubmitForm}/>
        </PageWrapper>
    )
}