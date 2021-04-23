import {schema} from "normalizr";
import Stop from "./Stop";

const RouteStop = new schema.Entity("routeStop", {
    stop: Stop
});

export default RouteStop;