import React, { useRef, useState } from "react";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Google Form's response URL (Replace with your form's URL)
    const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScF2BuRTOyc7sT1RK3DY0RzKfD1SB7YsItn9F6ETkZxqBd5FQ/formResponse";

    // Mapping inputs to Google Form "entry" IDs (Replace with actual entry IDs)
    const formData = new FormData();
    formData.append("entry.1909040785", formRef.current.name.value); // Name
    formData.append("entry.770719960", formRef.current.email.value); // Email
    formData.append("entry.657704359", formRef.current.message.value); // Message

    try {
      await fetch(formUrl, { method: "POST", body: formData, mode: "no-cors" });
      alert("Form submitted successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-mono text-white bg-black h-full w-full flex items-center justify-center p-10" id="contact">
      <div className="p-3 m-3 border rounded-xl flex flex-col">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col justify-around">
          <label htmlFor="name">Name:</label>
          <input
            className="border rounded-lg p-2 m-4"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            className="border rounded-lg p-2 m-4"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            className="border rounded-lg p-2 m-4 h-50 w-90"
            id="message"
            name="message"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="border bg-green-500 hover:bg-green-300 text-white font-bold rounded-lg py-2 px-4 h-10 w-34 hover:h-12 hover:w-35"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
