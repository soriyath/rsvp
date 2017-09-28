import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Utils from './utils';

// Locale related
import { addLocaleData, IntlProvider } from 'react-intl';
import localeData from 'locale-data';

// Styles
import './styles.scss';

addLocaleData(localeData);

const { locale, messages } = __I18N__;

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.footerWasClicked = this.footerWasClicked.bind(this);
  }

  footerWasClicked(e) {
    Utils.log("info", this.constructor.name, "The Monkey Company was clicked.");
  }

  render(){
    return (
        <IntlProvider
            locale={ locale }
            messages={ messages }
        >
            <div className='main-layout'>
              <Navbar></Navbar>
              <main className="content">Lorem Ipsum</main>
              <Footer companyName="The Monkey Company" onChange={this.footerWasClicked} />
            </div>
        </IntlProvider>
    );
  }
}

export default App;
