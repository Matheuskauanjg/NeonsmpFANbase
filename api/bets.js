import db from './db.js';

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const bets = db.prepare('SELECT * FROM bets ORDER BY created_at DESC').all();
      
      // Calcular estatísticas (taxa de câmbio e % de apostas)
      const totalBets = bets.length;
      const stats = bets.reduce((acc, bet) => {
        acc[bet.bet_date] = (acc[bet.bet_date] || 0) + 1;
        return acc;
      }, {});

      // Converter para porcentagem
      const percentages = {};
      Object.keys(stats).forEach(date => {
        percentages[date] = Math.round((stats[date] / totalBets) * 100);
      });

      // Taxa de câmbio dinâmica baseada na popularidade das datas
      // Ex: Se uma data tem muitas apostas, o valor do ponto nela "inflaciona"
      const exchangeRate = {
        base: "RED",
        target: "DIA",
        value: totalBets > 0 ? (1 + (totalBets / 100)).toFixed(2) : "1.00"
      };

      res.status(200).json({ 
        bets, 
        stats: percentages, 
        exchangeRate,
        total: totalBets 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    const { nickname, betDate, points, items } = req.body;
    
    if (!nickname || !betDate || !points) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    try {
      const stmt = db.prepare('INSERT INTO bets (nickname, bet_date, points, items) VALUES (?, ?, ?, ?)');
      const info = stmt.run(nickname, betDate, points, JSON.stringify(items));
      
      res.status(201).json({ id: info.lastInsertRowid, message: 'Aposta registrada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
