import "@/styles/globals.scss";
import '@/styles/style.scss';
import { Provider } from 'react-redux';
import { initializeStore } from '../redux/store'; 

const MyApp = ({ Component, pageProps }) => {
  const store = initializeStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;