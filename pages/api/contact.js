export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, phoneNumber, message } = req.body;
      console.log(`Received form data: name=${name}, phoneNumber=${phoneNumber}, message=${message}`);
      // TODO: Store the form data in a database or send it to an email address
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }
  