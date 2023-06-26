import { Nav } from './Nav.js';

let Header = {
    data() {
        return {
            links : [
                {
                    link:"Accueil"
                },
                {
                    link:"A propos"
                },
                {
                    link:"Contact"
                },
            ]
        }
    },
    components : {
        Nav
    },
    template: `
        <header>
            <Nav :links="links"/>
        </header>
    `
};

export { Header };