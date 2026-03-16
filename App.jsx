import StorybookUI from "./.storybook";
import Login from "./app/Login";

const useStorybook = false; 
export default StorybookUI; // Change to Login when you want to use the actual app instead of Storybook
//export default useStorybook ? StorybookUI : Login;