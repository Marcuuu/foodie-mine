export class Booking {

    constructor(
        public bookID: string,
        public custImage: string,
        public custName: string,
        public bookDate: string,
        public bookTime: string,
        public bookPax: string,
        public bookNotes: string,
        public bookStatus: string
    ) { }
}