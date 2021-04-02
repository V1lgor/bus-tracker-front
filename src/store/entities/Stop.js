import {schema} from "normalizr";
import {City} from "./City";

const Stop = new schema.Entity("stop", {
    city: City
});

export default Stop;