const express = require('express');
const app = express();

app.use(express.json());

app.post('/v1/execution-risk/recommendation', (req, res) => {
  const { company_name, issue, constraints } = req.body;

  if (!company_name || !issue || !constraints) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Example: dummy response
  res.json({
    single_recommendation: `Proceed cautiously for ${company_name}. Focus on ${issue}. Budget cap is ${constraints.budget_cap_usd}.`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
