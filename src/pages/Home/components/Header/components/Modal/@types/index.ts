import {User} from '../../../../../../../models/user';

export type Props = {
  open?: boolean;
  onSelectOption?: (user: User) => void;
  onClose?: () => void;
};
