import {schema} from "normalizr";
import {City} from "./City";
import Stop from "./Stop";
import RouteStop from "./RouteStop";


const Route = new schema.Entity("route", {
    city: City,
    startStop: Stop,
    lastStop: Stop,
    stopList: [RouteStop]
});

export default Route;