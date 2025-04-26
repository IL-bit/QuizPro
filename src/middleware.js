import { setQuizes, setBalance, setProfile, setQuiz, setCurrentQuiz, noQuizes, logOut, isQuizes, setQuiz2, setApllications, noApplications, setStatist, setUsers, setUser, setDeposits, setBannedWords, setBannedUsers, isUser, isUsers, noUser, noUsers, isBlocked, noBlocked, setRate } from './actions'; 
const url = 'http://qzpro.ru:8000';

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
export const LOGOUT = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/logout`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({})

        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        dispatch(logOut());
    } catch (error) {       
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
export const REFRESH = (Token, email) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/refresh`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({login: email, token: Token}),
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        if (data.success === true) {
            dispatch({ type: 'REFRESH_SUCCESS', payload: data });
        } else {
            dispatch({ type: 'REFRESH_FAILED', payload: data });
        }
    } catch (error) {       
        dispatch({ type: 'REFRESH_ERROR'});
        console.error("Error occurred:", error); 
    }
};


export const BALANCE = (token) => async (dispatch) => { 
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
        dispatch(setBalance(data.count)); 
        dispatch(setRate(data.rate)); 
        dispatch(noQuizes());

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const PROFILE = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/me`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();

        console.log('ok', data);
        dispatch(setProfile(data.data.user)); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};

export const QUIZ = (id) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/quiz/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();

        console.log('ok', data);
        
        console.log(data.params);
        dispatch(setQuiz(data.params)); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const QUIZESALL = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/quiz`, {
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

        console.log('ok', data);
        
        // Диспатчим действие для обновления состояния
        dispatch(setQuizes(data)); 
        dispatch(noQuizes());

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const PUTQUIZNAME = (ID, newName, token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/quiz`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({name: newName, id: ID})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();

        console.log('ok', data);
        dispatch(isQuizes());

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const PUTQUIZ = (ID, token, datas) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/quiz`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({id: ID, params: datas})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();

        console.log('ok', data);
        dispatch(isQuizes());

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const POSTQUIZ = (newName, token, createQuizData) => async (dispatch) => { 
    console.log(JSON.stringify({name: newName, params: createQuizData}))
    try {
        const response = await fetch(`${url}/api/quiz`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({name: newName, params: createQuizData})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();

        console.log('ok', data);
        dispatch(setCurrentQuiz(data.id));
        dispatch(isQuizes());
        return data;
    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const DELETEQUIZ = (id, token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/quiz/${id}`, {
            method: 'DELETE',
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
        dispatch(isQuizes());

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};

export const APPLICATIONS = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/application/1/3`, {
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

        console.log('ok', data);
        dispatch(setApllications(data)); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const DELETEAPPLICATION = (id, token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/application/${id}`, {
            method: 'DELETE',
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

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};


export const QUIZ2 = (id) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/quiz/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();

        console.log('ok', data);
        
        console.log(data.params);
        dispatch(setQuiz2(data.params)); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};

export const TURNOFFQUIZ = (token, ID) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/quiz/enabled`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({id: ID, enabled: 0})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        console.log('enabled no');
    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const TURNONQUIZ = (token, ID) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/quiz/enabled`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({id: ID, enabled: 1})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        console.log('enabled');
    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};


/* admin */
export const STATIS = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/admin/statist`, {
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
        dispatch(setStatist(data)); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const USERS = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/admin/users/0/0/3`, {
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
        dispatch(setUsers(data)); 
        dispatch(isUsers()); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const USER = (token, id) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/admin/user/${id}`, {
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
        dispatch(setUser(data)); 
        dispatch(isUser()); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const DEPOSITS = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/admin/deposits`, {
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
        dispatch(setDeposits(data)); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const BANNEDWORDS = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/admin/word`, {
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
        dispatch(setBannedWords(data)); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const BANNEDUSERS = (token) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/admin/users/1/0/3`, {
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
        console.log('BANNEDUSERS', data)
        dispatch(isBlocked());
        dispatch(setBannedUsers(data)); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const USERDEPOSIT = (token, id, amount, amountLess) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/admin/user/deposit`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({userID: id, total: amount, total_less: amountLess})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        dispatch(noUser()); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};
export const USERCHANGERATE = (token, id, rates) => async (dispatch) => { 
    try {
        const response = await fetch(`${url}/api/admin/${id}/deposit`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({userID: id, rate: rates})
        });
        if (!response.ok) {
            console.error('Fetch failed with status:', response.status); 
            return;
        }
        const data = await response.json();
        dispatch(noUser()); 

    } catch (error) {       
        console.error("Error occurred:", error); 
    }
};