import { log_in } from "./actions";

const url = 'http://qzpro.ru';
export const REGISTER = (formData) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/register`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log(JSON.stringify(formData));
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        if (data.success === true) {
            console.log('REGISTER_SUCCESS');
            dispatch(log_in());
        } else {
            console.log('REGISTER_FAIL');
        }
    } catch (error) {       
        console.log('REGISTER_ERROR');
        console.error("Error occurred:", error); 
    }
};
export const LOGIN = (formData) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log(JSON.stringify(formData));
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        if (data.success === true) {
            console.log('LOGIN_SUCCESS');
            dispatch(log_in(data));
        } else {
            console.log('LOGIN_FAIL');
        }
    } catch (error) {       
        console.log('LOGIN_ERROR');
        console.error("Error occurred:", error); 
    }
};
export const FORGOT = (formData) => async () => { 
    try {
        const response = await fetch(`${url}/api/forgot`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log(JSON.stringify(formData));
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        if (data.success === true) {
            console.log('FORGOT_SUCCESS');
        } else {
            console.log('FORGOT_FAIL');
        }
    } catch (error) {       
        console.log('FORGOT_ERROR'); 
        console.error("Error occurred:", error); 
    }
};
