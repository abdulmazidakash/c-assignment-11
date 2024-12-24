import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddArtifact from "../pages/AddArtifact";
import AllArtifacts from "../pages/AllArtifacts";
import MyArtifacts from "../pages/MyArtifacts";

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
				element: <AddArtifact></AddArtifact>,
			},
			{
				path: '/all-artifacts',
				element: <AllArtifacts></AllArtifacts>,
			},
			{
				path: '/my-artifacts',
				element: <MyArtifacts></MyArtifacts>,
			},
			{
				path: '/liked-artifacts',
				element: <h2>Liked Artifacts</h2>
			}
		]
	}
])

export default router;