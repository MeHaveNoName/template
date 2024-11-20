# Instructions

---

## Project Structure Overview

- **Components:**
  - Located in `src/components`, you'll find:
    - `Card`: The component to display individual cards.
    - `LoadButton`: The button component to load additional cards.

- **API Endpoint:**
  - A basic API endpoint is provided in `src/pages/api/dummy.ts`. This endpoint holds the data required for the task.

- **Resources:**
  - In the `_resource_` folder, you'll find:
    - **Images**: These represent how the card should appear. Use them as design references.
    - **JSON File**: This contains a static copy of the data available in the API.

- **Styling Tools:**
  - Both `SASS` and `styled-components` are pre-installed. Use either to style your components.

---

## Task Breakdown

### 1. Card Component
1. Navigate to `src/pages/index.tsx`. You'll find a basic page setup with a `useEffect` hook that fetches data for a single card.
2. Use this data to create the `Card` component. The component should match the design provided in the `_resource_` images.
3. Creating a separate component for each elemnt in the card is a plus.

### 2. LoadButton Component
1. Once the card is finished, create the `LoadButton` component in `src/components`.
2. Now, four cards should be loaded displayed initially.
3. When clicked, this `LoadButton` should:
   - Fetch data for **four additional cards** from the provided API endpoint.
   - Dynamically render the new cards on the page alongside the existing ones.

---

## Test

- If you have time, feel free to add whatever you want.

---

## Notes and Expectations
- Your code should be clean, readable, and modular. It should follow the best practices and naming conventions.
- Properly handle asynchronous operations (e.g., data fetching).
- Implement responsive styling and ensure the design closely aligns with the reference images.
- Feel free to use either `SASS` or `styled-components` for styling, based on your preference (`styled-components` is a plus).

