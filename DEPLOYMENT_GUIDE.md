# 🌐 अपने ऐप को वेबसाइट के रूप में लाइव करें

नमस्ते! ऐप के साथ-साथ आप इसे एक वेबसाइट के रूप में भी चला सकते हैं (जैसे `hellodoctor.web.app`)।

इसके लिए हम **Firebase Hosting** का उपयोग करेंगे:

### चरण:
1.  [Firebase Console](https://console.firebase.google.com/) पर अपना प्रोजेक्ट खोलें।
2.  'Build' मेनू में **Hosting** चुनें।
3.  अपने कंप्यूटर पर टर्मिनल में यह कमांड चलाएँ:
    ```bash
    npm install -g firebase-tools
    firebase login
    firebase init hosting
    ```
4.  **Public Directory** में `out` लिखें।
5.  **Single Page App** के सवाल पर `Yes` बोलें।
6.  ऐप को लाइव करने के लिए:
    ```bash
    npm run build
    firebase deploy
    ```

अब आपका ऐप इंटरनेट पर एक यूआरएल (URL) के रूप में सबको दिखेगा!
