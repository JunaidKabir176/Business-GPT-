import express from 'express';

const app = express();
app.use(express.json());

app.post('/v1/execution-risk/recommendation', (req, res) => {
  const { company_name, issue, constraints } = req.body;

  if (!company_name || !issue || !constraints) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  res.json({
    single_recommendation: `For ${company_name}, resolve "${issue}" within ${constraints.timeframe_days} days and under $${constraints.budget_cap_usd}.`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
