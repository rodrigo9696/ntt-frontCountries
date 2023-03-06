import { BusyIndicator, Grid } from "@ui5/webcomponents-react";
import { useSelector } from "react-redux";
import { FormLogin } from "../../components/form-login/form-login";
import { SearchForm } from "./search-form/search-form";
import { SearchResult } from "./search-result/search-result";

export const Home = () => {
    const { isLogged, loading } = useSelector(rootReducer => rootReducer.loginReducer);

    return (
        <div className="home container mt-5">
            {(
                <>
                    <SearchForm></SearchForm>
                    <SearchResult></SearchResult>
                </>
            )}

             <div className={`text-center mt-5 ${loading ? '' : 'd-none'}`}>
                <BusyIndicator active size="Medium"></BusyIndicator>
            </div>
        </div>
    )
}