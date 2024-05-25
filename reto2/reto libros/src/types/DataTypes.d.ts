type AuthorType={
  "name": string,
  "otherBooks": string[]
}

export type DataTypes={
  book:{
    "title": string,
    "pages": number,
    "genre": string,
    "cover": string,
    "synopsis": string,
    "year": number,
    "ISBN": string,
    "author":AuthorType
  }
}