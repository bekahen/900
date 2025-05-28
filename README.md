# PSFree Host 9.00 - PlayStation Pulse Edition

A WebKit exploit implementation for PlayStation 4 firmware 9.00, providing arbitrary read/write capabilities through CVE-2022-22620. This version is maintained and distributed by the **Telegram PlayStation Pulse** community.

## 🎯 Overview

PSFree is a browser-based exploit that targets WebKit vulnerabilities in PlayStation 4 systems running firmware 9.00. It establishes memory corruption primitives that can be used as a foundation for homebrew execution and system modifications.

## 🔧 Technical Details

- **Target**: PlayStation 4 firmware 9.00
- **Vulnerability**: CVE-2022-22620 (WebKit Use-After-Free)
- **Method**: SerializedScriptValue exploitation via fastMalloc heap manipulation
- **Capabilities**: Arbitrary memory read/write primitives

## 🚀 Usage

1. **Setup**: Host the files on a web server accessible by your PS4
2. **Access**: Navigate to the hosted URL using the PS4 browser
3. **Execute**: The exploit runs automatically upon page load
4. **Cache**: Use `cache.html` for offline functionality

## 📁 Project Structure

```
├── index.html          # Main exploit interface
├── cache.html          # Offline cache version
├── psfree.mjs          # Core WebKit exploit implementation
├── lapse.mjs           # Kernel exploit loader
├── payload.js          # Payload execution handler
├── module/             # Exploit utility modules
├── kpatch/             # Kernel patches for 9.00
└── rop/                # Return-Oriented Programming chains
```

## ⚠️ Important Notes

- **Educational Purpose**: This software is intended for research and educational purposes
- **Firmware Specific**: Only compatible with PS4 firmware 9.00
- **No Warranty**: Use at your own risk - no guarantees provided
- **Legal Compliance**: Ensure compliance with local laws and regulations

## 🏆 Credits

- **PlayStation Pulse Community**: [Telegram Group](https://t.me/PlayStation_Puls)
- **Author**: [BlackArch](https://t.me/sudoBlackArch)
- **Special Thanks**: [kmeps4](https://github.com/kmeps4) and the PS4 development community
- **Original PSFree**: Anonymous contributors from the homebrew scene

## 📜 License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See the [LICENSE](LICENSE) file for full details.

## 🔗 Community

Join our Telegram community for support, updates, and discussions:
- **Main Group**: [@PlayStation_Puls](https://t.me/PlayStation_Puls)
- **Developer**: [@sudoBlackArch](https://t.me/sudoBlackArch)

## ⚡ Features

- **Modern UI**: Clean, responsive interface optimized for PS4 browser
- **Progress Tracking**: Real-time exploit progress visualization
- **Console Logging**: Detailed execution logs for debugging
- **Offline Support**: Cached version for offline usage
- **Alert System**: User-friendly status notifications

---

*Developed with ❤️ by the PlayStation Pulse community*
