import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'c6488dc706msh4d4be88b6f5d884p148b4bjsna939233af130'
      )

      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/country?country_code=NG',
    }),
    getNewTracks: builder.query({ query: () => '/charts/world' })
    ,
    getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}` })
  }),
})

export const { useGetTopChartsQuery, useGetNewTracksQuery, useGetSongDetailsQuery } = shazamCoreApi
