export class MenuItem { 
    public objectId: string = "";
    public name: string = "";
    public menuLevelIndex: number = 0;
    public children: any [] = [];
}

export class ServerMenuItem { 
    public author_name: string = "";
    public r_object_id: string = "";
    public r_modify_date: string = "";
    public object_name: string = "";
    public doc_year: string = "";
    public attr_sub_type: string = "";
}