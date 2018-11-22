import React, {PureComponent} from "react";
import {NativeModules, Platform, ViewPropTypes} from "react-native";
import PropTypes from "prop-types";
import Feather from "react-native-vector-icons/Feather";
import VectorHelper from "./VectorHelper";

const {RNToastNative} = NativeModules;

class ToastNative extends PureComponent {
    static propTypes = {
        ...ViewPropTypes,
        type: PropTypes.number,
        title: PropTypes.string,
        titleSize: PropTypes.number,
        titleColor: PropTypes.string,
        duration: PropTypes.number,
        tintColor: PropTypes.string,
        withIcon: PropTypes.bool,
        icon: PropTypes.object
    };

    static defaultProps = {
        type: 0,
        title: "",
        titleSize: 0,
        titleColor: "",
        duration: 0,
        tintColor: "",
        withIcon: true
    };

    static duration = {
        Short: 0,
        Long: 1
    };

    static types = {
        Normal: 0,
        Info: 1,
        Success: 2,
        Warn: 3,
        Error: 4
    };

    static showShort(message) {
        ToastNative.show({
            title: message,
            duration: ToastNative.duration.Short
        });
    }

    static showLong(message) {
        ToastNative.show({
            title: message,
            duration: ToastNative.duration.Long
        })
    }

    static show(props) {
        if (!props) props = {};
        if (props.type === undefined) props.type = ToastNative.defaultProps.type;
        if (props.title === undefined) props.title = ToastNative.defaultProps.title;
        if (props.titleSize === undefined)
            props.titleSize = ToastNative.defaultProps.titleSize;
        if (props.titleColor === undefined)
            props.titleColor = ToastNative.defaultProps.titleColor;
        if (props.duration === undefined)
            props.duration = ToastNative.defaultProps.duration;
        if (props.tintColor === undefined)
            props.tintColor = ToastNative.defaultProps.tintColor;
        if (props.withIcon === undefined)
            props.withIcon = ToastNative.defaultProps.withIcon;
        if (props.withIcon) {
            if (props.icon && props.icon.props) {
                let icon = props.icon.props;
                let vectorIcon = VectorHelper.Resolve(icon.family, icon.name);
                props.icon = Object.assign({}, icon, vectorIcon);
            }
        } else {
            props.icon = undefined;
        }
        RNToastNative.show(props);
    }

    static successStyle = {
        tintColor: "#4b994f",
        icon: (
            <Feather
                name={"check-circle"}
                size={22}
                color={"#FFFFFF"}
                family={"Feather"}
            />
        )
    };

    static success(props) {
        if (!props) props = {};
        if (props.tintColor === undefined && Platform.OS === "ios")
            props.tintColor = ToastNative.successStyle.tintColor;
        if (props.icon === undefined && Platform.OS === "ios")
            props.icon = ToastNative.successStyle.icon;

        props.type = ToastNative.Types.Success;

        ToastNative.show(props);
    }

    static errorStyle = {
        tintColor: "#d81919",
        icon: (
            <Feather
                name={"x-circle"}
                size={22}
                color={"#FFFFFF"}
                family={"Feather"}
            />
        )
    };

    static error(props) {
        if (!props) props = {};
        if (props.tintColor === undefined && Platform.OS === "ios")
            props.tintColor = ToastNative.errorStyle.tintColor;
        if (props.icon === undefined && Platform.OS === "ios")
            props.icon = ToastNative.errorStyle.icon;

        props.type = ToastNative.Types.Error;

        ToastNative.show(props);
    }

    static infoStyle = {
        tintColor: "#5162bc",
        icon: (
            <Feather name={"info"} size={22} color={"#FFFFFF"} family={"Feather"}/>
        )
    };

    static info(props) {
        if (!props) props = {};
        if (props.tintColor === undefined && Platform.OS === "ios")
            props.tintColor = ToastNative.infoStyle.tintColor;
        if (props.icon === undefined && Platform.OS === "ios")
            props.icon = ToastNative.infoStyle.icon;

        props.type = ToastNative.Types.Info;

        ToastNative.show(props);
    }

    static warnStyle = {
        tintColor: "#feb119",
        icon: (
            <Feather
                name={"minus-circle"}
                size={22}
                color={"#FFFFFF"}
                family={"Feather"}
            />
        )
    };

    static warn(props) {
        if (!props) props = {};
        if (props.tintColor === undefined && Platform.OS === "ios")
            props.tintColor = ToastNative.warnStyle.tintColor;
        if (props.icon === undefined && Platform.OS === "ios")
            props.icon = ToastNative.warnStyle.icon;

        props.type = ToastNative.Types.Warn;

        ToastNative.show(props);
    }

    static normalStyle = {
        tintColor: "#484d51"
    };

    static normal(props) {
        if (!props) props = {};
        if (props.tintColor === undefined && Platform.OS === "ios")
            props.tintColor = ToastNative.normalStyle.tintColor;

        props.type = ToastNative.Types.Normal;

        ToastNative.show(props);
    }

    render() {
        return null;
    }
}


export default ToastNative;