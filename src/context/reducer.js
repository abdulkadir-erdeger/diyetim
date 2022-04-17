import AsyncStorage from "@react-native-async-storage/async-storage";

export default (state, action) => {
  let oldMenu = state.menu;

  switch (action.type) {
    case "ADD_MENU":
      const { menu } = action.payload;

      oldMenu.push(menu);
      AsyncStorage.setItem("@MENU", JSON.stringify(oldMenu));
      return {
        menu: [...oldMenu],
      };
    case "REMOVE_MENU":
      AsyncStorage.removeItem("@MENU");
      return {
        menu: [],
        // menu: [...state.menu.filter((food) => food !== action.payload.food)],
      };
    default:
      return state;
  }
};
