# Frontend Task Essentially AI

## Overview
The task is to build a webpage to display the trade statistics (Open, High, Low, Close, Volume) of a particular stock for a particular day. You should use Polygon free tier API for this task (https://polygon.io/)

## Implementation

1. The Given Assignment used frontend tech stacks like 
* [reactJs]
* [javascript]
* [html]
* [css] 
2. There are mainly two Components , namely **StockForm** and **TradeStats** which are render to the user.
3. When program is run, the first component is of **StockForm** where a user can get trade statistics based on stock symbol and a particular date input.
4. when form is submitted, the second component **TradeStats** display the trade statistics **(Open, High, Low, Close, Volume)** of a particular stock for a particular day.
5. In between errors and data fetching are handled with error message , and showing loader components.
6. Helper Components :- 
* **ErrorComp(Showing error message)**
* **Header(In the TradeStats components as Header)**
* **Loading(loader component)**
7. Tried to provide interesting UI accross the components.

### StockForm
1. In the first component, User can input stock symbol and stock date as thier choice and there is a button at the bottom.
2. when clicked on the button, it fetch the data from API
3. If there is no data found, then we show an error message above the button, also stock symbol and stock date becomes empty.
4. Both stock symbol and stock date must be filled by the user to retrive the data.

### TradeStats
1. when data is found , only then this component is rendered.
2. Displaying stock symbol and stock date in header, also current time is shown when data is fetched.
3. Displaying (open, close, low, high, volume) as cards representing the name and their value.
4. There is also a button at the bottom.
5. when clicked on button, StockForm component render/appear with stock symbol and stock date as empty.

## Optional tasks
**Imagine this is a real world scenario which thousands of users use to get the historic data of a stock for a particular day, how would this product change in order to improve the UX.**
*I have not Implemented at this point of time, will implement as building a project.*
*But following points can be considered :-*

1. **Scalability and Performance:**
*Optimize the backend infrastructure to handle a high volume of concurrent requests efficiently. Consider using load balancers and caching mechanisms to improve response times.
* Implement server-side and client-side caching to reduce the load on the server and improve data retrieval speeds for frequently accessed stock data.

2. **Responsive Design:**
* Ensure the product is responsive and mobile-friendly, allowing users to access it from different devices, including smartphones and tablets.
* Optimize the design for various screen sizes, ensuring a consistent and pleasant experience across all devices.

3. **User Authentication and Personalization:**
* Implement user authentication to offer personalized experiences and enable users to save their preferred stocks, date ranges, or frequently accessed data.
* Allow users to create accounts and save their preferences, such as favorite stocks or default date ranges, for quick access to the desired information.

4. **Real-time Updates:**
*Implement real-time updates to provide users with the most recent stock data without manual refreshing. Consider integrating WebSocket or server-sent events to push updates to users as they happen.

5. **Data Visualization:**
* Enhance the data visualization by providing interactive charts and graphs, allowing users to explore and analyze historic stock data visually.
* Implement features like zooming, panning, and time range selection on charts to offer more granular insights.

6. **Search and Autocomplete:**
* Implement a search feature with autocomplete functionality to help users find specific stock symbols quickly and accurately.
* Provide suggestions for popular stocks and recent search queries to streamline the search process.

***

**What new features would you add in this product to increase it's utility for the end user.**
*New Features that can be added in this product to increase the utility for end user :-*

1. **Historical Data Range Selection:**
* Allow users to choose custom date ranges for historical data retrieval. This feature would enable them to analyze stock performance over specific periods and perform detailed trend analysis.

2. **Comparison and Benchmarking:**
* Implement a feature that allows users to compare the performance of multiple stocks side by side or against a benchmark index. This will help investors make informed decisions based on relative performance.

3. **Price Alerts and Notifications:**
* Enable users to set price alerts for specific stocks, and receive notifications when the stock reaches a predefined price level. This feature helps users stay updated on market movements and make timely decisions.

4. **Financial News Integration:**
* Integrate financial news and relevant market updates related to the selected stocks. This will provide users with valuable insights that may impact their investment decisions.

5. **Dark Mode:**
* Implement a dark mode option to reduce eye strain during extended periods of usage, especially for users accessing the product at night.