import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootStateType, AppDispatchType } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatchType>()
