import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import tinyColor2 from 'tinycolor2';
import Gradient from './Gradient';

class HueGradient extends PureComponent {
    getStepColor = i => tinyColor2({s: 1, l: 0.5, h: i}).toHslString();

    render() {
        const {style, gradientSteps} = this.props;
        return (
            <Gradient
                style={style}
                gradientSteps={gradientSteps}
                getStepColor={this.getStepColor}
                maximumValue={359}
            />
        );
    }
}

export default HueGradient;

HueGradient.propTypes = {
    gradientSteps: PropTypes.number.isRequired
};
