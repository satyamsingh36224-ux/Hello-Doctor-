# 📱 ऐप फ़ाइल (.aab) बनाने की पूरी प्रक्रिया

नमस्ते! यह गाइड आपको बताएगी कि आप अपने कंप्यूटर पर कोड से `.aab` (Android App Bundle) फाइल कैसे बना सकते हैं। यही फाइल स्टोर पर अपलोड होती है।

---

### चरण 1: सॉफ्टवेयर इंस्टॉल करें (सिर्फ एक बार)
1.  **Node.js**: [nodejs.org](https://nodejs.org/) से 'LTS' वर्जन इंस्टॉल करें।
2.  **Android Studio**: [developer.android.com](https://developer.android.com/studio) से इंस्टॉल करें।

### चरण 2: अपना कोड तैयार करें
अपने प्रोजेक्ट के फोल्डर में टर्मिनल (Terminal) खोलें और यह कमांड चलाएँ:
```bash
npm run build:android
```
यह कमांड आपके पूरे वेब कोड को कंपाइल करेगा और उसे Android फोल्डर में भेज देगा।

### चरण 3: Android Studio खोलें
अब इस कमांड से अपना प्रोजेक्ट Android Studio में खोलें:
```bash
npx cap open android
```

### चरण 4: साइन की हुई (Signed) फाइल बनाना
Android Studio खुलने के बाद:
1. ऊपर मेनू में **Build > Generate Signed Bundle / APK...** पर जाएं।
2. **Android App Bundle** चुनें और **Next** दबाएं।
3. **Key Store Path**: 'Create New' पर क्लिक करें और एक पासवर्ड चुनें। (इस फाइल को **KEY_MANAGEMENT_GUIDE.md** के अनुसार सुरक्षित रखें)।
4. अपना पासवर्ड और 'Alias' (जैसे 'mykey') डालें।
5. **Build Variant** में **release** चुनें।
6. **Finish** दबाएं।

🎉 **बधाई हो!** अब `android/app/release/app-release.aab` पाथ पर आपकी फाइल तैयार है। यही फाइल आप Indus या Play Store पर अपलोड करेंगे।
