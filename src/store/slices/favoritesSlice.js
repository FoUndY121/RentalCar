import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Ошибка загрузки favorites из localStorage:", error);
    return [];
  }
};

const saveToLocalStorage = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error("Ошибка сохранения favorites в localStorage:", error);
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFromLocalStorage(),
  reducers: {
    addFavorite: (state, action) => {
      if (!state.some((car) => car.id === action.payload.id)) {
        state.push(action.payload);
        saveToLocalStorage(state);
      }
    },
    removeFavorite: (state, action) => {
      const updated = state.filter((car) => car.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
