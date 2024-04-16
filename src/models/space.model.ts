export class SpaceModel{
    constructor(
        public spacetype: string,
        public address: string,
        public location: {
            lat : number,
            lng : number
        },

        public NoOfRoom: number,
        public price: number,
        public pricetype: string,
        public Ispriceneg : boolean,
        public purpose: string,
        public housetype: string,
        public noOfStorey: string,

        public noOfBathroom : number,
        public parking: string,
        public iswater24 : boolean,
        public internet : boolean,
        public lift: boolean,
        public fan: boolean,
        public generator : boolean,
        
        public bathroomtype: string,
        public kitchentype: string,
        public watertype: string,
        public tenants: string,
        public environment: string,
        public description: string,

        public image1: string,
        public image2: string,
        public image3: string,
        public image4: string
    )
    {}
}