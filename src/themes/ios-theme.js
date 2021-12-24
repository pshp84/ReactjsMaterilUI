import { createTheme } from '@mui/material/styles';

const iosTheme = createTheme({
    palette: {
        primary: {
            main: "#000000"
        },
        cardBg: {
            main: "gray"
        },
        cardFont: {
            main: "#000000"
        },
        buttonRadius: {
            main: "0"
        },
        cardRadius: {
            main: "0"
        },
    }
});

export default iosTheme;
