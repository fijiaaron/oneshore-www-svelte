import { nav } from "./stores";

class Site {
    currentPage: string;

    constructor(initialPage: string = "home") {
        this.currentPage = initialPage;
    }
}

export default Site;