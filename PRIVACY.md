# SmartProxy Privacy Policy

Effective date: 2026-10-11

SmartProxy ("the extension") is a proxy management tool for Microsoft Edge. This policy explains what data the extension processes and how.

## What the extension accesses

- **Browsing information (URLs/domains).** To apply the proxy rules you define, the extension evaluates the URLs and domains of requests in your browser (via tabs, webNavigation and webRequest events) and, with your permission, whether those requests were proxied or failed. This processing happens locally on your device, in real time. It is not written to any history database and is not transmitted to the developer.
- **Proxy configuration and credentials.** Proxy server addresses, optional proxy usernames/passwords, rule lists, subscriptions and preferences are stored locally using the browser's extension storage so the extension can work across restarts.

## What the extension never does

- It never collects, stores on developer servers, sells, or shares your data with third parties.
- It contains no analytics, telemetry or tracking code.
- It does not read or modify page content.

## Network requests the extension makes

- **Subscriptions:** fetches rule/proxy lists from the subscription URLs you enter and enable.
- **Update check:** fetches a publicly hosted JSON file (updateinfo.json) to check for new versions. No user data is sent.
- **Sync (optional, off by default):** if you enable sync, your settings are synchronized through the browser's built-in sync storage or your own WebDAV server (server and credentials are chosen by you).

## Data retention and control

All data lives in your browser profile or on servers you configure yourself. Removing the extension, or clearing its data in the browser, removes it. WebDAV backups can be deleted from your server at any time.

## Changes

We may update this policy as the extension evolves. Material changes will be noted in the extension's release notes.

## Contact

pencilqaq@qq.com
