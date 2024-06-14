export interface ContentCreator {
    username: string,
    displayName: string,
    link: string
}

export interface YoutubeCreator extends ContentCreator {
    videos: string[]
}