import Link from "next/link"
import Image from 'next/image'

function Logo({photo, link}) {
    return (<a href={link} target="_blank">
        <Image src={photo} width='100' height='100'/>
    </a>)
}

function contact() {
    var data = require('../public/data.json');

    return (
      <div>
        <h1 className="h1">Bella's personal website</h1>
        <h2 className="h2">Hello! Welcome to Bella's home, please select your action:</h2>
        <h3>1. my introduction</h3>
        <h3 className="highlighted" >2. my contact</h3>
        <h3>3. Send a message</h3>
        <h1 className="h1">Hey, this is "my contact" page</h1>
        <h3 className="h3">phone number: 3439973619</h3>
        <h3 className="h3">my Instagram QR code: </h3>

        <Image src='/instagram.png' alt= "Instagram QR code" width ='90' height='90'/>
       
        <h3 className="h3">My LinkedIn and Github: </h3>
        <Logo photo='/linkedin.png' link={data.linkedin}/>
        <Logo photo='/github.png' link={data.github}/>
       
        <Link href = '/'> Back</Link>
      </div>
    );
  }
  
  export default contact;