const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe('Initialization', () => {
    // it is what i expect it to do
    it("should return an object containing a 'name' property, 'id' property, and an 'email' property when called with the 'new' keyword", () => {
      const obj = new Engineer();

      // what should happen
      expect('name' in obj).toEqual(true);
      expect('id' in obj).toEqual(true);
      expect('email' in obj).toEqual(true);
    });
  });

  describe('getGithub', () => {
    // it is what i expect it to do
    it("should return an engineer object with 'name' 'id' 'email' and 'github' values.", () => {
      const { employee } = new Engineer('Richard', 2, 'raseward14@gmail.com', 'raseward14');

      // what should happen
      expect('name' in employee).toBe('Richard');
      expect('id' in employee).toBe(1);
      expect('email' in employee).toBe('raseward14@gmail.com');
      expect('github' in employee).toBe('raseward14');
    });
  });
});