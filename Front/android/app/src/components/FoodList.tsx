import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

interface RecipeData {
    id?: string;
    name?: string;
    cuisineType?: string;
    rating?: number;
}

const RecipeCatalog = () => {
    const [recipeList, setRecipeList] = useState<RecipeData[]>([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch recipes from the API
    const fetchRecipes = async () => {
        console.log("Fetching recipe data...");
        const token = 'your-jwt-token'; // Replace with the actual token

        try {
            const response = await axios.get('http://localhost:1234/recipe/list', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                timeout: 20000  // Set a timeout of 20 seconds
            });
            console.log("Data received:", response.data);
            setRecipeList(response.data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    // Function to render each item in the FlatList
    const renderRecipeItem = ({ item }: { item: RecipeData }) => (
        <View style={styles.recipeItem}>
            <Text style={styles.recipeName}>{item.name || "Unnamed Recipe"}</Text>
            <Text>Cuisine: {item.cuisineType || "Unknown"}</Text>
            <Text>Rating: {item.rating ? item.rating.toFixed(1) : "No Rating"}</Text>
        </View>
    );

    return (
        loading ? (
            <View style={[styles.loader, styles.container]}>
                <Text>Not getting recipes from the backend</Text>
            </View>
        ) : (
            <FlatList
                contentContainerStyle={styles.container} // Apply container background color
                data={recipeList}
                keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                renderItem={renderRecipeItem}
            />
        )
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Light gray background for the overall container
    },
    recipeItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#ffffff', // White background for each recipe item
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc', // Light gray border color for each recipe item
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2, // Adds a subtle shadow effect (for Android)
    },
    recipeName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333' // Darker text color for contrast
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RecipeCatalog;








// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';

// type Recipe = {
//     _id?: string;
//     recipeName?: string;
//     cuisine?: string;
//     averageRating?: number;
// };

// const RecipeList = () => {
//     const [recipes, setRecipes] = useState<Recipe[]>([]);

//     useEffect(() => {
//         console.log("Starting API call..."); // Log before the request
    
//         axios.get('http://localhost:1234/recipe') // 
//             .then(response => {
//                 console.log("API response received:", response.data); // Log the response data
//                 setRecipes(response.data);
//             })
//             .catch(error => {
//                 console.log("Error fetching recipes:", error); // Log any errors
//             });
//     }, []);
    

//     const renderItem = ({ item }: { item: Recipe }) => (
//         <View style={styles.item}>
//             <Text style={styles.title}>{item.recipeName || "No Name Available"}</Text>
//             <Text>Cuisine: {item.cuisine || "N/A"}</Text>
//             <Text>Rating: {item.averageRating ? item.averageRating.toString() : "N/A"}</Text>
//         </View>
//     );

//     return (
//         recipes.length > 0 ? (
//             <FlatList
//                 data={recipes}
//                 keyExtractor={(item, index) => (item._id ? item._id.toString() : index.toString())}
//                 renderItem={renderItem}
//             />
//         ) : (
//             <View style={styles.loading}>
//                 <Text>Loading recipes...</Text>
//             </View>
//         )
//     );
// };

// const styles = StyleSheet.create({
//     item: {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc'
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     loading: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });

// export default FoodList;
