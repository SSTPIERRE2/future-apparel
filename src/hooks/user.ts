import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/user/user.selectors';

export const useCurrentUser = () => useSelector(selectCurrentUser);
