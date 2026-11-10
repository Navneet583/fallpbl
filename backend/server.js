
const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.post("/grade", async (req, res) => {
  try {
    const ad = req.body.ad;

    if (!ad || typeof ad !== "string" || !ad.trim()) {
      return res.status(400).json({
        error: "Please enter an advertisement."
      });
    }

    const prompt = `
      You are an AI advertisement grader for
      LifeBack Tax Relief.

      Grade this text advertisement out of 100.

      Categories:
      Clarity: 20 points
      Professionalism: 20 points
      Target Audience: 20 points
      Call to Action: 20 points
      Accuracy and Trustworthiness: 20 points

      Give:
      1. Total score out of 100
      2. Score for each category
      3. Strengths of the advertisement
      4. Weaknesses of the advertisement
      5. Suggestions to improve it
      6. A rewritten version of the ad

      Watch for misleading tax claims or
      guaranteed results. Do not invent facts.

      Advertisement:
      ${ad}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt
    });

    res.json({
      feedback: response.text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "AI grading failed. Check the backend terminal."
    });
  }
});

const port = process.env.PORT || 5002;
app.listen(port, "0.0.0.0", () => {
  console.log(`Gemini backend running on port ${port}`);
});
