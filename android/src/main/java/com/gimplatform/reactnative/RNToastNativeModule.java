package com.gimplatform.reactnative;

import android.view.Gravity;
import com.facebook.common.logging.FLog;
import com.facebook.react.bridge.*;

public class RNToastNativeModule extends ReactContextBaseJavaModule implements LifecycleEventListener{

    private android.widget.Toast mostRecentToast;

    // note that webView.isPaused() is not Xwalk compatible, so tracking it poor-man style
    private boolean isPaused;

    public RNToastNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNToastNative";
    }

    @ReactMethod
    public void show(final ReadableMap props) {
        if (this.isPaused) {
            return;
        }

        final String message = props.getString("title");
        final int duration = props.getInt("duration");
        final String position = "bottom"; //props.getString("position");

        UiThreadUtil.runOnUiThread(new Runnable() {
            public void run() {
                android.widget.Toast toast = android.widget.Toast.makeText(
                        getReactApplicationContext(),
                        message,
                        duration == 0 ? android.widget.Toast.LENGTH_SHORT : android.widget.Toast.LENGTH_LONG);

                if ("top".equals(position)) {
                    toast.setGravity(Gravity.TOP | Gravity.CENTER_HORIZONTAL, 0, 20);
                } else if ("bottom".equals(position)) {
                    toast.setGravity(Gravity.BOTTOM | Gravity.CENTER_HORIZONTAL, 0, 20);
                } else if ("center".equals(position)) {
                    toast.setGravity(Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL, 0, 0);
                } else {
                    FLog.e("RCTToast", "invalid position. valid options are 'top', 'center' and 'bottom'");
                    return;
                }
                toast.show();
                mostRecentToast = toast;
            }
        });
    }

    @ReactMethod
    public void hide() throws Exception {
        if (mostRecentToast != null) {
            mostRecentToast.cancel();
        }
    }

    @Override
    public void initialize() {
        getReactApplicationContext().addLifecycleEventListener(this);
    }

    @Override
    public void onHostPause() {
        if (mostRecentToast != null) {
            mostRecentToast.cancel();
        }
        this.isPaused = true;
    }

    @Override
    public void onHostResume() {
        this.isPaused = false;
    }

    @Override
    public void onHostDestroy() {
        this.isPaused = true;
    }
}