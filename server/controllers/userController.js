const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { Axios } = require("axios");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res) {
    const { email, password, userinfo, phone } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Некорректный email или password" });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const $host = axios.create({
      baseURL: "https://usnc.dev-webdevep.ru/api/auth-back/",
    });
    $host.defaults.headers = req.headers;
    const user = await $host
      .post(`register`, {
        email,
        phone,
        hashPassword,
        userinfo,
      })
      .catch((e) => res.status(404).json({ message: e.message }));
    if (user.ok) {
      const token = generateJwt(user.uid);
      return res.json({
        token,
      });
    } else return res.status(500).json({ message: "Непредвиденная ошибка" });
  }

  async check(req, res) {
    const { refreshToken } = req.body;
    const $host = axios.create({
      baseURL: "https://usnc.dev-webdevep.ru/api/auth-back/",
    });
    $host.defaults.headers = req.headers;
    const newTokens = $host.post(
      "regenerateTokens",
      { refreshToken: refreshToken }
    );
    return res.json({ newTokens });
  }
}

module.exports = new UserController();
