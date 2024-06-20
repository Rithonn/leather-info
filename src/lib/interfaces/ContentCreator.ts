export interface ContentCreator {
    username: string,
    displayName: string,
    link: string
}

export interface YouTubeCreator extends ContentCreator {
    profilePicture: string,
    profilePictureMd: string,
    videos: YouTubeVideo[]
}

export interface YouTubeVideo {
    link: string,
    title: string,
    thumbnail?: string,
    thumbnailLg: string
}