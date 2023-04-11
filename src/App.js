import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import AIContentAnalysis from "./views/AIContentAnalysis";
import AIContentGeneration from "./views/AIContentGeneration";


// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

<Switch>
  {/* other routes... */}
  <Route path="/ai-content-analysis" component={AIContentAnalysis} />
  <Route path="/ai-content-generation" component={AIContentGeneration} />
</Switch>



// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
