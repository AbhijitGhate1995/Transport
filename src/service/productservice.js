import smith from "/wamp64/www/gateway-transport/src/images/testimonial/smith.png";
import martin from "/wamp64/www/gateway-transport/src/images/testimonial/martin.png";

export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'nvklal433',
                name: 'John Martin',
                image: smith,
                company: "Restoration Company",
                background :"#091242",
                textColor:"#F4F4F4",
            },
            {
                id: '1001',
                code: 'f230fh0g3',
                name: 'Kathleen Smith',
                image: martin,
                company: "Fuel Company",
                background :"#F4F4F4",
                textColor:"#091242"
            },
            {
                id: '1002',
                code: 'nvklal433',
                name: "John Martin",
                image: smith,
                company: "Restoration Company",
                background :"#091242",
                textColor:"#fff",
            },
            {
                id: '1003',
                code: 'nvklal433',
                name: 'Kathleen Smith',
                image: martin,
                company: "Fuel Company",
                background :"#F4F4F4",
                textColor:"#091242"
            },
            {
                id: '1004',
                code: 'nvklal433',
                name: 'John Martin',
                image: smith,
                company: "Restoration Company",
                background :"#091242",
                textColor:"#fff",
            },
        ];
    },

    // getProductsWithOrdersData() {
    //     return [
    //         {
    //             id: '1000',
    //             code: 'f230fh0g3',
    //             name: 'Bamboo Watch',
    //             description: 'Product Description',
    //             image: 'bamboo-watch.jpg',
    //             price: 65,
    //             category: 'Accessories',
    //             quantity: 24,
    //             inventoryStatus: 'INSTOCK',
    //             rating: 5,
    //             orders: [
    //                 {
    //                     id: '1000-0',
    //                     productCode: 'f230fh0g3',
    //                     date: '2020-09-13',
    //                     amount: 65,
    //                     quantity: 1,
    //                     customer: 'David James',
    //                     status: 'PENDING'
    //                 },
    //                 {
    //                     id: '1000-1',
    //                     productCode: 'f230fh0g3',
    //                     date: '2020-05-14',
    //                     amount: 130,
    //                     quantity: 2,
    //                     customer: 'Leon Rodrigues',
    //                     status: 'DELIVERED'
    //                 },
    //                 {
    //                     id: '1000-2',
    //                     productCode: 'f230fh0g3',
    //                     date: '2019-01-04',
    //                     amount: 65,
    //                     quantity: 1,
    //                     customer: 'Juan Alejandro',
    //                     status: 'RETURNED'
    //                 },
    //                 {
    //                     id: '1000-3',
    //                     productCode: 'f230fh0g3',
    //                     date: '2020-09-13',
    //                     amount: 195,
    //                     quantity: 3,
    //                     customer: 'Claire Morrow',
    //                     status: 'CANCELLED'
    //                 }
    //             ]
    //         },
    //         {
    //             id: '1001',
    //             code: 'nvklal433',
    //             name: 'Black Watch',
    //             description: 'Product Description',
    //             image: 'black-watch.jpg',
    //             price: 72,
    //             category: 'Accessories',
    //             quantity: 61,
    //             inventoryStatus: 'INSTOCK',
    //             rating: 4,
    //             orders: [
    //                 {
    //                     id: '1001-0',
    //                     productCode: 'nvklal433',
    //                     date: '2020-05-14',
    //                     amount: 72,
    //                     quantity: 1,
    //                     customer: 'Maisha Jefferson',
    //                     status: 'DELIVERED'
    //                 },
    //                 {
    //                     id: '1001-1',
    //                     productCode: 'nvklal433',
    //                     date: '2020-02-28',
    //                     amount: 144,
    //                     quantity: 2,
    //                     customer: 'Octavia Murillo',
    //                     status: 'PENDING'
    //                 }
    //             ]
    //         },
    //     ];
    // },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

