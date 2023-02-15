# React Product Search App

This is a simple React application that allows users to search for products using keywords. The app fetches data from the [Fake Store API](https://fakestoreapi.com/) and displays the products in a list format.

## Functionality

The app contains two components, `Search` and `ProductItem`, and utilizes the `useState` and `useEffect` hooks from React.

When the app loads, it fetches the product data from the API using the `useEffect` hook and stores it in the `products` state variable. It also stores a cached copy of the products in the `cachedProducts` state variable.

The `Search` component is used to get input from the user, and when a user types in a keyword, the `inputChangeHandler` function is called to update the `searchValue` state variable. If the search box is empty, the `emptySearchBoxHandler` function is called to reset the products list to the cached copy.

The `searchSubmitHandler` function is called when the user clicks the search button. This function filters the `products` list using the `arraySearch` function, which returns an array of products that match the search keyword. If no items are found, an alert is shown, and the search box is reset. Otherwise, the list of products is updated with the filtered list.

The `ProductItem` component displays a single product and is used in the `prodItems` variable to generate a list of products that match the search.

## Installation

1.  Clone the repository or download the ZIP file.
2.  Navigate to the project directory in your terminal.
3.  Run `npm install` to install the dependencies.
4.  Run `npm start` to start the app in development mode.
5.  Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

## Dependencies

This project depends on the following packages:

- `@testing-library/jest-dom`: "^5.14.1"
- `@testing-library/react`: "^13.0.0"
- `@testing-library/user-event`: "^13.2.1"
- `react`: "^18.2.0"
- `react-dom`: "^18.2.0"
- `react-scripts`: "5.0.1"
- `web-vitals`: "^2.1.0"

These packages should be installed automatically when running `npm install`.

## Credits

The data for the products is fetched from the [Fake Store API](https://fakestoreapi.com/).
