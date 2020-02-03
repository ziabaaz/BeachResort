import {createClient} from "contentful";

export default createClient({
    space: process.env.BEACH_RESORT_API_SPACE,
    accessToken: process.env.BEACH_RESORT_ACCESS_TOKEN
});