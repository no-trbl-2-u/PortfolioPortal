import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { Home } from './Home/Home';

const AppContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

// TODO: This will be likely be reserved for:
// ==> onLoad functionality
// ==> Routing
// ==> Top-Level Contexts

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Home />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
