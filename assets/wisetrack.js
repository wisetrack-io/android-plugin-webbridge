var WiseTrack = (function () {
    function isBridgeAvailable() {
        if (!WiseTrackBridge) {
            console.error('[WiseTrack]: WiseTrackBridge is not available');
            return false;
        }
        return true;
    }

    return {
        initialize(config) {
            if (!isBridgeAvailable()) return;
            if (!(config instanceof WTInitConfig)) {
                console.error('[WiseTrack]: Config must be an instance of WTInitConfig');
                return;
            }
            try {
                const configString = JSON.stringify(config.toJSON());
                WiseTrackBridge.initialize(configString);
            } catch (e) {
                console.error('[WiseTrack]: initialize failed:', e.message);
            }
        },

        clearDataAndStop() {
            if (!isBridgeAvailable()) return;
            WiseTrackBridge.clearDataAndStop();
        },

        setLogLevel(level) {
            if (!isBridgeAvailable()) return;
            if (!Object.values(WTLogLevel).includes(level)) {
                console.warn('[WiseTrack]: Invalid log level:', level);
                return;
            }
            WiseTrackBridge.setLogLevel(level);
        },

        setEnabled(enabled) {
            if (!isBridgeAvailable()) return;
            if (typeof enabled !== 'boolean') {
                console.warn('[WiseTrack]: Enabled must be a boolean');
                return;
            }
            WiseTrackBridge.setEnabled(enabled.toString());
        },

        getADID() {
            if (!isBridgeAvailable()) return;
            return WiseTrackBridge.getADID();
        },

        getReferrer() {
            if (!isBridgeAvailable()) return;
            return WiseTrackBridge.getReferrer();
        },

        startTracking() {
            if (!isBridgeAvailable()) return;
            WiseTrackBridge.startTracking();
        },

        stopTracking() {
            if (!isBridgeAvailable()) return;
            WiseTrackBridge.stopTracking();
        },

        destroy() {
            if (!isBridgeAvailable()) return;
            WiseTrackBridge.destroy();
        },

        setPackagesInfo() {
            if (!isBridgeAvailable()) return;
            WiseTrackBridge.setPackagesInfo();
        },

        setFCMToken(token) {
            if (!isBridgeAvailable()) return;
            if (typeof token !== 'string') {
                console.warn('[WiseTrack]: FCM token must be a string');
                return;
            }
            WiseTrackBridge.setFCMToken(token);
        },

        logEvent(event) {
            if (!isBridgeAvailable()) return;
            if (!(event instanceof WTEvent)) {
                console.warn('[WiseTrack]: Event must be an instance of WTEvent');
                return;
            }
            try {
                const eventString = JSON.stringify(event.toJSON());
                WiseTrackBridge.logEvent(eventString);
            } catch (e) {
                console.error('[WiseTrack]: logEvent failed:', e.message);
            }
        },

        isEnabled() {
            if (!isBridgeAvailable()) return;
            return WiseTrackBridge.isEnabled();
        }
    };
})();
