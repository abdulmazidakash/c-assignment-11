import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddArtifact from "../pages/AddArtifact";
import AllArtifacts from "../pages/AllArtifacts";
import MyArtifacts from "../pages/MyArtifacts";
import PrivateRoute from "./PrivateRoute";
import LikedArtifacts from "../pages/LikedArtifacts";
import UpdateArtifactCard from "../pages/UpdateArtifactCard";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/add-artifact',
				element: <PrivateRoute>
					<AddArtifact></AddArtifact>
				</PrivateRoute>,
			},
			{
				path: '/all-artifacts',
				element: <AllArtifacts></AllArtifacts>,
			},
			{
				path: '/my-artifacts',
				element: <PrivateRoute>
					<MyArtifacts></MyArtifacts>
				</PrivateRoute>,
			},
			{
				path: '/liked-artifacts',
				element: <PrivateRoute>
					<LikedArtifacts></LikedArtifacts>
				</PrivateRoute>,
			},
			{
				path: '/update/:id',
				element: <PrivateRoute>
					<UpdateArtifactCard></UpdateArtifactCard>
				</PrivateRoute>,
			}
		]
	}
])

export default router;