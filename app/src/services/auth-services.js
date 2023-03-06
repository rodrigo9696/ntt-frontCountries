import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CONFIG } from "../CONFIG";

export const getLogin = createAsyncThunk("user/getLogin", async (payload) => {
    const url = `${CONFIG.authenticationURL}&username=${payload.email}&password=${payload.pw}`;
    const headersConfig = {
        headers: {
            'Authorization': 'Basic c2ItYmFjay1jb3VudHJpZXMtZGUwZmJiM2Z0cmlhbC1kZXYhdDEzNzUyNDphc0ZjTCs5QzlmYzNRRjZXSHdTcVIxUGt6RVU9',
        } 
    };

    const response = await axios.get(url,headersConfig);
    return response.data;   
});