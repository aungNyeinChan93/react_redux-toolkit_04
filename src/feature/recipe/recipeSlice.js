import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
    const { data: { recipes } } = await axios.get(`https://dummyjson.com/recipes?limit=12`);
    return recipes;
});


const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        isLoading: false,
        error: null
    },
    reducers: {
        getRecipe: (state, action) => {
            state.recipes = state.recipes.filter(recipe => recipe.id === action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.recipes = action.payload
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
});

export default recipeSlice;
export const { getRecipe } = recipeSlice.actions