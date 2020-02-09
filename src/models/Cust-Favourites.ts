export class Favourites{
    constructor(
        public menuId:string,
        public fName:string,
        public menuName:string,
        public menu_categrory:string,
        public menu_url:string,
        public menu_price:string,
        public menu_image:string,
        public menu_tags:string,
        public menu_ratings:string,
        public menu_rating_amt:string,
        public pdp_id:string,
        public fav_menuId:string,
        public custId:string
    )
    {}
}