import { Language } from './language';


export  const LANGUAGES: Record<string, Language> = {
  go: {
    name: 'go',
    codedetail: {
      usecase: 'system, web, server-side',
      rank: 16,
      compiled: true,
      homepage: 'https://golang.org',
      download: 'https://golang.org/dl/',
      votes: 0
    }
  },
  java: {
    name: 'java',
    codedetail: {
      usecase: 'system, web, server-side',
      rank: 2,
      compiled: true,
      homepage: 'https://www.java.com/en/',
      download: 'https://www.java.com/en/download/',
      votes: 0
    }
  },
  nodejs: {
    name: 'nodejs',
    codedetail: {
      usecase: 'system, web, server- side',
      rank: 30,
      compiled: false,
      homepage: 'https://nodejs.org/en/',
      download: 'https://nodejs.org/en/download/',
      votes: 0
    }
  }



};
