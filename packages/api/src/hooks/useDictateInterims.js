import { useSelector } from './internal/WebChatReduxContext';
import useWebChatAPIContext from './internal/useWebChatAPIContext';

export default function useDictateInterims() {
  return [useSelector(({ dictateInterims }) => dictateInterims) || [], useWebChatAPIContext().setDictateInterims];
}
