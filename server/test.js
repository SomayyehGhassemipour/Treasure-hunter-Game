const getBoard = require('./board');
const { findUser, createNewUser, getTop10Users } = require('./users');
const request = require("supertest");
const { response } = require('express');
const baseURL = "http://localhost:5000"



describe("Test user.js", () => {
  test("New user should be crated", async () => {
    Name = "Somi"
    const response = await request(baseURL).post("/newUser").send({ userName: Name });
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('score');
    expect(response.body).toHaveProperty('boardMap');
    expect(response.body).toHaveProperty('userName');

    expect(response.body.score).toEqual(0)
    expect(response.body.boardMap).toEqual(getBoard.getEmptyBoard())
    expect(response.body.userName).toEqual(Name)
  })

  test("Same user cannot be created again", async () => {
    Name = "Somi"
    const response = await request(baseURL).post("/newUser").send({ userName: Name });
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(false)
  })
})




