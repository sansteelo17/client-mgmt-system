import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: cache,
});

function App({ children }) {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router}>{children}</RouterProvider>
    </ApolloProvider>
  );
}

export default App;
