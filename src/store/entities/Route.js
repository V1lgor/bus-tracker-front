import {schema} from "normalizr";
import {City} from "./City";

const Route = new schema.Entity("route", {
    city: City
});

export default Route;