import Link from "next/link"


function intro() {
    var data = require('../public/data.json');

  return (
    <div>
      <h1 className="h1">{data.name}'s personal website</h1>
      <h2 className="h2">Hello! Welcome to {data.name}'s home, please select your action:</h2>
      <h3 className="highlighted">1. my introduction</h3>
      <h3 >2. my contact</h3>
      <h3 >3. Send a message</h3>
      <h2 className="h2">Hey, this is "my introduction" page</h2>
      <h3 className="h3">
        Hello my name is {data.name}, and I am a {data.year} year student at University of Toronto,
        currently I am a part of the tech team of FinTorch
      </h3>

      <Link href = '/'> Back</Link>

    </div>
  );
}

export default intro;