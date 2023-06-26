import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Footer } from './components/Footer.js';
import { Nav } from './components/Nav.js';

let App = {
    data() {
        return {
            
        };
    },
    components : {
        Header,
        Main,
        Footer
    },
    template: `
    <Header />
    <Main />
    <Footer />
    `
};

export { App };