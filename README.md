# Joke Generator

Joke Generator is a React-based web application that fetches and displays random jokes using the Official Joke API. Users can select specific joke types and generate new jokes with the click of a button.

## Features

- Fetch and display random jokes
- Select jokes by type (e.g., general, programming)
- Responsive design for various screen sizes
- Loading state indicator during API calls

## Technologies Used

- React
- Axios for API requests
- Styled Components for styling

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/jokegenerator.git
   ```

2. Navigate to the project directory:
   ```
   cd jokegenerator
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

1. When you open the application, you'll see a dropdown menu to select a joke type and a "Generate Joke" button.
2. Choose a joke type from the dropdown menu (optional).
3. Click the "Generate Joke" button to fetch a new joke.
4. The joke will appear in a card below the button, displaying the setup and punchline.

## Components

### Home

The main component that orchestrates the joke fetching and display logic.

### JokeCard

A component that renders the joke setup and punchline in a styled card.

### Button

A reusable button component used for joke generation.

## API

This project uses the [Official Joke API](https://official-joke-api.appspot.com) to fetch jokes. The base URL for the API is:

```
https://official-joke-api.appspot.com
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).