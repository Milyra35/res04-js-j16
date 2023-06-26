import { Nav } from './Nav.js';

let Header = {
    data() {
        return {
            links : [
                {
                    content:"Accueil"
                },
                {
                    content:"A propos"
                },
                {
                    content:"Contact"
                }
            ]
        }
    },
    components : {
        Nav
    },
    template: `
        <header>
            <nav>
                <ul>
                    <Nav v-for="link in links" :content="link.content" />
                </ul>
            </nav>
        </header>
    `
};

export { Header };