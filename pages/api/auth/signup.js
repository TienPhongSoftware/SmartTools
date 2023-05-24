import connectMongo from '../../../database/connect';
import Users from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  try {
    await connectMongo();

    // Chỉ chấp nhận phương thức POST
    if (req.method === 'POST') {
      if (!req.body) return res.status(404).json({ error: "Don't have form data...!" });
      const { username, email, password } = req.body;

      // Kiểm tra người dùng trùng lặp
      const checkexisting = await Users.findOne({ email });
      if (checkexisting) return res.status(422).json({ message: "User Already Exists...!" });

      // hash mật khẩu
      const hashedPassword = await hash(password, 12);

      const data = await Users.create({ username, email, password: hashedPassword });
      res.status(201).json({ status: true, user: data });
    } else {
      res.status(500).json({ message: "HTTP method not valid only POST Accepted" });
    }
  } catch (error) {
    res.json({ error: "Connection Failed...!" });
  }
}
