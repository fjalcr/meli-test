const request = require("supertest");
const app = require("../app");

describe("Check APIs", () => {
  test("Server API should response with 200", async () => {
    const response = await request(app).get("/api/");
    expect(response.statusCode).toBe(200);
  });

  test("Search has author", async () => {
    const response = await request(app).get("/api/items/?q=auto");
    let check = false;
    const { author } = response.body;
    if (author) {
      check = true;
    }
    expect(check).toBe(true);
  });

  test("Search has items", async () => {
    const response = await request(app).get("/api/items/?q=auto");
    let check = false;
    const { items } = response.body;
    if (items) {
      check = true;
    }
    expect(check).toBe(true);
  });

  test("Search has categories", async () => {
    const response = await request(app).get("/api/items/?q=auto");
    let check = false;
    const { categories } = response.body;
    if (categories) {
      check = true;
    }
    expect(check).toBe(true);
  });

  test("Response should has an author", async () => {
    const response = await request(app).get("/api/items/?q=auto");
    const { author } = response.body;
    expect(author.name).toBe("Javier");
  });

  test("Total items should be 4", async () => {
    const response = await request(app).get("/api/items/?q=auto");
    const { items } = response.body;
    const len = items.length;
    expect(len).toBe(4);
  });

  test("Search items should be failed, failed to connect MELI APIs", async () => {
    const response = await request(app).get("/api/items/?query=auto");
    const { error } = response.body;
    expect(error).toBe("No products found");
  });

  test("Sisgle product has author", async () => {
    const responseProducts = await request(app).get("/api/items/?q=auto");
    const { items } = responseProducts.body;
    const responseSingleProduct = await request(app).get(`/api/items/${items[0].id}`);
    let check = false;
    const { author } = responseSingleProduct.body;
    if (author) {
      check = true;
    }
    expect(check).toBe(true);
  });

  test("Single product has item", async () => {
    const responseProducts = await request(app).get("/api/items/?q=auto");
    const { items } = responseProducts.body;
    const responseSingleProduct = await request(app).get(`/api/items/${items[0].id}`);
    let check = false;
    const { item } = responseSingleProduct.body;
    if (item) {
      check = true;
    }
    expect(check).toBe(true);
  });

  test("Single product has description", async () => {
    const responseProducts = await request(app).get("/api/items/?q=auto");
    const { items } = responseProducts.body;
    const responseSingleProduct = await request(app).get(`/api/items/${items[0].id}`);
    const { description } = responseSingleProduct.body.item;
    expect(description.length).toBeGreaterThan(0);
  });
});
