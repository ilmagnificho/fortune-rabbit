// server-final.js - Express 서버 with 다국어 + 광고 전용 모델
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// OpenAI API 설정
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 언어별 프롬프트 템플릿
const languagePrompts = {
    ko: {
        systemPrompt: '당신은 운세토끼입니다. 친근하고 재미있는 운세를 알려주는 AI 토끼 점술가입니다. 항상 긍정적이고 희망적인 메시지를 전달합니다.',
        fortuneLevels: ['최상', '상', '중상', '중', '중하']
    },
    en: {
        systemPrompt: 'You are Fortune Rabbit. You are a friendly and fun AI fortune-telling rabbit. Always deliver positive and hopeful messages.',
        fortuneLevels: ['Excellent', 'Good', 'Above Average', 'Average', 'Below Average']
    },
    ja: {
        systemPrompt: 'あなたは運勢うさぎです。親しみやすく楽しい占いうさぎAIです。常にポジティブで希望的なメッセージを伝えます。',
        fortuneLevels: ['最高', '良', '中上', '中', '中下']
    },
    zh: {
        systemPrompt: '你是运势兔。你是一个友好有趣的AI算命兔子。总是传递积极和充满希望的信息。',
        fortuneLevels: ['极好', '好', '中上', '中', '中下']
    }
};

// 기본 운세 생성
async function getBasicFortuneFromOpenAI(birthdate, nickname, language = 'ko') {
    const today = new Date().toLocaleDateString(language === 'ko' ? 'ko-KR' : language === 'ja' ? 'ja-JP' : language === 'zh' ? 'zh-CN' : 'en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    });
    
    const birthYear = new Date(birthdate).getFullYear();
    const age = new Date().getFullYear() - birthYear;
    
    const fortuneLevels = languagePrompts[language].fortuneLevels.join('/');
    
    const prompt = `Today: ${today}
User: ${nickname}
Birth date: ${birthdate}
Age: ${age}

Please provide today's fortune in ${language === 'ko' ? 'Korean' : language === 'en' ? 'English' : language === 'ja' ? 'Japanese' : 'Chinese'}.

Respond in JSON format:
{
  "score": number between 70-100,
  "love": one of "${fortuneLevels}",
  "money": one of "${fortuneLevels}",
  "health": one of "${fortuneLevels}",
  "work": one of "${fortuneLevels}",
  "color": "lucky color name",
  "number": number between 1-9,
  "time": "lucky time range (e.g., 3-5 PM)",
  "advice": "warm and specific advice for the day (2-3 sentences, around 50 characters)"
}

The advice should be specific, actionable, and positive.`;

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
                        content: languagePrompts[language].systemPrompt
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.8,
                max_tokens: 600
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

// 상세 운세 생성 (시간대별 X, 전체 하루)
async function getDetailedFortuneFromOpenAI(birthdate, nickname, fortuneType, language = 'ko') {
    const today = new Date().toLocaleDateString(language === 'ko' ? 'ko-KR' : language === 'ja' ? 'ja-JP' : language === 'zh' ? 'zh-CN' : 'en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    });
    
    const birthYear = new Date(birthdate).getFullYear();
    const age = new Date().getFullYear() - birthYear;
    
    const typeNames = {
        love: { ko: '연애운', en: 'Love Fortune', ja: '恋愛運', zh: '爱情运' },
        money: { ko: '재물운', en: 'Money Fortune', ja: '金運', zh: '财运' },
        health: { ko: '건강운', en: 'Health Fortune', ja: '健康運', zh: '健康运' },
        work: { ko: '학업/업무운', en: 'Work/Study Fortune', ja: '仕事運', zh: '工作/学业运' }
    };
    
    const prompt = `Today: ${today}
User: ${nickname}
Birth date: ${birthdate}
Age: ${age}

Please provide detailed ${typeNames[fortuneType][language]} for today in ${language === 'ko' ? 'Korean' : language === 'en' ? 'English' : language === 'ja' ? 'Japanese' : 'Chinese'}.

Respond in JSON format:
{
  "summary": "Brief summary of today's ${typeNames[fortuneType][language]} (1-2 sentences)",
  "detail": "Detailed fortune for the entire day with specific and practical advice (4-5 sentences, comprehensive guide)",
  "tips": "Specific action guide to improve ${typeNames[fortuneType][language]} today (2-3 sentences)"
}

Provide specific and actionable advice for the ENTIRE day, not divided by time periods.`;

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
                        content: languagePrompts[language].systemPrompt + ' You are an experienced professional fortune teller. Provide specific and practical advice.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 800
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

// API 엔드포인트: 기본 운세 조회
app.post('/api/fortune', async (req, res) => {
    try {
        const { birthdate, nickname = 'You', language = 'ko' } = req.body;
        
        if (!birthdate) {
            return res.status(400).json({ error: 'Birth date is required.' });
        }
        
        // 유효한 언어 확인
        const validLanguages = ['ko', 'en', 'ja', 'zh'];
        const lang = validLanguages.includes(language) ? language : 'en';
        
        // OpenAI API 호출
        const fortuneData = await getBasicFortuneFromOpenAI(birthdate, nickname, lang);
        
        // 추가 계산
        const stars = Math.floor(fortuneData.score / 20);
        const rank = Math.floor(100 - fortuneData.score);
        
        const result = {
            nickname,
            language: lang,
            score: fortuneData.score,
            stars,
            rank,
            love: fortuneData.love,
            money: fortuneData.money,
            health: fortuneData.health,
            work: fortuneData.work,
            color: fortuneData.color,
            number: fortuneData.number,
            time: fortuneData.time,
            advice: fortuneData.advice
        };
        
        res.json(result);
    } catch (error) {
        console.error('Fortune API Error:', error);
        res.status(500).json({ 
            error: 'An error occurred while loading fortune.',
            details: error.message 
        });
    }
});

// API 엔드포인트: 상세 운세 조회 (광고 시청 필요)
app.post('/api/fortune/detail', async (req, res) => {
    try {
        const { birthdate, nickname = 'You', fortuneType, watchedAd = false, language = 'ko' } = req.body;
        
        if (!birthdate || !fortuneType) {
            return res.status(400).json({ error: 'Required information is missing.' });
        }
        
        // 유효한 운세 타입 확인
        const validTypes = ['love', 'money', 'health', 'work'];
        if (!validTypes.includes(fortuneType)) {
            return res.status(400).json({ error: 'Invalid fortune type.' });
        }
        
        // 유효한 언어 확인
        const validLanguages = ['ko', 'en', 'ja', 'zh'];
        const lang = validLanguages.includes(language) ? language : 'en';
        
        // 광고 시청 확인 (실제로는 AdMob SDK에서 검증)
        if (!watchedAd) {
            return res.status(403).json({ 
                error: 'Ad watching is required.',
                requiresAd: true 
            });
        }
        
        // OpenAI API 호출
        const detailData = await getDetailedFortuneFromOpenAI(birthdate, nickname, fortuneType, lang);
        
        const icons = {
            love: '💝',
            money: '💰',
            health: '🏥',
            work: '📚'
        };
        
        const result = {
            fortuneType,
            language: lang,
            icon: icons[fortuneType],
            summary: detailData.summary,
            detail: detailData.detail,
            tips: detailData.tips
        };
        
        res.json(result);
    } catch (error) {
        console.error('Detail Fortune API Error:', error);
        res.status(500).json({ 
            error: 'An error occurred while loading detailed fortune.',
            details: error.message 
        });
    }
});

// API 엔드포인트: 광고 시청 확인 (실제로는 AdMob 서버 사이드 검증)
app.post('/api/ad/verify', async (req, res) => {
    try {
        const { adId, userId } = req.body;
        
        // 실제로는 Google AdMob 서버 사이드 검증
        // https://developers.google.com/admob/android/rewarded-video-ssv
        
        if (!adId || !userId) {
            return res.status(400).json({ error: 'Invalid request.' });
        }
        
        // 광고 시청 완료로 처리
        res.json({
            success: true,
            message: 'Ad viewing confirmed.',
            unlockToken: `unlock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        });
    } catch (error) {
        console.error('Ad Verification Error:', error);
        res.status(500).json({ 
            error: 'An error occurred while verifying ad.'
        });
    }
});

// 헬스체크
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        features: {
            basicFortune: true,
            detailedFortune: true,
            multiLanguage: true,
            adReward: true,
            supportedLanguages: ['ko', 'en', 'ja', 'zh']
        }
    });
});

// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`🐰 운세토끼 서버가 포트 ${PORT}에서 실행 중입니다.`);
    console.log(`http://localhost:${PORT}`);
    console.log('\n✨ 지원 언어: 한국어, English, 日本語, 中文');
    console.log('\n사용 가능한 API:');
    console.log('- POST /api/fortune - 기본 운세 (다국어)');
    console.log('- POST /api/fortune/detail - 상세 운세 (광고 시청 필요)');
    console.log('- POST /api/ad/verify - 광고 시청 확인');
});

module.exports = app;