import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import challengesData from "../data/challenges";

function Challenges({ gainXP }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [result, setResult] = useState("");
  const [xpMessage, setXpMessage] = useState("");

  const filteredChallenges =
    filter === "All"
      ? challengesData
      : challengesData.filter((c) => c.difficulty === filter);

  const challenge = challengesData.find((c) => c.id === Number(id));

  const [code, setCode] = useState(challenge ? challenge.starterCode : "");

  const handleSubmit = () => {
    if (challenge && code.includes(challenge.solutionSnippet)) {
      setResult("✅ Correct! Well done.");
      gainXP(20); // Award 20 XP for correct submission
      setXpMessage("+20 XP!");
      setTimeout(() => setXpMessage(""), 2000); // Hide message after 2s
    } else {
      setResult("❌ Still buggy. Try again.");
    }
  };

  if (id && challenge) {
    return (
      <div>
        <h2>🧩 {challenge.title}</h2>
        <p>{challenge.description}</p>

        <Editor
          height="300px"
          defaultLanguage={challenge.language}
          value={code}
          theme="vs-dark"
          onChange={(value) => setCode(value)}
          options={{ fontSize: 14, minimap: { enabled: false } }}
        />

        <button onClick={handleSubmit}>Submit Fix</button>
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>{result}</p>

        {/* XP Gain message */}
        {xpMessage && (
          <p
            style={{
              color: "#00ff95",
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "10px",
            }}
          >
            {xpMessage}
          </p>
        )}

        <button onClick={() => navigate("/challenges")}>← Back to List</button>
      </div>
    );
  }

  return (
    <div>
      <h2>📋 Challenge List</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Easy")}>Easy</button>
        <button onClick={() => setFilter("Medium")}>Medium</button>
        <button onClick={() => setFilter("Hard")}>Hard</button>
      </div>

      {filteredChallenges.map((c) => (
        <div
          key={c.id}
          style={{
            padding: "12px",
            marginBottom: "10px",
            backgroundColor: "#1f1f1f",
            borderLeft: `6px solid ${
              c.difficulty === "Easy"
                ? "green"
                : c.difficulty === "Medium"
                ? "orange"
                : "red"
            }`,
            cursor: "pointer",
          }}
          onClick={() => navigate(`/challenges/${c.id}`)}
        >
          <h3>{c.title}</h3>
          <p>{c.description}</p>
          <p>
            <strong>Difficulty:</strong> {c.difficulty}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Challenges;

