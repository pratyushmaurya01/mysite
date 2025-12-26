export default function Contact() {
  return (
    <div className="min-h-full px-8 py-6 font-mono text-gray-300">

      <p className="text-green-400">// contact_me</p>

      <p className="mt-4 max-w-2xl text-gray-400">
        If you want to connect, feel free to reach out.
      </p>

      {/* CODE STYLE CONTACT FORM */}


      {/* CONTACT INFO */}
      <div className="mt-10 max-w-xl">
        <p className="text-green-400">// contact_details</p>

        <pre className="mt-3 bg-[#252526] border border-[#2a2d2e] p-4 rounded text-sm">
{`Email    : pratyushmaurya0@gmail.com
Phone    : 8168368461
Location : Kanpur, India`}
        </pre>
      </div>

      {/* RESUME */}
      <div className="mt-6">
        <a
          href="/pratyush_maurya_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-[#252526] border border-[#2a2d2e]
                     rounded hover:border-blue-400 transition"
        >
          Download Resume
        </a>
      </div>
            <form
        action="https://formspree.io/f/mjgvveyw"
        method="POST"
        className="mt-8 bg-[#252526] border border-[#2a2d2e] rounded p-6 max-w-xl"
      >
        <p className="text-green-400 mb-4">// send_message</p>

        <div className="space-y-4">

          <div>
            <label className="block text-sm text-gray-400">name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-[#1e1e1e] border border-[#2a2d2e]
                         px-3 py-2 rounded text-gray-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400">email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[#1e1e1e] border border-[#2a2d2e]
                         px-3 py-2 rounded text-gray-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400">message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full bg-[#1e1e1e] border border-[#2a2d2e]
                         px-3 py-2 rounded text-gray-300 outline-none"
            />
          </div>

        </div>

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-[#1e1e1e] border border-[#2a2d2e]
                     rounded hover:border-blue-400 transition cursor-pointer"
        >
          Send Message
        </button>
      </form>

    </div>
  );
}
