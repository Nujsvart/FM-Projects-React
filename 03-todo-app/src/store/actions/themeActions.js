export const changeTheme = () => {
  return {
    type: "TOGGLE_THEME",

    payload: {
      light: "light",
      dark: "dark",
    },
  };
};
