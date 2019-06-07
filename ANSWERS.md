- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to check your data to make sure the data you are receiving is the type of data it is supposed to be. If your data is not the correct type. React will not be able to render it correctly. PropTypes warn you of this issue before it happens.

- [ ] Describe a life-cycle event in React?

Life-cycle events are methods that fire at different points in Reacts life-cycle. The 3 main phases of the life-cycle are Mounting, Updating and Unmounting. They fire in that order. Ex. If you have a function that you want to fire as soon as your component mounts, you would put it inside the componentDidMount() method. This method is often used for retrieving data from a server.

- [ ] Explain the details of a Higher Order Component?

A higher order component creates a hierarchy of components inside one component. It allows you to pass components into components, use some logic on those components, and then return a component.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Inline styling - Much like CSS but you add your styling inside the component. This is a very simple way to style your components but can get messy if alot of styling is required.

Styled Components - Allows you to target elements specifically and create new components with specific styling. You then use those pre-styled components anywhere inside your app.

Prestyled component frameworks - ReactStrap, Material UI, etc.. These are prestyled components that you would insert right into your app. These are gret for creating quick and easy styling.
