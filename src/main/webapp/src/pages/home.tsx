import React from "react";
import {PageWrapper} from "./styles/home-styles";
import {ResultForm} from "../components/form";

export const HomePage: React.FC = () => {
    return (
        <PageWrapper>
            <ResultForm/>
        </PageWrapper>
    )
}