import { Home } from './pages/Home';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { RootLayout } from './Layout/RootLayout';
import { SeleccionCanales } from './pages/SeleccionCanales';
import { MensajeTexto } from './pages/MensajeTexto';
import { WhatsApp } from './pages/Whatsapp';
import { CorreoElectronico } from './pages/CorreoElectronico';
import { NotFound } from './pages/NotFound';

export const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route
					path="/selecion-canales"
					element={<SeleccionCanales />}
				/>
				<Route path="/mensaje" element={<MensajeTexto />} />
				<Route path="/whatsapp" element={<WhatsApp />} />
				<Route path="/correo" element={<CorreoElectronico />} />

				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};
