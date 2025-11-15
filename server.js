// server.js - クリスマス恋愛運 Express サーバー
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// OpenAI API 設定
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// クリスマス恋愛運生成
async function generateChristmasLoveFortune(birthdate, nickname, gender, relationshipStatus) {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);
    const daysUntilChristmas = Math.ceil((christmas - today) / (1000 * 60 * 60 * 24));
    
    const birthYear = new Date(birthdate).getFullYear();
    const age = new Date().getFullYear() - birthYear;
    
    const statusText = {
        single: 'シングル',
        dating: '交際中',
        complicated: '複雑な状況',
        seeking: '恋人募集中'
    };
    
    const prompt = `今日: ${today.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
ユーザー: ${nickname}
性別: ${gender === 'female' ? '女性' : '男性'}
年齢: ${age}
恋愛ステータス: ${statusText[relationshipStatus]}
クリスマスまで: ${daysUntilChristmas}日

${nickname}さんのクリスマス恋愛運を診断してください。
特に今年のクリスマスシーズンに焦点を当てて、温かく具体的なアドバイスを提供してください。

JSON形式で回答:
{
  "score": 70-100の数値,
  "meetingFortune": "出会い運の詳細（2-3文、具体的で前向き）",
  "existingFortune": "既存の関係についての運勢（2-3文）",
  "luckyAction": "ラッキーアクション（具体的な行動提案）",
  "detailedAdvice": {
    "soulmate": "運命の人の特徴（3-4文、詳細に）",
    "meetingPlace": "出会いの場所とタイミング（3-4文）",
    "confessionTiming": "告白のベストタイミング（2-3文）",
    "christmasDate": "クリスマスデートの提案（3-4文）"
  }
}

温かく、希望に満ちた、そして実践的なアドバイスを提供してください。`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: 'あなたは優しくて温かい恋愛占い師です。クリスマスシーズンに焦点を当てて、希望に満ちた前向きなアドバイスを提供します。常に具体的で実践的なアドバイスを心がけてください。'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.8,
                max_tokens: 1000
            })
        });

        if (!response.ok) {
            throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        } else {
            throw new Error('Invalid JSON response from OpenAI');
        }
    } catch (error) {
        console.error('OpenAI API Error:', error);
        throw error;
    }
}

// API エンドポイント: クリスマス恋愛運診断
app.post('/api/christmas-fortune', async (req, res) => {
    try {
        const { birthdate, nickname = 'あなた', gender, relationshipStatus = 'single' } = req.body;
        
        if (!birthdate || !gender) {
            return res.status(400).json({ error: '必須項目が入力されていません。' });
        }
        
        // OpenAI API 呼び出し
        const fortuneData = await generateChristmasLoveFortune(birthdate, nickname, gender, relationshipStatus);
        
        const hearts = Math.floor(fortuneData.score / 20);
        
        const result = {
            nickname,
            gender,
            relationshipStatus,
            score: fortuneData.score,
            hearts,
            message: fortuneData.score >= 85 ? '素晴らしい！運命の出会いが近い！' : 
                     fortuneData.score >= 70 ? '良い兆しあり！チャンスを逃さないで' : 
                     '準備を整えて、次のチャンスを待とう',
            meetingFortune: fortuneData.meetingFortune,
            existingFortune: fortuneData.existingFortune,
            luckyAction: fortuneData.luckyAction,
            detailedAdvice: fortuneData.detailedAdvice
        };
        
        res.json(result);
    } catch (error) {
        console.error('Christmas Fortune API Error:', error);
        res.status(500).json({ 
            error: '占いの読み込み中にエラーが発生しました。',
            details: error.message 
        });
    }
});

// API エンドポイント: 広告視聴確認
app.post('/api/ad/verify', async (req, res) => {
    try {
        const { adId, userId } = req.body;
        
        if (!adId || !userId) {
            return res.status(400).json({ error: '無効なリクエストです。' });
        }
        
        // 広告視聴完了として処理
        res.json({
            success: true,
            message: '広告視聴が確認されました。',
            unlockToken: `unlock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        });
    } catch (error) {
        console.error('Ad Verification Error:', error);
        res.status(500).json({ 
            error: '広告確認中にエラーが発生しました。'
        });
    }
});

// ヘルスチェック
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        service: 'christmas-love-fortune',
        features: {
            christmasFortune: true,
            detailedAdvice: true,
            adReward: true
        }
    });
});

// メインページ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`🎄 クリスマス恋愛運サーバーがポート${PORT}で実行中です。`);
    console.log(`http://localhost:${PORT}`);
    console.log('\n✨ クリスマスまでの恋愛運を占います！');
    console.log('\n利用可能なAPI:');
    console.log('- POST /api/christmas-fortune - クリスマス恋愛運診断');
    console.log('- POST /api/ad/verify - 広告視聴確認');
});

module.exports = app;