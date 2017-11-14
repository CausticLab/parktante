import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Camera from 'react-native-openalpr';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        position: 'absolute',
        top: 100,
        left: 50,
        backgroundColor: '#fff'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
    camera: {
        flex: 1
    }
});

export default class PlateRecognizer extends Component {
    constructor(props) {
        super(props);

        console.log(Camera.constants);

        console.log(Camera.constants.CaptureQuality["720p"]);

        this.camera = null;
        this.state = {
            camera: {
                aspect: Camera.constants.Aspect.fill,
                captureQuality: Camera.constants.CaptureQuality.photo,
            },
            plate: 'Scan a plate',
        };
    }

    onPlateRecognized = ({ plate, confidence }) => {
        if (confidence > 0.9) {
            let text = plate + " : " + confidence;
            this.setState({
                plate: text,
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.camera}
                    aspect={this.state.camera.aspect}
                    captureQuality={this.state.camera.captureQuality}
                    country="eu"
                    onPlateRecognized={this.onPlateRecognized}
                    plateOutlineColor="#ff0000"
                    showPlateOutline
                    torchMode={Camera.constants.TorchMode.off}
                    rotateMode={this.state.rotate ? Camera.constants.RotateMode.on : Camera.constants.RotateMode.off}
                    touchToFocus
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.state.plate}</Text>
                </View>
            </View>

        );
    }
}
