# Football Team Search App

このアプリケーションは、[football-data.org](https://www.football-data.org/) の API を利用して、サッカーチームの情報を検索・表示する Next.js + React ベースのシングルページアプリケーションです。学習目的で React、Next.js、JavaScript の理解を深めるために作成されました。

---

## 📌 主な機能

* **Competition 検索**: 各サッカーリーグ（例: プレミアリーグ、ブンデスリーガ など）ごとに所属チームを一覧表示
* **Area 検索**: 国や地域（例: イングランド、ドイツ、日本 など）ごとに所属チームを一覧表示
* **チーム詳細表示**: 検索結果からチームを選択し、ロゴ、ホームスタジアム、設立年などの詳細情報を表示

---

## 🛠️ 技術スタック

* **フレームワーク**: Next.js
* **ライブラリ**: React
* **言語**: JavaScript (ES6+)
* **CSS モジュール**: 各コンポーネント単位でスタイルを分割管理
* **データ取得**: `fetch` を使用した REST API コール
* **環境変数管理**: `.env.local`

---

## 🚀 セットアップ・起動手順

1. リポジトリをクローン

   ```bash
   git clone https://github.com/gitYutaHarada/react-study-soccer-board.git
   cd <YOUR_PROJECT_DIRECTORY>
   ```

2. 依存パッケージをインストール

   ```bash
   yarn install
   # または npm install
   ```

3. 環境変数ファイル `.env.local` をプロジェクトルートに作成し、以下を設定

   ```env
   # football-data.org で取得した API トークン
   NEXT_PUBLIC_FOOTBALL_DATA_API_TOKEN=YOUR_API_TOKEN_HERE
   ```

4. 開発サーバーを起動

   ```bash
   yarn dev
   # または npm run dev
   ```

5. ブラウザで `http://localhost:3000` を開き、動作を確認

---

## 📁 プロジェクト構成 (一部)

```
├── src/
│   ├── app/              # Next.js App Router ディレクトリ
│   │   ├── api/          # API Route (areas, competitions, teams, player)
│   │   ├── layout.js     # グローバルレイアウト
│   │   ├── page.js       # ホームページ
│   ├── components/       # React コンポーネント
│   │   ├── Players/
│   │   │   ├── PlayerAll/
│   │   │   ├── PlayerInfo/
│   │   ├── Search/
│   │   │   ├── SearchByArea/
│   │   │   ├── SearchByCompetition/
│   │   ├── Team/
│   │   │   ├── TeamInfo/
│   │   │   ├── RunningCompetition/
│   ├── hooks/            # カスタムフック
│   ├── globals.css       # グローバル CSS
│   └── env.local         # 環境変数
├── .gitignore
├── next.config.mjs       # Next.js 設定
└── package.json
```

---

## 🔑 環境変数

* **NEXT\_PUBLIC\_FOOTBALL\_DATA\_API\_TOKEN**: football-data.org から発行される API トークンを設定します。

---

## 📝 使用方法

1. ホーム画面で「Competition 検索」または「Area 検索」を選択。
2. リーグ名または地域名のドロップダウンから対象を選び、「検索」ボタンをクリック。
3. チーム一覧が表示されるので、詳細を見たいチームをクリック。
4. チームの詳細情報（ロゴ、名称、設立年、ホームスタジアム など）を確認。

---

## 🚧 注意事項

* API 利用制限に注意してください（無料プランではリクエスト上限があります）。
* キャッシュやエラーハンドリングは簡易的な実装のため、本番用途では追加対応が必要です。

---

## 🎓 学習メモ

* Next.js の App Router を活用した API Routes
* React コンポーネントの階層構造設計
* SWR や React Query 導入前のプレーン `fetch` 実装

---


