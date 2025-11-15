# 🎄 クリスマス恋愛運占い

> クリスマスシーズン特化！AI恋愛診断サービス

日本市場ターゲット・10-20代女性向け・gamification要素搭載

---

## 🎯 プロジェクト概要

### コンセプト
- **ターゲット**: 日本の10-20代女性
- **テーマ**: クリスマス・年末シーズンの恋愛運
- **スタイル**: poomang.com的な軽いgamification
- **マネタイズ**: Google AdSense（リワード広告）

### 主な機能
✨ クリスマス恋愛運スコア診断  
💕 運命の人の特徴分析  
🎁 デート・告白のベストタイミング提案  
📊 gamification要素（スコア、ハート数）  
🔒 リワード広告で詳細解放  

---

## 📦 ファイル構成

```
christmas-love-fortune/
├── public/
│   └── index.html          # フロントエンド
├── .env.example           # 環境変数サンプル
├── .gitignore            # Git除外設定
├── package.json          # 依存関係
├── server.js             # バックエンド
├── vercel.json          # Vercel設定
└── README.md            # このファイル
```

---

## 🚀 クイックスタート

### 1. 環境設定

```bash
# .envファイル作成
cp .env.example .env

# .envを開いてOpenAI APIキーを入力
# OPENAI_API_KEY=sk-your-key-here
```

### 2. ローカルテスト

```bash
# 依存関係インストール
npm install

# サーバー起動
npm start

# ブラウザで確認
# http://localhost:3000
```

### 3. Vercel デプロイ

#### 方法1: Vercel Web（推奨）⭐

```
1. https://vercel.com にアクセス
2. GitHubアカウントでログイン
3. "Import Project"をクリック
4. このリポジトリを選択
5. 環境変数設定:
   Name: OPENAI_API_KEY
   Value: sk-your-key-here
6. Deploy!
```

---

## 🎨 デザインコンセプト

### カラースキーム
- **メインカラー**: ピンク・レッド系（恋愛感）
- **アクセント**: ゴールド（クリスマス感）
- **背景**: グラデーション紫（神秘的）

### UX/UI特徴
🎄 雪が降るアニメーション  
💗 ハートベースのスコアリング  
📱 完全レスポンシブ  
🎁 ロック解除のgamification  
✨ マイクロインタラクション豊富  

---

## 💰 マネタイズ戦略

### 広告配置
```
入力画面: バナー広告
結果画面: ネイティブ広告
詳細診断: リワード広告（核心！）
```

### 収益見込み
```
DAU 1,000人  → ¥150,000/月
DAU 5,000人  → ¥750,000/月
DAU 10,000人 → ¥1,500,000/月
```

**ターゲット**: 3ヶ月で月¥1,000,000達成！

---

## 📊 API エンドポイント

### POST /api/christmas-fortune

クリスマス恋愛運診断

**Request:**
```json
{
  "birthdate": "2000-12-25",
  "nickname": "さくら",
  "gender": "female",
  "relationshipStatus": "single"
}
```

**Response:**
```json
{
  "nickname": "さくら",
  "score": 92,
  "hearts": 4,
  "message": "素晴らしい！運命の出会いが近い！",
  "meetingFortune": "クリスマスイブの夜、運命的な...",
  "existingFortune": "大切な人との関係が...",
  "luckyAction": "赤い服を着て...",
  "detailedAdvice": {
    "soulmate": "...",
    "meetingPlace": "...",
    "confessionTiming": "...",
    "christmasDate": "..."
  }
}
```

---

## 🎯 マーケティング戦略

### SNS展開
📱 LINE - メインターゲット  
🐦 X (Twitter) - 拡散用  
📸 Instagram - ビジュアル訴求  

### バイラル要素
✅ シェアしやすい診断結果  
✅ 「今日の診断数」でFOMO喚起  
✅ 友達と比較できる仕組み  
✅ クリスマスまでカウントダウン  

### SEO対策
- タイトル: クリスマス 恋愛運 占い 無料
- 説明: クリスマスまでに恋人 診断
- キーワード: クリスマス デート 相性 運命の人

---

## 🔧 カスタマイズガイド

### Google AdSense設定

`public/index.html`を編集:

```html
<!-- 📝 TODO部分を探して -->
data-ad-client="ca-pub-2021805347195633"
<!-- ↑を自分のIDに変更 -->

data-ad-slot="1111111111"
<!-- ↑を自分の広告ユニットIDに変更 -->
```

### デザイン変更

色を変えたい場合は`index.html`の`<style>`セクション:

```css
/* メインカラー変更 */
background: linear-gradient(135deg, #FF1744 0%, #F50057 100%);

/* スノーフレーク変更 */
const snowflakes = ['❄️', '⛄', '🎄', '⭐'];
```

---

## 📱 モバイル最適化

- ✅ タッチ操作最適化
- ✅ スワイプジェスチャー
- ✅ スムーズアニメーション
- ✅ 軽量・高速読み込み

---

## 🐛 トラブルシューティング

### Q: APIエラーが出る

**A:** Vercel環境変数を確認
```
Settings → Environment Variables → OPENAI_API_KEY
```

### Q: 広告が表示されない

**A:** AdSense承認待ち（1-2週間）  
承認前は広告枠のみ表示されます。

### Q: デプロイが失敗する

**A:** チェックリスト
- [ ] vercel.json ある？
- [ ] package.json ある？
- [ ] public/index.html ある？
- [ ] OPENAI_API_KEY 設定した？

---

## 📈 ロードマップ

### Phase 1 (12月): ローンチ
- [x] 基本診断機能
- [x] リワード広告
- [x] SNSシェア
- [ ] LINE送信機能強化

### Phase 2 (1月): 機能拡張
- [ ] 相性診断（2人用）
- [ ] デート場所提案
- [ ] 毎日の恋愛運
- [ ] プッシュ通知

### Phase 3 (2月): マネタイズ強化
- [ ] プレミアム会員
- [ ] 詳細レポートPDF
- [ ] 恋愛コーチング
- [ ] アフィリエイト連携

---

## 🎁 特典機能アイデア

### 今後追加予定
💌 毎日の恋愛運プッシュ  
🎯 デートスポット提案  
💝 プレゼント提案  
📅 告白カウントダウン  
🔮 週間・月間運勢  

---

## 🤝 コントリビューション

プルリクエスト歓迎！

1. Fork
2. Feature Branchを作成 (`git checkout -b feature/amazing`)
3. Commit (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing`)
5. Pull Request作成

---

## 📞 サポート

- Issues: [GitHub Issues](../../issues)
- Email: support@example.com
- Twitter: @example

---

## 📄 ライセンス

MIT License - 自由に使用してください！

---

**クリスマスまでに恋を叶えよう！** 🎄💕

**目標: 3ヶ月で月¥1,000,000！** 💰✨