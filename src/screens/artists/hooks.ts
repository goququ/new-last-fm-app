import { useSelector, useDispatch } from "react-redux";

import { getArtists } from "store/reducers/artists/selectors";
import { Props as CardProps } from "components/card/Card";

export const useArtistsCards = () => {
  const artists = useSelector(getArtists);

  return artists.map(
    ({ img, name, listeners }): CardProps => ({
      img,
      title: name,
      subtitle: `Listeners count ${listeners}`,
    })
  );
};
