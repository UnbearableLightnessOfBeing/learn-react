export interface Breed {
    id: number;
    name: string;
    description: string;
    temperament: string;
}

interface ImageOnList {
    id: string;
    url: string;
};

export interface Image {
    id: string;
    url: string;
}

export interface BreedOnList {
    id: number;
    name: string;
    image?: ImageOnList;
    description: string;
    wikipedia_url: string;

}
