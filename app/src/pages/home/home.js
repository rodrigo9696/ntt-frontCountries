import { BusyIndicator, Grid } from "@ui5/webcomponents-react";
import { useSelector } from "react-redux";
import { SearchForm } from "./search-form/search-form";
import { SearchResult } from "./search-result/search-result";

export const Home = () => {
    const  loading  = false;

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