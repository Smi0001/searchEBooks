export interface accessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {isAvailable: boolean};
    pdf: {isAvailable: boolean};
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface VolumeInfo {
    authors: string[];
    averageRating: number;
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string
    };
    industryIdentifiers: object[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: object;
    previewLink: string;
    printType: string;
    publisher: string;
    publishedDate: string;
    ratingsCount: number;
    readingModes: {
        image: boolean,
        text: boolean
    };
    saleInfo: {
        country: string,
        saleability: string,
        isEbook: boolean
    };
    searchInfo: {textSnippet: string};
    title: string;

}


export interface Book {
    etag: string;
    id: string;
    kind: string;
    saleInfo: string;
    searchInfo: string;
    selfLink: string;
    volumeInfo: {
        [key: string]: VolumeInfo
    };
}

