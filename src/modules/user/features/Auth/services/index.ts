import myLearnAPI from "../../../../../config/network";

interface User {
    email: string,
    password: string,
}

export const fetchLogin = (user: User) => {
    return myLearnAPI.post('/v1/auth/login', user);
}

export const fetchMe = () => {
    return myLearnAPI.get('/v1/auth/me');
}