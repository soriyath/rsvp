import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Utils from './utils';

// UI Stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

    this.state = {
      title : "The Monkey Company",
      age : 42
    };

    this.footerWasClicked = this.footerWasClicked.bind(this);
  }

  footerWasClicked(e,arg1,arg2,arg3) {
    console.log(e,arg1,arg2,arg3);
    Utils.log("info", this.constructor.name, "The Monkey Company was clicked. Monkey age: "+this.state.age);
    this.setState({
      title: "The Urang-Utan Company"
    });
  }

  render(){
    const {title} = this.state;
    return (
        <IntlProvider locale={locale} messages={messages}>
          <MuiThemeProvider>
            <div className='main-layout'>
              <Navbar title={title}></Navbar>
              <main className="content">Lorem Ipsum</main>
              <Footer companyName="The Monkey Company" onChange={this.footerWasClicked} />
            </div>
          </MuiThemeProvider>
        </IntlProvider>
    );
  }
}

export default App;
