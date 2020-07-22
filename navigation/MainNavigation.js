import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import DrinksContainer from "../components/DrinksComponent/DrinksContainer";
import FilterComponent from "../components/FiltersComponent/FiltersComponent";

const MainNavigation = createStackNavigator({
    DrinkComponent: {
        screen: DrinksContainer,
        navigationOptions: {
            headerShown: false,
        },
    },
    FilterComponent: {
        screen: FilterComponent,
        navigationOptions: {
            headerShown: false,
        },
    },
});
const Navigation = createAppContainer(MainNavigation)
export default Navigation
