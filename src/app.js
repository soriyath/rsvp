import React from 'react';
import Footer from './components/Footer';

// Locale related
import { addLocaleData, IntlProvider } from 'react-intl';
import localeData from 'locale-data';

// Styles
import './styles.scss';

addLocaleData(localeData);

const { locale, messages } = __I18N__;

const App = () => (
    <IntlProvider
        locale={ locale }
        messages={ messages }
    >
        <div className='main-layout'>
          <header className="navbar">I am a navbar</header>
          <main className="content">Lorem Ipsum</main>
          <Footer />
        </div>
    </IntlProvider>
);

export default App;
