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
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        } else {
            dispatch({ type: 'LOGIN_FAILED', payload: data });
        }
    } catch (error) {       
        dispatch({ type: 'LOGIN_ERROR'});
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
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        } else {
            dispatch({ type: 'LOGIN_FAILED', payload: data });
        }
    } catch (error) {       
        dispatch({ type: 'LOGIN_ERROR'});
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

        console.log('ok')

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const RESET = (formData) => async () => { 
    try {
        const response = await fetch(`${url}/api/reset`, {
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

        console.log('ok')

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const BALANCE = (token) => async () => { 
    try {
        const response = await fetch(`${url}/api/balance`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();

        console.log('ok')

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};