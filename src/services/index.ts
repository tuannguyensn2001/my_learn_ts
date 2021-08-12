import myLearnAPI from "../config/network";


export const fetchUploadFile = (form: FormData) => {
    return myLearnAPI.post('/v1/backend/upload', form);
}

export const refresh = () => {
    return myLearnAPI.get('/v1/auth/refresh');
}