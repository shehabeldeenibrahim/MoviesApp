export default {
  get: jest.fn().mockResolvedValue({}),
};
export const getProducts = async () => {
  const products = await Promise.resolve([{ name: "test" }]);
  return products;
};
