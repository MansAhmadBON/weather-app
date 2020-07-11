import React from "react";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

import './Controls.scss';

function Controls() {
    return (
        <div className="controls">
            <IconButton>
                <LoopIcon />
            </IconButton>
            <div className="controls-switch controls-switch__degrees">
                <Button variant="outlined">C</Button>
                <Button variant="outlined">F</Button>
            </div>
        </div>
    )
}

export default Controls;