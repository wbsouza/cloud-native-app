export interface CodeDetail {
    usecase: string;
    rank: number;
    compiled: boolean;
    homepage: string;
    download: string;
    votes: number;
}

export interface ProgrammingLanguage {
    name: string;
    detail: string;
    codedetail: CodeDetail;
}