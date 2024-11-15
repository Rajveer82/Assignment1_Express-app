import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RecipeCatalog from './android/app/src/components/FoodList'; // Update import path if needed

const App = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <RecipeCatalog /> {/* Render the RecipeCatalog component */}
        </SafeAreaView>
    );
};

// Styles for the main App component
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
});

export default App;










// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import RecipeList from './android/app/src/components/RecipeList';

// const App = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <RecipeList /> {/* Render the RecipeList component */}
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
// });

// export default App;
