import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SharedLayout } from "../components/shared-layout";
import { Home } from "../pages/home";
import { Details } from "pages/details";

export const MainRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path="/:id" element={<Details />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
