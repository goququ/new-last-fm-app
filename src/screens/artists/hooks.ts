import { useEffect } from "react";
import { useSelector } from "react-redux";
import qs from "query-string";
import { useLocation } from "react-router-dom";

import { getArtists } from "store/reducers/artists/selectors";
import { Props as CardProps } from "components/card/Card";
import useRequest from "hooks/useRequest";
import { actions } from "store";

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

export const useSyncedList = () => {
  const location = useLocation();
  const { artist } = qs.parse(location.search);
  const { isLoading, sendRequest } = useRequest(
    actions.artists.creators.getArtists
  );

  useEffect(() => {
    if (artist) {
      sendRequest({ artist });
    }
  }, [sendRequest, artist]);

  return { isLoading };
};
