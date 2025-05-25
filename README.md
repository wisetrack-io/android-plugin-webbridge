# WiseTrack WebBridge Plugin

## Overview

The **WiseTrack WebBridge Plugin** provides a seamless integration between the native Android environment and a web-based JavaScript SDK, enabling two-way communication between a WebView and the WiseTrack tracking system.


## How to Use

Just call following code to register and enable webview bridge,
This registers the WiseTrack bridge as a Javascript interface in the web view

1. Enable Javascript in the webview:
    ```kotlin
    webView.settings.setJavaScriptEnabled(true)
    ```
2. Register WiseTrack Bridge Instance to web view: 
    ```kotlin
    WiseTrackBridge.getInstance(context, webview).register()
    ```
3. To dispose and unregister instance:
    ```kotlin
    WiseTrackBridge.getInstance(context, webview).unregister()
    ```

## Example
```kotlin
class MainActivity : Activity() {

    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        webView.settings.javaScriptEnabled = true
        webView.webChromeClient = WebChromeClient()
        webView.webViewClient = WebViewClient()

        WiseTrackBridge.getInstance(applicationContext, webView).register()

        try {
            webView.loadUrl("file:///android_asset/wisetrack/index.html")
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    override fun onDestroy() {
        // Unregister to avoid memory leaks
        WiseTrackBridge.getInstance(applicationContext, webView).unregister()
        super.onDestroy()
    }
}
```


## Helper Files (.js files)
These JavaScript files are provided to help you build and test web pages intended for display inside the WebView. You can use them as a reference or foundation when integrating WiseTrack functionality into your in-app HTML pages.
Located in: [`assets`](./assets/)

Files include:

- `wisetrack.js`: Main interface for invoking bridge methods.
- `wt_config.js`: Contains the `WTInitConfig` constructor and configuration schema.
- `wt_event.js`: Defines the `WTEvent` structure for event logging.
- `test.html`: A standalone page to manually trigger SDK methods via a UI or console.

