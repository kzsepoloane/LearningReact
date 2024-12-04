import { expect, test, vi } from "vitest";
import { selector, squared } from "./Basic";

test("Squared", () => {
  expect(squared(2)).toBe(4);
  expect(squared(3)).toBe(9);
  expect(squared(4)).toBe(16);
});

test("objects", () => {
  const obj1 = { a: 1 };
  const obj2 = { a: 1 };
  expect(obj1).not.toBe(obj2);
  expect(obj1).toEqual(obj2);
});

test("Array", () => {
  expect(["1", "2", "3"]).toContain("3");
});

test("selector", () => {
  const onSelect = vi.fn();
  selector(onSelect);
  expect(onSelect).toBeCalledTimes(3);
  expect(onSelect).toHaveBeenLastCalledWith("3");

  expect(onSelect).toHaveBeenCalledWith("1");
  expect(onSelect).toHaveBeenCalledWith("2");
  expect(onSelect).toHaveBeenCalledWith("3");
});

test("spyOn", () => {
  const cart = {
    getProducts: () => 10,
  };
  const spy = vi.spyOn(cart, "getProducts");
  expect(cart.getProducts()).toBe(10);
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveReturnedWith(10);
});
