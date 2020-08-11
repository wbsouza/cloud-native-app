export interface CodeDetail {
  usecase: string;
  rank: number;
  compiled: boolean;
  homepage: string;
  download: string;
  votes: number;
}

export interface Language {
  name: string;
  codedetail: CodeDetail;
}
