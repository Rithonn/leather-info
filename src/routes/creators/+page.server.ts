import { GOOGLE_API_KEY } from '$env/static/private';
import type { YouTubeCreator, YouTubeVideo } from '$lib/interfaces/ContentCreator';
import type { YouTubeChannelListResponse } from '$lib/interfaces/YouTubeChannel';
import type { YouTubePlaylistItemListResponse, YouTubePlaylistItem } from '$lib/interfaces/YouTubePlaylist';
const MAX_PAGES_TO_CHECK = 5;
const MAX_VIDEOS_PER_CREATOR = 3;

export const load = () => {
    return {
        streamed: {
            creators: getCreators()
        }
    }
}

const getCreators = async () => {
    const creatorsToGather = ['@80ProofGoods', '@Corter', '@coastlineleathergoods'];
    let creators: YouTubeCreator[] = [];
    for(const creatorHandle of creatorsToGather) {
        const creatorChannel: YouTubeChannelListResponse = await getCreatorChannel(creatorHandle);
        let creator: YouTubeCreator = {
            username: creatorHandle,
            displayName: creatorChannel.items[0].snippet.title,
            link: `https://youtube.com/${creatorHandle}`,
            profilePicture: creatorChannel.items[0].snippet.thumbnails.default.url,
            profilePictureMd: creatorChannel.items[0].snippet.thumbnails.medium.url,
            videos: await getCreatorVideos(creatorChannel.items[0].contentDetails.relatedPlaylists.uploads)
        }
        creators.push(creator);
    };
    return creators;
}

const getCreatorVideos = async (uploadPlaylistId: string): Promise<YouTubeVideo[]> => {
    let videos: YouTubeVideo[] = [];

    let pagesChecked = 0;
    let nextPageToken = '';
    while (videos.length < 3 && pagesChecked <= MAX_PAGES_TO_CHECK) {
        const resp = await getVideosFromPlaylist(uploadPlaylistId, nextPageToken);
        const uploads = resp.items;
        for(const upload of uploads) {
            const isShort = await checkIfVideoIsShort(upload.snippet.resourceId.videoId);
            if (!isShort) {
                videos.push(convertToVideo(upload));
                if (videos.length >= MAX_VIDEOS_PER_CREATOR) {
                    break;
                }
            }
        };

        nextPageToken = resp.nextPageToken;
        pagesChecked += 1;
    }

    return videos;
}

const checkIfVideoIsShort = async (videoId: string): Promise<boolean> => {
    // Currently youtube has no native way to tell if a video is a short
    // A sort of workaround for this is to make a request to /shorts/{videoid}
    // If you get a 303 response (redirect), not a short
    // If you get a 200 response it is a short

    const req = await fetch(`https://www.youtube.com/shorts/${videoId}`);
    return !req.redirected;
}

const getVideosFromPlaylist = async (uploadsPlaylistId: string, nextPageToken?: string): Promise<YouTubePlaylistItemListResponse> => {
    let playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${uploadsPlaylistId}&key=${GOOGLE_API_KEY}`;
    if (nextPageToken) {
        playlistUrl += `&pageToken=${nextPageToken}`
    }
    const resp = await fetch(playlistUrl)
    return await resp.json();
}

const getUploadsPlaylistId = async (creatorHandle: string): Promise<string> => {
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${creatorHandle}&key=${GOOGLE_API_KEY}`;
    const resp = await fetch(channelUrl);
    const json: YouTubeChannelListResponse = await resp.json();
    return json.items[0].contentDetails.relatedPlaylists.uploads;
}

const getCreatorChannel = async (creatorHandle: string): Promise<YouTubeChannelListResponse> => {
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&forHandle=${creatorHandle}&key=${GOOGLE_API_KEY}`;
    const resp = await fetch(channelUrl);
    const json: YouTubeChannelListResponse = await resp.json();
    return json;
}

const convertToVideo = (playlistItem: YouTubePlaylistItem): YouTubeVideo => {
    let video: YouTubeVideo = {
        title: playlistItem.snippet.title,
        link: playlistItem.snippet.resourceId.videoId,
        thumbnail: playlistItem.snippet.thumbnails.maxres?.url,
        thumbnailLg: playlistItem.snippet.thumbnails.high.url
    }

    return video
}