import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import qs from "query-string";
import { useLocation } from "react-router-dom";

import {
  getArtists,
  getArtistsTotalPages,
} from "store/reducers/artists/selectors";
import { Props as CardProps } from "components/card/Card";
import useRequest from "hooks/useRequest";
import { actions } from "store";

export const useArtistsCards = () => {
  const artists = useSelector(getArtists);
  const mappedArtists = artists.map(
    ({ img, name, listeners }): CardProps => ({
      img,
      title: name,
      subtitle: `Listeners count ${listeners}`,
    })
  );

  return { artists: mappedArtists };
};

const usePagination = () => {
  const [pagination, setPagination] = useState({ page: 1, limit: 30 });
  const total = useSelector(getArtistsTotalPages);
  const canLoadMore = pagination.page < total;
  const goToNextPage = useCallback(
    () => setPagination((state) => ({ ...state, page: state.page + 1 })),
    [setPagination]
  );

  return { pagination, goToNextPage: canLoadMore ? goToNextPage : undefined };
};

export const useSyncedList = () => {
  const location = useLocation();
  const { pagination, goToNextPage } = usePagination();
  const { artist = "" } = qs.parse(location.search);
  const noSearchQuery = !artist?.length;
  const { isLoading, sendRequest } = useRequest(
    actions.artists.creators.getArtists
  );

  useEffect(() => {
    if (artist) {
      sendRequest({ artist, ...pagination });
    }
  }, [sendRequest, artist, pagination]);

  return { isLoading, pagination, goToNextPage, noSearchQuery };
};
