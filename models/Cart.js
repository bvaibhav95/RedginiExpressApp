module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function(item, id, wt, qty) {
        var storedItem = this.items[id+wt];
        if (!storedItem) {
            storedItem = this.items[id+wt] = {item: item, cakeQty: parseInt(qty), netPrice: item.halfKgPrice * parseFloat(wt) * 2 * parseInt(qty), cakeWt: wt, unitCost:item.halfKgPrice * parseFloat(wt) * 2};
            this.totalPrice += item.halfKgPrice * parseFloat(wt) * 2 * parseInt(qty);
        }else{
            storedItem.cakeQty += parseInt(qty);
            storedItem.netPrice += item.halfKgPrice * storedItem.cakeWt * 2 * parseInt(qty);
            this.totalPrice += item.halfKgPrice * parseFloat(wt) * 2 * parseInt(qty);
        }
        this.totalQty += parseInt(qty);
    };

    this.removeItem = function(id) {
        this.totalQty -= this.items[id].cakeQty;
        this.totalPrice -= this.items[id].netPrice;
        delete this.items[id];
    };

    /*this.reduceByOne = function(id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].item.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.price;

        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };*/
    
    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };

};