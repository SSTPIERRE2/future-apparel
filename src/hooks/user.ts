import { useSelector } from 'react-redux';
import { getCurrentUser } from '../redux/user/user.selectors';

export const useCurrentUser = () => useSelector(getCurrentUser);
