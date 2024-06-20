export interface YouTubeChannelListResponse {
    kind: string,
    etag: string,
    pageInfo: PageInfo,
    items: YouTubeChannel[]
  }
  
  export interface YouTubeChannel {
    kind: string,
    etag: string,
    id: string,
    contentDetails: ContentDetails,
    snippet: Snippet
  }
  
  export interface ContentDetails {
    relatedPlaylists: RelatedPlaylists
  }
  
  export interface RelatedPlaylists {
    likes: string,
    uploads: string
  }
  
  export interface PageInfo {
    totalResults: number,
    resultsPerPage: number
  }

  export interface Snippet {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: Thumbnails,
    channelTitle: string,
    playlistId: string,
    position: number,
    videoOwnerChannelTitle: string,
    videoOwnerChannelId: string
  }

  export interface Thumbnails {
    default: Thumbnail,
    medium: Thumbnail,
    high: Thumbnail
  }
  
  export interface Thumbnail {
    url: string,
    width: number,
    height: number
  }
  