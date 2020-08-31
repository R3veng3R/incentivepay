import React, {useEffect, useState} from "react";
import {PageWrapper} from "./styles/home-styles";
import {ResultForm} from "../components/form";
import Api from "../utils/Api";
import {FormDTO} from "../types";
import {Loader} from "../components/loader";

export const HomePage: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect( () => {

        checkApi()
            .then( (result) => console.log(result.data) );

    }, []);

    const checkApi = async () => {
        return await Api.get(`/api/payments`);
    }

    const onSubmitForm = async (formDTO: FormDTO) => {
        setLoading(true)
        const result = await Api.post(`/api/payments`, formDTO);

        console.log(result);
        setLoading(false);
    }

    return (
        <PageWrapper>
            <Loader isHidden={!isLoading}/>
            <ResultForm onSubmit={onSubmitForm}/>
        </PageWrapper>
    )
}