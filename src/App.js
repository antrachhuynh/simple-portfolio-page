import "./styles.css";
import {
  createTheme,
  NextUIProvider,
  styled,
  Switch


} from "@nextui-org/react";

import useLocalStorage from 'use-local-storage'


import InfoCard from './InfoCard';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {},
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  }
})

const StyledApp = styled("div", {
  dflex: "center",
  flexDirection: "column",
  minHeight: "100vh"
});


export default function App() {
  // The light theme is used by default
  const [isLightTheme, setIsLightTheme] = useLocalStorage(true);





  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <NextUIProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <StyledApp className="App">
        <InfoCard />

        <Switch color="secondary" css={{ top: 10, right: 10, position: 'fixed' }} checked={!isLightTheme} onChange={changeTheme} />
      </StyledApp >
    </NextUIProvider >
  );
}
