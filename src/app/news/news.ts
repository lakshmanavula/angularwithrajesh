import { SoaRecord } from 'dns';

export class NewsItem{
    constructor(private source:Source,private author:string,
        private title:string,private description:string,private url:string,private urlToImage:string){
        this.source = source;
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
    }
}

export class Source{
    constructor(private id, private name){
        this.id = id;
        this.name = name;
    }
}