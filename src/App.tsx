import {
    defineComponent
} from "vue";
import {
    Parent
} from "./components/Test";
import Hoge from './components/Hoge';
import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
    name: 'App',
    components: {
        Parent,
        Hoge
    },
    setup() {
        return () => (
            <div>
                <h1>Hello, App!</h1>
                <p>
                    <RouterLink to="/">Go to Home</RouterLink>
                    <RouterLink to="/hoge">Hoge</RouterLink>
                </p>

                <RouterView />
            </div>
        )
    }
});
