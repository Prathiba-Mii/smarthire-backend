const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');
const auth = require('../middleware/auth');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// POST /api/ai/cover-letter
router.post('/cover-letter', auth, async (req, res) => {
  try {
    const { company, position, skills, experience, notes } = req.body;

    const prompt = `Write a professional cover letter for ${company} for the position of ${position}.

Applicant details:
- Skills: ${skills}
- Experience: ${experience}
${notes ? `- Additional info: ${notes}` : ''}

Write a short, professional cover letter in 3 paragraphs tailored specifically for the ${position} role. Keep it under 200 words. End with Sincerely.`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
    });

    const coverLetter = completion.choices[0].message.content;
    res.json({ coverLetter });

  } catch (err) {
    console.log('Groq Error:', err);
    res.status(500).json({ message: 'AI error', error: err.message });
  }
});

module.exports = router;