export class Category {
  id: string;
  name: string;
  constructor(id:string, name:string) {
    this.id = id;
    this.name = name;
  }



  public static toCategories(data:any){
    let jsonData = JSON.parse(data);

    let categories: Array<Category> = new Array<Category>();

    jsonData.forEach(element => {
      categories.push(new Category(element.id, element.name));
    });

    return categories;
  }
}
