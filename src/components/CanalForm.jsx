import PropTypes from 'prop-types';
import { useCanal } from '../hooks/useCanal';
import { FormStyled } from './Form.style';
import { TitleMain } from './Title.style';
import './CanalForm.css';
import { BtnPrimary } from './ButtonPrimary.style';
import { FlexStyle } from './Flex.style';
import { Modal } from './Modal';
export const CanalForm = ({ title, campo, canal, label, input, asunto }) => {
	const {
		openModal,
		initialData,
		isLastChannel,
		_handleOnChange,
		_handleOnSubmit,
	} = useCanal(canal);

	return (
		<>
			<FormStyled onSubmit={_handleOnSubmit}>
				<TitleMain>{title}</TitleMain>
				<div className="container_label">
					{input && (
						<label className="label" htmlFor={canal}>
							{label}
							<input
								className="input__label"
								id={canal}
								type={input}
								name={asunto}
								value={initialData?.asunto || ''}
								placeholder="Escribe algo..."
								onChange={_handleOnChange}
							/>
						</label>
					)}
				</div>

				<label htmlFor="Mensaje">
					Mensaje
					<textarea
						className="textArea"
						name={campo}
						id="Mensaje"
						placeholder="Escribe..."
						rows={7}
						value={initialData?.mensaje || ''}
						onChange={_handleOnChange}
					></textarea>
				</label>
				<div>
					<FlexStyle>
						<BtnPrimary type="submit">
							{isLastChannel ? 'Enviar' : 'Siguiente'}
						</BtnPrimary>
					</FlexStyle>
				</div>
			</FormStyled>
			{openModal && <Modal />}
		</>
	);
};

CanalForm.propTypes = {
	campo: PropTypes.string.isRequired,
	canal: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	input: PropTypes.string,
	asunto: PropTypes.string,
	title: PropTypes.string.isRequired,
};
