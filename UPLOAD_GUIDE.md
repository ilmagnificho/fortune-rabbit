# 📤 GitHub手動アップロードガイド

> ブラウザだけでファイルをアップロード（CMD/Terminal不要！）

---

## 📦 準備するもの

**[christmas-love-fortune.zip](../christmas-love-fortune.zip)** ⬅️ このファイルをダウンロード！

含まれるファイル:
```
✅ public/index.html       # フロントエンド（日本語・クリスマステーマ）
✅ server.js              # バックエンド（AI恋愛診断）
✅ package.json           # 依存関係
✅ vercel.json           # デプロイ設定
✅ .env.example          # 環境変数サンプル
✅ .gitignore           # Git設定
✅ README.md            # プロジェクト説明
```

---

## 🚀 アップロード方法（5分！）

### Step 1: ZIPファイルを解凍

```
Windows:
1. christmas-love-fortune.zip を右クリック
2. "すべて展開" または "Extract All" をクリック
3. 解凍！

Mac:
1. christmas-love-fortune.zip をダブルクリック
2. 自動的に解凍されます！
```

解凍後のフォルダ構造:
```
christmas-love-fortune/
├── public/
│   └── index.html
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── server.js
└── vercel.json
```

---

### Step 2: GitHubで新しいリポジトリを作成

```
1. https://github.com にアクセス
2. 右上の "+" → "New repository" をクリック
3. Repository name: christmas-love-fortune（または好きな名前）
4. Public を選択
5. "Add a README file" はチェックしない（アップロードするから！）
6. "Create repository" をクリック
```

---

### Step 3: ファイルをアップロード

#### 方法1: ドラッグ＆ドロップ（一番簡単！）⭐

```
1. GitHubリポジトリページで
2. "uploading an existing file" リンクをクリック
   （または "Add file" → "Upload files" をクリック）

3. christmas-love-fortuneフォルダ内のすべてのファイルとフォルダを
   ドラッグしてGitHubページにドロップ！
   
   ドラッグするファイル:
   - public フォルダ
   - .env.example
   - .gitignore
   - package.json
   - README.md
   - server.js
   - vercel.json

4. Commit changes:
   - Commit message: "Initial commit - クリスマス恋愛運占い"
   - "Commit changes" ボタンをクリック
```

#### 方法2: ファイル個別アップロード

**ドラッグができない場合:**

```
1. "Add file" → "Create new file" をクリック

2. ファイル名入力: package.json
3. 内容をコピー＆ペースト
4. "Commit new file" をクリック

5. 各ファイルで上記を繰り返す:
   - .env.example
   - .gitignore
   - README.md
   - server.js
   - vercel.json
   - public/index.html（フォルダパス含む！）
```

**public/index.html のアップロード方法:**
```
1. "Add file" → "Create new file" をクリック
2. ファイル名に "public/index.html" を入力
   （public/ を入力すると自動的にフォルダが作成される！）
3. index.htmlの内容をペースト
4. Commit!
```

---

### Step 4: アップロード確認

```
GitHubリポジトリで確認:

✅ public/
   ✅ index.html
✅ .env.example
✅ .gitignore
✅ package.json
✅ README.md
✅ server.js
✅ vercel.json

全部あれば成功！ 🎉
```

---

## 🚀 Vercel デプロイ

### Step 1: Vercel に接続

```
1. https://vercel.com にアクセス
2. "Sign Up" → "Continue with GitHub" をクリック
3. GitHubアカウントでログイン
4. 権限を承認
```

### Step 2: プロジェクトをImport

```
1. Vercelダッシュボードで "Add New..." → "Project" をクリック
2. "Import Git Repository" セクションで
3. "christmas-love-fortune" リポジトリを探す
4. "Import" をクリック
```

### Step 3: 設定

```
Framework Preset: Other（自動選択）
Build Command: （空欄のまま）
Output Directory: public
Install Command: npm install（自動）

上記設定そのままで...
```

### Step 4: 環境変数追加 ⚠️ 重要！

```
Environment Variables セクションで:

Name:  OPENAI_API_KEY
Value: sk-proj-your-openai-key-here
       （自分のOpenAI APIキーを入力！）

"Add" ボタンをクリック
```

### Step 5: デプロイ！

```
1. "Deploy" ボタンをクリック
2. 2-3分待つ ☕
3. 成功メッセージ表示！
4. デプロイURLをゲット
   例: https://christmas-love-fortune-abc123.vercel.app
```

---

## 🎉 デプロイ完了！テストする

### 1. サイトにアクセス

```
VercelのURLにアクセス:
https://christmas-love-fortune-abc123.vercel.app
```

### 2. 機能テスト

```
✅ サイトが開く
✅ 雪が降るアニメーション
✅ クリスマスまでの日数表示
✅ 性別選択
✅ 生年月日入力
✅ 診断開始
✅ 結果表示
✅ ハートスコア表示
✅ 詳細診断ロック
✅ 広告視聴でアンロック
```

### 3. モバイルテスト

```
1. スマホでURLにアクセス
2. 全機能が動作するか確認
3. スムーズなアニメーション確認
```

---

## 💰 Google AdSense 追加

### Step 1: AdSense 申請

```
1. https://www.google.com/adsense にアクセス
2. "お申し込み" をクリック
3. VercelのURLを入力:
   christmas-love-fortune-abc123.vercel.app
4. 個人情報を入力
5. 承認待ち（1-2週間）
```

### Step 2: 広告コードを取得

```
承認されたら:
1. AdSense → 広告 → 広告ユニット
2. "ディスプレイ広告" を選択
3. 広告コードをコピー
```

### Step 3: コードを挿入

**GitHubで編集:**

```
1. GitHubリポジトリ → public/index.html をクリック
2. 鉛筆アイコン(✏️) をクリック（Edit）
3. ファイル内で "TODO" を検索
4. ca-pub-2021805347195633 を
   自分のAdSense Publisher IDに変更
5. data-ad-slot="1111111111" を
   自分の広告ユニットIDに変更
6. "Commit changes" をクリック
```

### Step 4: 自動再デプロイ

```
Vercelが自動的に検知して再デプロイ！
1-2分後に新バージョンがデプロイ完了
```

---

## 🎯 既存サイト (unseiusagi.xyz) からの更新方法

### 既存のGitHubリポジトリを使う場合:

```
1. GitHubの unseiusagi.xyz リポジトリにアクセス
2. 既存のファイルを1つずつ置き換え:

   a) public/index.html を編集:
      - 編集アイコン(✏️)クリック
      - 新しいクリスマス版のコードをペースト
      - Commit changes

   b) server.js（または server-final.js）を編集:
      - 同様に新しいコードでリプレース
      - Commit

3. Vercelが自動的に再デプロイ
4. 数分後にサイト更新完了！
```

### 新しいブランチで試したい場合:

```
1. GitHubリポジトリで "main" ドロップダウン
2. "View all branches" クリック
3. "New branch" クリック
4. ブランチ名: christmas-version
5. このブランチに新ファイルをアップロード
6. Vercelで新ブランチを別URLでデプロイ
   （メインサイトは影響なし！）
```

---

## 🔧 トラブルシューティング

### Q: ファイルがアップロードできない！

**フォルダ構造を確認:**
```
✅ public/index.html（フォルダの中に！）
✅ server.js（ルートに！）
✅ package.json（ルートに！）

❌ christmas-love-fortune/public/index.html (X)
```

### Q: Vercel デプロイが失敗！

**チェックリスト:**
```
1. vercel.json ファイルある？
2. package.json ファイルある？
3. public/index.html ファイルある？
4. 環境変数 OPENAI_API_KEY 設定した？
```

### Q: 診断結果が出ない！

**確認事項:**
```
1. Vercel → Settings → Environment Variables
2. OPENAI_API_KEY を確認
3. 値が sk- で始まるか確認
4. OpenAIクレジット残高を確認
   (https://platform.openai.com/account/billing)
```

### Q: 広告が表示されない！

**正常です！**
```
AdSense承認前: 空白スペース（正常）
承認後24時間: 広告ロード中
承認後48時間後: 広告表示開始
```

---

## 📝 ファイル詳細説明

### public/index.html
```
- フロントエンド全体
- 日本語UI
- クリスマステーマデザイン
- 雪のアニメーション
- gamification要素
- Google AdSense広告エリア
```

### server.js
```
- Node.jsバックエンドサーバー
- OpenAI API連携
- クリスマス恋愛運生成
- API エンドポイント
```

### package.json
```
- npm依存関係リスト
- express, cors, dotenv
- 実行スクリプト
```

### vercel.json
```
- Vercel デプロイ設定
- ルーティング規則
- ビルド設定
```

### .env.example
```
- 環境変数テンプレート
- OPENAI_API_KEY サンプル
- ローカル開発用
```

### .gitignore
```
- Gitで除外するファイル
- node_modules
- .env（セキュリティ！）
```

---

## 🎯 次のステップ

### 1. ドメイン接続（オプション）

```
Vercel → Settings → Domains
→ 独自ドメインを追加
→ DNS設定
→ 完了！
```

### 2. 分析ツール追加

```
Google Analytics:
1. analytics.google.com で登録
2. トラッキングコード取得
3. public/index.html に追加
4. 再デプロイ
```

### 3. マーケティング開始

```
✅ 友達にシェア
✅ SNS投稿（LINE、X、Instagram）
✅ コミュニティで宣伝
✅ インフルエンサー連携
```

---

## ✅ 最終チェックリスト

**GitHub アップロード:**
- [ ] christmas-love-fortune.zip ダウンロード
- [ ] 解凍
- [ ] GitHubリポジトリ作成
- [ ] 全ファイルアップロード
- [ ] ファイル構造確認

**Vercel デプロイ:**
- [ ] Vercel登録
- [ ] プロジェクトImport
- [ ] 環境変数設定（OPENAI_API_KEY）
- [ ] Deploy クリック
- [ ] デプロイURL確認

**テスト:**
- [ ] サイトアクセス
- [ ] 診断テスト
- [ ] モバイルテスト
- [ ] アニメーション確認

**広告設定:**
- [ ] AdSense申請
- [ ] 広告コード挿入
- [ ] 再デプロイ
- [ ] 承認待ち

---

## 🎄 成功のポイント

### デザイン
✨ クリスマス感満載  
💗 かわいいピンク基調  
🎁 gamification要素  
📱 スマホ完全対応  

### マーケティング
🎯 日本の10-20代女性にフォーカス  
📅 クリスマス前のタイミング  
💌 シェアしやすい結果  
🔥 バイラル要素搭載  

### マネタイズ
💰 リワード広告（高収益）  
📊 詳細診断でエンゲージメント  
🎁 将来のプレミアム機能  

---

**完了しましたか？** 🎉

**あなたは今、実際のサービスを運営する運営者です！**

**目標: 3ヶ月で月¥1,000,000！** 💰

**頑張ってください！** 🎄💕✨

---

## 📞 追加サポート

### 公式ドキュメント
- Vercel: https://vercel.com/docs
- OpenAI: https://platform.openai.com/docs
- AdSense: https://support.google.com/adsense

### コミュニティ
- GitHub Issues（このリポジトリ）
- Vercel Discord
- OpenAI Community

---

**簡単でしょう？** 🚀

**5分でデプロイ完了！** ⚡

**成功を祈っています！** 🌟🎄