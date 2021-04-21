import React from 'react';

import styles from './RoadControlPanel.module.css';
import Checkbox from "../../../../components/UI/Checkbox/Checkbox";
import PropTypes from "prop-types";

const RoadControlPanel = (props) => {
    return (
        <div className={styles.RoadControlPanel}>
            <div className={styles.ControlElement}>
                <Checkbox label={"Отображать узлы"} name={"showNodes"} onChange={props.onShowNodesChanged}
                          checked={props.showNodes}/>
            </div>
            <div className={styles.ControlElement}><Checkbox label={"Отображать линии"} name={"showLines"} onChange={props.onShowLinesChanged}
                           checked={props.showLines}/>
            </div>
            <div className={styles.ControlElement}><Checkbox label={"Отображать остановки"} name={"showStops"} onChange={props.onShowStopsChanged}
                           checked={props.showStops}/>
            </div>
        </div>
    );
};

RoadControlPanel.propTypes = {
    onShowNodesChanged: PropTypes.func.isRequired,
    onShowLinesChanged: PropTypes.func.isRequired,
    onShowStopsChanged: PropTypes.func.isRequired,
    showNodes: PropTypes.bool,
    showLines: PropTypes.bool,
    showStops: PropTypes.bool
}

export default RoadControlPanel;