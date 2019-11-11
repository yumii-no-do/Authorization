import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';
import { History } from 'history';
import { ApplicationState } from './store/index';
import { Store } from 'react-redux/node_modules/redux';

interface IAppProps {
  history: History,
  store: Store<ApplicationState>
}


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#E10050',
      contrastText:'#ffffff'
    },
    error: {
      main: '#F44336'
    }
  }
});


const App: FC<IAppProps> = ({ history, store }) => {
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;