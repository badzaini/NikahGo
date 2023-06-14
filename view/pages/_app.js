import '../styles/globals.css';
import Layout from '../components/layout';
import { Provider } from 'react-redux';
import { store, persistor } from "../state/store";
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </Layout>
  );
}

export default MyApp
