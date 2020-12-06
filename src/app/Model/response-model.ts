export interface Pizza {

    id: number;
    name: string;
    description: string;
    isVeg: boolean;
    rating: number;
    price: any;
    img_url: string;
    size: Size[];
    toppings: Topping[];
}

export interface Item {
    size: string;
}

export interface Size {
    isRadio: boolean;
    title: string;
    items: Item[];
}

export interface Item2 {
    name: string;
}

export interface Topping {
    isRadio: boolean;
    title: string;
    items: Item2[];
}

