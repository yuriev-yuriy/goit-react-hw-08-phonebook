const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsReloaded = state => state.auth.isReloaded;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsReloaded,
};
export default authSelectors;
