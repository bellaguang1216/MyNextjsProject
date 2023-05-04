// pages/index.js

import Link from "next/link";


export default function Home() {
  var data = require("../public/data.json");

  return (
    <>
      <h1 className="h1">{data.name}'s personal website</h1>

      <h2 className="h2">
        Hello! Welcome to {data.name}'s home, please select your action:
      </h2>

      <Link href="/intro" className="link">
        1. my introduction
      </Link>
      <Link href="/contact" className="link">
        2. my contact
      </Link>
      <Link href="/message" className="link">
        3. Send me a message
      </Link>
    </>
  );
}
