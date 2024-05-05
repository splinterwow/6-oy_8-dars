import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/useGlobal";

import Mainlayout from "./layouts/Mainlayout";

import ProtectedRoutes from "./components/ProtectedRoutes";

import Home from "./pages/Home";

import About from "./pages/About";

import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfin";

//actions
import { action as SignupActions } from "./pages/Singup";
import { action as LoginActions } from "./pages/Login";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfin";
import Cart from "./pages/Cart";

function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <Mainlayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginActions,
    },
    {
      path: "/singup",
      element: user ? <Navigate to="/" /> : <Singup />,
      action: SignupActions,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });

    //
    async function getData() {
      const allData = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.docs.forEach((item) => {
        allData.push({ idf: item.id, ...item.data() });
      });
      dispatch({ type: "INITIAL_DATA", payload: allData });
    }
    getData();
  }, []);
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
