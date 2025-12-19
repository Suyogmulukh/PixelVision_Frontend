// Beatflow-frontend/src/components/FeedbackForm.jsx
import React, { useState, useCallback, memo } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3500";

const FeedbackForm = ({ userId }) => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await axios.post(`${API_BASE}/api/feedback/submit`, {
          userId,
          message,
          rating,
        });
        alert("Thanks for your feedback!");
        setMessage("");
        setRating(5);
      } catch (err) {
        console.error(err);
        alert("Error sending feedback");
      }
    },
    [userId, message, rating]
  );

  return (
    <div className="px-4 sm:px-6 lg:px-0">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => window.history.back()}
        className="
          block mx-auto mt-8 mb-4
          bg-gray-200 text-gray-800
          px-5 py-2
          rounded-md font-bold
          shadow-md
          hover:bg-gray-300
          transition
        "
      >
        ← Back
      </button>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-md
          mx-auto mt-8
          p-6
          bg-gray-50
          rounded-xl
          shadow-lg
        "
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Send Us Feedback
        </h2>

        {/* Message */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your feedback..."
          required
          rows={4}
          className="
            w-full
            p-3
            text-base
            border border-gray-300
            rounded-lg
            resize-y
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            mb-4
          "
        />

        {/* Rating */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <label className="font-bold text-gray-700">Rating:</label>

          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="
              px-4 py-2
              border border-gray-300
              rounded-md
              text-base
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
            "
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full
            bg-indigo-600 text-white
            py-2.5
            rounded-md
            font-bold
            hover:bg-indigo-700
            transition
          "
        >
          Submit
        </button>
      </form>
    </div>
  );
};
