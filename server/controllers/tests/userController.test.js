const request = require("supertest");
const app = require("../../app");
const db = require("../../config/db");
const bcrypt = require("bcrypt");

// Mock db.query
jest.mock("../../config/db", () => ({
  query: jest.fn(),
}));

describe("UserController", () => {
  afterEach(() => jest.clearAllMocks());

  describe("registerUser", () => {
    it("should register a new user", async () => {
      db.query
        .mockImplementationOnce((sql, params, cb) => cb(null, [])) // check if email exists
        .mockImplementationOnce((sql, cb) => cb(null, [{ maxId: 1 }])) // get max ID
        .mockImplementationOnce((sql, params, cb) => cb(null)); // insert new user

      const res = await request(app).post("/api/users/register").send({
        name: "Test User",
        email: "test@example.com",
        password: "password123",
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("name", "Test User");
      expect(res.body).toHaveProperty("email", "test@example.com");
    });

    it("should return 409 if email already exists", async () => {
      db.query.mockImplementationOnce((sql, params, cb) =>
        cb(null, [{ id: 1 }])
      );

      const res = await request(app).post("/api/users/register").send({
        name: "Test User",
        email: "test@example.com",
        password: "password123",
      });

      expect(res.statusCode).toBe(409);
      expect(res.body.error).toMatch(/Email already exists/);
    });
  });

  describe("loginUser", () => {
    it("should login with correct credentials", async () => {
      const hashedPassword = await bcrypt.hash("password123", 10);

      db.query.mockImplementationOnce((sql, params, cb) =>
        cb(null, [
          {
            id: 1,
            name: "Test User",
            email: "test@example.com",
            password: hashedPassword,
            user_uid: "abc123",
          },
        ])
      );

      const res = await request(app).post("/api/users/login").send({
        email: "test@example.com",
        password: "password123",
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("token");
      expect(res.body).toHaveProperty("user_uid", "abc123");
    });

    it("should fail with wrong password", async () => {
      const hashedPassword = await bcrypt.hash("correctPass", 10);

      db.query.mockImplementationOnce((sql, params, cb) =>
        cb(null, [
          {
            id: 1,
            email: "test@example.com",
            password: hashedPassword,
            user_uid: "abc123",
          },
        ])
      );

      const res = await request(app).post("/api/users/login").send({
        email: "test@example.com",
        password: "wrongPass",
      });

      expect(res.statusCode).toBe(401);
      expect(res.body.error).toMatch(/Invalid credentials/);
    });

    it("should return 401 for non-existent user", async () => {
      db.query.mockImplementationOnce((sql, params, cb) => cb(null, []));

      const res = await request(app).post("/api/users/login").send({
        email: "doesnotexist@example.com",
        password: "password123",
      });

      expect(res.statusCode).toBe(401);
      expect(res.body.error).toMatch(/Invalid credentials/);
    });
  });
});
