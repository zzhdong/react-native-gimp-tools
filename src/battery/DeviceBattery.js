import {NativeModules, NativeEventEmitter} from "react-native";

const {RNDeviceBattery} = NativeModules;
const batteryEventEmitter = new NativeEventEmitter(RNDeviceBattery);

export default {
    isCharging: RNDeviceBattery.isCharging,
    getBatteryLevel: RNDeviceBattery.getBatteryLevel,
    addListener: callback => batteryEventEmitter.addListener(RNDeviceBattery.BATTERY_CHANGE_EVENT, callback)
};