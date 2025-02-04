import { toHash } from '../globals/hashStore';
import debounce from '../utils/debounce';

const toHashDebounced = debounce(toHash);

export default function hashStoreMiddleware(store) {
    return (next) => (action) => {
        const result = next(action);

        toHashDebounced(store);

        return result;
    };
}
