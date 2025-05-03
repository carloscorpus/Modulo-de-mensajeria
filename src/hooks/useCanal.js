import { useContext, useState } from 'react';
import { dataContext } from '../context/dataContext';
import { mensajeCanal } from '../data/mensajeCanal';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const useCanal = (canal) => {
	const {
		dataTypeM,
		setDataTypeM,
		setDataChannelSelected,
		datoToEdit,
		setDatoToEdit,
	} = useContext(dataContext);
	const [openModal, setOpenModal] = useState(false);

	const dataToSend = mensajeCanal[dataTypeM]?.[canal];

	const initialData = datoToEdit[dataTypeM]?.[canal] || dataToSend;

	const navigate = useNavigate();
	const location = useLocation();

	const channels = location.state.selectedChannels;
	const nextChannels = channels.filter((channels) => channels !== canal);
	const isLastChannel = nextChannels.length < 1;

	const _handleOnChange = (e) => {
		const { name, value } = e.target;
		setDatoToEdit((prev) => {
			const currentData = prev[dataTypeM]?.[canal] || dataToSend;
			return {
				...prev,
				[dataTypeM]: {
					...prev[dataTypeM],
					[canal]: {
						...currentData,
						[name]: value,
					},
				},
			};
		});
	};

	const _handleOnSubmit = (e) => {
		e.preventDefault();

		if (isLastChannel) {
			console.log('Tus mensajes enviados son: ', datoToEdit);
			// navigate('/', { replace: true });
			setOpenModal(true);
			setDataTypeM('');
			setDataChannelSelected([]);
			setDatoToEdit({});
		} else {
			setOpenModal(false);
			navigate(`/${nextChannels[0]}`, {
				state: { selectedChannels: nextChannels },
			});
		}
	};
	return {
		initialData,
		isLastChannel,
		_handleOnChange,
		_handleOnSubmit,
		openModal,
	};
};
useCanal.propTypes = {
	canal: PropTypes.string.isRequired,
};
