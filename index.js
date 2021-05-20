

const snackVendingMachine = {

    category: [],

    addCategory (name, price = 0, count = 0) {
        newCatagory = {
            name: name,
            price: price,
            count: count,
        }
        return this.category = [...this.category, newCatagory]
    },

    addItem(item, countItem) {
        const filteredAdd = this.category.filter(el => el.name === item);
        const newItem =  filteredAdd.forEach(el => el.count += countItem)
        return [...this.category, newItem]
    },

    list(){
        return console.log('list ', this.category);
       },

    clear(){
        const filteredCategory = this.category.filter(({count}) => count > 0)
            return console.log('clear ', filteredCategory);
        },

    report(){
        this.list();
        let total = this.category.reduce((acc,item) => {
            return acc + (item.count * item.price)
            }, 0)
        return console.log(total);
        },

        
    purchase(nameItem, date){  
        date = new Date(date).toLocaleString().split('').splice(0, 10).join('').split('.').join('-');  

        const purchaseFiltered = this.category.filter(({name, count}) => {
            if (name !== nameItem) {
                   return count -= 1;
               }
               
            })
            // return purchaseFiltered.forEach(el => console.log(el.name))
            console.log('purchase ', date, purchaseFiltered)
        }

}



snackVendingMachine.addCategory("Andrea", 50, 5)
snackVendingMachine.addItem("Andrea", 10)
snackVendingMachine.addItem("XXX", 1000)
snackVendingMachine.addCategory("XXX", 5, 4)
snackVendingMachine.clear()
snackVendingMachine.addCategory("XYX", 5)
snackVendingMachine.addCategory("Martha", 25, 1)
snackVendingMachine.list()
snackVendingMachine.purchase('Andrea', '2021-04-13')
snackVendingMachine.clear()