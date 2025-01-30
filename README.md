# Meetups

這是一個使用 [Create React App](https://create-react-app.dev/) 製作的 Meetups 專案，並使用 [Google Firebase](https://firebase.google.com/) 作為後端服務來管理和存儲資料。

## 目錄

- [專案介紹](#專案介紹)
- [功能說明](#功能說明)
- [安裝與使用](#安裝與使用)
- [Firebase 設定](#firebase-設定)
- [專案結構](#專案結構)
- [貢獻指南](#貢獻指南)
- [License](#license)

## 專案介紹

Meetups 是一個簡單的 React 應用，讓使用者可以建立和管理聚會活動。使用 Google Firebase 作為後端服務來儲存和管理活動資料。

## 功能說明

- **活動列表**：顯示所有已建立的聚會活動。
- **新增活動**：使用者可以新增新的聚會活動，包括標題、圖片、地址、描述等。
- **活動詳情**：顯示單個活動的詳細資訊。
- **Firebase 後端**：使用 Firebase Firestore 來儲存和管理活動資料。

## 安裝與使用

1. **克隆這個倉庫**

   ```sh
   git clone https://github.com/your-username/meetups.git
   cd meetups
   ```

2. **安裝依賴**

   使用 npm:

   ```sh
   npm install
   ```

   或者使用 yarn:

   ```sh
   yarn install
   ```

3. **設定 Firebase**

   請參考下方的 [Firebase 設定](#firebase-設定) 來設定 Firebase。

4. **運行應用**

   使用 npm:

   ```sh
   npm start
   ```

   或者使用 yarn:

   ```sh
   yarn start
   ```

   在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 來查看應用。

## Firebase 設定

1. **建立 Firebase 專案**

   前往 [Firebase 控制台](https://console.firebase.google.com/)，建立一個新的專案。

2. **設定 Firebase Firestore**

   在 Firebase 控制台中啟用 Firestore 資料庫。

3. **獲取 Firebase 設定**

   在 Firebase 控制台中，前往專案設置，獲取 Firebase 設定（包含 apiKey、authDomain、projectId 等）。

4. **配置 Firebase**

   在專案的 `src` 目錄下建立一個 `firebase.js` 檔案，並加入以下內容：

   ```javascript
   // src/firebase.js
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   export { db };
   ```

## 專案結構

```plaintext
meetups/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── MeetupList.js
│   │   ├── NewMeetupForm.js
│   │   └── ...
│   ├── pages/
│   │   ├── AllMeetups.js
│   │   ├── NewMeetup.js
│   │   └── ...
│   ├── firebase.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## 貢獻指南

歡迎任何人來貢獻此專案！如果你有任何建議或改進，請隨時提交 pull request。

1. Fork 這個倉庫
2. 建立一個新分支 (`git checkout -b feature/your-feature`)
3. 提交你的更改 (`git commit -m 'Add some feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 打開一個 Pull Request

## License

本專案不包含任何版權，任何人都可以自由使用、修改及分發。
