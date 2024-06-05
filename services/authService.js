module.exports = {
  login: async () => {
    try {
      return {
        message: "user has logged in",
      };
    } catch (error) {
      return { error: error };
    }
  },
  logout: async () => {
    try {
      return {
        message: "user has logged out",
      };
    } catch (error) {
      return { error: error };
    }
  },
};
