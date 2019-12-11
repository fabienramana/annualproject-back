module.exports = (client) => {
    const clientToReturn = {
      ...client,
    };
    delete clientToReturn.password;
    return clientToReturn;
  };
  