import React, {useEffect} from "react";
import {PageWrapper} from "./styles/home-styles";
import {ResultForm} from "../components/form";
import Api from "../utils/Api";
import {FormDTO} from "../types";

export const HomePage: React.FC = () => {

    useEffect( () => {

        checkApi()
            .then( (result) => console.log(result.data) );

    }, []);

    const checkApi = async () => {
        return await Api.get(`/api/payments`);
    }

    const onSubmitForm = async (formDTO: FormDTO) => {
        const result = await Api.post(`/api/payments`, formDTO);

        console.log(result);
    }

    return (
        <PageWrapper>
            <ResultForm onSubmit={onSubmitForm}/>
        </PageWrapper>
    )
}