export type Albums = {
    userId?: number;
    id: number;
    title: string
}

export type Photos = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}