import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="text-center mt-10 text-2xl text-blue-500 font-bold">
        Hello Tailwind + Vite!
      </div>
      <Analytics />
    </>
  );
}

export default App;
