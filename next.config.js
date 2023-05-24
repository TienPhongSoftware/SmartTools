module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/api/login", destination: "http://localhost:3000/"}
    ]
  }
}
