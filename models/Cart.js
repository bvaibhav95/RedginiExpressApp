module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function(item, id, wt, qty, egg) {
        let storedItem = this.items[id+wt+egg];
        if (!storedItem) {
            storedItem = this.items[id+wt+egg] = {item: item, pdtQty: parseInt(qty), netPrice: item.halfKgPrice * parseFloat(wt) * 2 * parseInt(qty), pdtWt: wt, unitCost:item.halfKgPrice * parseFloat(wt) * 2, egg: egg};
            this.totalPrice += item.halfKgPrice * parseFloat(wt) * 2 * parseInt(qty);
        }else{
            storedItem.pdtQty += parseInt(qty);
            storedItem.netPrice += item.halfKgPrice * storedItem.pdtWt * 2 * parseInt(qty);
            this.totalPrice += item.halfKgPrice * parseFloat(wt) * 2 * parseInt(qty);
        }
        this.totalQty += parseInt(qty);
    };

    this.addBake = function(item, id, wt) {
        let storedItem = this.items[id+wt];
        if (!storedItem) {
            if(item.availableWeights[0] === 0.5){
                storedItem = this.items[id+wt] = {item: item, pdtQty: 1, netPrice: item.minWtCost * parseFloat(wt) * 2, pdtWt: wt, unitCost:item.minWtCost * parseFloat(wt) * 2, bakeInCart : 'yes'};
                this.totalPrice += item.minWtCost * parseFloat(wt) * 2;
            }else{
                storedItem = this.items[id+wt] = {item: item, pdtQty: 1, netPrice: item.minWtCost * parseFloat(wt), pdtWt: wt, unitCost:item.minWtCost * parseFloat(wt), bakeInCart : 'yes'};
                this.totalPrice += item.minWtCost * parseFloat(wt);
            }
        }else{
            storedItem.pdtQty += 1;
            if(item.availableWeights[0] === 0.5){
                storedItem.netPrice += item.minWtCost * storedItem.pdtWt * 2 ;
                this.totalPrice += item.minWtCost * parseFloat(wt) * 2;
            }else{
                storedItem.netPrice += item.minWtCost * storedItem.pdtWt;
                this.totalPrice += item.minWtCost * parseFloat(wt);
            }
        }
        this.totalQty += 1;
    };

    this.removeItem = function(id) {
        this.totalQty -= this.items[id].pdtQty;
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