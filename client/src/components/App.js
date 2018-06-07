import React from 'react';
import Discover from './Discover';
import {withStyles} from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
})

const Main = () => (
    <div>
        <Discover />
    </div>
);

export default withRoot(withStyles(styles)(Main))