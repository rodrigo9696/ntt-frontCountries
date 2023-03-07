import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCountries = createAsyncThunk("countries/getCountries", async ({lang}) => {

    const response = await axios.get(`/api/countries?lang=${lang}`);
    return response.data;    
});