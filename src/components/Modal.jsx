import { useNavigate } from 'react-router-dom';
import check from '../assets/check.svg';
import '../components/Modal.css';
import { BtnPrimary } from './ButtonPrimary.style';

export const Modal = () => {
	const navigate = useNavigate();
	return (
		<div className="modal-overlay">
			<div className="modal">
				<h2>Mensaje enviado correctamente</h2>
				<img className="icon-check" src={check} alt="correcto" />
				<p>Revisa la consola para ver los mensajes enviados :D.</p>
				<BtnPrimary
					onClick={() => {
						navigate('/', { replace: true });
					}}
				>
					Aceptar
				</BtnPrimary>
			</div>
		</div>
	);
};
