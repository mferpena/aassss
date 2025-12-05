const getItems = async (query) => {
  // Mock response
  const mockData = {"items":[{"id":1,"nombre":"Uno"}]};
  return mockData;
};

const postItems = async (body) => {
  // Mock response
  const mockData = {};
  return mockData;
};

const getItems = async (params) => {
  // Mock response
  const mockData = {"id":1,"nombre":"Ejemplo"};
  return mockData;
};

const putItems = async (params, body) => {
  // Mock response
  const mockData = {};
  return mockData;
};

const patchItems = async (params, body) => {
  // Mock response
  const mockData = {};
  return mockData;
};

const deleteItems = async (params) => {
  // Mock response
  const mockData = {};
  return mockData;
};

module.exports = {
  getItems,
  postItems,
  getItems,
  putItems,
  patchItems,
  deleteItems
};
