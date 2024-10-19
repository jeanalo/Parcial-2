import { Actions } from '../types/store';
import { Screens } from '../types/store';

export const changeBackground = (payload: any) => {
	return {
		action: Actions.CHANGEBACKGROUND,
		payload,
	};
};

export const navigate = (screen: Screens) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};

export const addProduct = (payload: Task) => {
	return {
		action: Actions.ADD_TASK, 
		payload, 
	};
};


export const deleteProducts = (payload: number) => {
	return {
		action: Actions.REMOVE_TASK, 
		payload, 
	};
};

export const editProducts = (payload: number) => {
	return {
		action: Actions.EDIT_TASK, 
		payload, 
	};
};

