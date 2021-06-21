# AutoFi Feed

You are working on a new feed to promote the company social network activity, you are
provided with access to the account’s posts and comments, your job is to integrate that activity
into the website.

## Task

Build a ReactJS project that fetches from the posts and comments APIs, presents a list of
posts and when any of the items is clicked show the list of comments that are associated with
that specific post.

You are responsible for:

- Fetching the data from the API.
- Presenting the data in the view.
- Relate comments to posts.
Stretch goals
- Set up project to use redux
- Test your components
- Allow the user to comment on a post and save the comment on state/redux.
Document any assumptions and design decisions you have made.
[Posts API:](https://jsonplaceholder.typicode.com/posts)
[Comments API:](https://jsonplaceholder.typicode.com/comments)

## App Info

### Dependencies

- Node14.4.0
- React

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
