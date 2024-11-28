const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  

export const chatSession = model.startChat({
      generationConfig,
    //   history: [
    //     {
    //       role: "user",
    //       parts: [
    //         {text: "Job Role: Full Stack Developer, Job Description: React, Express, MySql, Years of experince: 6. Depends on this information please give me 5 interview questions with answers in JSON formate. Give Questions and Answers as field in JSON."},
    //       ],
    //     },
    //     {
    //       role: "model",
    //       parts: [
    //         {text: "```json\n[\n  {\n    \"Question\": \"Describe your experience with React.js, focusing on specific projects where you utilized its features and overcame challenges.  Give examples of complex components you've built and any performance optimization techniques you've employed.\",\n    \"Answer\": \"In my six years of experience, I've extensively used React.js in various projects, including a large-scale e-commerce platform where I built a dynamic product catalog with complex filtering and sorting functionalities.  This involved creating reusable components for product cards, handling pagination for large datasets, and implementing lazy loading to improve performance.  I also tackled challenges with state management, initially using context API for smaller components and migrating to Redux for more complex state interactions.  For performance optimization, I utilized techniques like memoization, code splitting, and React.memo to enhance rendering speed and improve user experience. In another project, a single-page application for project management, I implemented custom hooks to handle complex state logic and data fetching, improving code reusability and maintainability.  I faced challenges in managing asynchronous operations, which I overcame using promises and async/await for efficient data handling.\"\n  },\n  {\n    \"Question\": \"Explain your understanding of the Express.js framework and its role in building RESTful APIs. Provide an example of a complex API endpoint you've designed and implemented, highlighting the technologies and strategies you used.\",\n    \"Answer\": \"Express.js is a crucial part of my backend development. I understand it as a minimalist and flexible Node.js web application framework that provides a robust foundation for creating RESTful APIs.  In a recent project, I designed and implemented an API endpoint for handling user authentication and authorization. This endpoint uses JWT (JSON Web Tokens) for authentication and role-based access control using middleware to restrict access to specific resources.  I leveraged middleware functions to handle error handling, input validation, and logging.  The database interaction was handled using Sequelize ORM, which allowed for efficient querying and data manipulation.  The endpoint also incorporates rate limiting to prevent abuse and ensures security. I paid special attention to security best practices such as input sanitization and output escaping to protect against vulnerabilities. \"\n  },\n  {\n    \"Question\": \"How do you handle database interactions with MySQL? Describe your experience with database design, query optimization, and any challenges you've faced in managing large datasets.\",\n    \"Answer\": \"My experience with MySQL involves extensive database design, query optimization, and data management.  I'm proficient in writing SQL queries for data retrieval, manipulation, and analysis, including complex JOINs and subqueries. I use normalization techniques to design efficient database schemas that minimize redundancy and maintain data integrity. In a previous project involving a large user database, I optimized slow queries by adding indexes, utilizing database caching mechanisms, and rewriting inefficient queries.  I've also dealt with challenges concerning data consistency, using transactions to ensure atomicity. Furthermore, I have experience in database monitoring and performance tuning to enhance response times and overall performance. In situations dealing with large datasets, I've utilized pagination and optimized query structures to enhance the efficiency of data retrieval.\"\n  },\n  {\n    \"Question\": \"Describe your experience with version control systems (e.g., Git) and how you collaborate with other developers on projects. Provide examples of branching strategies and conflict resolution techniques you've employed.\",\n    \"Answer\": \"I'm highly proficient in Git and utilize it daily for version control.  I'm familiar with various branching strategies, including Gitflow, where I create feature branches for developing new functionalities, merging them into a develop branch, and subsequently deploying to production via a release branch.  I also use GitHub for collaboration and code review, where I actively participate in pull requests, providing feedback and resolving conflicts.  When conflicts arise, I utilize Git's merge tools to carefully review changes and resolve differences effectively, ensuring that the codebase remains clean and functional. I am comfortable with resolving merge conflicts through a combination of manual editing and using merge tools like the ones provided by Git or my IDE.  I always strive for clear commit messages that accurately describe the changes made and their purpose.\"\n  },\n  {\n    \"Question\": \"Imagine you're tasked with building a new feature for an existing application. Describe your approach to planning, development, testing, and deployment, emphasizing best practices and any tools or technologies you would utilize.\",\n    \"Answer\": \"My approach to building a new feature starts with a thorough understanding of requirements, involving discussions with stakeholders and reviewing existing documentation.  I would then break down the feature into smaller, manageable tasks, creating user stories and estimating effort.  For development, I would leverage agile methodologies, utilizing iterative development and frequent testing.  I'd choose appropriate technologies based on project requirements and existing architecture.  Thorough unit testing and integration testing would be conducted throughout the development process, employing Jest and related testing frameworks for React and backend testing frameworks for Express.  Automated testing would be integrated into a CI/CD pipeline using tools like Jenkins or GitLab CI.  Deployment would be done incrementally and thoroughly tested in a staging environment before going to production.  Monitoring and logging would be set up to track the feature’s performance and identify potential issues post-deployment. This approach ensures a robust and well-tested feature.\"\n  }\n]\n```\n"},
    //       ],
    //     },
    //   ],
});
  