import axios from 'axios';

const getSsgRouteParams = async (
  url: string,
  token: string,
  params: MicroCMSParams,
): Promise<ContentsPayload> => {
  return await axios
    .get(url, {
      params: { ...params },
      headers: { 'X-API-KEY': token },
    })
    .then(({ data }) => {
      return data;
    });
};

export {getSsgRouteParams};
