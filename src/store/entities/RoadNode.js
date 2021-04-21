import {schema} from 'normalizr';

export const RoadNode = new schema.Entity("node", {}, {
    idAttribute: (value => value.node.id)
});


