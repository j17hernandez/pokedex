import axios from "axios";
const basicMixins = {
    methods: {
        $get(route) {
            return axios.get("https://pokeapi.co/api/v2/" + route);
        }
    }
}

export default basicMixins